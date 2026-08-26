import { siteConfig } from './siteData';

export interface BookItem {
  id: string;
  bookNumber: number;
  title: string;
  subtitle: string;
  slug: string;
  isbn: string;
  hook: string;
  pullQuote: string;
  backCoverBlurb: string;
  quote: {
    text: string;
    source: string;
  };
  contents: string[];
  sampleExcerpt: string;
  pages: number;
  format: string;
  publisher: string;
  publicationYear: string;
  coverColor: string;
  accentColor: string;
  badge: string;
  stripeDirectUrl: string;
  directPriceAUD: string;
  amazonUrl: string;
  paperbackPriceAUD: string;
  kindlePriceAUD: string;
  kindleUnlimited?: boolean;
  coverWrapUrl?: string;
  coverUrl?: string;
}

export const booksData: BookItem[] = [
  {
    id: 'book-1',
    bookNumber: 1,
    title: 'Who Are You Becoming?',
    subtitle: 'A Short Guide to Living With Purpose, One Choice at a Time',
    slug: 'who-are-you-becoming',
    isbn: '978-1-291-59468-3',
    hook: 'You do not suddenly become someone at thirty. You are becoming that person now.',
    pullQuote: 'You do not suddenly become someone at thirty. You are becoming that person now.',
    backCoverBlurb: 'A short, honest guide for young people standing at the edge of adulthood, ready for a harder question than what they’ll have by thirty: who they will have become.',
    quote: {
      text: 'O believers! Be mindful of Allah, and let every soul look to what it has sent forth for tomorrow.',
      source: 'Surah Al-Hashr (59:18)'
    },
    contents: [
      'Before We Begin',
      'Age Arrives. Maturity Doesn’t.',
      'What the World Hands You',
      'Three People You Could Become',
      'The Intention That Changes Everything',
      'Meeting Yourself at Thirty',
      'Direction Before Destination',
      'Your First Commitment'
    ],
    sampleExcerpt: `You do not suddenly become someone at thirty. You are becoming that person already — in how you speak to your parents, what you do when nobody is watching, what you reach for when you are bored, angry, or tired. Thirty is not a deadline. It is simply a point far enough ahead that we can use it to look honestly at the direction we are travelling in.

Maturity does not arrive automatically with the passage of calendar years. Age is a biological mechanism; character is a spiritual and moral achievement. The world hands young people a set of default expectations: acquire credentials, build a personal brand, maximize consumption, and seek immediate gratification. But without an internal compass rooted in Tawheed, these pursuits leave the soul hollow.

In this first book, we ask the quietest and most urgent question: who are you becoming through the daily choices you make right now? We examine the transition from passive recipient of social influences to active, intentional servant of Allah.`,
    pages: 25,
    format: '5 × 8 inch Paperback',
    publisher: 'Sayyidina Omar Institute for Character and Leadership',
    publicationYear: '2026',
    coverColor: 'bg-slate-950',
    accentColor: 'amber',
    badge: 'BOOK ONE',
    stripeDirectUrl: 'https://buy.stripe.com/28EfZh2BT7qLba70MS0ZW03',
    directPriceAUD: 'A$19',
    amazonUrl: 'https://www.amazon.com.au/dp/B0HBM1333X',
    paperbackPriceAUD: 'A$16.49',
    kindlePriceAUD: 'A$3.99',
    coverUrl: 'https://storage.googleapis.com/sayyidina-omar-institute/images/books/HYSY30_Book1_Front_Cover.webp',
    coverWrapUrl: 'https://storage.googleapis.com/sayyidina-omar-institute/images/books/HYSY30_Book1_Front_Cover.webp'
  },
  {
    id: 'book-2',
    bookNumber: 2,
    title: 'Tazkiyyah: The Heart That Remembers Its Promise',
    subtitle: 'A Short Guide to Purifying the Heart, One Return at a Time',
    slug: 'tazkiyyah',
    isbn: '978-1-291-59464-5',
    hook: 'You already said yes, before you had a name.',
    pullQuote: 'You already said yes, before you had a name.',
    backCoverBlurb: 'A short, honest guide to the heart, and what it already promised before the world ever had a say. Drawing on Qur’an 7:172, Imam al-Ghazali’s teaching on the heart as a mirror, and Imam al-Nawawi’s al-Adhkar, this book shows how ordinary days either tarnish or polish what was already there.',
    quote: {
      text: 'Am I not your Lord? They said: Yes, we testify.',
      source: 'Surah Al-A’raf (7:172)'
    },
    contents: [
      'Before We Begin',
      'The Promise You Already Made',
      'The Mirror That Tarnishes',
      'Four Forces, One Vessel',
      'The Diseases That Tarnish the Mirror',
      'The Fuel',
      'Reading Your Own Compass',
      'Your First Return'
    ],
    sampleExcerpt: `The human heart was created clean, naturally recognizing its Maker. Purification (Tazkiyyah) is not the manufacturing of a new belief system from thin air; it is the deliberate clearing of debris off a mirror designed to reflect divine light.

When we strip away pride, distraction, and unchecked desire, what remains is the Fitrah — the primordial promise made in the presence of the Divine before time itself began. You are not trying to construct an artificial spiritual identity. You are removing the rust that accumulates through daily exposure to heedlessness, algorithmic outrage, and vanity.

This second book guides the reader through identifying the subtle diseases of the heart, understanding the inner struggle between the higher spirit (Ruh) and lower ego (Nafs), and practicing the daily discipline of returning (Tawbah) to spiritual clarity.`,
    pages: 26,
    format: '5 × 8 inch Paperback',
    publisher: 'Sayyidina Omar Institute for Character and Leadership',
    publicationYear: '2026',
    coverColor: 'bg-slate-950',
    accentColor: 'rose',
    badge: 'BOOK TWO',
    stripeDirectUrl: 'https://buy.stripe.com/cNiaEX90hfXhgurfHM0ZW04',
    directPriceAUD: 'A$19',
    amazonUrl: 'https://www.amazon.com.au/dp/B0HBN99KV6',
    paperbackPriceAUD: 'A$16.49',
    kindlePriceAUD: 'A$4.28',
    kindleUnlimited: true,
    coverUrl: 'https://storage.googleapis.com/sayyidina-omar-institute/images/books/HYSY30_Book2_Front_Cover.webp',
    coverWrapUrl: 'https://storage.googleapis.com/sayyidina-omar-institute/images/books/HYSY30_Book2_Front_Cover.webp'
  },
  {
    id: 'book-3',
    bookNumber: 3,
    title: 'Niyyah: What You Carry Into the Work',
    subtitle: 'A Short Guide to Turning Ordinary Work into Worship, One Task at a Time',
    slug: 'niyyah',
    isbn: '978-1-291-59462-1',
    hook: 'Two people can do the exact same thing and walk away with entirely different outcomes before Allah.',
    pullQuote: 'Two people can do the exact same thing and walk away with entirely different outcomes before Allah.',
    backCoverBlurb: 'A short, honest guide to niyyah, the intention that decides whether ordinary work counts as worship. Drawing on the full hadith of intentions and four vocations — a doctor, a nurse, a teacher, and a tradesman — this book shows what it means to carry sincerity into work nobody else is watching.',
    quote: {
      text: 'Actions are but by intentions, and every person will have only what they intended.',
      source: 'Sahih al-Bukhari 1 (Narrated by Sayyidina Omar RA)'
    },
    contents: [
      'Before We Begin',
      'The Sentence That Changes Everything',
      'Matters Are Judged by Their Objectives',
      'When the Mirror Distorts the Niyyah',
      'Any Lawful Work Can Become Worship',
      'Four People, Four Intentions',
      'Renewing the Niyyah',
      'Your First Niyyah Audit'
    ],
    sampleExcerpt: `Two people sit at adjacent desks, write similar lines of code, or study the exact same medical textbook. Externally, their physical actions are indistinguishable. Internally, one is constructing a temporary monument to personal vanity, while the other is fulfilling a sacred trust (Amanah) for the sake of Allah and the benefit of humanity.

Intention (Niyyah) is the quiet, internal alchemy that transforms ordinary, daily labor into continuous worship. The famous hadith that governs all human action — "Actions are but by intentions" — was narrated by Sayyidina Omar ibn al-Khattab (RA) himself, and Imam al-Bukhari chose it to open his entire monumental collection.

This third book provides a practical framework for auditing why we do what we do, eliminating hidden ostentation (Riya'), and bringing sacred orientation into every professional and academic endeavor.`,
    pages: 26,
    format: '5 × 8 inch Paperback',
    publisher: 'Sayyidina Omar Institute for Character and Leadership',
    publicationYear: '2026',
    coverColor: 'bg-slate-950',
    accentColor: 'sky',
    badge: 'BOOK THREE',
    stripeDirectUrl: 'https://buy.stripe.com/3cIaEX0tL7qL7XV7bg0ZW05',
    directPriceAUD: 'A$19',
    amazonUrl: 'https://www.amazon.com.au/dp/B0HBMR18DZ',
    paperbackPriceAUD: 'A$18.89',
    kindlePriceAUD: 'A$4.28',
    coverUrl: 'https://storage.googleapis.com/sayyidina-omar-institute/images/books/HYSY30_Book3_Front_Cover.webp',
    coverWrapUrl: 'https://storage.googleapis.com/sayyidina-omar-institute/images/books/HYSY30_Book3_Front_Cover.webp'
  },
  {
    id: 'book-4',
    bookNumber: 4,
    title: 'Khidmah: What You Carry Toward Others',
    subtitle: 'A Short Guide to Service, One Person at a Time',
    slug: 'khidmah',
    isbn: '978-1-291-59460-7',
    hook: 'The most beloved of people to Allah are those most beneficial to people.',
    pullQuote: 'The most beloved of people to Allah are those most beneficial to people.',
    backCoverBlurb: 'A short, honest guide to khidmah, the service a purified heart and a sincere intention were always meant to produce. Drawing on Surah Al-Ma’un, the Qur’an’s command to cooperate in goodness, and the example of Sayyidina Omar ibn al-Khattab carrying a sack of flour himself to a family in need, this book closes the series with what the first three books were always pointing toward.',
    quote: {
      text: 'So woe to those who pray, but are heedless of their prayer... and withhold simple assistance.',
      source: 'Surah Al-Ma’un (107:1–7)'
    },
    contents: [
      'Before We Begin',
      'What Purification and Intention Were Always Pointing Toward',
      'Cooperate in Goodness',
      'The Most Beloved to Allah',
      'The Man Who Carried His Own Sack',
      'Four Ways to Carry It',
      'When Service Becomes a Habit',
      'Your First Act of Khidmah'
    ],
    sampleExcerpt: `Purification of the heart and alignment of intention were never meant to terminate in self-congratulatory isolation. A mirror does not exist merely to admire its own polished surface; it exists to catch light and reflect it into dark corners.

Spiritual formation remains incomplete until it overflows into service (Khidmah) to creation. Sayyidina Omar (RA), as the leader of a vast state, walked the streets of Medina in the quiet of the night, carrying a heavy flour sack on his own back to feed a vulnerable widow's children, refusing to delegate what his own soul needed to perform.

This fourth book demonstrates how personal formation culminates in courageous community service, moving beyond mere sentimentality into quiet, regular acts of sacrifice for others.`,
    pages: 27,
    format: '5 × 8 inch Paperback',
    publisher: 'Sayyidina Omar Institute for Character and Leadership',
    publicationYear: '2026',
    coverColor: 'bg-slate-950',
    accentColor: 'emerald',
    badge: 'BOOK FOUR',
    stripeDirectUrl: 'https://buy.stripe.com/3cI9ATgsJ6mH7XVcvA0ZW06',
    directPriceAUD: 'A$19',
    amazonUrl: 'https://www.amazon.com.au/dp/B0HBMNF8W8',
    paperbackPriceAUD: 'A$18.89',
    kindlePriceAUD: 'A$4.28',
    kindleUnlimited: true,
    coverUrl: 'https://storage.googleapis.com/sayyidina-omar-institute/images/books/HYSY30_Book4_Front_Cover.webp',
    coverWrapUrl: 'https://storage.googleapis.com/sayyidina-omar-institute/images/books/HYSY30_Book4_Front_Cover.webp'
  }
];

