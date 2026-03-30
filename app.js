// ── Song Class ────────────────────────────────────────
class Song {
  constructor(name, singer, genre, subGenre, language, year, filmOrAlbum) {
    this.name        = name;
    this.singer      = singer;
    this.genre       = genre;
    this.subGenre    = subGenre;
    this.language    = language;
    this.year        = year;
    this.filmOrAlbum = filmOrAlbum;
  }
}

// ── Song Data ─────────────────────────────────────────
const songMap = [
  new Song("Shape of You",              "Ed Sheeran",         "Pop",         "Love",      "English", 2017, "Divide"),
  new Song("Love Story",                "Taylor Swift",       "Country",     "Love",      "English", 2008, "Fearless"),
  new Song("Someone Like You",          "Adele",              "Pop",         "Sad",       "English", 2011, "21"),
  new Song("Channa Mereya",             "Arijit Singh",       "Bollywood",   "Romantic",  "Hindi",   2016, "Ae Dil Hai Mushkil"),
  new Song("Sorry",                     "Justin Bieber",      "Pop",         "Party",     "English", 2015, "Purpose"),
  new Song("She Wolf",                  "Shakira",            "Pop",         "Party",     "English", 2009, "She Wolf"),
  new Song("Bad Romance",               "Lady Gaga",          "Pop",         "Party",     "English", 2008, "The Fame"),
  new Song("Drunk in Love",             "Beyonce",            "Pop",         "Love",      "English", 2013, "Beyonce"),
  new Song("Diamonds",                  "Rihanna",            "Pop",         "Party",     "English", 2012, "Unapologetic"),
  new Song("Same Old Love",             "Selena Gomez",       "Pop",         "Love",      "English", 2015, "Revival"),
  new Song("New Rules",                 "Dua Lipa",           "Pop",         "Party",     "English", 2017, "Dua Lipa"),
  new Song("Hotline Bling",             "Drake",              "Rap",         "Party",     "English", 2016, "Views"),
  new Song("Cleanin' Out My Closet",    "Eminem",             "Rap",         "Sad",       "English", 2002, "The Eminem Show"),
  new Song("Chaiyya Chaiyya",           "AR Rahman",          "Bollywood",   "Classical", "Hindi",   1998, "Dil Se"),
  new Song("DNA",                       "BTS",                "K-Pop",       "Party",     "Korean",  2017, "Love Yourself"),
  new Song("Fix You",                   "Coldplay",           "Alternative", "Love",      "English", 2005, "X&Y"),
  new Song("24k Magic",                 "Bruno Mars",         "Pop",         "Party",     "English", 2016, "24k Magic"),
  new Song("California Gurls",          "Katy Perry",         "Pop",         "Party",     "English", 2010, "Teenage Dream"),
  new Song("In My Blood",               "Shawn Mendes",       "Pop",         "Love",      "English", 2018, "Shawn Mendes"),
  new Song("Bad Guy",                   "Billie Eilish",      "Pop",         "Sad",       "English", 2019, "When We All Fall Asleep"),
  new Song("Numb",                      "Linkin Park",        "Rock",        "Sad",       "English", 2003, "Meteora"),
  new Song("Story of My Life",          "One Direction",      "Pop",         "Love",      "English", 2013, "Midnight Memories"),
  new Song("Wake Me Up",                "Avicii",             "Electronic",  "Party",     "English", 2013, "True"),
  new Song("Can't Feel My Face",        "The Weeknd",         "R&B",         "Party",     "English", 2015, "Beauty Behind the Madness"),
  new Song("Stay with Me",              "Sam Smith",          "Pop",         "Sad",       "English", 2014, "In the Lonely Hour"),
  new Song("Tum Hi Ho",                 "Arijit Singh",       "Bollywood",   "Romantic",  "Hindi",   2013, "Aashiqui 2"),
  new Song("Piyu Bole",                 "Shreya Ghoshal",     "Bollywood",   "Romantic",  "Hindi",   2005, "Parineeta"),
  new Song("Thinking Out Loud",         "Ed Sheeran",         "Pop",         "Love",      "English", 2014, "x"),
  new Song("Payphone",                  "Maroon 5",           "Pop",         "Love",      "English", 2012, "Overexposed"),
  new Song("Shake It Off",              "Taylor Swift",       "Pop",         "Love",      "English", 2014, "1989"),
  new Song("Sexyback",                  "Justin Timberlake",  "Pop",         "Party",     "English", 2006, "FutureSex/LoveSounds"),
  new Song("I Will Always Love You",    "Whitney Houston",    "R&B",         "Love",      "English", 1992, "The Bodyguard"),
  new Song("My Heart Will Go On",       "Celine Dion",        "Pop",         "Love",      "English", 1997, "Titanic"),
  new Song("Beat It",                   "Michael Jackson",    "Pop",         "Party",     "English", 1982, "Thriller"),
  new Song("Like a Virgin",             "Madonna",            "Pop",         "Party",     "English", 1984, "Like a Virgin"),
  new Song("Candle in the Wind",        "Elton John",         "Pop",         "Sad",       "English", 1997, "Candle in the Wind"),
  new Song("With or Without You",       "U2",                 "Rock",        "Sad",       "English", 1987, "The Joshua Tree"),
  new Song("Bohemian Rhapsody",         "Queen",              "Rock",        "Party",     "English", 1975, "A Night at the Opera"),
  new Song("Livin' on a Prayer",        "Bon Jovi",           "Rock",        "Party",     "English", 1986, "Slippery When Wet"),
  new Song("Lucy in the Sky with Diamonds", "The Beatles",    "Rock",        "Love",      "English", 1967, "Sgt. Pepper's"),
  new Song("Tumblin' Dice",             "The Rolling Stones", "Rock",        "Party",     "English", 1972, "Exile on Main St."),
  new Song("Smells Like Teen Spirit",   "Nirvana",            "Rock",        "Sad",       "English", 1991, "Nevermind"),
  new Song("Enter Sandman",             "Metallica",          "Rock",        "Party",     "English", 1991, "Metallica"),
  new Song("You Shook Me All Night Long","AC/DC",             "Rock",        "Party",     "English", 1980, "Back in Black"),
  new Song("Hotel California",          "Eagles",             "Rock",        "Sad",       "English", 1976, "Hotel California"),
  new Song("What's Love Got to Do with It","Tina Turner",     "Rock",        "Love",      "English", 1984, "Private Dancer"),
  new Song("Time",                      "Pink Floyd",         "Rock",        "Sad",       "English", 1973, "The Dark Side of the Moon"),
  new Song("Hello",                     "Adele",              "Pop",         "Sad",       "English", 2015, "25"),
  new Song("Treat You Better",          "Shawn Mendes",       "Pop",         "Love",      "English", 2016, "Illuminate"),
  new Song("Work",                      "Rihanna",            "Pop",         "Party",     "English", 2016, "Anti"),
  new Song("Galliyan",                  "Ankit Tiwari",       "Bollywood",   "Romantic",  "Hindi",   2014, "Ek Villain"),
  new Song("Hasi Ban Gaye",             "Ami Mishra",         "Bollywood",   "Romantic",  "Hindi",   2015, "Hamari Adhuri Kahani"),
  new Song("Sun Saathiya",              "Priya Saraiya",      "Bollywood",   "Romantic",  "Hindi",   2015, "ABCD 2"),
  new Song("Sanam Re",                  "Mithoon",            "Bollywood",   "Romantic",  "Hindi",   2016, "Sanam Re"),
  new Song("Raabta",                    "Arijit Singh",       "Bollywood",   "Romantic",  "Hindi",   2012, "Agent Vinod"),
  new Song("Tujhe Kitna Chahne Lage",   "Arijit Singh",       "Bollywood",   "Romantic",  "Hindi",   2019, "Kabir Singh"),
  new Song("Kaise Hua",                 "Vishal Mishra",      "Bollywood",   "Romantic",  "Hindi",   2019, "Kabir Singh"),
  new Song("Pachtaoge",                 "Arijit Singh",       "Bollywood",   "Romantic",  "Hindi",   2019, "Jabariya Jodi"),
  new Song("Tum Hi Aana",               "Payal Dev",          "Bollywood",   "Romantic",  "Hindi",   2019, "Marjaavaan"),
  new Song("Tera Ban Jaunga",           "Akhil Sachdeva",     "Bollywood",   "Romantic",  "Hindi",   2019, "Kabir Singh"),
  new Song("Tera Yaar Hoon Main",       "Arijit Singh",       "Bollywood",   "Friendship","Hindi",   2018, "Sonu Ke Titu Ki Sweety"),
  new Song("Khairiyat",                 "Arijit Singh",       "Bollywood",   "Romantic",  "Hindi",   2019, "Chhichhore"),
  new Song("Bekhayali",                 "Sachet Tandon",      "Bollywood",   "Romantic",  "Hindi",   2019, "Kabir Singh"),
  new Song("Duniyaa",                   "Akhil Sachdeva",     "Bollywood",   "Romantic",  "Hindi",   2019, "Luka Chuppi"),
  new Song("Tere Bin",                  "Atif Aslam",         "Bollywood",   "Romantic",  "Hindi",   2019, "Simmba"),
  new Song("Ve Maahi",                  "Asees Kaur",         "Bollywood",   "Romantic",  "Hindi",   2019, "Kesari"),
  new Song("Mere Sohneya",              "Vishal Mishra",      "Bollywood",   "Romantic",  "Hindi",   2019, "Kabir Singh"),
  new Song("Dil Diyan Gallan",          "Atif Aslam",         "Bollywood",   "Romantic",  "Hindi",   2019, "Bharat"),
  new Song("Akh Lad Jaave",             "Badshah",            "Bollywood",   "Party",     "Hindi",   2018, "Loveyatri"),
  new Song("Chal Ghar Chalen",          "Jubin Nautiyal",     "Bollywood",   "Romantic",  "Hindi",   2020, "Malang"),
  new Song("Thodi Jagah",               "Arijit Singh",       "Bollywood",   "Romantic",  "Hindi",   2020, "Marjaavaan"),
  new Song("Garmi",                     "Neha Kakkar",        "Bollywood",   "Party",     "Hindi",   2020, "Street Dancer 3D"),
  new Song("Muqabla",                   "A. R. Rahman",       "Bollywood",   "Party",     "Hindi",   2020, "Street Dancer 3D"),
  new Song("Illegal Weapon 2.0",        "Jassie Gill",        "Bollywood",   "Party",     "Hindi",   2020, "Street Dancer 3D"),
  new Song("Dus Bahane 2.0",            "Vishal-Shekhar",     "Bollywood",   "Party",     "Hindi",   2020, "Baaghi 3"),
  new Song("Lagdi Lahore Di",           "Guru Randhawa",      "Bollywood",   "Party",     "Hindi",   2020, "Street Dancer 3D"),
  new Song("Lut Gaye",                  "Tanishk Bagchi",     "Bollywood",   "Party",     "Hindi",   2020, "Street Dancer 3D"),
  new Song("Baarish",                   "Jubin Nautiyal",     "Bollywood",   "Romantic",  "Hindi",   2021, "Marjaavaan"),
  new Song("Sakhiyan 2.0",              "Stebin Ben",         "Bollywood",   "Romantic",  "Hindi",   2021, "Half Girlfriend"),
  new Song("Raataan Lambiyan",          "Jubin Nautiyal",     "Bollywood",   "Romantic",  "Hindi",   2021, "Shershaah"),
];

