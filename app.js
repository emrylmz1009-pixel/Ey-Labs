/**
 * EMIR // PORTFOLIO JAVASCRIPT ENGINE
 * Web Audio API, Proje Filtreleme, Canlı Arama, Modal ve AI Prompt Kopyalama
 */

// ==========================================
// 1. PROJE DETAY VERİ SETİ (ARCHITECTURE DATA)
// ==========================================
const PROJECTS_DATA = {
  swipeclean: {
    title: "Swipe Clean",
    tagline: "Tinder Tarzı Akıllı Galeri & Video Temizleyici",
    icon: "⚡",
    category: "Mobil & Modern Web",
    badges: ["Kotlin Compose", "Web 3D Physics", "Scoped Storage", "Web Audio API"],
    description: "Kullanıcıların telefonlarındaki gereksiz fotoğraf ve videoları eğlenceli ve sezgisel bir biçimde temizlemesini sağlayan, Scoped Storage mimarisi ve 3D kart fiziğiyle donatılmış modern bir depolama optimize edicisi.",
    features: [
      "Tinder Tarzı 3D Kart Kaydırma: Sağa kaydır (Kalsın), Sola kaydır (Sil sepetine at). 60 FPS pürüzsüz PointerEvents desteği.",
      "Web Audio API Ses Sentezleyici: Sıfır MP3/WAV dosyasıyla doğrudan tarayıcı ses çipiyle üretilen neon swoosh ve zafer efektleri.",
      "Dahili Video Önizleyici: Desteye video geldiğinde anlık rozet gösterimi ve çift tıklamayla tam ekran oynatıcı.",
      "Kategorik Filtreleme: Ekran görüntüleri, büyük dosyalar (>3MB) ve videoları anında ayıklama.",
      "Silinecekler Sepeti & Canlı Boyut Hesabı: Sola atılan medyaları toplayıp tek tıkla silme ve kazanılan hafızayı anlık gösterme.",
      "%100 Çevrimdışı Gizlilik: Hiçbir sunucuya bağlanmaz, tüm fotoğraflar cihaz içinde işlenir."
    ],
    tech: ["Android Kotlin", "Jetpack Compose", "HTML5", "CSS3 Glassmorphism", "ES6+ JavaScript", "Web Audio API", "Android MediaStore"],
    links: {
      apk: "apks/SwipeClean.apk"
    }
  },

  stegovault: {
    title: "StegoVault",
    tagline: "Siber Steganografi, Şifreleme ve Adli Röntgen Dedektifi",
    icon: "🛡️",
    category: "Siber Güvenlik & Web",
    badges: ["LSB Steganografi", "AES-256-GCM", "Canvas Pixel Engine", "Steganaliz"],
    description: "PNG ve JPG fotoğrafların en önemsiz bitlerini (Least Significant Bit) manipüle ederek pikseller arasına gözle fark edilemeyecek gizli mesaj veya dosya (PDF, ZIP, Görsel) gömen ve çözen askeri düzey güvenlik platformu.",
    features: [
      "LSB Piksel Manipülasyonu: 1-Bit (yüksek gizlilik) ve 2-Bit (yüksek kapasite) veri gömme modları.",
      "Askeri Düzey Parola Koruması: Web Crypto API (AES-256-GCM + PBKDF2) ile steganografi fark edilse dahi kırılamayan şifreleme.",
      "Canlı Kapasite Hesabı: Yüklenen fotoğrafın taşıyabileceği byte limitini ve seçilen dosyanın doluluk oranını canlı hesaplama.",
      "Steganaliz & Röntgen Dedektifi: Neon vurgu haritası, 64x piksel renk farkı büyütücü ve 0. bit gürültü dedektörü.",
      "Kayıpsız PNG Çıktısı: Veri kaybı yaşanmaması için sıkıştırmasız indirme desteği."
    ],
    tech: ["HTML5 Canvas API", "Web Crypto API", "AES-256-GCM", "PBKDF2", "Kotlin Jetpack Compose", "Steganaliz Motoru"],
    links: {
      apk: "apks/StegoVault.apk"
    }
  },

  fastshare: {
    title: "FastShare (AirDrop LAN)",
    tagline: "Yerel Wi-Fi Üzerinden Kotasız Dosya ve Pano Aktarımı",
    icon: "📡",
    category: "Mobil & Ağ Protokolleri",
    badges: ["Kotlin", "Gömülü HTTP Server", "CameraX QR", "Foreground Service"],
    description: "Android telefon ile bilgisayar (Windows, Mac, Linux) arasında internet harcamadan, bulut veya hesap gerektirmeden yerel Wi-Fi üzerinden yüksek hızlı veri ve metin panosu aktarımı sağlayan AirDrop alternatifi.",
    features: [
      "Kotasız ve İnternetsiz Hızlı Aktarım: Aynı Wi-Fi ağındaki cihazlar arasında doğrudan yerel soket iletişimi.",
      "Tek Tıkla Pano (Clipboard) Eşitleme: Telefondan kopyalanan metni anında bilgisayara veya tersine aktarma.",
      "CameraX + ZXing QR Tarayıcı: IP adresi girmeye gerek kalmadan kamera ile QR kod okutarak saniyeler içinde eşleşme.",
      "Dahili Gömülü HTTP Sunucusu: Bilgisayar tarafında hiçbir program kurmadan sadece tarayıcı üzerinden dosya alıp gönderebilme.",
      "Android Foreground Service: Ekran kapalıyken bile kesintisiz arka plan dosya transferi."
    ],
    tech: ["Kotlin", "Jetpack Compose", "Gömülü HTTP Server", "CameraX", "ZXing", "Android Services", "Wi-Fi Direct"],
    links: {
      apk: "apks/FastShare.apk"
    }
  },

  eduai: {
    title: "EduAI",
    tagline: "MEB Müfredatlı Yapay Zeka Destekli Sınav & Eğitim Platformu",
    icon: "🎓",
    category: "Yapay Zeka & Hibrit Mobil",
    badges: ["React 18", "Capacitor APK", "AI Vision", "PDF.js", "MEB Müfredat"],
    description: "Öğrencilerin okul yazılılarına hazırlanmasını, eksik konularını tespit etmesini sağlayan; görsel soru çözücü, sesli mülakat ve resmi EBA formatında sertifika üreten çok yönlü AI eğitim asistanı.",
    features: [
      "Görsel Soru Çözücü (Vision AI): Kamera ile çekilen ders sorularını adım adım yapay zeka ile analiz edip çözme.",
      "Sözlü Sınav Simülatörü: Öğrenciyi sesli ve metin tabanlı sözlüye kaldırarak gerçek sınav ortamı sunma.",
      "MEB Müfredat Kazanım Takibi: Sınıf ve ders bazında müfredat haritası ve eksik konu analizi.",
      "Sesli Not & Döküman Asistanı: Ses kayıtlarını metne dökme ve PDF ders notları üzerinden soru-cevap yapma.",
      "EBA Portfolyo & PDF Sertifika Üretici: EBA profiline yüklenebilecek resmi formatta çalışma karnesi ve başarı sertifikası oluşturma.",
      "Pomodoro Focus Room & Akıllı Flashcards: İnteraktif çalışma araçları ve hedef takip çizelgesi."
    ],
    tech: ["React 18", "Vite", "Tailwind CSS", "Capacitor Android", "Lucide Icons", "PDF.js", "EmailJS"],
    links: {
      apk: "apks/EduAI.apk"
    }
  },

  nutriscan: {
    title: "NutriScan",
    tagline: "Akıllı Barkod Tarayıcı, Besin Değerleri ve Helal/Vegan Analiz Asistanı",
    icon: "🥗",
    category: "Mobil & Sağlık Teknolojileri",
    badges: ["Kotlin Compose", "CameraX Barkod", "OpenFoodFacts API", "Nutri-Score & NOVA"],
    description: "Tükettiğiniz gıdaların barkodunu telefon kamerasıyla saniyeler içinde tarayarak 100g makro/mikro besin değerlerini döken, gıdanın ne kadar işlendiğini (NOVA), Nutri-Score kalite puanını ve otomatik vegan/helal uygunluk analizini sunan yerli Android Native sağlık asistanı.",
    features: [
      "CameraX & ML Kit ile Ultra Hızlı Barkod Okuma: Ürün ambalajındaki barkodu kameraya tuttuğunuz anda sıfır gecikmeyle yakalama ve çözümleme.",
      "Kapsamlı 100g Besin Analizi: Kalori (kcal), Protein, Yağ, Doymuş Yağ, Karbonhidrat, Şeker, Lif ve Sodyum/Tuz oranlarını anlık görselleştirme.",
      "Nutri-Score (A-E) & NOVA Sınıflandırması: Ürünün besin kalitesini ve işlenme derecesini (Grup 1 Doğal'dan Grup 4 Aşırı İşlenmiş'e) renkli göstergelerle sunma.",
      "Yapay Zeka Destekli Vegan & Helal Analizi: İçindekiler listesini tarayarak hayvansal katkı, şüpheli emülgatör (E471, jelatin, karmin vb.) veya alkol riskini otomatik denetleme ve yüzde karnesi çıkarma.",
      "Alerjen ve E-Kodu Rehberi: Üründeki alerjenleri ve E-numaralı katkı maddelerini sağlık risk seviyelerine göre listeleme.",
      "OpenFoodFacts Küresel & Yerel Veritabanı Entegrasyonu: Milyonlarca market ürünü ve Türk markalarını içeren geniş ürün hafızası."
    ],
    tech: ["Android Kotlin", "Jetpack Compose (Material 3)", "CameraX", "ML Kit Barcode", "OpenFoodFacts API", "Kotlin Coroutines & Flow", "Coil"],
    links: {
      apk: "apks/NutriScan.apk"
    }
  }
};

