/**
 * St. Beatus-Höhlen Sitemap - Interactive JavaScript
 */

// Page Data Structure
const pageData = {
  startseite: {
    name: 'Startseite',
    pages: [
      { id: 'startseite', name: 'Startseite', type: 'Hauptseite' }
    ]
  },
  hoehlen: {
    name: 'Höhlen',
    pages: [
      { id: 'erlebniswelt', name: 'Erlebniswelt St. Beatus-Höhlen', type: 'Hauptseite' },
      { id: 'flimboweg', name: 'Flimboweg', type: 'Unterseite' },
      { id: 'thementouren', name: 'Thementouren', type: 'Unterseite' },
      { id: 'naturpark', name: 'Naturpark & Umgebung', type: 'Unterseite' },
      { id: 'museum-shop', name: 'Höhlenmuseum & Shop', type: 'Unterseite' },
      { id: 'familien', name: 'Familien mit Kindern', type: 'Zielgruppe' },
      { id: 'firmen-teams', name: 'Firmen & Teams', type: 'Zielgruppe' },
      { id: 'schulen', name: 'Schulen', type: 'Zielgruppe' },
      { id: 'vereine', name: 'Vereine', type: 'Zielgruppe' },
      { id: 'gruppen', name: 'Gruppen', type: 'Zielgruppe' },
      { id: 'reiseveranstalter', name: 'Reiseveranstalter', type: 'Zielgruppe' }
    ]
  },
  gastronomie: {
    name: 'Gastronomie',
    pages: [
      { id: 'restaurant', name: 'Restaurant Stein & Sein', type: 'Hauptseite' },
      { id: 'abendessen', name: 'Abendessen', type: 'Unterseite' },
      { id: 'sonntagsbrunch', name: 'Sonntagsbrunch am Fels', type: 'Unterseite' },
      { id: 'fondue', name: 'Fondue am Fels', type: 'Unterseite' },
      { id: 'imbiss', name: 'Imbiss am Höhleneingang', type: 'Unterseite' },
      { id: 'eventlocation', name: 'Eventlocation', type: 'Anlass' },
      { id: 'firmenfeier', name: 'Firmenfeier', type: 'Anlass' },
      { id: 'seminare', name: 'Seminare', type: 'Anlass' },
      { id: 'bankette', name: 'Bankette', type: 'Anlass' },
      { id: 'privatfeiern', name: 'Privatfeiern', type: 'Anlass' },
      { id: 'heiraten', name: 'Heiraten am Fels', type: 'Anlass' }
    ]
  },
  eventkalender: {
    name: 'Eventkalender',
    pages: [
      { id: 'eventkalender', name: 'Eventkalender', type: 'Hauptseite' },
      { id: 'eventdinner', name: 'Eventdinner', type: 'Unterseite' },
      { id: 'krimidinner', name: 'Krimidinner', type: 'Unterseite' }
    ]
  },
  infocenter: {
    name: 'Infocenter',
    pages: [
      { id: 'infocenter', name: 'Infocenter', type: 'Einzelseite' }
    ]
  }
};

