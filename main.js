/* LonMusics Web 0.2 | Static, free-tier friendly, no tracking or server secrets. */
'use strict';
const ICONS = {
  house:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/>',
  search:'<circle cx="10.8" cy="10.8" r="7"/><path d="m16 16 5 5"/>',
  chart:'<path d="M3 20V12m6 8V6m6 14v-9m6 9V3"/><path d="M2 21h20"/>',
  library:'<path d="M4 3h4v18H4zM10 3h4v18h-4zM17 3l4-1 3 18-4 1z"/>',
  heart:'<path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8z"/>',
  folder:'<path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
  upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>',
  settings:'<path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  x:'<path d="M5 5l14 14M19 5 5 19"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  'arrow-left':'<path d="m14 5-7 7 7 7M7 12h14"/>',
  'arrow-right':'<path d="m10 5 7 7-7 7M17 12H3"/>',
  'sun-moon':'<path d="M12 3a6 6 0 0 0 9 7 9 9 0 1 1-9-7zM18 2v4m-2-2h4"/>',
  play:'<path d="m8 5 11 7-11 7z"/>',
  pause:'<path d="M7 5h4v14H7zM15 5h4v14h-4z"/>',
  'skip-back':'<path d="M5 5v14m15-14L8 12l12 7z"/>',
  'skip-forward':'<path d="M19 5v14M4 5l12 7-12 7z"/>',
  shuffle:'<path d="M4 5h3c5 0 5 14 10 14h3m-4-4 4 4-4 4M4 19h3c2.5 0 3.5-2.5 5-5m2-4c1.5-2.5 2.5-5 6-5m-4-4 4 4-4 4"/>',
  repeat:'<path d="m17 2 4 4-4 4M3 11V8a2 2 0 0 1 2-2h16m-14 16-4-4 4-4m14-1v3a2 2 0 0 1-2 2H3"/>',
  'repeat-one':'<path d="m17 2 4 4-4 4M3 11V8a2 2 0 0 1 2-2h16m-14 16-4-4 4-4m14-1v3a2 2 0 0 1-2 2H3M12 10l2-1v7"/>',
  volume:'<path d="M4 9v6h4l5 4V5L8 9zM17 9a5 5 0 0 1 0 6m2-9a9 9 0 0 1 0 12"/>',
  mute:'<path d="M4 9v6h4l5 4V5L8 9zM17 9l5 6m0-6-5 6"/>',
  'list-music':'<path d="M9 6h12M9 11h12M9 16h7M3 4v14c0 2 3 2 3 0V8H3"/>',
  music:'<path d="M9 18V5l12-2v13M9 6l12-2M9 18c0 2-1.8 3-4 3s-4-1-4-3 1.8-3 4-3 4 1 4 3zm12-2c0 2-1.8 3-4 3s-4-1-4-3 1.8-3 4-3 4 1 4 3z"/>',
  'more-horizontal':'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  check:'<path d="m4 12 5 5 11-11"/>',
  headphones:'<path d="M4 14v-3a8 8 0 0 1 16 0v3M3 15h4v6H5a2 2 0 0 1-2-2zm14 0h4v4a2 2 0 0 1-2 2h-2z"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
  external:'<path d="M13 4h7v7m0-7-9 9M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/>',
  playlist:'<path d="M3 6h13M3 11h13M3 16h8m6-1 5 3-5 3z"/>',
  'trash':'<path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14"/>',
  'cloud-off':'<path d="m3 3 18 18M20.5 16a5 5 0 0 0-4-8 6.5 6.5 0 0 0-12 4.5A4 4 0 0 0 6 20h10"/>',
  'arrow-up-right':'<path d="M7 17 17 7M8 7h9v9"/>',
  youtube:'<rect x=2 y=5 width=20 height=14 rx=4/><path d="m10 9 5 3-5 3z"/>',
  expand:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  radio:'<circle cx=12 cy=12 r=2/><path d="M7.8 7.8a6 6 0 0 0 0 8.4m8.4-8.4a6 6 0 0 1 0 8.4M4.5 4.5a10.6 10.6 0 0 0 0 15m15-15a10.6 10.6 0 0 1 0 15"/>',
  sparkles:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z"/>',
  disc:'<circle cx=12 cy=12 r=9/><circle cx=12 cy=12 r=2/><path d="M12 3a9 9 0 0 1 9 9"/>',
  link:'<path d="M10 13a5 5 0 0 0 7 .5l3-3a5 5 0 0 0-7-7l-2 2m3 5a5 5 0 0 0-7-.5l-3 3a5 5 0 0 0 7 7l2-2"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  microphone:'<rect x=9 y=2 width=6 height=12 rx=3/><path d="M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8"/>'
};
const icon = (name, cls='') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name]||ICONS.music}</svg>`;
const escapeHTML = v => String(v??'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeImage = str => {try {let u=new URL(str);return u.protocol==='https:'?u.href:''} catch{return ''}};
const formatTime = t => {const n=Math.max(0,Math.floor(Number(t)||0));return `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`};
const safeGet = (key,fallback) => {try{const x=JSON.parse(localStorage.getItem(key));return x===null?fallback:x}catch{return fallback}};
const safeSet = (key,value) => {try{localStorage.setItem(key,JSON.stringify(value))}catch{}};
const API='https://api.audius.co/v1';
const YOUTUBE_API='https://www.googleapis.com/youtube/v3';
const LRCLIB_API='https://lrclib.net/api/get';
const KEY='lonmusics_v01_';
const elements = {
  main:document.getElementById('mainContent'), audio:document.getElementById('audioElement'),
  seek:document.getElementById('seekBar'), volume:document.getElementById('volumeSlider'),
  search:document.getElementById('searchInput'), queue:document.getElementById('queuePanel'),
  modal:document.getElementById('modalRoot'), upload:document.getElementById('musicUpload')
};
const state = {
  view:'home',history:[],theme:safeGet(KEY+'theme','system'),
  online:[],results:[],query:'',loading:false,apiError:'',
  apiKey:safeGet(KEY+'apiKey',''),favorites:new Set(safeGet(KEY+'favorites',[])),
  recently:safeGet(KEY+'recent',[]),playlists:safeGet(KEY+'playlists',[]),
  savedTracks:safeGet(KEY+'trackCache',{}),tracks:new Map(),local:new Map(),
  queue:[],current:null,isPlaying:false,shuffle:false,repeat:'off',
  queueOpen:false,muted:false,searchSerial:0,requestCounter:0,
  listFilter:'all',searchSource:'all', youtubeResults:[],ytError:'',youtubeKey:safeGet(KEY+'ytKey',''),
  playCounts:safeGet(KEY+'counts',{}),manualQueue:[],radioEnabled:safeGet(KEY+'radio',true),
  radioPool:[],radioLoading:false,nowPlayingOpen:false,nowTab:'lyrics',lyrics:null,lyricsLoading:false,lyricsFor:null,
  ytRequest:0,searchLoading:false
};
for(const val of Object.values(state.savedTracks)) if(val&&val.id)state.tracks.set(val.id,val);
const nativeTheme = window.matchMedia('(prefers-color-scheme: dark)');
function applyTheme(){
 const setting=state.theme==='system'?(nativeTheme.matches?'dark':'light'):state.theme;
 document.documentElement.dataset.theme=setting;
 document.documentElement.style.colorScheme=setting;
 document.querySelector('[data-action="theme"]')?.setAttribute('title',`Giao diện: ${state.theme==='system'?'Theo hệ thống':state.theme==='dark'?'Tối':'Sáng'}`);
}
function putIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{const k=el.getAttribute('data-icon');el.innerHTML=icon(k)});}
function toast(message){const el=document.createElement('div');el.className='toast';el.textContent=message;document.getElementById('toasts').append(el);setTimeout(()=>el.remove(),4200)}
function artwork(track){const u=safeImage(track?.artwork);return u?`<img src="${escapeHTML(u)}" loading="lazy" alt="" onerror="this.remove()">`:icon('music')}
function sourceLabel(track){return track?.source==='youtube'?'YouTube':track?.source==='youtube_playlist'?'YouTube playlist':track?.source==='local'?'Trên máy':'Audius'}
function artCard(track){return `<div class="album-card" tabindex="0" role="button" data-action="play-track" data-id="${escapeHTML(track.id)}">
 <div class="artwork">${artwork(track)}<span class="card-play">${icon('play')}</span>${track.source?.startsWith('youtube')?`<span class="youtube-mark">${icon('youtube')}</span>`:''}</div>
 <div class="card-head"><strong title="${escapeHTML(track.title)}">${escapeHTML(track.title)}</strong><span class="card-description">${escapeHTML(track.artist)} · ${sourceLabel(track)}</span></div></div>`}
function trackRow(track,idx){return `<div class="track-row ${state.current===track.id?'is-playing':''}" role="button" tabindex="0" data-action="play-track" data-id="${escapeHTML(track.id)}">
 <span class="track-num">${state.current===track.id&&state.isPlaying?icon('music'):idx+1}</span><div class="track-thumb">${artwork(track)}</div>
 <div class="track-name"><strong title="${escapeHTML(track.title)}">${escapeHTML(track.title)}</strong><span>${escapeHTML(sourceLabel(track))}${track.genre&&track.source==='audius'?' · '+escapeHTML(track.genre):''}</span></div>
 <span class="row-artist">${escapeHTML(track.artist)}</span><time class="track-duration">${track.duration?formatTime(track.duration):'—'}</time>
 <button class="track-more" type="button" data-action="track-options" data-id="${escapeHTML(track.id)}" aria-label="Tùy chọn bài hát">${icon('more-horizontal')}</button></div>`}
function gridSection(title,tracks,sub='',action=null){if(!tracks.length)return '';
 return `<section class="section"><div class="section-heading"><div><h2 class="section-title">${escapeHTML(title)}</h2>${sub?`<p class="section-subtitle">${escapeHTML(sub)}</p>`:''}</div>${action?`<button class="text-link" data-view="${escapeHTML(action)}">Xem tất cả ${icon('arrow-right')}</button>`:''}</div><div class="album-grid">${tracks.slice(0,6).map(artCard).join('')}</div></section>`}
function emptyState(title,description,action='import',button='Thêm nhạc từ máy'){
 return `<div class="empty-state"><div class="empty-icon">${icon('headphones')}</div><h3>${escapeHTML(title)}</h3><p>${escapeHTML(description)}</p><button class="btn btn-primary" data-action="${escapeHTML(action)}">${icon('plus')} ${escapeHTML(button)}</button></div>`}
function categoryTiles(){const categories=['Chill','Lo-Fi','Acoustic','Electronic','Pop','Jazz','Ambient','Indie'];return `<div class="genre-grid">${categories.map((g,i)=>`<button class="genre-card" type="button" data-action="genre" data-genre="${escapeHTML(g)}"><span>${escapeHTML(g)}</span><div class="genre-shape"></div></button>`).join('')}</div>`}
function personalizedTracks(){
 const ids=[...state.favorites,...state.recently,...Object.entries(state.playCounts).sort((a,b)=>b[1]-a[1]).map(x=>x[0])];
 return [...new Set(ids)].map(getTrack).filter(t=>t&&t.source!=='youtube_playlist');
}
function renderHome(){
 const familiar=personalizedTracks(), top=familiar[0]||state.online[0]||[...state.local.values()][0]||null;
 const recs=suggestTracks(top,12); const online=state.online;
 const heroTiles=(familiar.length?familiar:recs.length?recs:online).slice(0,3);
 const heroCover=heroTiles.map((t,i)=>`<button class="personal-mini mini-${i}" type="button" data-action="play-track" data-id="${escapeHTML(t.id)}" aria-label="Phát ${escapeHTML(t.title)}">${artwork(t)}<span>${escapeHTML(t.title)}</span></button>`).join('');
 const hasPersonal=!!familiar.length;
 let onlineView='';
 if(state.loading&&!online.length)onlineView='<div class="info-card">Đang tải giai điệu từ Audius…</div>';
 else if(state.apiError&&!online.length)onlineView=`<div class="info-card status-box"><div class="status-icon">${icon('cloud-off')}</div><div><strong>Chưa tải được Audius</strong><div>${escapeHTML(state.apiError)}. Em vẫn nghe được nhạc đã thêm, hoặc mở YouTube bằng link.</div><div class="info-actions"><button class="btn btn-outline" data-action="reload">Thử lại</button><button class="btn btn-outline" data-view="youtube">Mở YouTube</button></div></div></div>`;
 else onlineView=gridSection('Khám phá từ Audius',online.slice(0,6),'Nhạc trực tuyến miễn phí','trending');
 return `<div class="container">
 <section class="myhero"><div class="myhero-text"><span class="hero-kicker">${icon('sparkles')} LONMUSICS · DÀNH CHO EM</span>
 <h1>Nhạc của tôi<span class="gold-dot">.</span></h1>
 <p>${hasPersonal?'Từ những bài em thích và hay nghe, LonMusics dần chọn những giai điệu hợp gu hơn.':'Không gian âm nhạc riêng của em. Nghe vài bài, thả tim, và LonMusics sẽ hiểu gu của em hơn.'}</p>
 <div class="myhero-stats"><span>${state.favorites.size} bài yêu thích</span><span>${state.recently.length} bài đã nghe</span></div>
 <div class="hero-buttons"><button class="btn btn-primary" data-action="play-mine">${icon('play')} ${hasPersonal?'Phát mix của tôi':'Bắt đầu nghe'}</button><button class="btn btn-outline" data-view="library">${icon('library')} Thư viện của tôi</button></div>
 </div><div class="myhero-visual ${heroTiles.length?'has-covers':''}">${heroCover||`<div class="empty-vinyl">${icon('music')}</div>`}</div></section>
 ${gridSection('Nghe tiếp nào',state.recently.map(getTrack).filter(Boolean).slice(0,6),'Những bài em vừa mở','recent')}
 ${gridSection('Dành cho em',recs.slice(0,6),'Gợi ý dựa trên ca sĩ, thể loại và lịch sử nghe','trending')}
 ${onlineView}
 <section class="section"><div class="section-heading"><div><h2 class="section-title">YouTube trong LonMusics</h2><p class="section-subtitle">Tìm trực tiếp khi có API Key, hoặc dán link để mở trình phát chính thức</p></div><button class="text-link" data-view="youtube">Mở YouTube ${icon('arrow-right')}</button></div><div class="youtube-teaser"><div class="yt-badge">${icon('youtube')}</div><div><strong>Nhạc em thích, thêm một nguồn để khám phá</strong><p>Video YouTube luôn hiển thị khi phát và giữ nguyên điều khiển của YouTube.</p></div><button class="btn btn-outline" data-view="youtube">Dán link hoặc tìm nhạc</button></div></section>
 ${gridSection('Nhạc trên máy',[...state.local.values()].slice(0,6),'FLAC, MP3, WAV và các định dạng trình duyệt hỗ trợ','local')}
 <section class="section"><div class="section-heading"><div><h2 class="section-title">Theo tâm trạng</h2><p class="section-subtitle">Bắt đầu bằng một thể loại</p></div></div>${categoryTiles()}</section>
 </div>`
}
function trackList(tracks){return tracks.length?`<div class="list-tracks">${tracks.map(trackRow).join('')}</div>`:''}
function youtubeLinkBox(){return `<form class="youtube-link-form" id="youtubeLinkForm"><span>${icon('link')}</span><input id="youtubeLinkInput" type="url" placeholder="Dán link video hoặc playlist YouTube…" aria-label="Link video hoặc playlist YouTube" required><button class="btn btn-primary" type="submit">Mở video</button></form>`}
function renderYoutube(){return `<div class="container"><div class="page-top"><div><span class="eyebrow">YOUTUBE · OFFICIAL PLAYER</span><h1 class="page-title">YouTube trên LonMusics</h1><p class="page-sub">Nghe và xem video bằng trình phát YouTube chính thức ngay trong website.</p></div></div>
 <div class="source-explainer"><div class="yt-badge">${icon('youtube')}</div><div><h3>Dán link, mở ngay. Không cần API Key.</h3><p>Hỗ trợ link YouTube, YouTube Music, Shorts và playlist công khai cho phép nhúng.</p></div></div>
 ${youtubeLinkBox()}
 <div class="info-card" style="margin-top:18px"><strong>Tìm kiếm YouTube ngay trong thanh tìm kiếm LonMusics?</strong><br>${state.youtubeKey?'Đã có API Key trên thiết bị. Nhập tên bài hát ở thanh tìm kiếm phía trên để tìm cả Audius và YouTube.':'Cần YouTube Data API Key miễn phí của Google. Vào Cài đặt để thêm key; không cần key nếu chỉ dán link.'}<div class="info-actions"><button class="btn btn-outline" data-action="settings">${icon('settings')} Cài đặt API</button><a class="btn btn-outline" href="https://console.cloud.google.com/apis/library/youtube.googleapis.com" target="_blank" rel="noopener noreferrer">Cách bật YouTube API ${icon('external')}</a></div></div>
 ${gridSection('Đã mở gần đây',state.recently.map(getTrack).filter(t=>t&&t.source?.startsWith('youtube')),'Video và playlist đã phát')}
 </div>`}
function renderSearch(){const q=state.query.trim(),results=state.results;
 const tabs=[['all','Tất cả'],['audius','Audius'],['youtube','YouTube'],['local','Trên máy']];
 const selected=results.filter(t=>state.searchSource==='all'||(state.searchSource==='youtube'?t.source?.startsWith('youtube'):t.source===state.searchSource));
 return `<div class="container"><div class="page-top"><div><span class="eyebrow">DISCOVER</span><h1 class="page-title">${q?'Tìm thấy giai điệu':'Tìm nhạc của em'}</h1><p class="page-sub">${q?'Tìm “'+escapeHTML(q)+'” trên những nguồn có thể truy cập':'Tìm bài hát, nghệ sĩ, playlist hoặc dán link YouTube'}</p></div></div>
 ${youtubeLinkBox()}
 ${q?`<div class="chip-row">${tabs.map(([k,v])=>`<button class="chip ${state.searchSource===k?'active':''}" data-action="search-filter" data-filter="${k}">${v}${k==='youtube'&&state.youtubeResults.length?' ('+state.youtubeResults.length+')':''}</button>`).join('')}</div>
 ${state.searchLoading?'<div class="info-card">Đang tìm trên các nguồn nhạc…</div>':''}
 ${selected.length?trackList(selected):!state.searchLoading?emptyState('Chưa tìm thấy bài phù hợp','Thử tên khác hoặc chọn một nguồn khác.','youtube','Thử link YouTube'):''}
 ${state.apiError?`<p class="search-notice">Audius: ${escapeHTML(state.apiError)}</p>`:''}
 ${state.ytError?`<p class="search-notice">YouTube: ${escapeHTML(state.ytError)}</p>`:''}
 ${!state.youtubeKey?`<div class="inline-hint">${icon('youtube')} Để tìm bài hát YouTube ngay ở đây, thêm YouTube Data API Key miễn phí trong <button data-action="settings">Cài đặt</button>. Dán link vẫn dùng được mà không cần key.</div>`:''}`
 :`<section class="section"><div class="section-heading"><h2 class="section-title">Thể loại phổ biến</h2></div>${categoryTiles()}</section>`}</div>`
}
function renderTrending(){return `<div class="container"><div class="page-top"><div><span class="eyebrow">AUDIUS</span><h1 class="page-title">Thịnh hành</h1><p class="page-sub">Bài hát công khai từ Audius, được cập nhật khi mở trang</p></div><button class="btn btn-outline" data-action="reload">${icon('repeat')} Làm mới</button></div>
 ${state.loading?'<div class="info-card">Đang tải nhạc…</div>':state.online.length?trackList(state.online):emptyState('Chưa có danh sách online','Kiểm tra kết nối mạng hoặc nhập API Key trong Cài đặt.','settings','Mở cài đặt')}</div>`}
function renderFavorites(){const tracks=[...state.favorites].map(id=>getTrack(id)).filter(Boolean);return `<div class="container"><div class="page-top"><div><span class="eyebrow">YOUR LIBRARY</span><h1 class="page-title">Bài hát yêu thích</h1><p class="page-sub">${tracks.length} bài hát đã lưu trên trình duyệt này</p></div>${tracks.length?`<button class="btn btn-primary" data-action="play-favorites">${icon('play')} Phát tất cả</button>`:''}</div>${tracks.length?trackList(tracks):emptyState('Chưa có bài hát yêu thích','Nhấn biểu tượng trái tim trên bài nhạc để lưu lại tại đây.','trending','Khám phá nhạc')}</div>`}
function renderLocal(){const tracks=[...state.local.values()];return `<div class="container"><div class="page-top"><div><span class="eyebrow">LOCAL AUDIO</span><h1 class="page-title">Nhạc trên máy</h1><p class="page-sub">${tracks.length} bài hát • Tệp được lưu trong bộ nhớ trình duyệt, không gửi lên Cloudflare</p></div><button class="btn btn-primary" data-action="import">${icon('upload')} Thêm nhạc</button></div>${tracks.length?trackList(tracks):emptyState('Thư viện đang trống','Kéo thả nhạc vào cửa sổ hoặc chọn file FLAC, WAV, ALAC, MP3... File được lưu trong trình duyệt nếu còn dung lượng.','import','Chọn nhạc từ máy')}</div>`}
function renderRecent(){const tracks=state.recently.map(getTrack).filter(Boolean);return `<div class="container"><div class="page-top"><div><span class="eyebrow">JUST PLAYED</span><h1 class="page-title">Nghe gần đây</h1><p class="page-sub">Lưu tối đa 40 bài trên thiết bị này</p></div></div>${tracks.length?trackList(tracks):emptyState('Chưa có lịch sử','Chọn một bài hát, lịch sử nghe sẽ xuất hiện tại đây.','home','Về trang chủ')}</div>`}
function renderLibrary(){const local=[...state.local.values()];const fav=[...state.favorites].map(getTrack).filter(Boolean);const recent=state.recently.map(getTrack).filter(Boolean);
 return `<div class="container"><div class="page-top"><div><span class="eyebrow">MY MUSIC</span><h1 class="page-title">Thư viện</h1><p class="page-sub">Mọi thứ em muốn nghe, ở cùng một nơi</p></div><button class="btn btn-primary" data-action="new-playlist">${icon('plus')} Tạo playlist</button></div>
 ${state.playlists.length?`<section class="section"><div class="section-heading"><h2 class="section-title">Playlist</h2></div><div class="genre-grid">${state.playlists.map(p=>`<button class="genre-card" data-view="playlist:${escapeHTML(p.id)}"><span>${escapeHTML(p.name)}</span><div class="genre-shape"></div></button>`).join('')}</div></section>`:''}
 ${gridSection('Nhạc trên máy',local,'Nhạc riêng đã nhập','local')}
 ${gridSection('Bài hát yêu thích',fav,'Những bài muốn nghe lại','favorites')}
 ${gridSection('Nghe gần đây',recent,'Giai điệu gần nhất','recent')}
 ${!local.length&&!fav.length&&!state.playlists.length?emptyState('Thư viện đang trống','Thêm nhạc của em hoặc lưu bài hát online vào yêu thích để bắt đầu.','import','Thêm nhạc'):''}
 </div>`}
function renderPlaylist(id){const p=state.playlists.find(p=>p.id===id);if(!p)return renderLibrary();const tracks=p.tracks.map(getTrack).filter(Boolean);
 return `<div class="container"><div class="page-top"><div><span class="eyebrow">PLAYLIST</span><h1 class="page-title">${escapeHTML(p.name)}</h1><p class="page-sub">${tracks.length} bài hát • Playlist lưu trên trình duyệt này</p></div><div style="display:flex;gap:8px">${tracks.length?`<button class="btn btn-primary" data-action="play-playlist" data-id="${escapeHTML(p.id)}">${icon('play')} Phát tất cả</button>`:''}<button class="btn btn-outline" data-action="delete-playlist" data-id="${escapeHTML(p.id)}">${icon('trash')}</button></div></div>
 ${tracks.length?trackList(tracks):emptyState('Playlist chưa có bài hát','Mở tùy chọn của một bài hát rồi chọn “Thêm vào playlist” nhé.','trending','Khám phá nhạc')}</div>`}
function allKnownTracks(){return [...new Map([...state.online,...state.tracks.values(),...state.local.values()].filter(Boolean).map(t=>[t.id,t])).values()]}
function renderArtist(artist){const tracks=allKnownTracks().filter(t=>t.artist?.toLowerCase()===artist.toLowerCase());return `<div class="container"><div class="page-top"><div><span class="eyebrow">ARTIST / CHANNEL</span><h1 class="page-title">${escapeHTML(artist)}</h1><p class="page-sub">${tracks.length} bài đã biết trong thư viện và kết quả gần đây. Đây chưa phải danh mục đầy đủ từ nghệ sĩ.</p></div><button class="btn btn-outline" data-action="search-artist" data-artist="${escapeHTML(artist)}">${icon('search')} Tìm thêm</button></div>${trackList(tracks)}</div>`}
function renderAlbum(album){const tracks=allKnownTracks().filter(t=>t.album?.toLowerCase()===album.toLowerCase());return `<div class="container"><div class="page-top"><div><span class="eyebrow">ALBUM</span><h1 class="page-title">${escapeHTML(album)}</h1><p class="page-sub">Các bài có metadata album được ghi nhận trên LonMusics</p></div></div>${trackList(tracks)}</div>`}
function render(){
 const view=state.view;
 elements.main.innerHTML=view==='home'?renderHome():view==='search'?renderSearch():view==='youtube'?renderYoutube():view==='trending'?renderTrending():view==='favorites'?renderFavorites():view==='local'?renderLocal():view==='recent'?renderRecent():view==='library'?renderLibrary():view.startsWith('playlist:')?renderPlaylist(view.split(':')[1]):view.startsWith('artist:')?renderArtist(decodeURIComponent(view.slice(7))):view.startsWith('album:')?renderAlbum(decodeURIComponent(view.slice(6))):renderHome();
 document.querySelectorAll('[data-view].nav-item').forEach(b=>b.classList.toggle('is-active',b.dataset.view===view));
 document.getElementById('customPlaylists').innerHTML=state.playlists.map(p=>`<button class="nav-item ${view===`playlist:${p.id}`?'is-active':''}" data-view="playlist:${escapeHTML(p.id)}">${icon('playlist')}<span>${escapeHTML(p.name)}</span></button>`).join('');
 elements.main.scrollTop=0;
}
function showView(view,remember=true){if(remember&&state.view!==view){state.history.push(state.view);if(state.history.length>25)state.history.shift()};state.view=view;closeMenu();state.queueOpen=false;elements.queue.hidden=true;if(view==='search')elements.search.focus();render();}
function closeMenu(){document.getElementById('sidebar').classList.remove('is-open');document.getElementById('scrim').hidden=true}
function getTrack(id){return state.tracks.get(id)||state.local.get(id)||state.savedTracks[id]||null}
function rememberTrack(track){if(!track?.id)return;state.tracks.set(track.id,track);if(track.source==='local')return;state.savedTracks[track.id]={id:track.id,title:track.title,artist:track.artist,album:track.album||'',artwork:track.artwork,genre:track.genre,duration:track.duration,source:track.source||'audius',permalink:track.permalink||'',videoId:track.videoId||'',playlistId:track.playlistId||'',channelId:track.channelId||''};const keys=Object.keys(state.savedTracks);if(keys.length>280){for(const id of keys.slice(0,keys.length-280)){if(!state.favorites.has(id)&&!state.recently.includes(id))delete state.savedTracks[id]}}safeSet(KEY+'trackCache',state.savedTracks)}
function normalizeOnline(t){if(!t||!t.id||!t.title)return null;
 if(t.is_stream_gated || t.isStreamGated || t.is_streamable===false || t.isStreamable===false || t.access?.stream===false)return null;
 return {id:String(t.id),title:t.title,artist:t.user?.name||t.user?.handle||'Nghệ sĩ Audius',genre:t.genre||'',album:typeof t.album==='string'?t.album:(t.album?.name||''),duration:t.duration||0,
   artwork:safeImage(t.artwork?._480x480||t.artwork?.['480x480']||t.artwork?._1000x1000||t.artwork?.['1000x1000']||t.artwork?._150x150||t.artwork?.['150x150']||''),
   source:'audius',permalink:t.permalink||''};
}
function paramsForAPI(q={}){const p=new URLSearchParams({...q,app_name:'LonMusics'});if(state.apiKey)p.set('api_key',state.apiKey);return p.toString()}
async function audiusFetch(path,params={},signal){const url=`${API}${path}?${paramsForAPI(params)}`;const res=await fetch(url,{signal,mode:'cors'});if(!res.ok)throw new Error(`Audius HTTP ${res.status}`);const json=await res.json();if(!json||!Array.isArray(json.data))throw new Error('Audius trả dữ liệu không hợp lệ');return json.data.map(normalizeOnline).filter(Boolean)}
function readableError(e){if(e?.name==='AbortError')return '';if(/HTTP 429/.test(e.message))return 'Hạn mức Audius tạm hết';if(/401|403/.test(e.message))return 'Audius yêu cầu quyền truy cập hoặc API Key';return 'Không kết nối được Audius hoặc dịch vụ tạm gián đoạn'}
async function fetchTrending(){const id=++state.requestCounter;state.loading=true;state.apiError='';if(state.view==='home'||state.view==='trending')render();
 try{const tracks=await audiusFetch('/tracks/trending',{limit:24,time:'week'});if(id!==state.requestCounter)return;state.online=tracks;tracks.forEach(rememberTrack);state.apiError='';}
 catch(e){if(id!==state.requestCounter)return;state.apiError=readableError(e);}
 finally{if(id===state.requestCounter){state.loading=false;if(state.view==='home'||state.view==='trending')render()}}
}
function parseYouTubeLink(input){
 try{const u=new URL(input.trim());if(u.protocol!=='https:'&&u.protocol!=='http:')return null;
 const h=u.hostname.toLowerCase(),allowed=['youtube.com','www.youtube.com','m.youtube.com','music.youtube.com','youtu.be','www.youtu.be','youtube-nocookie.com','www.youtube-nocookie.com'];if(!allowed.includes(h))return null;
 let id=u.searchParams.get('v')||'';if(h.includes('youtu.be'))id=u.pathname.split('/')[1]||'';
 if(!id){const m=u.pathname.match(/^\/(?:shorts|live|embed)\/([\w-]{11})/);if(m)id=m[1]}
 const list=u.searchParams.get('list')||'';
 if(u.pathname==='/playlist'&&/^[a-zA-Z0-9_-]{10,80}$/.test(list))return {kind:'playlist',id:list};
 if(/^[a-zA-Z0-9_-]{11}$/.test(id))return {kind:'video',id};
 if(/^[a-zA-Z0-9_-]{10,80}$/.test(list))return {kind:'playlist',id:list};
 }catch{}return null;
}
function youtubeTrackFromRef(ref){
 const isVideo=ref.kind==='video',id=(isVideo?'yt:':'ytpl:')+ref.id;
 return {id,title:isVideo?'Video YouTube · '+ref.id:'Playlist YouTube',artist:'YouTube',artwork:isVideo?'https://i.ytimg.com/vi/'+ref.id+'/hqdefault.jpg':'',source:isVideo?'youtube':'youtube_playlist',videoId:isVideo?ref.id:'',playlistId:isVideo?'':ref.id,duration:0,genre:'YouTube'};
}
function normalizeYTResult(item){const videoId=item?.id?.videoId;if(!/^[a-zA-Z0-9_-]{11}$/.test(videoId||''))return null;
 const sn=item.snippet||{};return {id:'yt:'+videoId,title:sn.title||'Video YouTube',artist:sn.channelTitle||'Kênh YouTube',channelId:sn.channelId||'',videoId,artwork:'https://i.ytimg.com/vi/'+videoId+'/hqdefault.jpg',duration:0,genre:'YouTube',source:'youtube',permalink:'https://www.youtube.com/watch?v='+videoId};
}
async function youtubeSearch(q,signal){const url=new URL(YOUTUBE_API+'/search');url.search=new URLSearchParams({part:'snippet',type:'video',videoEmbeddable:'true',maxResults:'18',safeSearch:'moderate',q,key:state.youtubeKey}).toString();
 const res=await fetch(url,{signal});const json=await res.json();if(!res.ok)throw new Error(json?.error?.message||`YouTube HTTP ${res.status}`);return (json.items||[]).map(normalizeYTResult).filter(Boolean)
}
async function enrichYTTrack(track){if(!state.youtubeKey||track.source!=='youtube')return;
 try{const url=new URL(YOUTUBE_API+'/videos');url.search=new URLSearchParams({part:'snippet',id:track.videoId,key:state.youtubeKey}).toString();const r=await fetch(url);if(!r.ok)return;const j=await r.json();const sn=j.items?.[0]?.snippet;if(!sn)return;
 track.title=sn.title||track.title;track.artist=sn.channelTitle||track.artist;track.channelId=sn.channelId||'';rememberTrack(track);updatePlayer();if(state.nowPlayingOpen&&state.current===track.id){const title=document.getElementById('nowTrackTitle'),artist=document.getElementById('nowTrackArtist');if(title)title.textContent=track.title;if(artist)artist.textContent=track.artist;}
 }catch{}
}
function openYouTubeURL(raw){const ref=parseYouTubeLink(raw);if(!ref){toast('Link không hợp lệ. Em thử link video hoặc playlist YouTube nhé');return}
 const t=youtubeTrackFromRef(ref);const old=getTrack(t.id);const track=old||t;rememberTrack(track);playTrack(track.id);if(!old)enrichYTTrack(track);elements.search.value='';
}
let searchAbort=null;
async function searchMusic(q){const val=q.trim();const ref=parseYouTubeLink(val);if(ref){openYouTubeURL(val);return}
 state.query=val;state.results=[];state.youtubeResults=[];state.apiError='';state.ytError='';state.searchSource='all';++state.searchSerial;
 if(searchAbort)searchAbort.abort();searchAbort=new AbortController();showView('search');
 if(!val){state.searchLoading=false;render();return}
 const serial=state.searchSerial,signal=searchAbort.signal;
 const local=[...state.local.values()].filter(t=>(t.title+' '+t.artist).toLowerCase().includes(val.toLowerCase()));
 const cached=[...state.tracks.values()].filter(t=>t.source?.startsWith('youtube')&&(t.title+' '+t.artist).toLowerCase().includes(val.toLowerCase())).slice(0,8);
 state.results=[...local,...cached];state.searchLoading=true;render();
 const requests=[audiusFetch('/tracks/search',{query:val,limit:30},signal),state.youtubeKey?youtubeSearch(val,signal):Promise.resolve([])];
 const [a,y]=await Promise.allSettled(requests);if(serial!==state.searchSerial)return;
 const au=a.status==='fulfilled'?a.value:[];const yt=y.status==='fulfilled'?y.value:[];
 if(a.status==='rejected'&&a.reason?.name!=='AbortError')state.apiError=readableError(a.reason);
 if(y.status==='rejected'&&y.reason?.name!=='AbortError')state.ytError=y.reason?.message?.slice(0,180)||'Không tìm được trên YouTube';
 [...au,...yt].forEach(rememberTrack);state.youtubeResults=yt;
 state.results=[...new Map([...local,...cached,...au,...yt].map(t=>[t.id,t])).values()];state.searchLoading=false;render();
}
function updateRange(el){const min=Number(el.min)||0,max=Number(el.max)||100,val=Number(el.value)||0;el.style.setProperty('--pct',`${((val-min)/(max-min||1))*100}%`)}
function queueFromView(){if(state.view==='search')return state.results;if(state.view==='youtube')return state.recently.map(getTrack).filter(t=>t?.source?.startsWith('youtube')); if(state.view==='trending')return state.online;if(state.view==='favorites')return [...state.favorites].map(getTrack).filter(Boolean);
 if(state.view==='local')return [...state.local.values()];if(state.view==='recent')return state.recently.map(getTrack).filter(Boolean);
 if(state.view.startsWith('playlist:')){const p=state.playlists.find(p=>p.id===state.view.split(':')[1]);return p?.tracks.map(getTrack).filter(Boolean)||[]}
 if(state.view==='home')return [...personalizedTracks(),...state.online,...state.local.values()];return [...state.online];}
function suggestTracks(seed=null,limit=10){
 const pool=[...new Map([...state.online,...state.local.values(),...Object.values(state.savedTracks)].filter(Boolean).map(t=>[t.id,t])).values()]
  .filter(t=>t.id!==seed?.id&&!t.source?.startsWith('youtube')&&(t.source!=='local'||!!state.local.get(t.id)?.objectUrl));
 const scores=pool.map(t=>{
   const genre=String(t.genre||'').toLowerCase(),artist=String(t.artist||'').toLowerCase();
   let score=(state.favorites.has(t.id)?9:0)+Math.min(6,(state.playCounts[t.id]||0)*1.8);
   if(seed){if(genre&&genre===String(seed.genre||'').toLowerCase())score+=9;if(artist&&artist===String(seed.artist||'').toLowerCase())score+=13;}
   for(const id of state.recently.slice(0,12)){
      const r=getTrack(id);if(!r)continue;
      if(genre&&genre===String(r.genre||'').toLowerCase())score+=2;
      if(artist&&artist===String(r.artist||'').toLowerCase())score+=2.5;
   }
   if(state.recently.slice(0,7).includes(t.id))score-=7;
   score+=((t.id.length*13+t.title.length*7)%19)/24;
   return {t,score};
 });
 scores.sort((a,b)=>b.score-a.score);
 return scores.slice(0,limit).map(x=>x.t);
}
function smartNext(){return suggestTracks(getTrack(state.current),12).find(t=>!state.recently.slice(0,5).includes(t.id))||suggestTracks(getTrack(state.current),1)[0]||null}
function logPlay(track){const id=track.id;state.playCounts[id]=(state.playCounts[id]||0)+1;
 const all=Object.keys(state.playCounts);if(all.length>500){all.sort((a,b)=>(state.playCounts[a]||0)-(state.playCounts[b]||0));for(const k of all.slice(0,all.length-500))delete state.playCounts[k]}
 safeSet(KEY+'counts',state.playCounts);
 state.recently=[id,...state.recently.filter(x=>x!==id)].slice(0,40);safeSet(KEY+'recent',state.recently);rememberTrack(track);
}
async function playTrack(id,setQueue=true){const track=getTrack(id);if(!track)return toast('Không tìm được bài hát này');
 if(track.source==='local'&&!track.objectUrl)return toast('File nhạc không còn trong bộ nhớ. Em hãy nhập lại tệp nhé');
 if(setQueue){const list=queueFromView().map(t=>t.id);state.queue=[id,...list.filter(x=>x!==id)]}
 else if(!state.queue.includes(id))state.queue.push(id);
 state.current=id;state.isPlaying=false;elements.audio.dataset.fallbackTried='';logPlay(track);
 if(track.source?.startsWith('youtube')){
   elements.audio.pause();elements.audio.dataset.ignoreError='1';elements.audio.removeAttribute('src');elements.audio.load();
   state.lyrics=null;state.lyricsFor=null;state.lyricsLoading=false;
   updatePlayer();renderQueue();render();openNowPlaying();
   return;
 }
 elements.audio.dataset.ignoreError='';
 elements.audio.pause();elements.audio.src=track.source==='local'?track.objectUrl:`${API}/tracks/${encodeURIComponent(id)}/stream?${paramsForAPI()}`;
 elements.audio.load();updatePlayer();renderQueue();if(state.nowPlayingOpen)renderNowPlaying();render();
 loadLyrics(track);
 try{await elements.audio.play()}
 catch(e){if(track.source==='audius'&&!elements.audio.dataset.fallbackTried){elements.audio.dataset.fallbackTried='1';try{await tryAudiusFallback(id);return}catch{}}
  toast(e?.name==='NotAllowedError'?'Nhấn phát để bắt đầu nghe':'Không phát được bài này. Em thử nguồn khác nhé')}
}
async function tryAudiusFallback(id){const url=`${API}/tracks/${encodeURIComponent(id)}/stream?${paramsForAPI({no_redirect:'true'})}`;
 const response=await fetch(url);if(!response.ok)throw new Error('Stream unavailable');const data=await response.json();const stream=safeImage(data?.data?.url||data?.url);if(!stream)throw new Error('No URL');elements.audio.src=stream;elements.audio.load();await elements.audio.play()}
function updatePlayer(){const t=state.current?getTrack(state.current):null;
 document.getElementById('playerTitle').textContent=t?.title||'Chọn một bài hát';document.getElementById('playerArtist').textContent=t?.artist||'LonMusics · Không gian âm nhạc của em';
 document.getElementById('playerCover').innerHTML=t?artwork(t):icon('music');
 const yt=t?.source?.startsWith('youtube');const quality=!t?'Sẵn sàng':yt?'YouTube · Video':t.source==='audius'?'Audius · MP3':(/\.flac$/i.test(t.filename||'')?'FLAC':/\.alac$|\.m4a$/i.test(t.filename||'')?'ALAC / M4A':/\.wav$|\.aiff?$/i.test(t.filename||'')?'PCM':'Local audio');
 document.getElementById('qualityTag').textContent=quality;
 document.getElementById('playerFavorite').classList.toggle('is-active',!!t&&state.favorites.has(t.id));
 document.getElementById('mainPlayBtn').innerHTML=icon(yt?'expand':state.isPlaying?'pause':'play');
 document.getElementById('mainPlayBtn').setAttribute('aria-label',yt?'Mở trình phát YouTube':state.isPlaying?'Tạm dừng':'Phát');
 document.getElementById('shuffleBtn').classList.toggle('is-active',state.shuffle);
 document.getElementById('repeatBtn').classList.toggle('is-active',state.repeat!=='off');
 document.getElementById('repeatBtn').innerHTML=icon(state.repeat==='one'?'repeat-one':'repeat');
 document.getElementById('muteBtn').innerHTML=icon(state.muted||elements.audio.volume===0?'mute':'volume');
 document.getElementById('currentTime').textContent=yt?'Video':formatTime(elements.audio.currentTime);
 document.getElementById('totalTime').textContent=yt?'YouTube':formatTime(elements.audio.duration||t?.duration||0);
 const value=elements.audio.duration&&!yt?Math.round(elements.audio.currentTime/elements.audio.duration*1000):0;elements.seek.value=Math.max(0,Math.min(1000,value));elements.seek.disabled=!!yt;updateRange(elements.seek);
 document.getElementById('player').classList.toggle('is-youtube',!!yt);
 updateMediaSession(t);updateNowPlayingUI();
}
function updateMediaSession(track){if(!('mediaSession' in navigator))return;try{
  navigator.mediaSession.metadata=track?new MediaMetadata({title:track.title,artist:track.artist,album:'LonMusics',artwork:track.artwork?[{src:track.artwork,sizes:'480x480'}]:[]}):null;
  navigator.mediaSession.playbackState=track?.source?.startsWith('youtube')?'none':state.isPlaying?'playing':'paused';
 }catch{}}
async function togglePlay(){
 if(!state.current){const first=queueFromView()[0];if(first)return playTrack(first.id);return toast('Hãy chọn một bài để phát nhé')}
 if(getTrack(state.current)?.source?.startsWith('youtube')){openNowPlaying();return}
 if(!elements.audio.paused){elements.audio.pause();return}
 try{await elements.audio.play()}catch{toast('Không thể tiếp tục bài này. Em thử mở lại nhé')}
}
async function playAdjacent(direction){
 if(!state.current)return;
 if(direction>0&&state.manualQueue.length){const next=state.manualQueue.shift();renderQueue();return playTrack(next,false)}
 if(direction<0&&getTrack(state.current)?.source?.startsWith('youtube'))return toast('Với YouTube, em điều khiển trực tiếp trên trình phát video nhé');
 const ix=state.queue.indexOf(state.current);
 if(direction<0&&elements.audio.currentTime>3&&!getTrack(state.current)?.source?.startsWith('youtube')){elements.audio.currentTime=0;return}
 if(state.shuffle&&state.queue.length>1&&direction>0){const others=state.queue.filter(id=>id!==state.current);return playTrack(others[Math.floor(Math.random()*others.length)],false)}
 const next=ix+direction;
 if(next<0&&state.queue.length)return playTrack(state.queue[0],false);
 if(next>=0&&next<state.queue.length)return playTrack(state.queue[next],false);
 if(direction>0&&state.repeat==='all'&&state.queue.length)return playTrack(state.queue[0],false);
 if(direction>0&&state.radioEnabled){const rec=smartNext();if(rec){state.queue.push(rec.id);return playTrack(rec.id,false)}}
 elements.audio.pause();if(Number.isFinite(elements.audio.duration))elements.audio.currentTime=0;updatePlayer();
}
function toggleFavorite(id){const t=getTrack(id);if(!t)return;if(state.favorites.has(id))state.favorites.delete(id);else state.favorites.add(id);safeSet(KEY+'favorites',[...state.favorites]);rememberTrack(t);updatePlayer();render();toast(state.favorites.has(id)?'Đã thêm vào yêu thích':'Đã bỏ yêu thích')}
function queueItem(track,section){return `<button class="queue-item ${state.current===track.id?'is-playing':''}" data-action="queue-track" data-id="${escapeHTML(track.id)}"><div class="track-thumb">${artwork(track)}</div><span><strong>${escapeHTML(track.title)}</strong><small>${escapeHTML(track.artist)} · ${sourceLabel(track)}</small></span>${state.current===track.id?icon('music'):icon('play')}</button>`}
function queueBody(){const active=getTrack(state.current), ix=state.queue.indexOf(state.current);
 const nextIds=state.queue.slice(Math.max(0,ix+1)).filter(id=>id!==state.current),suggested=state.radioEnabled?suggestTracks(active,6).filter(t=>!state.manualQueue.includes(t.id)&&!nextIds.includes(t.id)):[];
 let html=active?`<div class="queue-section-title">Đang nghe</div>${queueItem(active)}`:'';
 const manual=state.manualQueue.map(getTrack).filter(Boolean);if(manual.length)html+=`<div class="queue-section-title">Em thêm · ${manual.length}</div>`+manual.map(queueItem).join('');
 const scheduled=nextIds.slice(0,7).map(getTrack).filter(Boolean);if(scheduled.length)html+=`<div class="queue-section-title">Tiếp theo</div>`+scheduled.map(queueItem).join('');
 html+=`<div class="queue-radio-header"><div>${icon('sparkles')} <strong>LonRadio</strong><small>Gợi ý từ gu nghe trên thiết bị</small></div><button class="switch-pill ${state.radioEnabled?'selected':''}" data-action="toggle-radio" aria-pressed="${state.radioEnabled}">${state.radioEnabled?'Đang bật':'Đang tắt'}</button></div>`;
 if(state.radioEnabled){html+=suggested.length?suggested.map(queueItem).join(''):`<p class="queue-explain">Nghe thêm vài bài Audius để LonRadio có gợi ý phù hợp. Nhạc YouTube chỉ phát trong video hiện rõ trên màn hình.</p>`}
 return html||'<p class="queue-explain">Hàng chờ đang trống.</p>';
}
function renderQueue(){document.getElementById('queueList').innerHTML=queueBody();const nowQueue=document.getElementById('nowQueueBody');if(nowQueue)nowQueue.innerHTML=queueBody()}
function youtubeEmbed(track){const host='https://www.youtube.com/embed/';const u=track.source==='youtube_playlist'?'https://www.youtube.com/embed/videoseries?list='+encodeURIComponent(track.playlistId):host+encodeURIComponent(track.videoId)+'?playsinline=1&rel=0';
 return `<div class="youtube-video-box"><iframe id="youtubeFrame" title="Trình phát YouTube: ${escapeHTML(track.title)}" src="${escapeHTML(u)}" loading="eager" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
}
function lyricsHTML(){const track=getTrack(state.current);if(!track)return '<div class="lyric-empty">Chọn bài hát để xem lời.</div>';
 if(track.source?.startsWith('youtube'))return `<div class="lyric-empty">${icon('youtube')}<strong>Phát YouTube bằng video chính thức</strong><span>Hiện chưa hỗ trợ lời bài hát đồng bộ cho video YouTube.</span></div>`;
 if(state.lyricsLoading)return `<div class="lyric-empty">${icon('microphone')}<strong>Đang tìm lời bài hát…</strong></div>`;
 if(!state.lyrics||state.lyrics.kind==='empty')return `<div class="lyric-empty">${icon('microphone')}<strong>Chưa tìm thấy lời phù hợp</strong><span>Không phải bài nào cũng có trên LRCLIB. Với file trên máy, tên bài và nghệ sĩ cần chính xác.</span></div>`;
 if(state.lyrics.kind==='instrumental')return '<div class="lyric-empty">Bản nhạc không lời 🎵</div>';
 if(state.lyrics.kind==='synced')return `<div class="lyric-list" id="lyricList">${state.lyrics.lines.map((line,i)=>`<p data-lyric-line="${i}" class="lyric-line">${escapeHTML(line.text||'♪')}</p>`).join('')}</div>`;
 return `<div class="lyric-plain">${escapeHTML(state.lyrics.text)}</div>`;
}
function youtubeExternalURL(t){if(t.source==='youtube')return 'https://www.youtube.com/watch?v='+encodeURIComponent(t.videoId);if(t.source==='youtube_playlist')return 'https://www.youtube.com/playlist?list='+encodeURIComponent(t.playlistId);return safeImage(t.permalink||'')}
function nowControls(track){return `<div class="now-controls"><button class="icon-btn" data-action="shuffle" aria-label="Trộn bài">${icon('shuffle')}</button><button class="icon-btn" data-action="previous" aria-label="Bài trước">${icon('skip-back')}</button><button class="play-main now-big-play" id="nowPlayButton" data-action="toggle-play" aria-label="Phát / Tạm dừng">${icon(state.isPlaying?'pause':'play')}</button><button class="icon-btn" data-action="next" aria-label="Bài tiếp">${icon('skip-forward')}</button><button class="icon-btn" data-action="repeat" aria-label="Lặp lại">${icon('repeat')}</button></div>
 <div class="player-timeline now-timeline"><time id="nowTime">${formatTime(elements.audio.currentTime)}</time><input id="nowSeek" type="range" min="0" max="1000" value="0" aria-label="Vị trí bài hát"><time id="nowTotal">${formatTime(elements.audio.duration||track.duration||0)}</time></div>`}