// ── Constants ─────────────────────────────────────────
const genreIcons = {
  Pop: '🎤', Rock: '🎸', Bollywood: '🪘', 'K-Pop': '✨',
  Rap: '🎙️', 'R&B': '🎷', Electronic: '🎛️',
  Alternative: '🌿', Country: '🤠',
};

const genreBgMap = {
  Pop:         'rgba(91,141,238,0.15)',
  Rock:        'rgba(224,92,106,0.15)',
  Bollywood:   'rgba(200,169,110,0.15)',
  'K-Pop':     'rgba(155,127,232,0.15)',
  Rap:         'rgba(94,201,138,0.12)',
  Electronic:  'rgba(91,141,238,0.15)',
  Alternative: 'rgba(94,201,138,0.15)',
  Country:     'rgba(200,169,110,0.12)',
};

const langColors = {
  English: 'lang-english',
  Hindi:   'lang-hindi',
  Korean:  'lang-korean',
};

// ── State ─────────────────────────────────────────────
let playedSongs          = new Set();
let currentSongId        = -1;
let currentSuggestions   = [];
let currentSuggestionIndex = -1;
let activeGenre          = 'all';
let activeLang           = 'all';
let searchQuery          = '';
let sortMode             = 'default';

// ── Helpers ───────────────────────────────────────────
function genreBg(genre) {
  return genreBgMap[genre] || 'rgba(255,255,255,0.05)';
}