// Default keyword data for all pages
const defaultBriefings = {
  'Startseite': {
    url: '/',
    hauptkeyword: 'Tropfsteinhöhle',
    weitereKeywords: ['tropfsteinhöhle schweiz', 'felsen höhle', 'grotte', 'höhle', 'berner oberland', 'interlaken', 'thun'],
    titleTag: 'Tropfsteinhöhle Schweiz | St. Beatus-Höhlen Thunersee',
    metaDescription: 'Tropfsteinhöhle im Berner Oberland ✓ Grotten & Wasserfälle ✓ Region Thun & Interlaken ✓ → Jetzt Höhle entdecken!'
  },
  'Erlebniswelt St. Beatus-Höhlen': {
    url: '/hoehlen/erlebniswelt',
    hauptkeyword: 'Höhlenerlebnis',
    weitereKeywords: ['höhlentour', 'schweiz', 'region thun', 'interlaken', 'thunersee'],
    titleTag: 'Höhlenerlebnis am Thunersee | St. Beatus-Höhlen',
    metaDescription: 'Höhlenerlebnis in der Schweiz ✓ 1 km Tropfsteinhöhle ✓ Ganzjährig 8–10 °C ✓ Region Thun & Interlaken ✓ → Jetzt Höhlentour buchen!'
  },
  'Flimboweg': {
    url: '/hoehlen/flimboweg',
    hauptkeyword: 'Kinderwanderung, Flimboweg St. Beatus-Höhlen',
    weitereKeywords: ['Kinderweg Höhle', 'Erlebnisweg Kinder Schweiz', 'Flimbo Drache', 'Familienwanderung Thunersee'],
    titleTag: 'Kinderwanderung | Flimboweg St. Beatus-Höhlen',
    metaDescription: 'Kinderwanderung entlang des Flimbowegs St. Beatus-Höhlen ✓ Einzigartiger Erlebnisweg ✓ → Jetzt entdecken!'
  },
  'Thementouren': {
    url: '/hoehlen/thementouren',
    hauptkeyword: 'Führungen Beatushöhlen, Thementouren',
    weitereKeywords: ['Führungen Beatushöhlen', 'Spezialführung Tropfsteinhöhle', 'Höhlenführung', 'Erlebnisführung Höhle'],
    titleTag: 'Führungen & Thementouren | St. Beatus-Höhlen',
    metaDescription: 'Führungen Beatushöhlen mit 3 Thementouren ✓ Spezialführung Tropfsteinhöhle ✓ Kulinarische Höhlenführung ✓ → Jetzt Tour anfragen!'
  },
  'Naturpark & Umgebung': {
    url: '/hoehlen/naturpark',
    hauptkeyword: 'Naturpark Beatushöhlen',
    weitereKeywords: ['Wandern Thunersee', 'Ausflugsziel Natur Bern', 'Beatenberg Wanderung', 'Thunersee Sehenswürdigkeiten'],
    titleTag: 'Naturpark Beatushöhlen | St. Beatus-Höhlen',
    metaDescription: 'Naturpark Beatushöhlen am Thunersee ✓ Wandern & Natur ✓ Ausflugsziel bei Bern & Interlaken ✓ → Jetzt Beatenberg entdecken!'
  },
  'Höhlenmuseum & Shop': {
    url: '/hoehlen/museum-shop',
    hauptkeyword: 'Höhlenmuseum Beatushöhlen, Shop',
    weitereKeywords: ['Museum Tropfsteinhöhle', 'Souvenirs Höhle Schweiz', 'Geologiemuseum Bern', 'Beatus Legende'],
    titleTag: 'Höhlenmuseum & Shop | St. Beatus-Höhlen',
    metaDescription: 'Höhlenmuseum Beatushöhlen mit Audio-Guide ✓ Geologie & Beatus-Legende ✓ Souvenirs & Shop ✓ → Jetzt Museum besuchen!'
  },
  'Familien mit Kindern': {
    url: '/familienspass',
    hauptkeyword: 'Höhle für Kinder',
    weitereKeywords: ['Ausflug Kinder Höhle Schweiz', 'Beatus Höhlen für Kinder und Familien', 'Familienausflug Thunersee', 'Kinderprogramm Höhle', 'Ausflugsziel Familien', 'Kinderfreundliche Höhle'],
    titleTag: 'Höhle für Kinder | St. Beatus-Höhlen',
    metaDescription: 'Kinderfreundliche Höhle am Thunersee ✓ Spielplatz & Flimboweg ✓ Familienausflug ab CHF 52 ✓ → Jetzt Familienausflug planen!'
  },
  'Firmen & Teams': {
    url: '/firmen-teams',
    hauptkeyword: 'Betriebsausflug Thunersee, Region interlaken, Firmenausflug Höhle Schweiz',
    weitereKeywords: ['Firmenausflug Bern / Interlaken', 'Corporate Event Höhle', 'Teamausflug Thunersee / Interlaken'],
    titleTag: 'Firmenausflug Höhle | St. Beatus-Höhlen Thunersee',
    metaDescription: 'Betriebsausflug am Thunersee ✓ Firmenausflug in die Höhle ✓ Teamausflug Region Interlaken ✓ → Jetzt Corporate Event anfragen!'
  },
  'Schulen': {
    url: '/schulen',
    hauptkeyword: 'Schulausflug Höhle Schweiz',
    weitereKeywords: ['Exkursion Geologie', 'Schulausflug Berner Oberland / Interlaken', 'Lehrplan Höhle', 'Bildungsausflug Natur', 'Ausflug Schulklassen'],
    titleTag: 'Schulausflug Höhle | St. Beatus-Höhlen Schweiz',
    metaDescription: 'Schulausflug in die Höhle ✓ Exkursion Geologie ✓ Lehrplan-gerecht ✓ Berner Oberland & Interlaken ✓ → Jetzt Schulausflug buchen!'
  },
  'Vereine': {
    url: '/vereine',
    hauptkeyword: 'Vereinsausflug Höhle',
    weitereKeywords: ['Ausflug Vereine Thunersee / Interlaken', 'Vereinsreise Bern', 'Ausflug Verein Schweiz'],
    titleTag: 'Vereinsausflug Höhle | St. Beatus-Höhlen',
    metaDescription: 'Vereinsausflug in die Höhle am Thunersee ✓ Geführte Touren ✓ Vereinsreise Bern & Interlaken ✓ → Jetzt Vereinsausflug planen!'
  },
  'Gruppen': {
    url: '/gruppen',
    hauptkeyword: 'Gruppenausflug Beatushöhlen, Thunersee',
    weitereKeywords: ['Ausflug Gruppe Thunersee / Interlaken', 'Führung Gruppe Schweiz', 'Gruppenreise Thunersee', 'Gruppenangebot Tropfsteinhöhle'],
    titleTag: 'Gruppenausflug | Beatushöhlen am Thunersee',
    metaDescription: 'Gruppenausflug Beatushöhlen ✓ Geführte Gruppentouren ✓ Gruppenangebot Tropfsteinhöhle ✓ → Jetzt Gruppenreise am Thunersee buchen!'
  },
  'Reiseveranstalter': {
    url: '/reiseveranstalter',
    hauptkeyword: 'Beatushöhlen Reiseveranstalter',
    weitereKeywords: ['Reisegruppen Höhle buchen'],
    titleTag: 'Reiseveranstalter | St. Beatus-Höhlen',
    metaDescription: 'Beatushöhlen für Reiseveranstalter ✓ Reisegruppen willkommen ✓ Attraktive Konditionen ✓ → Jetzt Gruppenangebot anfragen!'
  },
  'Restaurant Stein & Sein': {
    url: '/gastronomie/restaurant',
    hauptkeyword: 'Besonderes Restaurant Thunersee, Restaurant mit Aussicht',
    weitereKeywords: ['thunersee restaurant mit aussicht', 'aussichtsrestaurant thunersee', 'gut essen am thunersee', 'restaurant höhle'],
    titleTag: 'Restaurant mit Aussicht | Thunersee St. Beatus-Höhlen',
    metaDescription: 'Besonderes Restaurant am Thunersee mit Aussicht ✓ Regionale Küche ✓ Panoramablick ✓ → Gut essen am Thunersee!'
  },
  'Abendessen': {
    url: '/gastronomie/abendessen',
    hauptkeyword: 'Abendessen Thunersee Restaurant',
    weitereKeywords: ['Dinner Aussicht Thunersee / Interlaken', 'Abendessen romantisch Schweiz'],
    titleTag: 'Abendessen am Thunersee | St. Beatus-Höhlen',
    metaDescription: 'Abendessen im Thunersee-Restaurant mit Aussicht ✓ Romantisches Dinner ✓ Region Interlaken ✓ → Jetzt Tisch reservieren!'
  },
  'Sonntagsbrunch am Fels': {
    url: '/gastronomie/brunch',
    hauptkeyword: 'brunch thunersee / Interlaken Sonntagsbrunch',
    weitereKeywords: ['thunersee brunch', 'brunch auf thunersee', 'brunch in interlaken', 'sonntagsbrunch thunersee', 'brunch am thunersee', 'frühstück thunersee'],
    titleTag: 'Sonntagsbrunch am Thunersee | St. Beatus-Höhlen',
    metaDescription: 'Brunch am Thunersee mit Seeblick ✓ Jeden Sonntag Brunch-Buffet ✓ Region Interlaken ✓ → Jetzt Sonntagsbrunch reservieren!'
  },
  'Fondue am Fels': {
    url: '/gastronomie/fondue',
    hauptkeyword: 'Höhlenraclette, Fondue Thunersee / Interlaken',
    weitereKeywords: ['erlebnis raclette fondue', 'besondere atmosphäre'],
    titleTag: 'Höhlenraclette & Fondue | Thunersee St. Beatus-Höhlen',
    metaDescription: 'Höhlenraclette und Fondue am Thunersee ✓ Besondere Atmosphäre ✓ Erlebnis-Raclette ✓ → Jetzt Fondue-Abend reservieren!'
  },
  'Imbiss am Höhleneingang': {
    url: '/gastronomie/imbiss',
    hauptkeyword: 'Imbiss Beatushöhlen',
    weitereKeywords: ['Snacks Höhle Schweiz', 'Verpflegung Ausflug', 'Take-away Thunersee', 'Essen Höhleneingang'],
    titleTag: 'Imbiss Beatushöhlen | Snacks & Kiosk',
    metaDescription: 'Imbiss Beatushöhlen am Höhleneingang ✓ Snacks & Getränke ✓ Kiosk mit Souvenirs ✓ Feuerstelle im Park ✓ → Jetzt Ausflug planen!'
  },
  'Eventlocation': {
    url: '/eventlocation',
    hauptkeyword: 'Eventlocation Höhle Schweiz',
    weitereKeywords: ['Event Location Thunersee', 'Veranstaltungsort besonders', 'Location mieten Bern', 'Eventlocation Natur', 'höhle mieten'],
    titleTag: 'Eventlocation Höhle | St. Beatus-Höhlen Thunersee',
    metaDescription: 'Eventlocation in der Höhle am Thunersee ✓ Besonderer Veranstaltungsort ✓ Location mieten Bern ✓ → Jetzt Höhle mieten!'
  },
  'Firmenfeier': {
    url: '/firmenfeier',
    hauptkeyword: 'Firmenfeier Location Thunersee, Interlaken',
    weitereKeywords: ['Firmenevent Höhle', 'Weihnachtsfeier Firma Thunersee', 'Mitarbeiterfeier besonders', 'Corporate Event Schweiz'],
    titleTag: 'Firmenfeier Location | Thunersee & Interlaken',
    metaDescription: 'Firmenfeier am Thunersee in besonderer Location ✓ Firmenevent in der Höhle ✓ Region Interlaken ✓ → Jetzt Corporate Event planen!'
  },
  'Seminare': {
    url: '/seminare',
    hauptkeyword: 'Seminarraum Thunersee, Interlaken, Seminarlocation',
    weitereKeywords: ['Seminar Berner Oberland', 'Workshop Location Natur', 'Tagung Schweiz besonders', 'Konferenz Thunersee'],
    titleTag: 'Seminarraum Thunersee | St. Beatus-Höhlen',
    metaDescription: 'Seminarraum am Thunersee mit Seeblick ✓ Seminarlocation Interlaken ✓ Workshop in der Natur ✓ → Jetzt Tagung planen!'
  },
  'Bankette': {
    url: '/bankette',
    hauptkeyword: 'Bankett Thunersee, Interlaken',
    weitereKeywords: ['Bankett Location', 'Festessen Schweiz', 'Gala Dinner Location', 'Bankettsaal Aussicht'],
    titleTag: 'Bankett am Thunersee | St. Beatus-Höhlen',
    metaDescription: 'Bankett am Thunersee mit Seeblick ✓ Bankettsaal mit Aussicht ✓ Festessen & Gala Dinner ✓ → Jetzt Bankett-Location anfragen!'
  },
  'Privatfeiern': {
    url: '/privatfeiern',
    hauptkeyword: 'Privatfeier Location Thunersee',
    weitereKeywords: ['Geburtstag feiern Thunersee', 'Familienfeier Restaurant Interlaken', 'Jubiläum Location Schweiz', 'Private Event Höhle'],
    titleTag: 'Privatfeier Location | Thunersee St. Beatus-Höhlen',
    metaDescription: 'Privatfeier am Thunersee in besonderer Location ✓ Geburtstag & Jubiläum ✓ Familienfeier ✓ → Jetzt Private Event planen!'
  },
  'Heiraten am Fels': {
    url: '/heiraten',
    hauptkeyword: 'hochzeitslocation thunersee',
    weitereKeywords: ['Heiraten Thunersee', 'hochzeit thunersee', 'hochzeit besondere location', 'hochzeit interlaken', 'hochzeitslocation interlaken', 'polterabend interlaken'],
    titleTag: 'Hochzeitslocation Thunersee | St. Beatus-Höhlen',
    metaDescription: 'Hochzeitslocation am Thunersee ✓ Heiraten in besonderer Location ✓ Hochzeit Interlaken ✓ → Jetzt Traumhochzeit planen!'
  },
  'Eventkalender': {
    url: '/events',
    hauptkeyword: 'Kulinarik Events, Events Beatushöhlen',
    weitereKeywords: ['Veranstaltungen Thunersee', 'thunersee erlebnisse', 'Events Höhle Schweiz', 'Kalender Beatushöhlen', 'Was ist los Thunersee'],
    titleTag: 'Events & Kulinarik | St. Beatus-Höhlen',
    metaDescription: 'Events Beatushöhlen am Thunersee ✓ Kulinarik-Events ✓ Veranstaltungen & Erlebnisse ✓ → Was ist los am Thunersee?'
  },
  'Eventdinner': {
    url: '/events/eventdinner',
    hauptkeyword: 'Eventdinner Thunersee',
    weitereKeywords: ['Dinner Event Bern', 'Kulinarisches Erlebnis Schweiz', 'Themed Dinner Höhle', 'Gourmet Event'],
    titleTag: 'Eventdinner Thunersee | St. Beatus-Höhlen',
    metaDescription: 'Eventdinner am Thunersee in der Höhle ✓ Kulinarisches Erlebnis ✓ Themed Dinner ✓ → Jetzt Gourmet Event buchen!'
  },
  'Krimidinner': {
    url: '/events/krimidinner',
    hauptkeyword: 'krimidinner in der nähe',
    weitereKeywords: ['krimidinner thunersee', 'krimidinner interlaken', 'murder mystery dinner schweiz', 'krimi event'],
    titleTag: 'Krimidinner in der Nähe | Beatushöhlen Thunersee',
    metaDescription: 'Krimidinner in mystischer Höhlenkulisse ✓ Spannendes Krimispiel ✓ 4-Gang-Menü ✓ → Buchen Sie jetzt Ihr Krimidinner!'
  },
  'Infocenter': {
    url: '/hoehlen/infocenter',
    hauptkeyword: 'Besucherinformationen Beatushöhlen',
    weitereKeywords: ['Öffnungszeiten Beatushöhlen', 'Eintrittspreise Höhle', 'Anreise Thunersee', 'Tickets Beatushöhlen'],
    titleTag: 'Infocenter | Öffnungszeiten & Preise St. Beatus-Höhlen',
    metaDescription: 'Besucherinformationen St. Beatus-Höhlen ✓ Öffnungszeiten & Preise ✓ Anreise & Tickets ✓ → Jetzt Besuch planen!'
  }
};