function renderNowPlaying(){if(!state.nowPlayingOpen)return;const t=getTrack(state.current);if(!t)return;
 const yt=t.source?.startsWith('youtube');const root=document.getElementById('nowPlayingRoot');
 root.innerHTML=`<div class="now-overlay"><section class="now-window ${yt?'is-video':''}" role="dialog" aria-modal="true" aria-label="Trình phát LonMusics"><header class="now-header"><div class="now-logo"><img src="./assets/lonmusics-32.png" alt=""> LonMusics <span class="now-tag">${yt?'YouTube':sourceLabel(t)}</span></div><div class="now-header-actions"><button class="icon-btn" data-action="now-tab" data-tab="queue" aria-label="Hàng chờ" title="Hàng chờ">${icon('list-music')}</button><button class="icon-btn now-close" data-action="close-now" aria-label="Thu nhỏ trình phát">${icon('chevron-down')}</button></div></header>
 <div class="now-layout"><div class="now-left">
 ${yt?youtubeEmbed(t):`<div class="now-cover">${artwork(t)}</div>`}
 <div class="now-track-title"><div><h1 id="nowTrackTitle">${escapeHTML(t.title)}</h1><p id="nowTrackArtist">${escapeHTML(t.artist)}</p></div><button class="icon-btn ${state.favorites.has(t.id)?'is-active':''}" data-action="favorite-current" title="Yêu thích" aria-label="Yêu thích">${icon('heart')}</button></div>
 ${yt?`<p class="now-youtube-note">YouTube yêu cầu phát qua video hiển thị. Hãy dùng nút play, âm lượng và tua ngay trên video. Thu nhỏ sẽ dừng video.</p><a class="btn btn-outline now-source-link" target="_blank" rel="noopener noreferrer" href="${escapeHTML(youtubeExternalURL(t))}">${icon('external')} Xem trên YouTube</a>`:nowControls(t)}
 </div><aside class="now-right"><div class="now-tabs"><button class="now-tab ${state.nowTab==='lyrics'?'selected':''}" data-action="now-tab" data-tab="lyrics">${icon('microphone')} Lời bài hát</button><button class="now-tab ${state.nowTab==='queue'?'selected':''}" data-action="now-tab" data-tab="queue">${icon('list-music')} Tiếp theo</button></div>
 <div class="now-side-content" id="nowSideBody">${state.nowTab==='queue'?`<div id="nowQueueBody" class="queue-list">${queueBody()}</div>`:lyricsHTML()}</div>
 <div class="now-footnote">${yt?'Video phát theo điều kiện YouTube.':`Lời bài hát từ LRCLIB (nếu có). ${t.source==='audius'?'Audio MP3 từ Audius.':'Nhạc cá nhân trên thiết bị.'}`}</div></aside></div></section></div>`;
 updateNowPlayingUI();
}
function openNowPlaying(){if(!state.current)return toast('Em hãy chọn một bài trước nhé');state.nowPlayingOpen=true;state.nowTab=state.nowTab||'lyrics';renderNowPlaying();document.body.classList.add('now-open');}
function closeNowPlaying(){state.nowPlayingOpen=false;const t=getTrack(state.current);document.getElementById('nowPlayingRoot').replaceChildren();document.body.classList.remove('now-open');if(t?.source?.startsWith('youtube')){state.isPlaying=false;updatePlayer()}}
function switchNowTab(tab){if(tab!=='lyrics'&&tab!=='queue')return;state.nowTab=tab;if(state.nowPlayingOpen){
 const body=document.getElementById('nowSideBody');if(!body)return;body.innerHTML=tab==='queue'?`<div id="nowQueueBody" class="queue-list">${queueBody()}</div>`:lyricsHTML();
 document.querySelectorAll('.now-tab').forEach(b=>b.classList.toggle('selected',b.dataset.tab===tab));syncLyricHighlight();
}}
let highlightedLyric=-1;
function syncLyricHighlight(){if(!state.nowPlayingOpen||state.nowTab!=='lyrics'||state.lyrics?.kind!=='synced')return;
 const sec=elements.audio.currentTime,lines=state.lyrics.lines;let i=-1;for(let j=0;j<lines.length;j++){if(lines[j].at<=sec+.05)i=j;else break}
 if(i===highlightedLyric&&document.querySelector('.lyric-line.active'))return;
 highlightedLyric=i;document.querySelectorAll('.lyric-line').forEach((n,j)=>n.classList.toggle('active',j===i));
 const active=document.querySelector('.lyric-line.active');if(active&&i>=0){const wrap=document.getElementById('lyricList');if(wrap&&Math.abs(active.offsetTop-wrap.scrollTop-wrap.clientHeight*.35)>45){wrap.scrollTo({top:Math.max(0,active.offsetTop-wrap.offsetTop-wrap.clientHeight*.35),behavior:'smooth'})}}
}
function updateNowPlayingUI(){if(!state.nowPlayingOpen)return;const track=getTrack(state.current);if(!track||track.source?.startsWith('youtube'))return;
 const play=document.getElementById('nowPlayButton');if(play)play.innerHTML=icon(state.isPlaying?'pause':'play');
 const nowSeek=document.getElementById('nowSeek');if(nowSeek){nowSeek.value=elements.audio.duration?Math.round(elements.audio.currentTime/elements.audio.duration*1000):0;updateRange(nowSeek)}
 const t=document.getElementById('nowTime');if(t)t.textContent=formatTime(elements.audio.currentTime);
 const d=document.getElementById('nowTotal');if(d)d.textContent=formatTime(elements.audio.duration||track.duration||0);
 syncLyricHighlight();
}
function parseLRC(lrc){const lines=[];for(const line of String(lrc||'').split(/\r?\n/)){const tags=[...line.matchAll(/\[(\d{1,3}):(\d{2}(?:\.\d+)?)\]/g)];if(!tags.length)continue;const text=line.replace(/\[\d{1,3}:\d{2}(?:\.\d+)?\]/g,'').trim();for(const m of tags){lines.push({at:Number(m[1])*60+Number(m[2]),text})}}
 return lines.filter(x=>Number.isFinite(x.at)).sort((a,b)=>a.at-b.at);
}
let lyricsAbort=null;
async function loadLyrics(t){if(lyricsAbort)lyricsAbort.abort();lyricsAbort=new AbortController();state.lyrics=null;state.lyricsFor=t.id;state.lyricsLoading=true;highlightedLyric=-1;
 if(t.source?.startsWith('youtube')){state.lyricsLoading=false;return}
 if(state.nowPlayingOpen&&state.nowTab==='lyrics'){const slot=document.getElementById('nowSideBody');if(slot)slot.innerHTML=lyricsHTML()}
 try{const params=new URLSearchParams({track_name:t.title.replace(/\s*\([^)]*(?:official|remix|visualizer|audio)[^)]*\)/ig,'').trim(),artist_name:t.artist});
 // Do not include local filenames/durations as precision is unknown.
 const response=await fetch(LRCLIB_API+'?'+params.toString(),{signal:lyricsAbort.signal});if(!response.ok)throw Error('No match');const data=await response.json();if(state.current!==t.id)return;
 const timed=parseLRC(data.syncedLyrics||'');state.lyrics=data.instrumental?{kind:'instrumental'}:timed.length?{kind:'synced',lines:timed}:data.plainLyrics?{kind:'plain',text:data.plainLyrics}:{kind:'empty'};
 }catch(e){if(e?.name==='AbortError'||state.current!==t.id)return;state.lyrics={kind:'empty'}}
 finally{if(state.current===t.id){state.lyricsLoading=false;if(state.nowPlayingOpen&&state.nowTab==='lyrics'){const slot=document.getElementById('nowSideBody');if(slot)slot.innerHTML=lyricsHTML();syncLyricHighlight()}}}
}
function closeModal(){elements.modal.innerHTML=''}
function modal(content){elements.modal.innerHTML=`<div class="modal-cover" id="modalBackdrop"><div class="modal" role="dialog" aria-modal="true">${content}</div></div>`;elements.modal.querySelector('input')?.focus()}
function settingsModal(){modal(`<div class="modal-heading"><div><span class="eyebrow">PERSONALIZE</span><h2>Cài đặt LonMusics</h2></div><button class="icon-btn" data-action="close-modal" aria-label="Đóng">${icon('x')}</button></div>
 <div class="field-label">Giao diện</div><div class="radio-row">${['system','light','dark'].map(t=>`<button data-action="set-theme" data-theme="${t}" class="${state.theme===t?'is-selected':''}">${t==='system'?'Theo macOS':t==='light'?'Sáng':'Tối'}</button>`).join('')}</div>
 <label class="field-label" for="apiKeyInput">Audius API Key (không bắt buộc)</label><input id="apiKeyInput" class="field-control" type="text" value="${escapeHTML(state.apiKey)}" autocomplete="off" spellcheck="false" placeholder="Để trống nếu API công khai đang hoạt động">
 <p class="small-help">Dùng public key tại <a href="https://api.audius.co/plans" target="_blank" rel="noopener noreferrer">Audius Developer</a>. Không nhập API Secret hoặc mật khẩu.</p>
 <label class="field-label" for="youtubeKeyInput">YouTube Data API Key (để tìm kiếm YouTube)</label><input id="youtubeKeyInput" class="field-control" type="text" value="${escapeHTML(state.youtubeKey)}" autocomplete="off" spellcheck="false" placeholder="AIza… (key công khai, không phải OAuth token)">
 <p class="small-help">Tạo một key cho YouTube Data API v3 trong <a href="https://console.cloud.google.com/apis/library/youtube.googleapis.com" target="_blank" rel="noopener noreferrer">Google Cloud Console</a>. Hãy giới hạn key theo <strong>HTTP referrer</strong> (ví dụ <code>https://lonmusics.github.io/*</code>) và chỉ bật YouTube Data API v3. Đừng nhập tài khoản, mật khẩu hoặc OAuth secret. Key chỉ lưu trong trình duyệt, không đưa vào source GitHub.</p>
 <p class="small-help">Không cần key nếu chỉ dán link YouTube. Tìm kiếm bị giới hạn bởi quota API. Video phát trong trình phát chính thức, có thể có quảng cáo từ YouTube.</p>
 <div class="info-card" style="margin-top:15px">${icon('info')} Yêu thích, playlist và lịch sử được giữ trên trình duyệt này; file nhạc riêng lưu bằng IndexedDB nếu còn dung lượng. Không tự đồng bộ giữa nhiều thiết bị.</div>
 <div class="modal-actions"><button class="btn btn-outline" data-action="close-modal">Đóng</button><button class="btn btn-primary" data-action="save-settings">${icon('check')} Lưu</button></div>`)}