// ── Filters ───────────────────────────────────────────
function buildFilters() {
  const genres = ['all', ...new Set(songMap.map(s => s.genre))];
  const langs  = ['all', ...new Set(songMap.map(s => s.language))];

  const gc = document.getElementById('genreChips');
  genres.forEach(g => {
    const c = document.createElement('button');
    c.className  = 'chip' + (g === 'all' ? ' active' : '');
    c.textContent = g === 'all' ? '🎵 All' : (genreIcons[g] || '🎵') + ' ' + g;
    c.onclick = () => {
      activeGenre = g;
      updateChips(gc, c);
      renderSongList();
      buildStatsRow();
    };
    gc.appendChild(c);
  });

  const lc = document.getElementById('langChips');
  langs.forEach(l => {
    const c = document.createElement('button');
    c.className  = 'chip' + (l === 'all' ? ' active' : '');
    c.textContent = l === 'all' ? '🌐 All' : l;
    c.onclick = () => {
      activeLang = l;
      updateChips(lc, c);
      renderSongList();
      buildStatsRow();
    };
    lc.appendChild(c);
  });
}

function updateChips(container, activeChip) {
  container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  activeChip.classList.add('active');
}

// ── Genre Stats Row ───────────────────────────────────
function buildStatsRow() {
  const row    = document.getElementById('statsRow');
  row.innerHTML = '';
  const genres = [...new Set(songMap.map(s => s.genre))];

  genres.forEach(g => {
    const count = songMap.filter(s => s.genre === g).length;
    const card  = document.createElement('div');
    card.className = 'stat-card' + (activeGenre === g ? ' active' : '');
    card.innerHTML = `
      <div class="stat-icon">${genreIcons[g] || '🎵'}</div>
      <div class="stat-count">${count}</div>
      <div class="stat-name">${g}</div>`;
    card.onclick = () => {
      activeGenre = activeGenre === g ? 'all' : g;
      buildStatsRow();
      renderSongList();
      // Sync genre chips
      const gc = document.getElementById('genreChips');
      gc.querySelectorAll('.chip').forEach(c => {
        c.classList.toggle(
          'active',
          c.textContent.includes(activeGenre) ||
          (activeGenre === 'all' && c.textContent.includes('All'))
        );
      });
    };
    row.appendChild(card);
  });
}