// State
let briefingData = {};
let activeFilter = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadBriefingData();
  setupEventListeners();
});

// Load and parse SKILL.md
async function loadBriefingData() {
  // Step 1: Try to load SKILL.md (optional — board works without it)
  try {
    const response = await fetch('SKILL.md?t=' + Date.now());
    if (response.ok) {
      const text = await response.text();
      briefingData = parseSkillMd(text);
    }
  } catch (e) {
    console.warn('SKILL.md konnte nicht geladen werden (file:// Modus) — verwende defaultBriefings:', e.message);
  }

  // Step 2: Ensure all pages from pageData exist with defaults
  for (const category of Object.values(pageData)) {
    for (const page of category.pages) {
      if (!briefingData[page.name]) {
        const defaults = defaultBriefings[page.name] || {};
        briefingData[page.name] = {
          url: defaults.url || '',
          titleTag: defaults.titleTag || generateTitleTag(defaults.hauptkeyword || '', page.name),
          metaDescription: defaults.metaDescription || generateMetaDescription(defaults.hauptkeyword || '', defaults.weitereKeywords || [], page.name),
          _hasExplicitTitle: !!defaults.titleTag,
          _hasExplicitMeta: !!defaults.metaDescription,
          hauptkeyword: defaults.hauptkeyword || '',
          weitereKeywords: defaults.weitereKeywords || [],
          suchintention: defaults.suchintention || '',
          weitereInfos: ''
        };
      }
    }
  }

  // Step 3: Merge localStorage on top — user edits override defaults and SKILL.md
  // But explicit titles/metas from defaultBriefings are protected
  try {
    const saved = localStorage.getItem('beatushoehlen-briefings');
    if (saved) {
      const parsed = JSON.parse(saved);
      for (const [pageName, savedData] of Object.entries(parsed)) {
        if (briefingData[pageName]) {
          const defaults = defaultBriefings[pageName] || {};
          // Don't let localStorage overwrite explicit titles/metas from defaults
          if (defaults.titleTag && savedData.titleTag) delete savedData.titleTag;
          if (defaults.metaDescription && savedData.metaDescription) delete savedData.metaDescription;
          if (defaults.titleTag) savedData._hasExplicitTitle = true;
          if (defaults.metaDescription) savedData._hasExplicitMeta = true;
          Object.assign(briefingData[pageName], savedData);
        }
      }
    }
  } catch (e) {
    console.warn('localStorage load failed:', e);
  }

  // Step 4: Load content files from content/ folder
  try {
    await loadContentFiles();
  } catch (e) {
    console.warn('Content files konnten nicht geladen werden:', e.message);
  }

  // Step 5: Render
  renderSitemap();
  updateStats();
}

// Auto-generate Title Tag from Hauptkeyword (max 58 chars)
function generateTitleTag(hauptkeyword, pageName) {
  if (!hauptkeyword || hauptkeyword === '—') return pageName + ' | St. Beatus-Höhlen';
  const brand = ' | St. Beatus-Höhlen';
  const maxKeywordLength = 58 - brand.length;
  // Capitalize first letter of keyword
  const kw = hauptkeyword.charAt(0).toUpperCase() + hauptkeyword.slice(1);
  if (kw.length <= maxKeywordLength) {
    return kw + brand;
  }
  return kw.substring(0, maxKeywordLength) + brand;
}

// Auto-generate Meta Description from keywords and page content (max 160 chars)
function generateMetaDescription(hauptkeyword, weitereKeywords, pageName) {
  if (!hauptkeyword || hauptkeyword === '—') return '';
  const kw = hauptkeyword.charAt(0).toUpperCase() + hauptkeyword.slice(1);
  // Build meta: descriptive start, then checkmarks (no checkmark at beginning)
  const nk = (weitereKeywords || []).slice(0, 2);
  let meta = kw;
  nk.forEach(k => {
    const candidate = meta + ` ✓ ${k.charAt(0).toUpperCase() + k.slice(1)}`;
    if (candidate.length < 120) meta = candidate;
  });
  const cta = ' → Jetzt entdecken!';
  if ((meta + cta).length <= 160) {
    meta += cta;
  }
  return meta;
}