function newPlaylistModal(){modal(`<div class="modal-heading"><div><span class="eyebrow">MY COLLECTION</span><h2>Playlist mới</h2></div><button class="icon-btn" data-action="close-modal">${icon('x')}</button></div><label class="field-label" for="playlistName">Tên playlist</label><input class="field-control" id="playlistName" maxlength="80" placeholder="Ví dụ: Chill sau giờ làm"><div class="modal-actions"><button class="btn btn-outline" data-action="close-modal">Hủy</button><button class="btn btn-primary" data-action="save-playlist">${icon('plus')} Tạo playlist</button></div>`)}
function trackOptionsModal(id){const t=getTrack(id);if(!t)return;
 const url=youtubeExternalURL(t);modal(`<div class="modal-heading"><div><span class="eyebrow">${sourceLabel(t).toUpperCase()}</span><h2>${escapeHTML(t.title)}</h2><p class="page-sub">${escapeHTML(t.artist)}</p></div><button class="icon-btn" data-action="close-modal" aria-label="Đóng">${icon('x')}</button></div>
 <div class="options-stack"><button class="btn btn-outline" data-action="favorite" data-id="${escapeHTML(id)}">${icon('heart')} ${state.favorites.has(id)?'Bỏ khỏi yêu thích':'Thêm vào yêu thích'}</button>
 <button class="btn btn-outline" data-action="enqueue" data-id="${escapeHTML(id)}">${icon('list-music')} Phát tiếp bài này</button>
 <button class="btn btn-outline" data-action="view-artist" data-artist="${escapeHTML(t.artist)}">${icon('headphones')} ${t.source?.startsWith('youtube')?'Các bài cùng kênh':'Các bài cùng nghệ sĩ'}</button>
 ${t.album?`<button class="btn btn-outline" data-action="view-album" data-album="${escapeHTML(t.album)}">${icon('disc')} Xem album</button>`:''}
 ${t.source==='local'?`<button class="btn btn-outline" data-action="edit-local" data-id="${escapeHTML(id)}">${icon('settings')} Sửa tên bài / nghệ sĩ</button>`:''}
 ${state.playlists.map(p=>`<button class="btn btn-outline" data-action="add-to-playlist" data-id="${escapeHTML(id)}" data-playlist="${escapeHTML(p.id)}">${icon('plus')} Thêm vào ${escapeHTML(p.name)}</button>`).join('')}
 ${!state.playlists.length?`<button class="btn btn-outline" data-action="new-playlist">${icon('plus')} Tạo playlist đầu tiên</button>`:''}
 ${url?`<a class="btn btn-outline" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${icon('external')} Mở tại nguồn nhạc</a><button class="btn btn-outline" data-action="share-track" data-id="${escapeHTML(id)}">${icon('link')} Sao chép link bài hát</button>`:''}
 </div>`)}