// ── Filtering & Sorting ───────────────────────────────
function getFiltered() {
  let list = songMap.map((s, i) => ({ song: s, idx: i }));

  if (activeGenre !== 'all') list = list.filter(x => x.song.genre    === activeGenre);
  if (activeLang  !== 'all') list = list.filter(x => x.song.language === activeLang);

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(x =>
      x.song.name.toLowerCase().includes(q)        ||
      x.song.singer.toLowerCase().includes(q)      ||
      x.song.filmOrAlbum.toLowerCase().includes(q)
    );
  }

  if      (sortMode === 'name')      list.sort((a, b) => a.song.name.localeCompare(b.song.name));
  else if (sortMode === 'artist')    list.sort((a, b) => a.song.singer.localeCompare(b.song.singer));
  else if (sortMode === 'year-desc') list.sort((a, b) => b.song.year - a.song.year);
  else if (sortMode === 'year-asc')  list.sort((a, b) => a.song.year - b.song.year);

  return list;
}

// ── Render Song List ──────────────────────────────────
function renderSongList() {
  const ul      = document.getElementById('songList');
  ul.innerHTML  = '';
  const filtered = getFiltered();
  document.getElementById('visibleCount').textContent = filtered.length;

  if (!filtered.length) {
    ul.innerHTML = '<div class="no-results">No songs found 😕</div>';
    return;
  }

  filtered.forEach(({ song, idx }, listPos) => {
    const li = document.createElement('div');
    li.className =
      'song-item' +
      (idx === currentSongId   ? ' active' : '') +
      (playedSongs.has(idx)    ? ' played' : '');
    li.style.animationDelay = `${listPos * 15}ms`;

    const badge = langColors[song.language] || 'lang-english';
    li.innerHTML = `
      <span class="song-num">${listPos + 1}</span>
      <div class="song-info">
        <div class="name">${song.name}</div>
        <div class="artist">${song.singer}</div>
      </div>
      <span class="song-lang-badge ${badge}">${song.language.slice(0, 2).toUpperCase()}</span>`;
    li.onclick = () => loadSong(idx);
    ul.appendChild(li);
  });
}