// Master Prompt Metni
const MASTER_PROMPT_TEXT = `Sen kıdemli bir UI/UX tasarımcısı ve modern Frontend geliştiricisisin (Senior Full-Stack & Creative Developer).
Aşağıda yerel geliştirme ortamımda sıfırdan geliştirdiğim 5 ana projenin mimarisi yer alıyor:

1. SWIPE CLEAN: Tinder tarzı akıllı galeri temizleyici. (Android Kotlin Compose + Web 3D PointerEvents & Web Audio API).
2. STEGOVAULT: Görsellerin pikselleri (LSB) arasına askeri düzey (AES-256-GCM) veri gömen steganografi ve röntgen analiz aracı.
3. AIRDROP LAN / FASTSHARE: İnternet kotası harcamadan yerel Wi-Fi üzerinden Android ve PC arasında dosya ve pano aktarımı yapan gömülü sunuculu Kotlin uygulaması.
4. EDUAI: Görsel soru çözücü, sözlü sınav simülatörü, MEB müfredatı ve EBA uyumlu PDF sertifika üreten React 18 + Capacitor eğitim asistanı.
5. NUTRISCAN: Kamera ile barkod okuyup 100g besin değerlerini, Nutri-Score, NOVA işlenme seviyesi, alerjen, E-kodları ve Helal/Vegan uygunluk analizini çıkaran Kotlin Jetpack Compose Android Native sağlık asistanı.

Tüm projeler %100 çevrimdışı/güvenli, cihaz içi gizlilik odaklı ve yüksek performanslı mimarilerle geliştirilmiştir.`;