// Parse SKILL.md into structured data
function parseSkillMd(text) {
  const sections = {};
  const pageRegex = /^## (.+?)$/gm;
  const parts = text.split(/^## /gm);

  parts.forEach(part => {
    if (!part.trim()) return;

    const lines = part.split('\n');
    const pageName = lines[0].trim();
    if (!pageName || pageName.startsWith('#')) return;

    const content = lines.slice(1).join('\n');

    const hauptkeyword = extractSection(content, 'Hauptkeyword');
    const weitereKeywords = extractKeywordList(content, 'Weitere Keywords');

    // Use explicit Title/Meta if present in SKILL.md, otherwise auto-generate
    const explicitTitle = extractSection(content, 'Title Tag');
    const explicitMeta = extractSection(content, 'Meta Description');

    sections[pageName] = {
      url: extractSection(content, 'URL'),
      titleTag: explicitTitle || generateTitleTag(hauptkeyword, pageName),
      metaDescription: explicitMeta || generateMetaDescription(hauptkeyword, weitereKeywords, pageName),
      _hasExplicitTitle: !!explicitTitle,
      _hasExplicitMeta: !!explicitMeta,
      hauptkeyword: hauptkeyword,
      weitereKeywords: weitereKeywords,
      suchintention: extractSection(content, 'Suchintention'),
      weitereInfos: extractSection(content, 'Weitere Infos'),
    };
  });

  return sections;
}

// Load HTML content files from content-data.js bundle (works with file:// protocol)
// Falls back to fetch() if bundle not available (e.g. served via HTTP)
async function loadContentFiles() {
  const bundle = window.contentBundle || {};
  for (const category of Object.values(pageData)) {
    for (const page of category.pages) {
      if (bundle[page.id] && briefingData[page.name]) {
        briefingData[page.name].content = bundle[page.id];
      }
    }
  }
  // Fallback: try fetch if bundle was empty (HTTP server scenario)
  if (Object.keys(bundle).length === 0) {
    const fetches = [];
    for (const category of Object.values(pageData)) {
      for (const page of category.pages) {
        fetches.push((async () => {
          try {
            const resp = await fetch(`content/${page.id}.html?t=` + Date.now());
            if (resp.ok && briefingData[page.name]) {
              briefingData[page.name].content = await resp.text();
            }
          } catch (e) { /* file doesn't exist yet */ }
        })());
      }
    }
    await Promise.all(fetches);
  }
}

function extractSection(text, sectionName) {
  const regex = new RegExp(`### ${sectionName}\\r?\\n([\\s\\S]*?)(?=###|$)`, 'i');
  const match = text.match(regex);
  return match ? match[1].trim() : '';
}

function extractKeywordList(text, sectionName) {
  const section = extractSection(text, sectionName);
  if (!section) return [];

  return section.split('\n')
    .filter(line => line.trim().startsWith('-'))
    .map(line => line.replace(/^-\s*/, '').trim());
}

function extractHtmlContent(text) {
  const regex = /### Content\r?\n```html\r?\n([\s\S]*?)```/i;
  const match = text.match(regex);
  return match ? match[1].trim() : '';
}

// Render the sitemap
function renderSitemap() {
  const container = document.getElementById('sitemap-container');
  container.innerHTML = '';

  Object.entries(pageData).forEach(([categoryId, category]) => {
    const section = createCategorySection(categoryId, category);
    container.appendChild(section);
  });

  applyFilters();
}

function createCategorySection(categoryId, category) {
  const section = document.createElement('section');
  section.className = 'category-section';
  section.dataset.category = categoryId;

  const header = document.createElement('div');
  header.className = 'category-header';
  header.innerHTML = `
    <span class="toggle-icon">▼</span>
    <h2>${category.name}</h2>
    <span class="category-badge">${category.pages.length} Seiten</span>
  `;
  header.addEventListener('click', () => toggleCategory(section));

  const grid = document.createElement('div');
  grid.className = 'cards-grid';

  // Group pages by type for hierarchy display
  const hauptseiten = category.pages.filter(p => p.type === 'Hauptseite' || p.type === 'Einzelseite');
  const unterseiten = category.pages.filter(p => p.type === 'Unterseite');
  const zielgruppen = category.pages.filter(p => p.type === 'Zielgruppe' || p.type === 'Anlass');

  // Add Hauptseiten first (prominent)
  if (hauptseiten.length > 0) {
    const hauptGroup = document.createElement('div');
    hauptGroup.className = 'hierarchy-hauptseite';
    hauptseiten.forEach(page => {
      const card = createPageCard(categoryId, page);
      hauptGroup.appendChild(card);
    });
    grid.appendChild(hauptGroup);
  }

  // Add Unterseiten (medium, indented)
  if (unterseiten.length > 0) {
    const unterGroup = document.createElement('div');
    unterGroup.className = 'hierarchy-group';
    unterGroup.innerHTML = '<div class="hierarchy-group-title">Unterseiten</div>';
    const unterGrid = document.createElement('div');
    unterGrid.className = 'hierarchy-unterseiten';
    unterseiten.forEach(page => {
      const card = createPageCard(categoryId, page);
      unterGrid.appendChild(card);
    });
    unterGroup.appendChild(unterGrid);
    grid.appendChild(unterGroup);
  }

  // Add Zielgruppen/Anlässe (compact, more indented)
  if (zielgruppen.length > 0) {
    const zielGroup = document.createElement('div');
    zielGroup.className = 'hierarchy-group';
    const groupLabel = zielgruppen[0].type === 'Anlass' ? 'Ihr Anlass' : 'Zielgruppen';
    zielGroup.innerHTML = `<div class="hierarchy-group-title">${groupLabel}</div>`;
    const zielGrid = document.createElement('div');
    zielGrid.className = 'hierarchy-zielgruppen';
    zielgruppen.forEach(page => {
      const card = createPageCard(categoryId, page);
      zielGrid.appendChild(card);
    });
    zielGroup.appendChild(zielGrid);
    grid.appendChild(zielGroup);
  }

  section.appendChild(header);
  section.appendChild(grid);

  return section;
}

function createPageCard(categoryId, page) {
  const briefing = briefingData[page.name] || {};

  const card = document.createElement('article');
  card.className = 'page-card';
  card.dataset.category = categoryId;
  card.dataset.pageName = page.name.toLowerCase();
  card.dataset.pageId = page.id;
  card.dataset.type = page.type.toLowerCase().replace(/\s+/g, '');

  // Determine status based on content availability
  let status = briefing.content ? 'complete' : 'draft';

  card.innerHTML = `
    <div class="card-header">
      <div class="card-badges">
        <span class="badge badge-category">${getCategoryName(categoryId)}</span>
        <span class="badge badge-type">${page.type}</span>
      </div>
      <span class="badge badge-status ${status}">${getStatusLabel(status)}</span>
    </div>

    <h3 class="card-title">${page.name}</h3>

    <div class="card-meta">
      ${briefing.url ? `<span class="meta-url">${escapeHtml(briefing.url)}</span>` : ''}
    </div>


    <div class="card-actions">
      <button class="action-btn" onclick="downloadHtml('${page.id}', '${page.name}')">
        <span class="icon">📄</span> HTML Preview
      </button>
    </div>
  `;

  return card;
}

// Helper functions
function getCategoryName(categoryId) {
  return pageData[categoryId]?.name || categoryId;
}

function getStatusLabel(status) {
  const labels = {
    draft: 'Entwurf',
    review: 'Prüfung',
    complete: 'Fertig'
  };
  return labels[status] || status;
}

function formatSuchintention(text) {
  if (!text) return '—';

  const typeMatch = text.match(/\*\*Typ:\*\*\s*([^\n]+)/);
  const type = typeMatch ? typeMatch[1].trim() : '';
  const description = text.replace(/\*\*Typ:\*\*\s*[^\n]+\n?/, '').trim();

  return type
    ? `<span class="search-intent">${type}</span> ${description}`
    : text;
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function escapeAttr(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Toggle functions
function toggleCategory(section) {
  const header = section.querySelector('.category-header');
  const grid = section.querySelector('.cards-grid');

  header.classList.toggle('collapsed');
  grid.classList.toggle('collapsed');
}

function toggleSection(sectionElement) {
  sectionElement.classList.toggle('collapsed');
}

// Filter and Search
function setupEventListeners() {
  // Search
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    applyFilters();
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.category;
      applyFilters();
    });
  });

  // Modal close
  document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

  document.querySelector('.modal-close').addEventListener('click', closeModal);

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function applyFilters() {
  const cards = document.querySelectorAll('.page-card');
  const sections = document.querySelectorAll('.category-section');
  let visibleCount = 0;

  cards.forEach(card => {
    const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
    const matchesSearch = !searchQuery ||
      card.dataset.pageName.includes(searchQuery) ||
      card.textContent.toLowerCase().includes(searchQuery);

    const isVisible = matchesCategory && matchesSearch;
    card.style.display = isVisible ? '' : 'none';

    if (isVisible) visibleCount++;
  });

  // Hide empty sections
  sections.forEach(section => {
    const visibleCards = section.querySelectorAll('.page-card:not([style*="display: none"])');
    section.style.display = visibleCards.length > 0 ? '' : 'none';
  });

  // Update visible count
  document.getElementById('visible-count').textContent = visibleCount;

  // Show no results message
  const noResults = document.querySelector('.no-results');
  if (visibleCount === 0) {
    if (!noResults) {
      const msg = document.createElement('div');
      msg.className = 'no-results';
      msg.innerHTML = `
        <h3>Keine Ergebnisse</h3>
        <p>Versuchen Sie eine andere Suche oder wählen Sie eine andere Kategorie.</p>
      `;
      document.getElementById('sitemap-container').appendChild(msg);
    }
  } else if (noResults) {
    noResults.remove();
  }
}