export const reclaimingEducationBook = {
  title: 'Reclaiming Education: From GDP Metrics to Human Flourishing',
  subtitle: 'An Islamic Framework for Western Australian Schools',
  author: 'Farhad Omar',
  publisher: 'Sayyidina Omar Institute for Character and Leadership',
  publishedDate: '21 August 2025',
  isbn: '978-1-326-19927-2',
  pages: 296,
  format: 'A4 paperback, perfect bound (210 × 297 mm)',
  language: 'English',
  category: 'Education',
  coverUrl: 'https://storage.googleapis.com/sayyidina-omar-institute/images/books/Reclaiming%20Education%20Cover.jpg',
  altText: 'Reclaiming Education: From GDP Metrics to Human Flourishing by Farhad Omar — book cover',
  luluUrl: 'https://www.lulu.com/shop/farhad-omar/reclaiming-education-from-gdp-metrics-to-human-flourishing-education-and-human-development/paperback/product-zmr9967.html',
  luluPrice: 'A$56.99',
  amazonUrl: 'https://www.amazon.com.au/dp/B0FN7V35F6',
  paperbackPrice: 'A$67.11',
  kindlePrice: 'A$11.99',
  qualifier: '296 pages, A4 — a full-length work.',
  description: `Before there was a programme, there was a question about schooling itself. Students treated as future workers, schools as factories, success reduced to a test score or a contribution to GDP — and stress, inequality and the erosion of purpose as the result.

Drawing on Western Australia's own educational history, global debates on neoliberal schooling, and the Islamic intellectual tradition, the book argues for mīzān, balance: an education built on ta'līm, tarbiyah and ta'dīb that develops intellect, ethics, creativity and community. It draws on al-Ghazali and Ibn Khaldun alongside Syed Naquib al-Attas and Gert Biesta, with comparative material from Finland, Singapore and Malaysia, and a concrete reform roadmap.

Naming that problem was one thing. Answering it was another. How You See Yourself at 30 began as that answer: a formation programme for young people, built on the conviction that character cannot be assessed into existence. The Sayyidina Omar Institute grew up around the programme. These four books carry it to anyone who cannot be in the room on a Saturday morning.`
};

export const otherWorksByAuthor = [
  {
    title: 'Islamic Economics in an Extractive Age: Reclaiming Moral Purpose in a Financialised World',
    category: 'Economics & Ethics'
  },
  {
    title: 'Halal Awareness & Training Program Guide',
    category: 'Community Guidance'
  },
  {
    title: 'Borrowed Breaths: A Journey of Faith, Survival, and Legacy',
    category: 'Memoir & Faith'
  }
];

export const seriesPurchaseOptions = {
  completeSetStripeUrl: 'https://buy.stripe.com/cNieVd2BTbH15PNdzE0ZW02',
  directStripeUrl: 'https://buy.stripe.com/cNieVd2BTbH15PNdzE0ZW02',
  bundlePriceAUD: 'A$59 AUD',
  fromPriceAUD: 'from A$16.49',
  perthLocation: 'Available at the Alhidayah Centre, Wangara, and at Institute events.',
  amazonUrl: 'https://www.amazon.com.au/stores/Mr-Farhad-Omar/author/B0FN1W5Z2C',
  luluUrl: 'https://www.lulu.com/search?contributor=Farhad+Omar',
  substackUrl: 'https://farhadomarstudios.substack.com'
};
