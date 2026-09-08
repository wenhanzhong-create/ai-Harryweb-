// Hall of Fame player data — bilingual (zh/en), ported from the user's curated list
// Portraits: GLACIER Stitch design assets (verified 200 OK)

export const HALL_OF_FAME_PLAYERS = [
  {
    id: 'paul-george',
    name: { en: 'Paul George', zh: '保罗·乔治' },
    nickname: 'PG-13',
    team: { en: 'Philadelphia 76ers', zh: '费城76人' },
    position: { en: 'Small Forward', zh: '小前锋' },
    category: 'stars',
    featured: true,
    bio: {
      en: 'An elite two-way wing with a beautiful, flowing game. Battled back from a career-threatening injury and still brings elite shooting and lockdown defense every night.',
      zh: '顶尖攻防一体锋线，球风美如画。经历重大伤病强势归来，依旧展现极高的投射与防守价值。',
    },
    tags: [
      { en: '9x All-Star', zh: '9x 全明星' },
      { en: '6x All-NBA', zh: '6x 最佳阵容' },
      { en: '4x All-Defensive', zh: '4x 最佳防守阵容' },
      { en: '2013 Most Improved', zh: '2013 进步最快球员' },
    ],
    image:
      '/images/players/pg-13.jpg',
  },
  {
    id: 'lebron-james',
    name: { en: 'LeBron James', zh: '勒布朗·詹姆斯' },
    nickname: 'King James',
    team: { en: 'Los Angeles Lakers', zh: '洛杉矶湖人' },
    position: { en: 'Small Forward', zh: '小前锋' },
    category: 'legends',
    bio: {
      en: 'The all-time scoring leader and the definition of a complete player. Dominates the league with elite basketball IQ and a prime that has lasted over two decades.',
      zh: '历史得分王，全能战士的代名词。以极高的篮球智商和长达二十余年的巅峰期统治联盟。',
    },
    tags: [
      { en: '4x NBA Champion', zh: '4x NBA总冠军' },
      { en: '4x Finals MVP', zh: '4x FMVP' },
      { en: '4x MVP', zh: '4x MVP' },
      { en: 'All-Time Scoring Leader', zh: '历史得分王' },
    ],
    image:
      '/images/players/lebron.avif',
  },
  {
    id: 'stephen-curry',
    name: { en: 'Stephen Curry', zh: '斯蒂芬·库里' },
    nickname: 'Chef Curry',
    team: { en: 'Golden State Warriors', zh: '金州勇士' },
    position: { en: 'Point Guard', zh: '控球后卫' },
    category: 'legends',
    bio: {
      en: 'Changed how modern basketball is played with historic three-point shooting — the engine and leader of the small-ball era.',
      zh: '用历史级的三分球改变了现代篮球的比赛方式，小球时代的绝对核心与领军人物。',
    },
    tags: [
      { en: '4x NBA Champion', zh: '4x NBA总冠军' },
      { en: '1x Finals MVP', zh: '1x FMVP' },
      { en: '2x MVP', zh: '2x MVP' },
      { en: 'All-Time 3-PT Leader', zh: '历史三分王' },
    ],
    image:
      '/images/players/curry.jpg',
  },
  {
    id: 'kevin-durant',
    name: { en: 'Kevin Durant', zh: '凯文·杜兰特' },
    nickname: 'The Slim Reaper',
    team: { en: 'Phoenix Suns', zh: '菲尼克斯太阳' },
    position: { en: 'Small Forward', zh: '小前锋' },
    category: 'legends',
    bio: {
      en: 'The Reaper — a lethal scorer with no dead zones, pairing interior size with a guard-like touch and technique.',
      zh: '无死角的死神级单打得分手，兼具内线身形与外线后卫般的手感与技术。',
    },
    tags: [
      { en: '2x NBA Champion', zh: '2x NBA总冠军' },
      { en: '2x Finals MVP', zh: '2x FMVP' },
      { en: '1x MVP', zh: '1x MVP' },
      { en: '4x Scoring Champ', zh: '4x 得分王' },
    ],
    image:
      '/images/players/durant.webp',
  },
  {
    id: 'kyrie-irving',
    name: { en: 'Kyrie Irving', zh: '凯里·欧文' },
    nickname: 'Uncle Drew',
    team: { en: 'Dallas Mavericks', zh: '达拉斯独行侠' },
    position: { en: 'Point Guard', zh: '控球后卫' },
    category: 'stars',
    bio: {
      en: 'A spectacular playing style with some of the greatest handles and finishing in NBA history — a true artist on the court.',
      zh: '球风华丽，拥有NBA历史上最顶级的运球与终结技巧，球场上的艺术大师。',
    },
    tags: [
      { en: '1x NBA Champion', zh: '1x NBA总冠军' },
      { en: '8x All-Star', zh: '8x 全明星' },
      { en: '50-40-90 Club', zh: '50-40-90俱乐部' },
    ],
    image:
      '/images/players/kyrie.png',
  },
  {
    id: 'jayson-tatum',
    name: { en: 'Jayson Tatum', zh: '杰森·塔图姆' },
    nickname: 'The Anomaly',
    team: { en: 'Boston Celtics', zh: '波士顿凯尔特人' },
    position: { en: 'Small Forward', zh: '小前锋' },
    category: 'rising',
    bio: {
      en: "The Celtics' new-generation franchise leader — complete, consistent, and the champion of Banner 18.",
      zh: '绿军新一代核心领袖，技术全面且发挥稳定，带领球队夺得队史第18冠。',
    },
    tags: [
      { en: '1x NBA Champion', zh: '1x NBA总冠军' },
      { en: '5x All-Star', zh: '5x 全明星' },
      { en: '3x All-NBA First Team', zh: '3x 最佳一阵' },
    ],
    image:
      '/images/players/tatum.jpg',
  },
  {
    id: 'jaylen-brown',
    name: { en: 'Jaylen Brown', zh: '杰伦·布朗' },
    nickname: 'JB',
    team: { en: 'Boston Celtics', zh: '波士顿凯尔特人' },
    position: { en: 'Shooting Guard', zh: '得分后卫' },
    category: 'rising',
    bio: {
      en: 'An explosive, efficient scorer and a clutch playoff killer — one half of the Jays duo.',
      zh: '冲击力极强的高效得分手，季后赛关键时刻的硬核杀手，双探花核心之一。',
    },
    tags: [
      { en: '1x NBA Champion', zh: '1x NBA总冠军' },
      { en: '1x Finals MVP', zh: '1x FMVP' },
      { en: '3x All-Star', zh: '3x 全明星' },
    ],
    image:
      '/images/players/brown.webp',
  },
  {
    id: 'shai-gilgeous-alexander',
    name: { en: 'Shai Gilgeous-Alexander', zh: '谢伊·吉尔杰斯-亚历山大' },
    nickname: 'SGA',
    team: { en: 'Oklahoma City Thunder', zh: '俄克拉荷马雷霆' },
    position: { en: 'Point Guard', zh: '控球后卫' },
    category: 'rising',
    bio: {
      en: 'A master of pace, mid-range shooting and drawing fouls — a new-era superstar guard.',
      zh: '节奏感极佳的打法，中距离投射与突破制造犯规的顶级大师，新时代超级后卫。',
    },
    tags: [
      { en: '2x All-NBA First Team', zh: '2x 最佳一阵' },
      { en: '2x All-Star', zh: '2x 全明星' },
      { en: 'MVP Candidate', zh: 'MVP 竞争者' },
    ],
    image:
      '/images/players/sga.jpg',
  },
];