// ==========================================
// 2. WEB AUDIO API SES MOTORU (SFX ENGINE)
// ==========================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('sound_enabled') !== 'false';
  }

  init() {
    if (!this.ctx && typeof AudioContext !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('sound_enabled', this.enabled);
    if (this.enabled) {
      this.init();
      this.playClick();
    }
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  playWhoosh() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.12);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  playChime() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + (i * 0.04);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.04, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.2);
    });
  }
}

const sfx = new SoundFX();

// ==========================================
// 3. FİLTRELEME VE CANLI ARAMA
// ==========================================
function setupFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('projectSearchInput');
  const cards = document.querySelectorAll('.project-card');

  let activeFilter = 'all';
  let searchTerm = '';

  function filterProjects() {
    cards.forEach(card => {
      const tags = card.getAttribute('data-tags') || '';
      const title = card.querySelector('.project-title').textContent.toLowerCase();
      const tagline = card.querySelector('.project-tagline').textContent.toLowerCase();
      const desc = card.querySelector('.project-desc').textContent.toLowerCase();
      const techTags = Array.from(card.querySelectorAll('.tech-pill')).map(p => p.textContent.toLowerCase()).join(' ');

      const matchesFilter = activeFilter === 'all' || tags.includes(activeFilter);
      const combinedText = `${title} ${tagline} ${desc} ${techTags}`;
      const matchesSearch = searchTerm === '' || combinedText.includes(searchTerm.toLowerCase());

      if (matchesFilter && matchesSearch) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playWhoosh();
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      filterProjects();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.trim();
    filterProjects();
  });
}