function editLocalModal(id){const t=getTrack(id);if(!t||t.source!=='local')return;modal(`<div class="modal-heading"><div><span class="eyebrow">LOCAL FILE</span><h2>Thông tin bài hát</h2></div><button class="icon-btn" data-action="close-modal" aria-label="Đóng">${icon('x')}</button></div>
 <input id="editTrackId" hidden value="${escapeHTML(id)}"><label class="field-label" for="editTrackTitle">Tên bài hát</label><input class="field-control" id="editTrackTitle" maxlength="160" value="${escapeHTML(t.title)}"><label class="field-label" for="editTrackArtist">Nghệ sĩ</label><input class="field-control" id="editTrackArtist" maxlength="160" value="${escapeHTML(t.artist)}"><p class="small-help">Tên chính xác giúp tìm lời bài hát trên LRCLIB.</p>
 <div class="modal-actions"><button class="btn btn-outline" data-action="close-modal">Hủy</button><button class="btn btn-primary" data-action="save-local-info">Lưu</button></div>`)}
async function updateLocalMetadata(id,title,artist){const t=getTrack(id);if(!t||t.source!=='local'||!title||!artist)return;
 t.title=title;t.artist=artist;state.tracks.set(id,t);state.local.set(id,t);
 if(idb){await new Promise(resolve=>{try{const tx=idb.transaction('tracks','readwrite');const store=tx.objectStore('tracks'),r=store.get(id);r.onsuccess=()=>{if(r.result)store.put({...r.result,title,artist})};tx.oncomplete=resolve;tx.onerror=resolve}catch{resolve()}})}
 if(state.current===id){updatePlayer();loadLyrics(t)}render();toast('Đã cập nhật thông tin bài hát');
}
function savePlaylist(){const el=document.getElementById('playlistName');const name=el?.value.trim();if(!name){el?.focus();return toast('Nhập tên playlist trước nhé')}
 const id=`p${Date.now()}${Math.floor(Math.random()*1000)}`;state.playlists.push({id,name,tracks:[]});safeSet(KEY+'playlists',state.playlists);closeModal();showView('playlist:'+id);toast('Đã tạo playlist')}