// ── Load Song into Player ─────────────────────────────
function loadSong(songId) {
  currentSongId = songId;
  const song    = songMap[songId];

  // Show player content
  document.getElementById('playerEmpty').style.display   = 'none';
  document.getElementById('playerContent').style.display = 'block';
  document.getElementById('playerCard').classList.add('has-song');
  document.getElementById('playerSongName').textContent  = song.name;
  document.getElementById('audioPlayer').src             = `music/${songId + 1}.mp3`;

  // Meta tags
  const meta = document.getElementById('playerMeta');
  meta.innerHTML = `
    <span class="meta-tag meta-singer">🎤 ${song.singer}</span>
    <span class="meta-tag meta-album">💿 ${song.filmOrAlbum}</span>
    <span class="meta-tag meta-genre">${genreIcons[song.genre] || '🎵'} ${song.genre}</span>`;

  // Reset vinyl
  document.getElementById('vinylDisc').classList.remove('spinning');

  // Bottom bar
  document.getElementById('barSongName').textContent = song.name;
  document.getElementById('barArtist').textContent   = `${song.singer} · ${song.filmOrAlbum} · ${song.year}`;
  document.getElementById('audioBar').src            = `music/${songId + 1}.mp3`;

  renderSongList();
}

// ── Play / Pause ──────────────────────────────────────
function togglePlay() {
  const audio = document.getElementById('audioPlayer');
  const vinyl = document.getElementById('vinylDisc');

  if (audio.paused) {
    audio.play();
    vinyl.classList.add('spinning');
  } else {
    audio.pause();
    vinyl.classList.remove('spinning');
  }

  // First-time play tracking
  if (!playedSongs.has(currentSongId)) {
    playedSongs.add(currentSongId);
    document.getElementById('playedCount').textContent = playedSongs.size;
    calculateSuggestions(currentSongId);
    document.getElementById('suggestBtn').disabled = false;
    renderRecommendations();
    renderSongList();
  }
}