// ==========================================
// 4. MODAL DETAY GÖRÜNÜMÜ
// ==========================================
function openProjectModal(projectId) {
  const project = PROJECTS_DATA[projectId];
  if (!project) return;

  sfx.playChime();
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');

  let apkBtn = '';
  if (project.links.apk) {
    apkBtn = `<a href="${project.links.apk}" download class="btn btn-primary">📲 Android APK İndir</a>`;
  }

  modalBody.innerHTML = `
    <div class="modal-header-top">
      <div class="modal-icon">${project.icon}</div>
      <div>
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-subtitle">${project.tagline}</p>
      </div>
    </div>

    <div class="card-badges" style="margin-bottom: 20px;">
      ${project.badges.map(b => `<span class="badge badge-cyan">${b}</span>`).join('')}
    </div>

    <h4 class="modal-section-title">Mimari ve Çözülen Problem</h4>
    <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
      ${project.description}
    </p>

    <h4 class="modal-section-title">Öne Çıkan Özellikler & Fonksiyonlar</h4>
    <ul class="modal-features-list">
      ${project.features.map(f => `<li>${f}</li>`).join('')}
    </ul>

    <h4 class="modal-section-title">Kullanılan Teknolojiler</h4>
    <div class="tech-tags">
      ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
    </div>

    <div class="modal-actions">
      ${apkBtn}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  sfx.playClick();
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Modal dışına tıklayınca kapatma
document.getElementById('projectModal').addEventListener('click', (e) => {
  if (e.target.id === 'projectModal') {
    closeProjectModal();
  }
});

// ESC tuşu ile modal kapatma
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// ==========================================
// 5. TOAST VE PROMPT KOPYALAMA
// ==========================================
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  toast.querySelector('.toast-message').textContent = message;
  toast.classList.add('show');
  sfx.playChime();

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function copyPromptToClipboard() {
  navigator.clipboard.writeText(MASTER_PROMPT_TEXT).then(() => {
    showToast("Master AI Promptu panoya kopyalandı!");
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = MASTER_PROMPT_TEXT;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast("Master AI Promptu panoya kopyalandı!");
  });
}

// ==========================================
// 6. SAYI SAYMA ANİMASYONU (STATS COUNTER)
// ==========================================
function animateCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(el => {
    const targetText = el.getAttribute('data-target');
    const target = parseInt(targetText);
    if (isNaN(target)) return;

    let count = 0;
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        el.textContent = targetText === "100" ? "100%" : (targetText === "60" ? "60 FPS" : target);
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(count);
      }
    }, stepTime);
  });
}

// ==========================================
// 7. SAYFA BAŞLANGICI & ETKİNLİK DİNLEYİCİLERİ
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setupFiltering();
  animateCounters();

  // Prompt Kopyalama Butonları (Opsiyonel)
  const copyBtn = document.getElementById('copyPromptBtn');
  if (copyBtn) copyBtn.addEventListener('click', copyPromptToClipboard);

  const copyCardBtn = document.getElementById('copyPromptCardBtn');
  if (copyCardBtn) copyCardBtn.addEventListener('click', copyPromptToClipboard);

  // Ses Aç/Kapat Butonu
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  const soundLabel = soundBtn.querySelector('.sound-label');

  // Kaydedilen ses durumunu güncelle
  if (!sfx.enabled) {
    soundIcon.textContent = '🔇';
    soundLabel.textContent = 'Ses: Kapalı';
  }

  soundBtn.addEventListener('click', () => {
    const isEnabled = sfx.toggle();
    if (isEnabled) {
      soundIcon.textContent = '🔊';
      soundLabel.textContent = 'Ses: Açık';
      showToast("Ses efektleri aktifleştirildi!");
    } else {
      soundIcon.textContent = '🔇';
      soundLabel.textContent = 'Ses: Kapalı';
      showToast("Ses efektleri kapatıldı.");
    }
  });

  // Tıklamalarda hafif ses efekti
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      sfx.playClick();
    });
  });
});