function playList(tracks){if(!tracks.length)return toast('Danh sách này chưa có bài hát');state.queue=tracks.map(t=>t.id);playTrack(tracks[0].id,false)}
function cacheLocal(track){state.tracks.set(track.id,track);state.local.set(track.id,track)}
let idb=null;
function openDB(){if(!window.indexedDB)return Promise.resolve(null);return new Promise(resolve=>{
 try{const request=indexedDB.open('LonMusicsLocal',1);request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains('tracks'))db.createObjectStore('tracks',{keyPath:'id'})};request.onsuccess=()=>resolve(request.result);request.onerror=()=>resolve(null)}catch{resolve(null)}
})}
async function initLocal(){idb=await openDB();if(!idb)return;return new Promise(resolve=>{
 try{const tx=idb.transaction('tracks','readonly'),r=tx.objectStore('tracks').getAll();r.onsuccess=()=>{for(const item of r.result||[]){if(!item.blob)continue;cacheLocal({...item,source:'local',objectUrl:URL.createObjectURL(item.blob)})}resolve()};r.onerror=()=>resolve()}catch{resolve()}
})}
function saveLocalTrack(track,blob){if(!idb)return Promise.resolve(false);return new Promise(resolve=>{try{const tx=idb.transaction('tracks','readwrite');tx.objectStore('tracks').put({...track,blob,objectUrl:undefined});tx.oncomplete=()=>resolve(true);tx.onerror=()=>resolve(false);tx.onabort=()=>resolve(false)}catch{resolve(false)}})}
async function importFiles(files){const candidates=[...files].filter(f=>f.type?.startsWith('audio/')||/\.(mp3|wav|flac|aiff?|alac|m4a|aac|ogg|opus)$/i.test(f.name));if(!candidates.length)return toast('Không thấy tệp nhạc phù hợp');let saved=0;
 for(const file of candidates){const id='local:'+file.name+':'+file.size+':'+file.lastModified;if(state.local.has(id))continue;
  const base=file.name.replace(/\.[^.]+$/,'').replace(/_/g,' '),parts=base.split(/\s+-\s+/);const title=parts.length>1?parts.slice(1).join(' - '):base,artist=parts.length>1?parts[0]:'Nhạc của em';
  const track={id,title,artist,genre:'Local',duration:0,artwork:'',source:'local',filename:file.name,size:file.size};
  const ok=await saveLocalTrack(track,file);track.objectUrl=URL.createObjectURL(file);cacheLocal(track);saved++;
  if(!ok)toast(`Đã mở “${file.name}” cho phiên này; trình duyệt chưa lưu được file lâu dài.`)
 }
 elements.upload.value='';if(saved){toast(`Đã thêm ${saved} bài hát`);showView('local');renderQueue()}}