function updateStats() {
  const totalPages = Object.values(pageData).reduce((sum, cat) => sum + cat.pages.length, 0);
  document.getElementById('total-count').textContent = totalPages;
  document.getElementById('visible-count').textContent = totalPages;
}

// Download functions
function downloadHtml(pageId, pageName) {
  const briefing = briefingData[pageName] || {};

  const htmlContent = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${briefing.titleTag || pageName + ' | St. Beatus-Höhlen'}</title>
  <meta name="description" content="${briefing.metaDescription || ''}">
  <meta name="keywords" content="${briefing.weitereKeywords?.join(', ') || ''}">
  <base href="https://www.beatushoehlen.swiss" target="_blank">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Figtree:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --color-primary-dark: #001C24;
      --color-primary-teal: #0D4A5A;
      --color-accent-gold: #D4A853;
      --color-accent-cyan: #4ECDC4;
      --color-bg-light: #F5F7F8;
      --color-text-muted: #5A7A82;
      --color-border: #E2E8F0;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Figtree', sans-serif; font-size: 16px; line-height: 1.6; color: #333; }
    img { max-width: 100%; height: auto; }

    /* Hero */
    .hero { min-height: 70vh; background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary-teal) 100%); display: flex; align-items: center; justify-content: center; text-align: center; color: white; padding: 40px; background-size: cover; background-position: center; position: relative; }
    .hero::before { display: none; }
    .hero-background { position: absolute; inset: 0; }
    .hero-background img { width: 100%; height: 100%; object-fit: cover; }
    .hero-overlay { position: absolute; inset: 0; background: rgba(0,28,36,0.6); }
    .hero-content { position: relative; z-index: 1; max-width: 800px; }
    .hero-title, .headline-hero { font-family: 'Caveat', cursive; font-size: 64px; line-height: 1.1; margin-bottom: 20px; color: white; }
    .hero-subtitle { font-size: 20px; opacity: 0.9; margin-bottom: 30px; }
    .hero-cta, .hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

    /* Sections */
    .section { padding: 80px 20px; }
    .section-dark, .section--dark { background: var(--color-primary-dark); color: white; }
    .section-light, .section--light { background: var(--color-bg-light); }
    .section--feature { padding: 80px 20px; background: white; }
    .section--cta { padding: 60px 20px; }
    .container { max-width: 1200px; margin: 0 auto; }
    .container--narrow { max-width: 800px; }
    .text-center { text-align: center; }
    .text-muted { color: var(--color-text-muted); }

    /* Section Headers */
    .section-header { text-align: center; margin-bottom: 48px; }
    .section-title { font-size: 36px; font-weight: 600; margin-bottom: 16px; }
    .section-subtitle, .section-tagline { font-size: 18px; color: var(--color-text-muted); max-width: 700px; margin: 4px auto 24px; font-style: italic; }
    .section-dark .section-subtitle, .section--dark .section-subtitle,
    .section-dark .section-tagline, .section--dark .section-tagline { color: rgba(255,255,255,0.8); }
    .lead-text { font-size: 18px; line-height: 1.8; color: #444; }

    /* Buttons */
    .btn, .btn-primary, .btn-secondary, .btn-ghost, .btn-outline { display: inline-block; padding: 12px 28px; border-radius: 9999px; font-weight: 500; text-decoration: none; transition: all 0.2s; cursor: pointer; border: none; font-size: 16px; }
    .btn-primary { background: var(--color-accent-gold); color: var(--color-primary-dark) !important; font-weight: 600; }
    .btn-primary:hover { background: #c49943; color: var(--color-primary-dark) !important; }
    .btn-secondary, .btn-outline { background: transparent; color: white !important; border: 2px solid white; }
    .btn-secondary:hover, .btn-outline:hover { background: white; color: var(--color-primary-dark) !important; }
    .section--light .btn-secondary, .section--light .btn-outline { color: var(--color-primary-dark) !important; border-color: var(--color-primary-dark); }
    .section--light .btn-secondary:hover, .section--light .btn-outline:hover { background: var(--color-primary-dark); color: white !important; }
    .btn-ghost { background: transparent; color: var(--color-primary-teal); padding: 8px 0; }
    .btn-ghost:hover { color: var(--color-accent-gold); }
    .section--dark .btn-ghost, .section-dark .btn-ghost { color: var(--color-accent-gold); }
    .section--dark .btn-ghost:hover, .section-dark .btn-ghost:hover { color: #E8C068; }
    .section--dark a, .section-dark a { color: var(--color-accent-gold); }
    .section--dark .text-muted, .section-dark .text-muted { color: rgba(255,255,255,0.6); }
    .section--dark p, .section-dark p { color: #C8D4D8; }
    .section--dark .section-title, .section-dark .section-title { color: white; }
    .section--dark li, .section-dark li { color: #C8D4D8; }
    .btn-lg { padding: 16px 36px; font-size: 18px; }
    .cta-group { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

    /* Grid System */
    .grid { display: grid; gap: 32px; }
    .grid--2 { grid-template-columns: 1fr; }
    .grid--3 { grid-template-columns: 1fr; }
    .grid--4 { grid-template-columns: repeat(2, 1fr); }
    .component-grid, .info-grid, .card-grid { display: grid; gap: 24px; }
    @media (min-width: 768px) {
      .grid--2 { grid-template-columns: repeat(2, 1fr); }
      .grid--3 { grid-template-columns: repeat(3, 1fr); }
      .grid--4 { grid-template-columns: repeat(4, 1fr); }
      .component-grid, .card-grid { grid-template-columns: repeat(3, 1fr); }
      .info-grid { grid-template-columns: repeat(4, 1fr); }
    }

    /* Cards */
    .card, .feature-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .card-image { width: 100%; height: 200px; object-fit: cover; background: #ddd; }
    .card-body, .card-content { padding: 24px; }
    .card-title { font-size: 20px; font-weight: 600; margin-bottom: 12px; color: var(--color-primary-dark); }
    .card-text { color: #3A5A62; margin-bottom: 16px; line-height: 1.5; }
    .section--dark .card-title { color: var(--color-primary-dark); }
    .section--dark .card-text { color: #3A5A62; }
    .section--dark .card p, .section--dark .card li, .section--dark .card strong, .section--dark .card-body { color: #3A5A62; }

    /* Teaser Cards */
    .teaser-card { display: block; text-decoration: none; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: transform 0.2s, box-shadow 0.2s; }
    .teaser-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
    .teaser-image { width: 100%; height: 160px; object-fit: cover; background: #ddd; }
    .teaser-title { font-size: 18px; font-weight: 600; padding: 16px 16px 4px; color: var(--color-primary-dark) !important; }
    .teaser-text { font-size: 14px; padding: 0 16px 16px; color: #3A5A62 !important; line-height: 1.5; }

    /* Info Cards & Fact Boxes */
    .info-card { background: white; padding: 24px; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
    .info-card .icon, .info-icon { font-size: 32px; display: block; margin-bottom: 12px; }
    .info-card h4, .info-title { font-size: 18px; margin-bottom: 8px; }
    .info-card p, .info-detail { color: var(--color-text-muted); font-size: 14px; }
    .info-value { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
    .fact-box { background: rgba(255,255,255,0.08); padding: 24px; border-radius: 12px; text-align: center; }
    .section--dark .fact-box { border: 1px solid rgba(255,255,255,0.15); }
    .fact-icon { font-size: 28px; display: block; margin-bottom: 8px; }
    .fact-value { font-size: 28px; font-weight: 700; display: block; margin-bottom: 4px; }
    .fact-label { font-size: 14px; color: rgba(255,255,255,0.7); display: block; }

    /* Feature Section */
    .feature-image { overflow: hidden; border-radius: 12px; }
    .feature-image img { width: 100%; border-radius: 12px; display: block; }
    .feature-image .img-placeholder { border-radius: 12px; min-height: 300px; }
    .feature-content { display: flex; flex-direction: column; justify-content: center; gap: 8px; }

    /* Highlight & Tip Boxes */
    .highlight-box { background: rgba(13, 74, 90, 0.05); padding: 24px; border-radius: 12px; }
    .highlight-box h4 { color: var(--color-primary-teal); margin-bottom: 16px; }
    .tip-box { background: rgba(212, 168, 83, 0.1); border: 2px solid var(--color-accent-gold); border-radius: 16px; padding: 32px; }
    .tip-box h3 { color: var(--color-accent-gold); margin-bottom: 16px; }
    .section--dark .tip-box p { color: #C8D4D8; }

    /* FAQ */
    .faq-accordion { max-width: 800px; margin: 0 auto; }
    .faq-item { margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; }
    .faq-question { cursor: pointer; font-weight: 600; padding: 16px 20px; color: var(--color-primary-dark); }
    .section--dark .faq-question, .section-dark .faq-question { color: #E8F0F2; background: rgba(13, 74, 90, 0.3); }
    .section--light .faq-question, .section-light .faq-question { background: #F5F7F8; color: var(--color-primary-teal); }
    .faq-answer { padding: 0 20px 16px; }
    .faq-answer p { color: var(--color-text-muted); line-height: 1.7; }
    .section--dark .faq-answer p, .section-dark .faq-answer p { color: #C8D4D8; }

    /* Typography */
    h1, h2, h3, h4, h5, h6 { font-family: 'Figtree', sans-serif; }
    a { color: var(--color-primary-teal); }
    table { width: 100%; border-collapse: collapse; }
    td { padding: 12px 0; border-bottom: 1px solid #eee; }
    ul, ol { padding-left: 24px; }
    li { margin-bottom: 8px; }
    details { margin-bottom: 16px; }
    summary { cursor: pointer; font-weight: 600; padding: 16px; background: rgba(255,255,255,0.1); border-radius: 8px; }
    blockquote { border-left: 3px solid var(--color-accent-gold); padding-left: 16px; font-style: italic; }
    .seo-header { background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary-teal) 100%); color: white; padding: 30px; margin-bottom: 0; }
    .seo-header h1 { font-size: 28px; margin: 0 0 20px 0; }
    .seo-header .seo-box { background: rgba(255,255,255,0.1); padding: 16px; border-radius: 8px; font-size: 14px; }
    .seo-header .seo-box p { margin: 0 0 8px 0; }
    .seo-header .seo-box p:last-child { margin: 0; }
    .seo-header .seo-label { color: var(--color-accent-gold); font-weight: 600; }
    .seo-header code { background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px; }
    /* Image Placeholders */
    .img-placeholder { background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary-teal) 100%); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px 24px; min-height: 200px; text-align: center; gap: 8px; }
    .img-placeholder-icon { font-size: 36px; opacity: 0.6; }
    .img-placeholder-text { color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.4; max-width: 280px; }
    .img-placeholder-file { color: rgba(255,255,255,0.4); font-size: 11px; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 8px; border-radius: 4px; }
    .card .img-placeholder, .teaser-card .img-placeholder { border-radius: 0; }
    .card .img-placeholder { height: 200px; min-height: 200px; }
    .teaser-card .img-placeholder { height: 160px; min-height: 160px; }
    .hero-background .img-placeholder { position: absolute; inset: 0; border-radius: 0; min-height: auto; z-index: 0; }
    .hero-background .img-placeholder .img-placeholder-icon,
    .hero-background .img-placeholder .img-placeholder-text { display: none; }
    .hero-background .img-placeholder .img-placeholder-file { position: absolute; bottom: 12px; right: 12px; opacity: 0.4; font-size: 10px; }
    /* Video Placeholder */
    .video-placeholder { position: relative; border-radius: 12px; overflow: hidden; margin: 24px 0; background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary-teal) 100%); aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; }
    .video-placeholder .img-placeholder { position: absolute; inset: 0; border-radius: 0; min-height: auto; }
    .video-thumb { width: 100%; height: 100%; object-fit: cover; }
    .video-play-icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 48px; color: white; background: rgba(0,0,0,0.5); width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 2; }
    .video-caption { position: absolute; bottom: 0; left: 0; right: 0; padding: 12px 16px; background: rgba(0,0,0,0.6); color: white; font-size: 14px; z-index: 2; }
    /* Image Gallery */
    .image-gallery { margin: 24px 0; }
    .gallery-item { margin: 0; }
    .gallery-item img { width: 100%; border-radius: 8px; }
    .gallery-item figcaption { font-size: 13px; color: var(--color-text-muted); margin-top: 8px; text-align: center; }
    .gallery-item .img-placeholder { min-height: 180px; border-radius: 8px; }
  </style>
</head>
<body>
  <!-- BACK NAV -->
  <nav style="position:sticky;top:0;z-index:9999;background:#001C24;padding:10px 20px;display:flex;align-items:center;gap:12px;box-shadow:0 2px 8px rgba(0,0,0,0.3);">
    <button onclick="window.close()" style="background:#D4A853;color:#001C24;border:none;padding:8px 20px;border-radius:6px;font-weight:600;cursor:pointer;font-size:14px;font-family:inherit;">← Zurück zur Übersicht</button>
    <span style="color:rgba(255,255,255,0.6);font-size:13px;font-family:'Figtree',sans-serif;">${pageName}</span>
  </nav>

  <!-- SEO HEADER -->
  <div class="seo-header">
    <h1>${pageName}</h1>
    <div class="seo-box">
      <p><span class="seo-label">URL:</span> <code>${briefing.url || '—'}</code></p>
      <p><span class="seo-label">Title Tag:</span> ${briefing.titleTag || '—'}</p>
      <p><span class="seo-label">Meta Description:</span> ${briefing.metaDescription || '—'}</p>
    </div>
  </div>

  <!-- CONTENT -->
  ${briefing.content || '<div class="section section--light"><div class="container container--narrow text-center"><p class="lead-text">Noch kein Content vorhanden – bitte via Prompt generieren.</p></div></div>'}

  <!-- Image Placeholder Script -->
  <script>
    document.querySelectorAll('img').forEach(img => {
      img.onerror = function() {
        if (this.dataset.placeholderDone) return;
        this.dataset.placeholderDone = 'true';
        this.style.display = 'none';
        const ph = document.createElement('div');
        ph.className = 'img-placeholder';
        ph.innerHTML = '<span class="img-placeholder-icon">&#128247;</span>'
          + '<span class="img-placeholder-text">' + (this.alt || 'Bild-Platzhalter') + '</span>'
          + '<span class="img-placeholder-file">' + this.src.split('/').pop() + '</span>';
        this.parentNode.insertBefore(ph, this);
      };
      if (img.complete && img.naturalHeight === 0 && img.src) img.onerror();
    });
  </script>
</body>
</html>`;

  // Create blob and open in new window for preview
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  // Open preview in new tab (no download)
  window.open(url, '_blank');
  showNotification('✓ HTML wird geöffnet');
}

async function downloadPdf(pageId, pageName) {
  const briefing = briefingData[pageName] || {};

  // Debug: Log what we're trying to generate
  console.log('Generating PDF for:', pageName, 'Data:', briefing);

  // Check if html2pdf is loaded
  if (typeof html2pdf === 'undefined') {
    const btn = event?.target?.closest('.action-btn');
    if (btn) {
      btn.innerHTML = '<span class="icon">⏳</span> Lädt...';
      btn.disabled = true;
    }
    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');
    } catch (e) {
      console.error('PDF library konnte nicht geladen werden:', e);
      if (btn) {
        btn.innerHTML = '<span class="icon">📥</span> PDF';
        btn.disabled = false;
      }
      return;
    }
    if (btn) {
      btn.innerHTML = '<span class="icon">📥</span> PDF';
      btn.disabled = false;
    }
  }

  // SIMPLE TEST: Just basic HTML to verify html2pdf works
  const simpleHtml = `
    <div style="padding: 40px; font-family: Arial, sans-serif;">
      <h1 style="color: #001C24; font-size: 32px; margin-bottom: 20px;">${escapeHtml(pageName)}</h1>
      <hr style="border: 1px solid #ccc; margin-bottom: 20px;">
      <p style="font-size: 14px; color: #333;"><strong>URL:</strong> ${escapeHtml(briefing.url || '—')}</p>
      <p style="font-size: 14px; color: #333;"><strong>Title Tag:</strong> ${escapeHtml(briefing.titleTag || '—')}</p>
      <p style="font-size: 14px; color: #333;"><strong>Meta Description:</strong> ${escapeHtml(briefing.metaDescription || '—')}</p>
      <hr style="border: 1px solid #ccc; margin: 20px 0;">
      <h2 style="color: #0D4A5A; font-size: 20px;">Content</h2>
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px; margin-top: 10px;">
        ${briefing.content || '<p>Noch kein Content vorhanden – bitte via Prompt generieren.</p>'}
      </div>
      <hr style="border: 1px solid #ccc; margin: 20px 0;">
      <p style="font-size: 12px; color: #999;">Generiert am ${new Date().toLocaleDateString('de-CH')}</p>
    </div>
  `;

  // Create container
  const container = document.createElement('div');
  container.innerHTML = simpleHtml;
  container.style.cssText = 'position: fixed; left: 0; top: 0; width: 800px; background: white; z-index: 99999;';
  document.body.appendChild(container);

  // Debug: verify container has content
  console.log('Container HTML length:', container.innerHTML.length);
  console.log('Container first 500 chars:', container.innerHTML.substring(0, 500));

  // Wait for render
  await new Promise(resolve => setTimeout(resolve, 300));

  const opt = {
    margin: 10,
    filename: `${pageId}-preview.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  try {
    console.log('Starting PDF generation...');
    const pdfBlob = await html2pdf().set(opt).from(container).outputPdf('blob');
    console.log('PDF blob created, size:', pdfBlob.size);
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, '_blank');
    showNotification('✓ PDF wird geöffnet');
  } catch (e) {
    console.error('PDF Fehler:', e);
    showNotification('✗ PDF konnte nicht erstellt werden: ' + e.message);
  } finally {
    document.body.removeChild(container);
  }
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Modal functions
function openEditModal(pageName) {
  const briefing = briefingData[pageName] || {};
  const modal = document.querySelector('.modal-overlay');
  const modalTitle = modal.querySelector('.modal-header h2');
  const modalBody = modal.querySelector('.modal-body');
  const modalFooter = modal.querySelector('.modal-footer');

  modalTitle.textContent = `✏️ ${pageName}`;

  modalBody.innerHTML = `
    <div class="modal-content edit-form">
      <div class="form-row">
        <div class="form-group">
          <label>URL</label>
          <input type="text" id="edit-url" value="${briefing.url || ''}" placeholder="/pfad/zur/seite">
        </div>
      </div>

      <div class="form-row form-row--2col">
        <div class="form-group">
          <label>Hauptkeyword</label>
          <input type="text" id="edit-hauptkeyword" value="${briefing.hauptkeyword || ''}" placeholder="z.B. St. Beatus-Höhlen">
        </div>
        <div class="form-group">
          <label>Suchintention</label>
          <select id="edit-suchintention-type">
            <option value="">— Typ wählen —</option>
            <option value="Informational" ${briefing.suchintention?.includes('Informational') ? 'selected' : ''}>Informational</option>
            <option value="Navigational" ${briefing.suchintention?.includes('Navigational') ? 'selected' : ''}>Navigational</option>
            <option value="Commercial Investigation" ${briefing.suchintention?.includes('Commercial') ? 'selected' : ''}>Commercial Investigation</option>
            <option value="Transactional" ${briefing.suchintention?.includes('Transactional') ? 'selected' : ''}>Transactional</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Nebenkeywords <small>(kommagetrennt)</small></label>
          <input type="text" id="edit-keywords" value="${(briefing.weitereKeywords || []).join(', ')}" placeholder="Keyword 1, Keyword 2, Keyword 3">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Bemerkungen</label>
          <textarea id="edit-infos" rows="3" placeholder="Zusätzliche Informationen, Hinweise, Quellen...">${briefing.weitereInfos || ''}</textarea>
        </div>
      </div>

    </div>
  `;

  modalFooter.innerHTML = `
    <button class="action-btn" onclick="closeModal()">Abbrechen</button>
    <button class="action-btn save-btn" onclick="saveBriefing('${pageName}')">💾 Speichern</button>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Update character count
function updateCharCount(inputId, counterId, max) {
  const input = document.getElementById(inputId);
  const counter = document.getElementById(counterId);
  if (input && counter) {
    const len = input.value.length;
    counter.textContent = `(${len}/${max})`;
    counter.className = 'char-counter ' + (len > max ? 'error' : len > 0 ? 'ok' : '');
  }
}

// Save briefing to localStorage and update UI
function saveBriefing(pageName) {
  const existing = briefingData[pageName] || {};
  const hk = document.getElementById('edit-hauptkeyword').value.trim();
  const nk = document.getElementById('edit-keywords').value.split(',').map(k => k.trim()).filter(k => k);

  const updatedBriefing = {
    ...existing,  // Preserve titleTag, metaDescription, content, etc.
    url: document.getElementById('edit-url').value.trim(),
    hauptkeyword: hk,
    weitereKeywords: nk,
    suchintention: document.getElementById('edit-suchintention-type').value || '',
    weitereInfos: document.getElementById('edit-infos').value.trim(),
  };

  // Regenerate Title/Meta from keywords if no explicit values from SKILL.md
  if (hk && hk !== '—') {
    if (!existing._hasExplicitTitle) {
      updatedBriefing.titleTag = generateTitleTag(hk, pageName);
    }
    if (!existing._hasExplicitMeta) {
      updatedBriefing.metaDescription = generateMetaDescription(hk, nk, pageName);
    }
  }

  // Update in memory
  briefingData[pageName] = updatedBriefing;

  // Save to localStorage
  saveToLocalStorage();

  // Re-render the sitemap
  renderSitemap();

  // Close modal
  closeModal();

  // Show success message
  showNotification('✓ Briefing gespeichert');
}

// Save inline field change from card
function saveInlineField(element) {
  const pageName = element.dataset.page;
  const field = element.dataset.field;
  const value = element.value.trim();

  if (!briefingData[pageName]) {
    briefingData[pageName] = {};
  }

  if (field === 'weitereKeywords') {
    briefingData[pageName].weitereKeywords = value.split(',').map(k => k.trim()).filter(k => k);
  } else {
    briefingData[pageName][field] = value;
  }

  saveToLocalStorage();
  showNotification('✓ Gespeichert');
}

function formatSuchintentionForSave() {
  const type = document.getElementById('edit-suchintention-type').value;
  const desc = document.getElementById('edit-suchintention').value.trim();

  if (type && desc) {
    return `**Typ:** ${type}\n\n${desc}`;
  } else if (type) {
    return `**Typ:** ${type}`;
  } else if (desc) {
    return desc;
  }
  return '';
}

// Generate Claude Code Prompt
function generatePrompt(pageName) {
  const briefing = briefingData[pageName] || {};

  const keywords = (briefing.weitereKeywords || []).join(', ');
  const hauptkeyword = briefing.hauptkeyword || pageName;

  // Extract just the suchintention type (e.g. "Informational")
  const suchintentionType = (briefing.suchintention || '').replace(/\*\*Typ:\*\*\s*/g, '').split('\n')[0].trim();

  const prompt = `# Auftrag: SEO Content für St. Beatus-Höhlen

## Rolle
Du bist ein erfahrener SEO Content Spezialist. Du schreibst den besten deutschsprachigen Content für die St. Beatus-Höhlen Website (beatushoehlen.swiss).

## Vorgehen
1. Lies die SKILL.md – dort findest du alle wichtigen Infos zum Kunden – sowie die HTML-/Design-Vorgaben – Hinweis zu den Design Screenshots bitte beachten.
2. Lies die Mastefile.txt – sie enthält alle offiziellen Fakten (Preise, Zeiten, Angebote). Nur diese Fakten verwenden, nichts erfinden.
3. Erstelle den Content auf Basis von SKILL.md, Mastefile und diesem SEO Briefing.

Siehe Hinweis zur Mitbewerber-Analyse im SKILL File.

## Briefing: ${pageName}

| Feld | Wert |
|------|------|
| Seite | ${pageName} |
| URL | ${briefing.url || '/'} |
| Suchintention | ${suchintentionType || '[nicht definiert]'} |

### Keywords
- **Hauptkeyword:** ${hauptkeyword}
- **Nebenkeywords:** ${keywords || '[keine]'}

---

### Stil
Natürlicher, hochwertiger Text. Keywords organisch einbauen – kein Keyword-Stuffing. Formelle Anrede (Sie/Ihre).

## Output
Liefere den vollständigen HTML-Content für die Seite und mach ihn zugänglich unter HTML und PDF im Content Board.`;

  showPromptModal(prompt, pageName);
}

// Show Prompt Modal
function showPromptModal(prompt, pageName) {
  const modal = document.querySelector('.modal-overlay');
  const modalTitle = modal.querySelector('.modal-header h2');
  const modalBody = modal.querySelector('.modal-body');
  const modalFooter = modal.querySelector('.modal-footer');

  modalTitle.textContent = `🤖 Prompt: ${pageName}`;

  modalBody.innerHTML = `
    <div class="prompt-modal-content">
      <p class="prompt-hint">Prompt bearbeiten und in Claude Code einfügen:</p>
      <textarea class="prompt-textarea" id="prompt-output"></textarea>
    </div>
  `;

  // Set value via JS to avoid HTML escaping issues
  const textarea = document.getElementById('prompt-output');
  textarea.value = prompt;

  // Auto-size textarea to fit content
  textarea.style.height = 'auto';
  textarea.style.height = Math.max(400, textarea.scrollHeight + 20) + 'px';

  modalFooter.innerHTML = `
    <button class="action-btn" onclick="closeModal()">Schliessen</button>
    <button class="action-btn copy-btn" id="copy-prompt-btn" onclick="copyPromptToClipboard()">
      📋 In Zwischenablage kopieren
    </button>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus textarea for easy manual copy
  setTimeout(() => {
    if (textarea) textarea.focus();
  }, 100);
}

// Copy prompt to clipboard
async function copyPromptToClipboard() {
  const textarea = document.getElementById('prompt-output');
  const btn = document.getElementById('copy-prompt-btn');
  if (!textarea || !btn) return;

  try {
    await navigator.clipboard.writeText(textarea.value);
    btn.innerHTML = '✓ Kopiert!';
    btn.classList.add('copy-success');
    setTimeout(() => {
      btn.innerHTML = '📋 In Zwischenablage kopieren';
      btn.classList.remove('copy-success');
    }, 2000);
  } catch (e) {
    // Fallback: select text for manual copy
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    try {
      document.execCommand('copy');
      btn.innerHTML = '✓ Kopiert!';
      btn.classList.add('copy-success');
      setTimeout(() => {
        btn.innerHTML = '📋 In Zwischenablage kopieren';
        btn.classList.remove('copy-success');
      }, 2000);
    } catch (e2) {
      btn.innerHTML = '⚠ Bitte manuell kopieren (Ctrl+C)';
    }
  }
}

// Save briefing data to localStorage (user keyword edits persist across reloads)
function saveToLocalStorage() {
  try {
    localStorage.setItem('beatushoehlen-briefings', JSON.stringify(briefingData));
  } catch (e) {
    console.warn('localStorage save failed:', e);
  }
}

// Load from localStorage
function loadFromLocalStorage() {
  try {
    const saved = localStorage.getItem('beatushoehlen-briefings');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Smart merge: SKILL.md wins for non-empty values, localStorage fills gaps
      Object.keys(parsed).forEach(key => {
        const fromSkill = briefingData[key] || {};
        const fromLocal = parsed[key] || {};
        const merged = { ...fromLocal };
        // SKILL.md values override localStorage when non-empty
        Object.keys(fromSkill).forEach(field => {
          const val = fromSkill[field];
          if (Array.isArray(val) ? val.length > 0 : val) {
            merged[field] = val;
          }
        });
        briefingData[key] = merged;
      });
      return true;
    }
  } catch (e) {
    console.error('Fehler beim Laden:', e);
  }
  return false;
}

// Export all briefings as SKILL.md
function exportAllBriefings() {
  let markdown = `# St. Beatus-Höhlen Website Content Briefings

---

# GUIDELINES

---

## Tone of Voice

Der Tone of Voice der St. Beatus-Höhlen ist **ruhig, wertig und erlebnisorientiert**.
Er vermittelt Staunen, Natur und Zeitlosigkeit, ohne pathetisch oder kitschig zu wirken.

### Stilregeln
- Die Sprache soll **einladen, nicht erklären**
- Sie soll **Atmosphäre schaffen**, nicht informieren wie ein Museumstext
- Die **Natur und der Ort** stehen immer im Mittelpunkt
- Nicht die Geschichte des Ortes, sondern das **Erlebnis im Hier und Jetzt**

### Ansprache
- **Formelle Ansprache:** Sie / Ihre / Ihnen
- **Gendern:** Kundinnen und Kunden, Besucherinnen und Besucher

### SEO-Regeln für Title Tag & Meta Description

| Element | Max. Länge | Regeln |
|---------|------------|--------|
| **Title Tag** | 58 Zeichen | Hauptkeyword vorne, Brand hinten |
| **Meta Description** | 160 Zeichen | ✓ Häkchen für Fakten, → Pfeil für CTA |

---

`;

  // Group by category
  const categories = {
    'STARTSEITE': ['Startseite'],
    'HÖHLEN': ['Erlebniswelt St. Beatus-Höhlen', 'Flimboweg', 'Thementouren', 'Naturpark & Umgebung', 'Höhlenmuseum & Shop', 'Familien mit Kindern', 'Firmen & Teams', 'Schulen', 'Vereine', 'Gruppen', 'Reiseveranstalter'],
    'GASTRONOMIE': ['Restaurant Stein & Sein', 'Abendessen', 'Sonntagsbrunch am Fels', 'Fondue am Fels', 'Imbiss am Höhleneingang', 'Eventlocation', 'Firmenfeier', 'Seminare', 'Bankette', 'Privatfeiern', 'Heiraten am Fels'],
    'EVENTKALENDER': ['Eventkalender', 'Eventdinner', 'Krimidinner'],
    'INFOCENTER': ['Infocenter']
  };

  Object.entries(categories).forEach(([catName, pages]) => {
    markdown += `# ${catName}

---

`;
    pages.forEach(pageName => {
      const b = briefingData[pageName] || {};
      markdown += `## ${pageName}

### URL
\`${b.url || '/pfad/zur/seite'}\`

### Title Tag
${b.titleTag || '[Title Tag einfügen]'}

### Meta Description
${b.metaDescription || '[Meta Description einfügen]'}

### Hauptkeyword
${b.hauptkeyword || '[Hauptkeyword]'}

### Weitere Keywords
${(b.weitereKeywords || []).map(k => `- ${k}`).join('\n') || '- [Keyword 1]\n- [Keyword 2]'}

### Suchintention
${b.suchintention || '**Typ:** [Informational / Navigational / Transactional]\n\n[Beschreibung der Suchintention]'}

### Weitere Infos
${b.weitereInfos || '[Zusätzliche Informationen]'}

### Content
\`\`\`html
${b.content || '<!-- Content hier einfügen -->'}
\`\`\`

---

`;
    });
  });

  markdown += `# ENDE DES BRIEFINGS
`;

  downloadFile(markdown, 'SKILL.md', 'text/markdown');
  showNotification('✓ SKILL.md exportiert');
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #065f46;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 500;
    z-index: 9999;
    animation: slideIn 0.3s ease;
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Error handling
function showError(message) {
  const container = document.getElementById('sitemap-container');
  container.innerHTML = `
    <div class="no-results">
      <h3>Fehler</h3>
      <p>${message}</p>
    </div>
  `;
}

// Export for global access
window.toggleSection = toggleSection;
window.downloadHtml = downloadHtml;
window.downloadPdf = downloadPdf;
window.openEditModal = openEditModal;
window.saveBriefing = saveBriefing;
window.exportAllBriefings = exportAllBriefings;
window.updateCharCount = updateCharCount;
window.saveInlineField = saveInlineField;
window.escapeAttr = escapeAttr;