// ── Recommendation Engine ─────────────────────────────
function calculateMatchingPoints(s1, s2) {
  let pts = 0;
  if (s1.singer      === s2.singer)      pts += 10;
  if (s1.genre       === s2.genre)       pts += 7;
  if (s1.subGenre    === s2.subGenre)    pts += 7;
  if (s1.language    === s2.language)    pts += 5;
  if (s1.filmOrAlbum === s2.filmOrAlbum) pts += 5;
  if (s1.year        === s2.year)        pts += 5;
  else if (
    (s1.year < 2000 && s2.year < 2000) ||
    (s1.year >= 2000 && s1.year <= 2015 && s2.year >= 2000 && s2.year <= 2015) ||
    (s1.year > 2015  && s2.year > 2015)
  ) pts += 3;
  return pts;
}

function calculateSuggestions(songId) {
  const played       = songMap[songId];
  currentSuggestions = songMap
    .map((s, i) => ({ idx: i, pts: calculateMatchingPoints(played, s) }))
    .filter(x => x.idx !== songId && !playedSongs.has(x.idx))
    .sort((a, b) => b.pts - a.pts);
  currentSuggestionIndex = -1;
}

// ── Render Recommendations ────────────────────────────
function renderRecommendations() {
  const grid     = document.getElementById('recGrid');
  const subtitle = document.getElementById('recSubtitle');

  if (!currentSuggestions.length) {
    grid.innerHTML = '<div class="empty-recs"><div class="big">🎉</div><p>You\'ve heard them all!</p></div>';
    return;
  }

  const song = songMap[currentSongId];
  subtitle.textContent = `Because you played "${song.name}"`;

  const top   = currentSuggestions.slice(0, 8);
  grid.innerHTML = '';

  top.forEach(({ idx, pts }, i) => {
    const s    = songMap[idx];
    const card = document.createElement('div');
    card.className = 'rec-card';
    card.style.animationDelay = `${i * 40}ms`;

    const whyTags = [];
    if (s.singer      === song.singer)      whyTags.push('Same artist');
    if (s.genre       === song.genre)       whyTags.push('Same genre');
    if (s.subGenre    === song.subGenre)    whyTags.push('Similar vibe');
    if (s.language    === song.language)    whyTags.push('Same language');
    if (s.filmOrAlbum === song.filmOrAlbum) whyTags.push('Same album');

    card.innerHTML = `
      <div class="rec-score">${pts}pts</div>
      <div class="rec-genre-dot" style="background:${genreBg(s.genre)}">${genreIcons[s.genre] || '🎵'}</div>
      <div class="rec-name">${s.name}</div>
      <div class="rec-artist">${s.singer} · ${s.year}</div>
      <div class="rec-tags">
        ${whyTags.map(t => `<span class="rec-tag">${t}</span>`).join('')}
      </div>`;
    card.onclick = () => loadSong(idx);
    grid.appendChild(card);
  });
}

// ── Suggest Next ──────────────────────────────────────
function suggestNext() {
  if (!currentSuggestions.length) return;
  currentSuggestionIndex = (currentSuggestionIndex + 1) % currentSuggestions.length;
  loadSong(currentSuggestions[currentSuggestionIndex].idx);
}

// ── Event Listeners ───────────────────────────────────
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value.trim();
  renderSongList();
});

document.getElementById('sortSelect').addEventListener('change', e => {
  sortMode = e.target.value;
  renderSongList();
});

// Sync vinyl spin with both audio elements
['audioPlayer', 'audioBar'].forEach(id => {
  document.getElementById(id).addEventListener('play',  () => document.getElementById('vinylDisc').classList.add('spinning'));
  document.getElementById(id).addEventListener('pause', () => document.getElementById('vinylDisc').classList.remove('spinning'));
});

// ── Init ──────────────────────────────────────────────
function init() {
  buildFilters();
  buildStatsRow();
  renderSongList();
}

init();