async function handleAction(action,node){const id=node.dataset.id;
 switch(action){
 case 'home':showView('home');break;
 case 'back':showView(state.history.pop()||'home',false);break;
 case 'open-menu':document.getElementById('sidebar').classList.add('is-open');document.getElementById('scrim').hidden=false;break;
 case 'close-menu':closeMenu();break;
 case 'theme':state.theme=state.theme==='system'?'light':state.theme==='light'?'dark':'system';safeSet(KEY+'theme',state.theme);applyTheme();toast(`Giao diện: ${state.theme==='system'?'Theo macOS':state.theme==='light'?'Sáng':'Tối'}`);break;
 case 'settings':settingsModal();break;
 case 'set-theme':state.theme=node.dataset.theme;safeSet(KEY+'theme',state.theme);applyTheme();settingsModal();break;
 case 'save-settings':state.apiKey=document.getElementById('apiKeyInput')?.value.trim()||'';state.youtubeKey=document.getElementById('youtubeKeyInput')?.value.trim()||'';safeSet(KEY+'apiKey',state.apiKey);safeSet(KEY+'ytKey',state.youtubeKey);closeModal();toast('Đã lưu cài đặt API');fetchTrending();if(state.query&&state.view==='search')searchMusic(state.query);break;
 case 'reload':fetchTrending();break;
 case 'import':elements.upload.click();break;
 case 'new-playlist':newPlaylistModal();break;
 case 'save-playlist':savePlaylist();break;
 case 'delete-playlist':{const p=state.playlists.find(x=>x.id===id);if(!p)return;if(confirm(`Xóa playlist “${p.name}”?`)){state.playlists=state.playlists.filter(x=>x.id!==id);safeSet(KEY+'playlists',state.playlists);showView('library');toast('Đã xóa playlist')}break}
 case 'add-to-playlist':{const p=state.playlists.find(x=>x.id===node.dataset.playlist);if(p&&!p.tracks.includes(id)){p.tracks.push(id);safeSet(KEY+'playlists',state.playlists);toast(`Đã thêm vào ${p.name}`)}else toast('Bài hát đã có trong playlist');closeModal();break}
 case 'close-modal':closeModal();break;
 case 'track-options':trackOptionsModal(id);break;
 case 'search-filter':state.searchSource=node.dataset.filter;render();break;
 case 'view-artist':closeModal();showView('artist:'+encodeURIComponent(node.dataset.artist));break;
 case 'view-album':closeModal();showView('album:'+encodeURIComponent(node.dataset.album));break;
 case 'search-artist':elements.search.value=node.dataset.artist;searchMusic(node.dataset.artist);break;
 case 'edit-local':editLocalModal(id);break;
 case 'save-local-info':{const tid=document.getElementById('editTrackId')?.value,title=document.getElementById('editTrackTitle')?.value.trim(),artist=document.getElementById('editTrackArtist')?.value.trim();if(!title||!artist)return toast('Cần có tên bài và nghệ sĩ');closeModal();updateLocalMetadata(tid,title,artist);break;}
 case 'share-track':{const t=getTrack(id),url=t&&youtubeExternalURL(t);if(url){navigator.clipboard?.writeText(url).then(()=>toast('Đã sao chép link')).catch(()=>toast('Trình duyệt không cho phép sao chép'))}break;}
 case 'play-track':playTrack(id);break;
 case 'queue-track':playTrack(id,false);break;
 case 'enqueue':{if(id&&id!==state.current&&!state.manualQueue.includes(id))state.manualQueue.push(id);toast('Đã thêm vào hàng chờ ưu tiên');renderQueue();closeModal();break}
 case 'favorite':toggleFavorite(id);closeModal();break;
 case 'favorite-current':if(state.current)toggleFavorite(state.current);break;
 case 'queue':state.queueOpen=!state.queueOpen;elements.queue.hidden=!state.queueOpen;renderQueue();break;
 case 'toggle-radio':state.radioEnabled=!state.radioEnabled;safeSet(KEY+'radio',state.radioEnabled);renderQueue();toast(state.radioEnabled?'LonRadio đã bật':'LonRadio đã tắt');break;
 case 'open-now-playing':openNowPlaying();break;
 case 'close-now':closeNowPlaying();break;
 case 'now-tab':switchNowTab(node.dataset.tab);break;
 case 'play-mine':{const mix=personalizedTracks();if(mix.length)playList(mix);else if(state.online.length)playList(state.online);else toast('Hãy nghe vài bài Audius hoặc thêm nhạc cá nhân nhé');break;}
 case 'toggle-play':togglePlay();break;
 case 'next':playAdjacent(1);break;
 case 'previous':playAdjacent(-1);break;
 case 'shuffle':state.shuffle=!state.shuffle;updatePlayer();toast(state.shuffle?'Đã bật trộn bài':'Đã tắt trộn bài');break;
 case 'repeat':state.repeat=state.repeat==='off'?'all':state.repeat==='all'?'one':'off';updatePlayer();toast(state.repeat==='off'?'Tắt lặp lại':state.repeat==='all'?'Lặp lại tất cả':'Lặp lại một bài');break;
 case 'mute':state.muted=!state.muted;elements.audio.muted=state.muted;updatePlayer();break;
 case 'genre':elements.search.value=node.dataset.genre;searchMusic(node.dataset.genre);break;
 case 'play-trending':if(state.online.length)playList(state.online);else if(state.apiError)toast('Audius chưa kết nối. Em thử thêm nhạc từ máy nhé');else toast('Đang tải danh sách nhạc…');break;
 case 'play-favorites':playList([...state.favorites].map(getTrack).filter(Boolean));break;
 case 'play-playlist':{const p=state.playlists.find(x=>x.id===id);if(p)playList(p.tracks.map(getTrack).filter(Boolean));break}
 }
}
// Event delegation for static and dynamically rendered controls.
document.addEventListener('click',e=>{
 if(e.target===document.getElementById('modalBackdrop')){closeModal();return}
 if(e.target.classList?.contains('now-overlay')){closeNowPlaying();return}
 const nav=e.target.closest('[data-view]');if(nav&&!nav.disabled){showView(nav.dataset.view);return}
 const act=e.target.closest('[data-action]');if(act&&!act.disabled){handleAction(act.dataset.action,act);return}
});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'){if(state.nowPlayingOpen)closeNowPlaying();closeModal();if(state.queueOpen){state.queueOpen=false;elements.queue.hidden=true}closeMenu();return}
 if(e.key==='Enter'&&e.target.matches('[role="button"][data-action="play-track"]')){e.preventDefault();playTrack(e.target.dataset.id);return}
 const typing=e.target.matches('input,textarea,select,[contenteditable="true"]');
 if(!typing&&e.key==='/'&&!e.metaKey){e.preventDefault();elements.search.focus();return}
 if(!typing&&e.code==='Space'&&!e.metaKey&&!e.ctrlKey){e.preventDefault();togglePlay()}
});
document.getElementById('scrim').addEventListener('click',closeMenu);
document.getElementById('searchForm').addEventListener('submit',e=>{e.preventDefault();searchMusic(elements.search.value)});
document.addEventListener('submit',e=>{if(e.target.id==='youtubeLinkForm'){e.preventDefault();const field=e.target.querySelector('input');if(field)openYouTubeURL(field.value)}});
elements.upload.addEventListener('change',e=>importFiles(e.target.files));
elements.audio.addEventListener('play',()=>{if(getTrack(state.current)?.source?.startsWith('youtube'))return;state.isPlaying=true;updatePlayer()});
elements.audio.addEventListener('pause',()=>{state.isPlaying=false;updatePlayer()});
elements.audio.addEventListener('timeupdate',()=>{document.getElementById('currentTime').textContent=formatTime(elements.audio.currentTime);if(elements.audio.duration){elements.seek.value=Math.round(elements.audio.currentTime/elements.audio.duration*1000);updateRange(elements.seek)}updateNowPlayingUI()});
elements.audio.addEventListener('loadedmetadata',()=>{if(state.current){const t=getTrack(state.current);if(t&&!t.duration)t.duration=elements.audio.duration||0}updatePlayer()});
elements.audio.addEventListener('ended',()=>{if(state.repeat==='one'){elements.audio.currentTime=0;elements.audio.play().catch(()=>{});return}playAdjacent(1)});
elements.audio.addEventListener('error',async ()=>{if(!state.current||elements.audio.dataset.ignoreError==='1')return;const t=getTrack(state.current);if(!t||t.source?.startsWith('youtube'))return;if(t.source==='audius'&&!elements.audio.dataset.fallbackTried){elements.audio.dataset.fallbackTried='1';try{await tryAudiusFallback(t.id);return}catch{}}toast('Không thể phát nguồn này; em thử bài khác hoặc mở nhạc từ máy nhé')});
elements.seek.addEventListener('input',()=>{updateRange(elements.seek);if(elements.audio.duration){elements.audio.currentTime=Number(elements.seek.value)/1000*elements.audio.duration;document.getElementById('currentTime').textContent=formatTime(elements.audio.currentTime)}});
document.addEventListener('input',e=>{if(e.target.id==='nowSeek'&&elements.audio.duration){elements.audio.currentTime=Number(e.target.value)/1000*elements.audio.duration;updateRange(e.target);updateNowPlayingUI()}});
elements.volume.addEventListener('input',()=>{elements.audio.volume=Number(elements.volume.value)/100;state.muted=false;elements.audio.muted=false;updateRange(elements.volume);document.getElementById('muteBtn').innerHTML=icon(elements.audio.volume===0?'mute':'volume');safeSet(KEY+'volume',elements.audio.volume)});
document.addEventListener('dragover',e=>{if([...e.dataTransfer?.types||[]].includes('Files'))e.preventDefault()});
document.addEventListener('drop',e=>{if([...e.dataTransfer?.types||[]].includes('Files')){e.preventDefault();importFiles(e.dataTransfer.files)}});
if('mediaSession' in navigator){const actions={play:()=>togglePlay(),pause:()=>{if(!getTrack(state.current)?.source?.startsWith('youtube'))elements.audio.pause()},previoustrack:()=>playAdjacent(-1),nexttrack:()=>playAdjacent(1),seekto:details=>{if(!getTrack(state.current)?.source?.startsWith('youtube')&&Number.isFinite(details.seekTime))elements.audio.currentTime=details.seekTime}};for(const [name,fn] of Object.entries(actions)){try{navigator.mediaSession.setActionHandler(name,fn)}catch{}}}
if(nativeTheme.addEventListener)nativeTheme.addEventListener('change',()=>{if(state.theme==='system')applyTheme()});
// Startup.
async function start(){putIcons();elements.audio.volume=Math.min(1,Math.max(0,safeGet(KEY+'volume',.76)));elements.volume.value=Math.round(elements.audio.volume*100);updateRange(elements.volume);updateRange(elements.seek);applyTheme();render();updatePlayer();await initLocal();render();fetchTrending();const deep=new URLSearchParams(location.search).get('youtube');if(/^[a-zA-Z0-9_-]{11}$/.test(deep||''))openYouTubeURL('https://www.youtube.com/watch?v='+deep)}
start().catch(e=>{console.error('LonMusics initialization',e);toast('Khởi tạo chưa hoàn tất. Hãy tải lại trang nhé')});
