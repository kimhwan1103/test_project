// ---------- edit these if the event changes ----------
const CONFIG = {
  // venue hours per day, KST (UTC+9). Timeline rows carry their own times in index.html.
  days: [
    { date: '2026-10-03', open: '09:30', close: '18:00' },
    { date: '2026-10-04', open: '09:30', close: '18:00' },
  ],
  demo1Url: '', // e.g. https://<demo-1-domain>; empty shows "URL not set"
};

// Japanese source text lives in index.html and is captured on load; only ko/en are here.
// Values are trusted constants and may contain <br>.
const TRANSLATIONS = {
  ko: {
    title: 'SoftBank Hackathon 2026 · Term1',
    description: 'SoftBank Hackathon 2026 Term1 예선. 테마는 One Action, Infinite Clouds. (참가자가 만든 비공식 페이지)',
    navLabel: '메인 메뉴',
    'nav.theme': '테마',
    'nav.judging': '심사',
    'nav.schedule': '일정',
    'nav.venue': '장소',
    'nav.demos': '데모',
    'hero.stage': '예선',
    city: '서울',
    'theme.title': '테마',
    'theme.desc': '로컬에서 개발한 웹 애플리케이션을 원터치로 배포.<br />AI를 전적으로 활용해 Google Cloud, AWS 같은 하이퍼스케일러나 온프레미스(로컬) 환경으로 쉽게 배포할 수 있는 시스템을 만들어 봅시다!',
    'judging.title': '심사 기준',
    'judging.note': '총 100점. 배포되는 앱이 아니라 배포하는 시스템 자체를 평가합니다.',
    'c1.name': '완성도 · 데모 시연',
    'c1.desc': '로컬과 클라우드 양쪽으로의 배포를 그 자리에서 시연할 수 있는가',
    'c2.name': '클라우드 활용 수준',
    'c2.desc': '환경 차이의 극복과 이식성이 설계에 반영되어 있는가',
    'c3.name': '팀 개발',
    'c3.desc': '설계가 문서화되고, 대안과 논의 과정을 거쳐 구현되었는가',
    'c4.name': '흥미 요소 · 독창성',
    'c4.desc': '대응 환경의 범위나 UX 등 독자적인 디테일',
    'c5.name': 'AI 활용',
    'c5.desc': 'AI 활용을 위한 창의적인 시도가 있는가',
    'schedule.title': '일정',
    'schedule.note': '시간은 한국 시간(KST) 기준이며, 상황에 따라 변경될 수 있습니다.',
    d1s1: '개장 · 접수',
    d1s2: '오프닝',
    d1s3: '개발 시간',
    d1s4: '중간 보고',
    d1s5: '1일 차 마감',
    d2s1: '개장 · 접수',
    d2s2: '개발 시간',
    d2s3: '성과 발표',
    d2s4: '친목회 & QA',
    d2s5: '시상식',
    'roadmap.title': '선발 흐름',
    r1: '예선 1',
    r2: '예선 2',
    r3: '본선',
    r4: '특별 선발',
    'r4.note': '면접 확정',
    'roadmap.note': '본선 안내는 팀이 아닌 개인 단위로 결정되며, 10/26 저녁에 메일로 안내됩니다.',
    'venue.title': '장소',
    'venue.name': '스페이스쉐어 중부센터 8층 에메랄드홀',
    'venue.address': '주소',
    'venue.addressValue': '서울 중구 장충단로 247 굿모닝시티 8·9층',
    'venue.hours': '시간',
    'venue.hoursValue': '10:00 – 18:00 (접수 9:30~). 18시에 문을 닫습니다.',
    'demos.title': '우리의 데모',
    'demos.note': '배포 시스템 시연용 샘플 앱입니다.',
    open: '열기',
    here: '보는 중',
    'demo1.desc': '일본 이커머스 관리자 화면. 대시보드, 주문 관리, 상품 CRUD. 시작할 때마다 데이터를 초기화합니다.',
    'demo2.desc': '지금 보고 있는 이 페이지. 빌드 없는 정적 사이트를 Caddy가 서빙합니다.',
    footer: '참가자가 만든 비공식 데모 페이지입니다. 내용은 킥오프 자료를 바탕으로 합니다.',
  },
  en: {
    title: 'SoftBank Hackathon 2026 · Term1',
    description: 'SoftBank Hackathon 2026 Term1 qualifier. Theme: One Action, Infinite Clouds. (Unofficial page by a participant)',
    navLabel: 'Main menu',
    'nav.theme': 'Theme',
    'nav.judging': 'Judging',
    'nav.schedule': 'Schedule',
    'nav.venue': 'Venue',
    'nav.demos': 'Demos',
    'hero.stage': 'Qualifier',
    city: 'Seoul',
    'theme.title': 'Theme',
    'theme.desc': 'Deploy a locally built web app with a single touch.<br />Build a system that makes full use of AI to deploy easily to hyperscalers such as Google Cloud and AWS, or to on-prem (local) environments.',
    'judging.title': 'Judging',
    'judging.note': '100 points in total. The deploy system itself is judged, not the app being deployed.',
    'c1.name': 'Completeness & Demo',
    'c1.desc': 'Can it deploy to both local and cloud, live on stage?',
    'c2.name': 'Use of Cloud',
    'c2.desc': 'Does the design absorb environment differences and stay portable?',
    'c3.name': 'Team Development',
    'c3.desc': 'Is the design documented, with alternatives and the discussion behind it?',
    'c4.name': 'Fun & Originality',
    'c4.desc': 'Your own touches, such as environment coverage or UX',
    'c5.name': 'Use of AI',
    'c5.desc': 'Is AI used in a thoughtful way?',
    'schedule.title': 'Schedule',
    'schedule.note': 'All times are Korea Standard Time (KST) and may change.',
    d1s1: 'Doors open & Check-in',
    d1s2: 'Opening',
    d1s3: 'Hacking',
    d1s4: 'Midpoint reviews',
    d1s5: 'Day 1 wrap-up',
    d2s1: 'Doors open & Check-in',
    d2s2: 'Hacking',
    d2s3: 'Final presentations',
    d2s4: 'Networking & Q&A',
    d2s5: 'Awards',
    'roadmap.title': 'Selection path',
    r1: 'Qualifier 1',
    r2: 'Qualifier 2',
    r3: 'Finals',
    r4: 'Special selection',
    'r4.note': 'Interview guaranteed',
    'roadmap.note': 'Finalists are chosen individually, not by team, and notified by email on the evening of Oct 26.',
    'venue.title': 'Venue',
    'venue.name': 'SpaceShare Jungbu Center, 8F Emerald Hall',
    'venue.address': 'Address',
    'venue.addressValue': 'Goodmorning City 8–9F, 247 Jangchungdan-ro, Jung-gu, Seoul',
    'venue.hours': 'Hours',
    'venue.hoursValue': '10:00 – 18:00 (check-in from 9:30). The venue closes at 18:00.',
    'demos.title': 'Our Demos',
    'demos.note': 'Sample apps for demonstrating the deploy system.',
    open: 'Open',
    here: "You're here",
    'demo1.desc': 'Admin console for a Japanese e-commerce shop. Dashboard, order management and product CRUD. Data resets on every boot.',
    'demo2.desc': 'This page. A build-free static site served by Caddy.',
    footer: 'An unofficial demo page made by a participant, based on the kickoff materials.',
  },
};

