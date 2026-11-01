/**
 * SalahCards: an animated, step-by-step guide to the movements of ṣalāh (Shāfiʿī madhhab).
 * Sayyidina Omar Institute · Educational Resources
 *
 * Self-contained React + Tailwind CSS component. No dependencies beyond React.
 * Styled with the site's existing palette (slate / amber / emerald) and fonts
 * (font-serif = Playfair Display, font-sans = Inter, font-arabic = Amiri).
 *
 * Usage:  <SalahCards />
 */
import React, { useEffect, useRef, useState } from 'react';

const LOGO_URL =
  'https://storage.googleapis.com/sayyidina-omar-institute/images/New%20Logo%203.png';

const DWELL_MS = 10000;
const TWEEN_MS = 1000;

/* ------------------------------------------------------------------ */
/* Figure geometry                                                     */
/* Side view, worshipper's right side towards the viewer, facing the   */
/* qiblah (right). N = near (right) limbs, F = far (left) limbs.       */
/* k knee, a ankle, h heel, t toes, e elbow, w wrist/hand.             */
/* ------------------------------------------------------------------ */
type Pt = [number, number];
type JointKey =
  | 'head' | 'sh' | 'hip'
  | 'kN' | 'aN' | 'hN' | 'tN'
  | 'kF' | 'aF' | 'hF' | 'tF'
  | 'eN' | 'wN' | 'eF' | 'wF';
type Pose = Record<JointKey, Pt>;
type PoseName = 'stand' | 'takbir' | 'qabd' | 'ruku' | 'sujud' | 'sit' | 'tawarruk';

const BASE: Pose = {
  head: [101, 37], sh: [100, 54], hip: [100, 104],
  kN: [102, 148], aN: [100, 190], hN: [95, 196], tN: [116, 196],
  kF: [99, 148], aF: [97, 190], hF: [92, 196], tF: [113, 196],
  eN: [102, 80], wN: [104, 105], eF: [99, 80], wF: [101, 104],
};
const pose = (o: Partial<Pose>): Pose => ({ ...BASE, ...o });