// strings that only exist at runtime, so all three languages are here
const RUNTIME = {
  ja: { untilEnd: 'Day 2 終了まで', ended: '終了しました', day: '日', noUrl: 'URL 未設定' },
  ko: { untilEnd: 'Day 2 종료까지', ended: '종료되었습니다', day: '일', noUrl: 'URL 미설정' },
  en: { untilEnd: 'Day 2 ends in', ended: 'Event ended', day: 'd', noUrl: 'URL not set' },
};

const LOCALES = { ja: 'ja-JP', ko: 'ko-KR', en: 'en-US' };
const kst = (date, time) => new Date(`${date}T${time}:00+09:00`);
const windows = CONFIG.days.map((day) => ({ start: kst(day.date, day.open), end: kst(day.date, day.close) }));

const $ = (selector) => document.querySelector(selector);
const description = $('meta[name="description"]');
const textNodes = document.querySelectorAll('[data-i18n]');
const ariaNodes = document.querySelectorAll('[data-i18n-aria]');
let lang = 'ja';

TRANSLATIONS.ja = { title: document.title, description: description.content };
for (const node of textNodes) TRANSLATIONS.ja[node.dataset.i18n] = node.innerHTML;
for (const node of ariaNodes) TRANSLATIONS.ja[node.dataset.i18nAria] = node.getAttribute('aria-label');

// ---------- status & current session ----------

const pad = (n) => String(n).padStart(2, '0');

function remaining(ms, dayUnit) {
  const s = Math.floor(ms / 1000);
  const days = Math.floor(s / 86400);
  const clock = `${pad(Math.floor(s / 3600) % 24)}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
  return days ? `${days}${dayUnit} ${clock}` : clock;
}

function tick() {
  const now = Date.now();
  const text = RUNTIME[lang];
  const eventEnd = windows.at(-1).end;
  const open = windows.some((slot) => now >= slot.start && now < slot.end);

  // counts down to the close of the last day; red while the venue is open
  $('#countdown-label').textContent = now < eventEnd ? text.untilEnd : '';
  $('#countdown-value').textContent = now < eventEnd ? remaining(eventEnd - now, text.day) : text.ended;
  $('.countdown').dataset.state = now >= eventEnd ? 'ended' : open ? 'live' : 'before';

  for (const list of document.querySelectorAll('.timeline')) {
    for (const row of list.children) {
      const start = kst(list.dataset.date, row.dataset.start);
      const end = kst(list.dataset.date, row.dataset.end);
      row.classList.toggle('is-now', now >= start && now < end);
      row.classList.toggle('is-past', now >= end);
    }
  }
}

// ---------- language ----------

function setLanguage(next) {
  lang = next;
  const dict = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.title = dict.title;
  description.content = dict.description;
  for (const node of textNodes) node.innerHTML = dict[node.dataset.i18n];
  for (const node of ariaNodes) node.setAttribute('aria-label', dict[node.dataset.i18nAria]);
  for (const button of document.querySelectorAll('[data-lang]')) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  }

  const longDate = new Intl.DateTimeFormat(LOCALES[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    timeZone: 'Asia/Seoul',
  });
  const shortDate = new Intl.DateTimeFormat(LOCALES[lang], { month: 'short', day: 'numeric', weekday: 'short', timeZone: 'Asia/Seoul' });
  const first = windows[0].start;
  const last = windows.at(-1).start;
  // ICU's ja range is numeric-only ("2026/10/03～"), so compose it to read as 年月日
  $('#event-dates').textContent = lang === 'ja'
    ? `${longDate.format(first)}〜${new Intl.DateTimeFormat('ja-JP', { day: 'numeric', weekday: 'short', timeZone: 'Asia/Seoul' }).format(last)}`
    : longDate.formatRange(first, last);
  $('#day1-date').textContent = shortDate.format(windows[0].start);
  $('#day2-date').textContent = shortDate.format(windows[1].start);

  const demo1 = $('#demo1-link');
  if (CONFIG.demo1Url) {
    demo1.href = CONFIG.demo1Url;
  } else {
    demo1.removeAttribute('href');
    demo1.textContent = RUNTIME[lang].noUrl;
  }
  tick();
}

for (const button of document.querySelectorAll('[data-lang]')) {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
    try {
      localStorage.setItem('lang', button.dataset.lang);
    } catch {
      // storage blocked: choice lasts for this page view only
    }
  });
}

let stored = null;
try {
  stored = localStorage.getItem('lang');
} catch {
  // ignore
}
setLanguage(TRANSLATIONS[stored] ? stored : 'ja');
setInterval(tick, 1000);