const POSES: Record<PoseName, Pose> = {
  stand: pose({}),
  takbir: pose({ eN: [109, 73], wN: [111, 43], eF: [106, 73], wF: [108, 43] }),
  qabd: pose({ eN: [106, 81], wN: [117, 83], eF: [103, 83], wF: [113, 87] }),
  ruku: pose({
    hip: [95, 104], kN: [101, 148], kF: [98, 148], sh: [146, 100], head: [164, 99],
    eN: [130, 122], wN: [107, 145], eF: [127, 122], wF: [104, 145],
  }),
  sujud: pose({
    hip: [97, 151], sh: [141, 168], head: [159, 186],
    kN: [103, 195], aN: [64, 184], hN: [61, 177], tN: [60, 197],
    kF: [100, 195], aF: [61, 184], hF: [58, 177], tF: [57, 197],
    eN: [139, 186], wN: [153, 196], eF: [136, 186], wF: [150, 196],
  }),
  sit: pose({
    hip: [93, 180], sh: [95, 130], head: [97, 113],
    kN: [137, 190], aN: [88, 186], hN: [84, 177], tN: [97, 197],
    kF: [134, 192], aF: [92, 192], hF: [95, 196], tF: [74, 197],
    eN: [103, 156], wN: [127, 179], eF: [100, 156], wF: [124, 180],
  }),
  tawarruk: pose({
    hip: [99, 188], sh: [100, 139], head: [102, 122],
    kN: [141, 189], aN: [94, 188], hN: [89, 179], tN: [102, 197],
    kF: [136, 194], aF: [114, 196], hF: [110, 197], tF: [130, 197],
    eN: [107, 165], wN: [130, 184], eF: [104, 166], wF: [127, 186],
  }),
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */
type Status = { kind: 'rukn' | 'sunnah'; label: string; text: string };
type Recitation = { ar: string; tr: string; en: string; times?: string };
type InsetName = 'qabd' | 'tashahhud' | 'salam';
type Step = {
  name: string;
  ar: string;
  short: string;
  pose: PoseName;
  status: Status[];
  moves: string[];
  rec?: Recitation;
  note?: string;
  still?: boolean;
  seven?: boolean;
  finger?: boolean;
  inset?: InsetName;
  mcasT?: number;
};

const R = (label: string, text: string): Status => ({ kind: 'rukn', label, text });
const S = (label: string, text: string): Status => ({ kind: 'sunnah', label, text });

const STEPS: Step[] = [
  {
    name: 'Qiyām', ar: 'القِيَام', short: 'Standing', pose: 'stand',
    status: [R('Rukn', 'Niyyah, standing (if able)'), S('Sunnah', 'hand-span between feet, gaze down')],
    moves: [
      'Stand upright facing the qiblah, shoulders relaxed.',
      'Feet about a hand-span (shibr) apart.',
      'Direct the gaze to the place of sujūd.',
      'Form the intention in the heart for this particular prayer.',
    ],
    note: 'In the Shāfiʿī school the niyyah is a rukn and must accompany the opening takbīr.',
  },
  {
    name: 'Takbīrat al-Iḥrām', ar: 'تَكْبِيرَةُ الإِحْرَام', short: 'Opening takbīr', pose: 'takbir',
    status: [R('Rukn', 'Saying the takbīr'), S('Sunnah', 'raising the hands')],
    moves: [
      'Raise both hands, palms facing the qiblah.',
      'Thumbs level with the earlobes, palms opposite the shoulders.',
      'Begin raising the hands as the takbīr begins.',
    ],
    rec: { ar: 'اللَّهُ أَكْبَرُ', tr: 'Allāhu Akbar', en: 'Allah is Greater.' },
  },
  {
    name: 'Qabḍ and recitation', ar: 'القَبْض', short: 'Folding the hands', pose: 'qabd', inset: 'qabd',
    status: [R('Rukn', 'al-Fātiḥah in every rakʿah'), S('Sunnah', 'folding hands, istiftāḥ, āmīn, a further sūrah')],
    moves: [
      'The right hand grasps the left wrist.',
      'Hands rest below the chest and above the navel.',
      'Recite duʿāʾ al-istiftāḥ, then seek refuge in Allah.',
      'Recite al-Fātiḥah, of which the basmalah is the first verse, then say āmīn.',
      'In the first two rakʿāt, add a passage of Qurʾān.',
    ],
    rec: {
      ar: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      tr: 'Bismillāhir-Raḥmānir-Raḥīm',
      en: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
    },
  },
  {
    name: 'Rukūʿ', ar: 'الرُّكُوع', short: 'Bowing', pose: 'ruku', still: true,
    status: [R('Rukn', 'bowing until the palms reach the knees, with stillness'), S('Sunnah', 'raising the hands, tasbīḥ')],
    moves: [
      'Raise the hands and say Allāhu Akbar as you begin to bow.',
      'Bend from the hips; back and neck level.',
      'Grip the knees with the palms, fingers spread.',
      'Men keep the elbows away from the sides.',
    ],
    rec: { ar: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ', tr: 'Subḥāna Rabbiyal-ʿAẓīm', en: 'Glory be to my Lord, the Magnificent.', times: 'Three times' },
  },
  {
    name: 'Iʿtidāl', ar: 'الاعْتِدَال', short: 'Rising upright', pose: 'stand', still: true, mcasT: 2161,
    status: [R('Rukn', 'returning upright, with stillness'), S('Sunnah', 'raising the hands, the dhikr')],
    moves: [
      'Rise from rukūʿ, raising the hands to the shoulders.',
      'Stand fully upright with the arms at the sides.',
      'Settle before moving on.',
    ],
    rec: {
      ar: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ · رَبَّنَا لَكَ الْحَمْدُ',
      tr: 'Samiʿallāhu liman ḥamidah · Rabbanā lakal-ḥamd',
      en: 'Allah hears whoever praises Him. Our Lord, to You belongs all praise.',
    },
    note: 'In the second rakʿah of Ṣubḥ the qunūt is recited here. It is a sunnah abʿāḍ: if it is left out, sujūd al-sahw is recommended.',
  },
  {
    name: 'Sujūd', ar: 'السُّجُود', short: 'First prostration', pose: 'sujud', still: true, seven: true,
    status: [R('Rukn', 'bare forehead on the ground, the seven limbs, stillness'), S('Sunnah', 'nose on the ground, tasbīḥ')],
    moves: [
      'Say Allāhu Akbar without raising the hands.',
      'Place the knees first, then the hands, then the forehead and nose.',
      'Palms level with the shoulders, fingers together towards the qiblah.',
      'Elbows raised; toes bent towards the qiblah.',
    ],
    rec: { ar: 'سُبْحَانَ رَبِّيَ الْأَعْلَى', tr: 'Subḥāna Rabbiyal-Aʿlā', en: 'Glory be to my Lord, the Most High.', times: 'Three times' },
    note: 'Seven points: forehead, both palms, both knees, the toes of both feet (al-Bukhārī 812, Muslim 490). Men separate arms from sides and belly from thighs; women keep the limbs drawn together.',
  },
  {
    name: 'Julūs', ar: 'الجُلُوسُ بَيْنَ السَّجْدَتَيْن', short: 'Sitting between', pose: 'sit', still: true,
    status: [R('Rukn', 'sitting upright, with stillness'), S('Sunnah', 'iftirāsh posture, the duʿāʾ')],
    moves: [
      'Rise from sujūd saying Allāhu Akbar.',
      'Sit on the left foot laid flat; keep the right foot upright, toes to the qiblah (iftirāsh).',
      'Rest the hands on the thighs near the knees.',
    ],
    rec: {
      ar: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي',
      tr: 'Rabbighfir lī, warḥamnī, wahdinī, waʿāfinī, warzuqnī',
      en: 'My Lord, forgive me, have mercy on me, guide me, grant me well-being and provide for me.',
    },
  },
  {
    name: 'Second sujūd', ar: 'السَّجْدَةُ الثَّانِيَة', short: 'Second prostration', pose: 'sujud', still: true, seven: true,
    status: [R('Rukn', 'as the first sujūd'), S('Sunnah', 'tasbīḥ')],
    moves: [
      'Say Allāhu Akbar and return to prostration.',
      'Restore all seven points of contact, elbows raised.',
      'Settle into stillness.',
    ],
    rec: { ar: 'سُبْحَانَ رَبِّيَ الْأَعْلَى', tr: 'Subḥāna Rabbiyal-Aʿlā', en: 'Glory be to my Lord, the Most High.', times: 'Three times' },
    note: 'This completes the bodily sequence of one rakʿah.',
  },
  {
    name: 'Rising for the next rakʿah', ar: 'القِيَامُ إِلَى الرَّكْعَة', short: 'Next rakʿah', pose: 'stand',
    status: [S('Sunnah', 'jalsat al-istirāḥah, rising on the hands')],
    moves: [
      'Lift the head saying Allāhu Akbar.',
      'After the 1st and 3rd rakʿah, sit briefly first (jalsat al-istirāḥah).',
      'Push up with the hands on the ground.',
      'Stand, fold the hands, and repeat the rakʿah.',
    ],
  },
  {
    name: 'First Tashahhud', ar: 'التَّشَهُّدُ الأَوَّل', short: 'First tashahhud', pose: 'sit', finger: true, inset: 'tashahhud',
    status: [S('Sunnah abʿāḍ', 'the tashahhud and its sitting'), S('Sunnah', 'ṣalawāt on the Prophet ﷺ')],
    moves: [
      'After the 2nd rakʿah of a 3- or 4-rakʿah prayer, sit in iftirāsh.',
      'Left hand flat on the left thigh.',
      'Right hand: fold the fingers, thumb beside the index finger.',
      'Raise the index finger at illallāh; keep it still and raised, gaze upon it.',
      'Rise to the 3rd rakʿah with takbīr, raising the hands.',
    ],
    rec: { ar: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ', tr: 'Ashhadu an lā ilāha illallāh', en: 'I bear witness that there is no god but Allah.' },
    note: 'If it is left out, sujūd al-sahw is recommended.',
  },
  {
    name: 'Final Tashahhud', ar: 'التَّشَهُّدُ الأَخِير', short: 'Final tashahhud', pose: 'tawarruk', finger: true, inset: 'tashahhud',
    status: [R('Rukn', 'the sitting, the tashahhud, ṣalawāt on the Prophet ﷺ'), S('Sunnah', 'tawarruk posture')],
    moves: [
      'Sit in tawarruk: left foot out beneath the right shin, left hip on the ground.',
      'Right foot upright where possible; torso vertical.',
      'Hands on the thighs; point with the right index finger as before.',
      'Recite the tashahhud, then send blessings on the Prophet ﷺ.',
    ],
    rec: { ar: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ', tr: 'Allāhumma ṣalli ʿalā Muḥammad', en: 'O Allah, send blessings upon Muhammad.' },
    note: 'A latecomer (masbūq), or one who will perform sujūd al-sahw, sits in iftirāsh instead.',
  },
  {
    name: 'Taslīm', ar: 'التَّسْلِيم', short: 'Closing salām', pose: 'tawarruk', inset: 'salam',
    status: [R('Rukn', 'the first salām'), S('Sunnah', 'second salām, turning the head, wa raḥmatullāh')],
    moves: [
      'Remaining seated, turn the head to the right and give the salām.',
      'Turn to the left and repeat it.',
      'Keep the shoulders and torso facing forward.',
    ],
    rec: { ar: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ', tr: 'As-salāmu ʿalaykum wa raḥmatullāh', en: 'Peace and the mercy of Allah be upon you.' },
    note: 'The prayer is complete with the first salām.',
  },
];

const MCAS_URL = 'https://www.youtube.com/watch?v=uAD_2e8yK8o';
const MCAS_DEFAULT_T = 368; // 6:08, Zuhur, Asr and Isya'
const YIT_MEN_URL = 'https://www.youtube.com/watch?v=EVas5D7haA8';
const YIT_WOMEN_URL = 'https://www.youtube.com/watch?v=EWLtW8SQGLs';

const mmss = (t: number) => `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
const pad2 = (n: number) => String(n).padStart(2, '0');
const xy = (p: Pt) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`;
const clonePose = (p: Pose): Pose =>
  Object.fromEntries(Object.entries(p).map(([k, v]) => [k, [v[0], v[1]]])) as Pose;
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/* Keyframes the Tailwind defaults do not cover. Prefixed to avoid collisions. */
const KEYFRAMES = `
@keyframes soi-salah-progress { from { width: 0 } to { width: 100% } }
@keyframes soi-salah-rise { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: none } }
@keyframes soi-salah-turn {
  0%, 8% { transform: translateX(0) } 20%, 40% { transform: translateX(7px) }
  52%, 58% { transform: translateX(0) } 70%, 90% { transform: translateX(-7px) } 100% { transform: translateX(0) }
}
@media (prefers-reduced-motion: reduce) {
  .soi-salah-anim { animation: none !important }
}
`;

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */
function Figure({ p, finger, seven }: { p: Pose; finger: boolean; seven: boolean }) {
  const capAngle = (Math.atan2(p.head[0] - p.sh[0], p.sh[1] - p.head[1]) * 180) / Math.PI;
  const spots: Pt[] = [[p.head[0] + 3, 197], p.wN, p.kN, p.tN];
  return (
    <svg viewBox="40 0 160 210" role="img" aria-label="Side view of the worshipper facing the qiblah" className="w-full max-w-[300px] h-auto">
      <rect x="46" y="198" width="140" height="5" rx="2" className="fill-slate-700" />
      <text x="196" y="14" textAnchor="end" className="fill-slate-500" style={{ fontSize: 8.5, letterSpacing: '.08em' }}>
        QIBLAH →
      </text>

      {/* far limbs */}
      <path d={`M${xy(p.sh)} L${xy(p.eF)} L${xy(p.wF)}`} className="stroke-slate-500" strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={p.wF[0]} cy={p.wF[1]} r={4.5} className="fill-slate-500" />
      <path d={`M${xy(p.hip)} L${xy(p.kF)} L${xy(p.aF)}`} className="stroke-slate-500" strokeWidth={12} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${xy(p.aF)} L${xy(p.hF)} L${xy(p.tF)} Z`} className="fill-slate-500 stroke-slate-500" strokeWidth={5} strokeLinejoin="round" />

      {/* body and near limbs */}
      <line x1={p.hip[0]} y1={p.hip[1]} x2={p.sh[0]} y2={p.sh[1]} className="stroke-slate-200" strokeWidth={21} strokeLinecap="round" />
      <line x1={p.sh[0]} y1={p.sh[1]} x2={p.head[0]} y2={p.head[1]} className="stroke-slate-200" strokeWidth={8} strokeLinecap="round" />
      <path d={`M${xy(p.hip)} L${xy(p.kN)} L${xy(p.aN)}`} className="stroke-slate-200" strokeWidth={13} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${xy(p.aN)} L${xy(p.hN)} L${xy(p.tN)} Z`} className="fill-slate-200 stroke-slate-200" strokeWidth={5} strokeLinejoin="round" />
      <circle cx={p.head[0]} cy={p.head[1]} r={11.5} className="fill-slate-200" />
      <g transform={`translate(${xy(p.head)}) rotate(${capAngle.toFixed(1)})`}>
        <path d="M-11 -2.5 L-10.2 -12.5 Q0 -14.5 10.2 -12.5 L11 -2.5 Q0 -5 -11 -2.5 Z" className="fill-white stroke-slate-900" strokeWidth={1.5} />
      </g>
      <path d={`M${xy(p.sh)} L${xy(p.eN)} L${xy(p.wN)}`} className="stroke-slate-200" strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={p.wN[0]} cy={p.wN[1]} r={5} className="fill-slate-200" />

      {finger && (
        <line x1={p.wN[0] + 1} y1={p.wN[1] - 3} x2={p.wN[0] + 7} y2={p.wN[1] - 13} className="stroke-amber-400" strokeWidth={3.2} strokeLinecap="round" />
      )}

      {seven &&
        spots.map((s, i) => (
          <g key={i}>
            <circle cx={s[0]} cy={s[1]} r={6} fill="none" strokeWidth={1.2}
              className="stroke-amber-400 animate-ping soi-salah-anim"
              style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDuration: '2s' }} />
            <circle cx={s[0]} cy={s[1]} r={3.4} className="fill-amber-400 stroke-slate-950" strokeWidth={1.5} />
          </g>
        ))}
    </svg>
  );
}

function Inset({ name }: { name: InsetName }) {
  const art: Record<InsetName, React.ReactNode> = {
    qabd: (
      <>
        <rect x="4" y="40" width="44" height="12" rx="6" className="fill-slate-500" />
        <ellipse cx="56" cy="46" rx="11" ry="8" className="fill-slate-500" />
        <rect x="38" y="28" width="22" height="30" rx="8" className="fill-slate-200" />
        <rect x="18" y="22" width="30" height="11" rx="5.5" transform="rotate(-12 33 27)" className="fill-slate-200" />
      </>
    ),
    tashahhud: (
      <>
        <rect x="22" y="34" width="30" height="30" rx="9" className="fill-slate-200" />
        <rect x="27" y="6" width="9" height="34" rx="4.5" className="fill-amber-400" />
        <rect x="16" y="38" width="9" height="20" rx="4.5" transform="rotate(-18 20 48)" className="fill-slate-500" />
        <circle cx="41" cy="36" r="5" className="fill-slate-200" />
        <circle cx="48" cy="38" r="4.6" className="fill-slate-200" />
        <circle cx="53" cy="43" r="4.2" className="fill-slate-200" />
      </>
    ),
    salam: (
      <>
        <path d="M8 72 Q10 50 37 48 Q64 50 66 72 Z" className="fill-slate-200" />
        <g className="soi-salah-anim" style={{ animation: 'soi-salah-turn 5s ease-in-out infinite' }}>
          <circle cx="37" cy="30" r="13" className="fill-slate-200" />
          <path d="M24 26 L25 15 Q37 12 49 15 L50 26 Q37 23 24 26 Z" className="fill-white stroke-slate-900" strokeWidth={1.5} />
        </g>
        <path d="M58 12 l6 4 -6 4 M16 12 l-6 4 6 4" className="stroke-slate-200" strokeWidth={2} fill="none" strokeLinecap="round" />
      </>
    ),
  };
  const caption: Record<InsetName, [string, React.ReactNode]> = {
    qabd: ['Right hand grasps the left wrist', 'Held below the chest, above the navel.'],
    tashahhud: ['Right hand, index raised', <>Three fingers folded, thumb beside the index. Raise it at <i>illallāh</i> and keep it still.</>],
    salam: ['Head turns right, then left', 'Shoulders and torso stay facing the qiblah.'],
  };
  return (
    <div className="w-full max-w-[260px] grid grid-cols-[74px_1fr] gap-3 items-center rounded-xl border border-slate-800 bg-slate-900 px-3 py-2">
      <svg viewBox="0 0 74 74" aria-hidden="true" className="w-[74px] h-[74px]">{art[name]}</svg>
      <p className="text-xs leading-snug text-slate-400">
        <b className="block font-semibold text-slate-200">{caption[name][0]}</b>
        {caption[name][1]}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */
export default function SalahCards({ logoSrc = LOGO_URL, className = '' }: { logoSrc?: string; className?: string }) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [fig, setFig] = useState<Pose>(() => clonePose(POSES.stand));
  const [settled, setSettled] = useState(false);
  const figRef = useRef<Pose>(clonePose(POSES.stand));
  const reduceMotion = useRef(false);

  const step = STEPS[idx];
  const go = (i: number) => setIdx((i + STEPS.length) % STEPS.length);

  // Start auto-play unless the viewer prefers reduced motion.
  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion.current) setPlaying(true);
  }, []);

  // Advance to the next card while playing.
  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => go(idx + 1), DWELL_MS);
    return () => window.clearTimeout(t);
  }, [playing, idx]);

  // Move the figure smoothly into the new posture.
  useEffect(() => {
    const target = POSES[step.pose];
    setSettled(false);
    if (reduceMotion.current) {
      figRef.current = clonePose(target);
      setFig(figRef.current);
      setSettled(true);
      return;
    }
    const from = clonePose(figRef.current);
    const t0 = performance.now();
    let raf = 0;
    const frame = (now: number) => {
      const t = Math.min(1, (now - t0) / TWEEN_MS);
      const e = ease(t);
      const next = {} as Pose;
      (Object.keys(target) as JointKey[]).forEach((k) => {
        next[k] = [from[k][0] + (target[k][0] - from[k][0]) * e, from[k][1] + (target[k][1] - from[k][1]) * e];
      });
      figRef.current = next;
      setFig(next);
      if (t < 1) raf = requestAnimationFrame(frame);
      else setSettled(true);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [idx]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
  };

  const mcasT = step.mcasT ?? MCAS_DEFAULT_T;
  const btn = 'px-4 py-2 rounded-lg text-sm font-medium border border-slate-800 bg-slate-950 text-slate-200 hover:border-amber-500/40 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400';

  return (
    <section onKeyDown={onKeyDown} className={`font-sans text-slate-200 space-y-6 ${className}`} aria-label="Ṣalāh, step by step">
      <style>{KEYFRAMES}</style>

      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Interactive Guide · Shāfiʿī madhhab · 12 movements</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Ṣalāh, Step by Step <span className="font-arabic font-normal text-amber-400 ms-2">الصَّلَاة</span>
        </h2>
        <p className="text-slate-300 font-light leading-relaxed max-w-2xl">
          Each card shows one posture, what the body does, what is recited, and which parts are obligatory (rukn) or recommended (sunnah).
        </p>
      </div>

      {/* Card */}
      <article
        aria-live={playing ? 'off' : 'polite'}
        className="grid md:grid-cols-[minmax(240px,320px)_1fr] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 md:min-h-[480px]"
      >
        <div className="flex flex-col items-center justify-center gap-3 bg-slate-950 border-b md:border-b-0 md:border-e border-slate-800 p-5">
          <Figure p={fig} finger={!!step.finger && settled} seven={!!step.seven && settled} />
          <div className="flex flex-wrap justify-center gap-2">
            {step.still && (
              <span className="soi-salah-anim animate-pulse rounded-full border border-amber-400/40 px-3 py-0.5 text-xs font-semibold tracking-wide text-amber-300">
                Ṭumaʾnīnah · be still
              </span>
            )}
            {step.seven && (
              <span className="rounded-full border border-amber-400/40 px-3 py-0.5 text-xs font-semibold tracking-wide text-amber-300">
                7 points touch the ground
              </span>
            )}
          </div>
          {step.inset && <Inset name={step.inset} />}
        </div>

        <div key={idx} className="soi-salah-anim min-w-0 p-6 md:p-7 space-y-4" style={{ animation: 'soi-salah-rise .45s ease-out' }}>
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-400 tabular-nums">
              Step {pad2(idx + 1)} of {STEPS.length}
            </span>
            <span className="flex items-center gap-2 text-right text-[11px] leading-tight text-slate-400">
              Sayyidina Omar<br />Institute
              <img src={logoSrc} alt="Sayyidina Omar Institute logo" width={48} height={48} className="h-12 w-12 flex-none rounded-full object-cover" />
            </span>
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-2xl font-serif font-bold text-white">{step.name}</h3>
            <span lang="ar" className="font-arabic text-2xl text-amber-400">{step.ar}</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {step.status.map((s, i) => (
              <span key={i} className={`rounded-md border px-2 py-0.5 text-xs ${s.kind === 'rukn'
                ? 'bg-amber-400/10 text-amber-300 border-amber-400/30'
                : 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30'}`}>
                <b className="font-semibold me-1">{s.label}</b>{s.text}
              </span>
            ))}
          </div>

          <ul className="list-disc ps-5 space-y-1 text-[15px] leading-relaxed text-slate-300 marker:text-slate-500">
            {step.moves.map((m, i) => <li key={i}>{m}</li>)}
          </ul>

          {step.rec && (
            <div className="border-t border-slate-800 pt-3 space-y-0.5">
              <div lang="ar" dir="rtl" className="font-arabic text-2xl leading-loose text-right text-white">{step.rec.ar}</div>
              <div className="font-serif italic text-slate-200">{step.rec.tr}</div>
              <div className="text-sm text-slate-400">{step.rec.en}</div>
              {step.rec.times && <div className="text-xs text-slate-500">{step.rec.times}</div>}
            </div>
          )}

          {step.note && (
            <p className="border-s-2 border-emerald-400/60 ps-3 text-sm text-slate-400">{step.note}</p>
          )}

          <div className="flex flex-wrap gap-x-4 gap-y-1.5 border-t border-slate-800 pt-3 text-[13px]">
            <span className="text-slate-500">Watch it demonstrated:</span>
            <a href={`${MCAS_URL}&t=${mcasT}s`} target="_blank" rel="noopener noreferrer" className="font-medium text-amber-400 hover:text-amber-300 underline-offset-4 hover:underline">
              English: MCAS Solah Tutorial, from {mmss(mcasT)} ↗
            </a>
            <a href={YIT_MEN_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-amber-400 hover:text-amber-300 underline-offset-4 hover:underline">
              Malay: Yayasan Islam Terengganu (13 min) ↗
            </a>
          </div>
        </div>
      </article>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => go(idx - 1)} aria-label="Previous step" className={btn}>← Prev</button>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="min-w-[92px] px-4 py-2 rounded-lg text-sm font-semibold bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-sm shadow-amber-500/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button type="button" onClick={() => go(idx + 1)} aria-label="Next step" className={btn}>Next →</button>
        <div className="h-1 flex-1 basis-32 overflow-hidden rounded-full bg-slate-800" aria-hidden="true">
          {playing && (
            <div key={`${idx}-bar`} className="h-full bg-amber-400" style={{ animation: `soi-salah-progress ${DWELL_MS}ms linear forwards` }} />
          )}
        </div>
      </div>

      {/* Step rail */}
      <ol className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-1.5">
        {STEPS.map((s, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => go(i)}
              aria-current={i === idx ? 'step' : undefined}
              className={`w-full grid gap-px rounded-lg border px-2.5 py-2 text-left text-xs leading-snug transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${i === idx
                ? 'border-amber-400/30 bg-amber-400/10 text-amber-300'
                : 'border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-700'}`}
            >
              <span className="text-[11px] text-slate-500 tabular-nums">{pad2(i + 1)}</span>
              {s.short}
            </button>
          </li>
        ))}
      </ol>

      {/* Sources */}
      <footer className="space-y-2 border-t border-slate-800 pt-4 text-[13px] text-slate-400">
        <p><q className="font-serif italic text-slate-200">Pray as you have seen me praying.</q> Ṣaḥīḥ al-Bukhārī 631.</p>
        <p>
          Stillness in rukūʿ, iʿtidāl, sujūd and the sitting between prostrations is obligatory, from the hadith of the man who
          prayed badly (al-Bukhārī 757, Muslim 397). Rulings follow ʿUmdat al-Sālik. Confirm details with a qualified local teacher.
        </p>
        <div>
          Video demonstrations (Shāfiʿī):
          <ul className="list-disc ps-5 mt-1 space-y-0.5">
            <li>
              English:{' '}
              <a href={MCAS_URL} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">MCAS Solah Tutorial Guide</a>,
              Muslim Converts' Association of Singapore (51 min). Zuhur, Asr and Isya' from 6:08; Maghrib from 22:26; Subuh with qunūt from 36:01
            </li>
            <li>
              <a href={YIT_MEN_URL} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">Solat yang sempurna Mengikut Mazhab Imam Shafie bagi lelaki</a>,
              Yayasan Islam Terengganu, in Malay, for men (12 min 35 s)
            </li>
            <li>
              <a href={YIT_WOMEN_URL} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">Solat yang sempurna Mengikut Mazhab Imam Shafie bagi perempuan</a>,
              Yayasan Islam Terengganu, in Malay, for women (11 min 51 s)
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
