/**
 * T4 TANUSHI ARCHITECTURAL SYSTEMS
 * Full 10/10 Interactive Script (Cleaned & Consolidated)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. SCROLL PROGRESS INDICATOR & HEADER OBSERVER
     ========================================================= */
  const progressBar = document.getElementById('scrollProgress');
  const mainHeader = document.getElementById('mainHeader');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
    }

    if (mainHeader) {
      if (window.scrollY > 30) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });


  /* =========================================================
     2. MEGA MENU & TAB ENGINE
     ========================================================= */
  const navItems = document.querySelectorAll('.nav-item');

  function closeAllMenus() {
    navItems.forEach(item => item.classList.remove('is-open'));
  }

  navItems.forEach(item => {
    const trigger = item.querySelector('.nav-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = item.classList.contains('is-open');
        closeAllMenus();
        if (!isOpen) {
          item.classList.add('is-open');
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      closeAllMenus();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllMenus();
      if (typeof closeModal === 'function') closeModal();
    }
  });

  // Dynamic tab content mapping for "Produktet" megamenu
  const megaMenuData = {
    "dritare-dyer": {
      heading: "SIPAS LLOJIT",
      typologies: [
        { label: "Me<br>mentesha", icon: `<rect x="6" y="6" width="28" height="28" rx="2"/><line x1="20" y1="6" x2="20" y2="34"/><circle cx="9" cy="12" r="1.5" fill="#004F8C"/><circle cx="9" cy="28" r="1.5" fill="#004F8C"/>` },
        { label: "Me<br>Rrëshqitje", icon: `<rect x="6" y="6" width="28" height="28" rx="2"/><line x1="16" y1="6" x2="16" y2="34"/><line x1="24" y1="6" x2="24" y2="34"/><line x1="12" y1="36" x2="28" y2="36" stroke-width="2.5"/>` },
        { label: "Me Palosje", icon: `<rect x="6" y="6" width="28" height="28" rx="2"/><line x1="13" y1="6" x2="13" y2="34"/><line x1="20" y1="6" x2="20" y2="34"/><line x1="27" y1="6" x2="27" y2="34"/>` }
      ],
      complements: ["Grila me rrotulluese / Grilat standarte", "Sistemet për mbrojtje ndaj insekteve", "Pragjet e dritareve"],
      customizations: ["Aksesorë origjinalë", "Trajtimet sipërfaqësore RAL", "Opsionet e xhamit selektiv"],
      featureTitle: "Dritare & Dyer",
      featureImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
      featureLink: "https://t4tanushi.al/dyer-dhe-dritare-me-shine/"
    },
    "dyert-hyrjes": {
      heading: "SERITË E DYERVE TË HYRJES",
      typologies: [
        { label: "Blinduara", icon: `<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="15" cy="12" r="1.5" fill="#004F8C"/>` },
        { label: "Pivot", icon: `<rect x="6" y="3" width="12" height="18" rx="1"/><line x1="9" y1="3" x2="9" y2="21"/>` },
        { label: "Paneli", icon: `<rect x="5" y="3" width="14" height="18" rx="2"/><line x1="5" y1="9" x2="19" y2="9"/><line x1="5" y1="15" x2="19" y2="15"/>` }
      ],
      complements: ["Kyçe biometrike me gjurmë gishti", "Doreza vertikale inoksi deri 2m", "Mentesha të fshehura"],
      customizations: ["Veshje me fletë qeramike", "Veshje paneli alumini", "Xham i blinduar anti-plumb"],
      featureTitle: "Dyert e Hyrjes",
      featureImg: "https://t4tanushi.al/wp-content/uploads/2021/11/WhatsApp-Image-2020-07-04-at-2.43.28-PM.jpg",
      featureLink: "https://t4tanushi.al/dyer-paneli/"
    },
    "mbrojtje-zjarri": {
      heading: "STANDARDI I REZISTENCËS",
      typologies: [
        { label: "EI 30", icon: `<path d="M12 2c-4 4-6 7-6 10a6 6 0 0 0 12 0c0-3-2-6-6-10z"/>` },
        { label: "EI 60", icon: `<path d="M12 2c-4 4-6 7-6 10a6 6 0 0 0 12 0c0-3-2-6-6-10z"/><circle cx="12" cy="14" r="2"/>` },
        { label: "EI 120", icon: `<path d="M12 2c-4 4-6 7-6 10a6 6 0 0 0 12 0c0-3-2-6-6-10z"/><circle cx="12" cy="13" r="3"/>` }
      ],
      complements: ["Sistem automatik mbylljeje", "Pllaka shkumëzuese intumeshente", "Sensore tymi"],
      customizations: ["Xham anti-zjarr pirobel", "Kornizë çeliku e veshur me alumin", "Certifikim evropian EN 1634"],
      featureTitle: "Sisteme Kundër Zjarrit",
      featureImg: "https://t4tanushi.al/wp-content/uploads/2021/11/NSP_3636.jpg",
      featureLink: "https://t4tanushi.al/produkte/"
    },
    "grilat": {
      heading: "SISTEMET E HIEZIMIT",
      typologies: [
        { label: "Kasetë e Jashtme", icon: `<rect x="4" y="4" width="16" height="6" rx="1"/><line x1="4" y1="14" x2="20" y2="14"/><line x1="4" y1="18" x2="20" y2="18"/>` },
        { label: "Monobllok", icon: `<rect x="4" y="3" width="16" height="8" rx="1"/><rect x="6" y="11" width="12" height="10"/>` },
        { label: "Lamele Alumini", icon: `<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="3" y1="14" x2="21" y2="14"/><line x1="3" y1="18" x2="21" y2="18"/>` }
      ],
      complements: ["Motorë Somfy me telekomandë", "Izolim poliuretani me densitet të lartë", "Hapje emergjence manuale"],
      customizations: ["Lamele të mbushura me shkumë", "Grila të ekstruduara anti-vjedhje", "Integrim në Smart Home"],
      featureTitle: "Grilat & Rulotat",
      featureImg: "https://t4tanushi.al/wp-content/uploads/2021/11/20140819_185516.jpg",
      featureLink: "https://t4tanushi.al/grila/"
    },
    "insekteve": {
      heading: "TIPOLOGJIA E RRJETAVE",
      typologies: [
        { label: "Plise Horizontale", icon: `<path d="M4 4l4 16 4-16 4 16 4-16"/>` },
        { label: "Rulot Vertikale", icon: `<rect x="4" y="3" width="16" height="4"/><line x1="12" y1="7" x2="12" y2="21"/><rect x="6" y="20" width="12" height="2"/>` },
        { label: "Fikse / Magnetike", icon: `<rect x="4" y="4" width="16" height="16" rx="1"/><line x1="4" y1="4" x2="20" y2="20"/>` }
      ],
      complements: ["Rrjetë me fibra qelqi të veshur me PVC", "Frena hidraulike amortizuese", "Guarnicione me furçë anësore"],
      customizations: ["Rrjetë anti-polen", "Rrjetë e përforcuar për kafshët shtëpiake", "Profile alumini me ngjyra RAL"],
      featureTitle: "Mbrojtje Ndaj Insekteve",
      featureImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
      featureLink: "https://t4tanushi.al/produkte/"
    },
    "fasadat": {
      heading: "SISTEMET E FASADAVE",
      typologies: [
        { label: "Strukturore", icon: `<rect x="3" y="3" width="18" height="18"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/>` },
        { label: "Gjysmë-Strukturore", icon: `<rect x="3" y="3" width="18" height="18"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/>` },
        { label: "Spider / Kabllo", icon: `<circle cx="12" cy="12" r="3"/><line x1="4" y1="4" x2="10" y2="10"/><line x1="20" y1="4" x2="14" y2="10"/><line x1="4" y1="20" x2="10" y2="14"/><line x1="20" y1="20" x2="14" y2="14"/>` }
      ],
      complements: ["Dritare të fshehura me hapje nga jashtë", "Kapëse strukturale inoksi AISI 316", "Guarnicione EPDM dy-shkallëshe"],
      customizations: ["Xham me kontroll diellor Stopray", "Brinjë xhami mbajtëse", "LED arkitektonik i integruar"],
      featureTitle: "Fasadat e Varura",
      featureImg: "https://t4tanushi.al/wp-content/uploads/2021/11/NSP_3636.jpg",
      featureLink: "https://t4tanushi.al/fasade-alumini/"
    },
    "jashtme": {
      heading: "HAPËSIRAT E JASHTME",
      typologies: [
        { label: "Pergola AERO", icon: `<line x1="3" y1="5" x2="21" y2="5"/><line x1="5" y1="5" x2="5" y2="20"/><line x1="19" y1="5" x2="19" y2="20"/><path d="M5 8l14-3M5 12l14-3M5 16l14-3"/>` },
        { label: "Gijotina", icon: `<rect x="4" y="3" width="16" height="18"/><line x1="4" y1="12" x2="20" y2="12"/><path d="M12 7v3M12 14v3"/>` },
        { label: "Kangjella", icon: `<line x1="3" y1="20" x2="21" y2="20"/><rect x="5" y="8" width="14" height="8"/><line x1="5" y1="20" x2="5" y2="4"/><line x1="19" y1="20" x2="19" y2="4"/>` }
      ],
      complements: ["Drenazh i brendshëm shiu në kolona", "Perde mbrojtëse anësore ZIP Screen", "Ngrohës me rreze infra të kuqe"],
      customizations: ["Lamele me shkumë izoluese", "Sensorë ere dhe bore automatikë", "Dysheme me kompozit WOODALUX"],
      featureTitle: "Zgjidhje për Jashtë",
      featureImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80",
      featureLink: "https://t4tanushi.al/produkte/"
    },
    "ndarese": {
      heading: "NDARJET E BRENDSHME",
      typologies: [
        { label: "Pa Profile", icon: `<line x1="4" y1="3" x2="20" y2="3"/><line x1="4" y1="21" x2="20" y2="21"/><line x1="12" y1="3" x2="12" y2="21" stroke-dasharray="2 2"/>` },
        { label: "Acoustic Double", icon: `<rect x="5" y="3" width="6" height="18"/><rect x="13" y="3" width="6" height="18"/>` },
        { label: "Me Rrjetë Metalike", icon: `<rect x="4" y="4" width="16" height="16"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="4" y1="16" x2="20" y2="16"/><line x1="10" y1="4" x2="10" y2="20"/><line x1="16" y1="4" x2="16" y2="20"/>` }
      ],
      complements: ["Dyer xhami me frena në dysheme", "Profile me trashësi minimale 25mm", "Kondensim akustik 42 dB"],
      customizations: ["Xham inteligjent me errësim Smart Glass", "Xham i satinuar me rripa opake", "Aksesorë të zinj mat (Industrial Black)"],
      featureTitle: "Ndarëse Ambienti",
      featureImg: "https://t4tanushi.al/wp-content/uploads/2021/11/DSC07733.jpg",
      featureLink: "https://t4tanushi.al/ndarje-xhami/"
    }
  };

  const sidebarKeyMap = [
    "dritare-dyer", "dyert-hyrjes", "mbrojtje-zjarri", 
    "grilat", "insekteve", "fasadat", "jashtme", "ndarese"
  ];

  function renderMegamenuContent(key, container) {
    const data = megaMenuData[key];
    if (!data) return;

    const colContent1 = container.querySelectorAll('.mega-col-content')[0];
    if (colContent1) {
      const heading = colContent1.querySelector('.mega-heading');
      if (heading) heading.textContent = data.heading;

      const typologyRow = colContent1.querySelector('.typology-row');
      if (typologyRow) {
        typologyRow.innerHTML = data.typologies.map(t => `
          <a href="${data.featureLink}" class="typology-card">
            <div class="typology-circle">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" stroke="#004F8C" stroke-width="2">
                ${t.icon}
              </svg>
            </div>
            <span>${t.label}</span>
          </a>
        `).join('');
      }
    }

    const colContent2 = container.querySelectorAll('.mega-col-content')[1];
    if (colContent2) {
      const lists = colContent2.querySelectorAll('.mega-list');
      if (lists[0]) {
        lists[0].innerHTML = data.complements.map(c => `<li><a href="${data.featureLink}">${c}</a></li>`).join('');
      }
      if (lists[1]) {
        lists[1].innerHTML = data.customizations.map(c => `<li><a href="${data.featureLink}">${c}</a></li>`).join('');
      }
    }

    const featureCol = container.querySelector('.mega-col-feature');
    if (featureCol) {
      const img = featureCol.querySelector('.feature-card img');
      const title = featureCol.querySelector('.feature-overlay h3');
      const link = featureCol.querySelector('.feature-link');
      if (img) img.src = data.featureImg;
      if (title) title.textContent = data.featureTitle;
      if (link) link.href = data.featureLink;
    }
  }

  const produktetMegamenu = document.querySelector('.nav-item[data-menu="produktet"] .mega-menu');
  if (produktetMegamenu) {
    const sidebarBtns = produktetMegamenu.querySelectorAll('.sidebar-btn');
    sidebarBtns.forEach((btn, index) => {
      const activateTab = (e) => {
        if (e) e.stopPropagation();
        sidebarBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const key = sidebarKeyMap[index] || "dritare-dyer";
        renderMegamenuContent(key, produktetMegamenu);
      };

      btn.addEventListener('click', activateTab);
      btn.addEventListener('mouseenter', activateTab);
    });
  }


  /* =========================================================
     3. MOBILE APP DRAWER INTERACTION
     ========================================================= */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
      const isOpen = navMenu.classList.contains('mobile-active');
      mobileMenuBtn.innerHTML = isOpen
        ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
        : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
    });
  }


  /* =========================================================
     4. HERO SLIDESHOW LOGIC
     ========================================================= */
  const heroSlides = [
    {
      tag: "01 // XHAMI STRUKTUROR • RESIDENCIAL",
      title: "Vetrata Xhami<br/><span>Panoramike</span><br/>Pa Kornizë",
      desc: "Zgjidhje luksoze me xham të temperuar dhe shina inoksi të integruara plotësisht në kuotën zero të dyshemesë për pamje të pandërprerë.",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2200&q=80"
    },
    {
      tag: "02 // DYER & DRITARE ME SHINË",
      title: "Sisteme me Shinë<br/><span>Alumini</span><br/>Termik",
      desc: "Hapje të lehta me rrëshqitje paralele me veti të shkëlqyera termoizoluese dhe mbrojtje maksimale akustike nga erërat bregdetare.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=80"
    },
    {
      tag: "03 // FASADA STRUKTURORE",
      title: "Fasada të Varura<br/><span>Xhami & Grila</span><br/>Alumini",
      desc: "Konstruksione të avancuara me profile poliamidi për qendra tregtare, kulla dhe godina afariste që plotësojnë standardet evropiane.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=80"
    },
    {
      tag: "04 // THE ELLINIKON EXPERIENCE",
      title: "The Ellinikon<br/><span>Experience</span><br/>Center",
      desc: "Europe’s landmark metropolitan urban development. T4 TANUSHI designed custom architectural curtain walls and sustainable circular profiles to satisfy rigorous LEED Platinum energy efficiency targets.",
      img: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2200&q=80"
    }
  ];

  let currentSlide = 0;
  let heroTimer = null;

  const heroImage = document.getElementById('heroImage');
  const heroTag = document.getElementById('heroTag');
  const heroTitle = document.getElementById('heroTitle');
  const heroDescription = document.getElementById('heroDescription');
  const heroThumbs = document.querySelectorAll('.hero-thumb');

  window.switchHeroSlide = function(index) {
    currentSlide = index;
    const slide = heroSlides[currentSlide];
    if (!slide || !heroImage) return;

    heroImage.style.opacity = '0.35';
    heroImage.style.transform = 'scale(1.02)';

    setTimeout(() => {
      heroImage.src = slide.img;
      if (heroTag) heroTag.innerHTML = slide.tag;
      if (heroTitle) heroTitle.innerHTML = slide.title;
      if (heroDescription) heroDescription.innerHTML = slide.desc;
      heroImage.style.opacity = '1';
      heroImage.style.transform = 'scale(1)';
    }, 180);

    heroThumbs.forEach((thumb, i) => {
      if (i === currentSlide) {
        thumb.classList.add('is-active');
      } else {
        thumb.classList.remove('is-active');
      }
    });

    restartTimer();
  };

  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let idx = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
      switchHeroSlide(idx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let idx = (currentSlide + 1) % heroSlides.length;
      switchHeroSlide(idx);
    });
  }

  function startTimer() {
    heroTimer = setInterval(() => {
      let nextIdx = (currentSlide + 1) % heroSlides.length;
      switchHeroSlide(nextIdx);
    }, 7000);
  }

  function restartTimer() {
    if (heroTimer) clearInterval(heroTimer);
    startTimer();
  }

  startTimer();


  /* =========================================================
     5. CATALOG PRODUCT FILTER
     ========================================================= */
  window.filterProducts = function(category, btn) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => t.classList.remove('is-active'));
    if (btn) btn.classList.add('is-active');

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'flex';
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.opacity = '1';
        }, 50);
      } else {
        card.style.display = 'none';
      }
    });
  };


  /* =========================================================
     6. PRODUCT GALLERY THUMBNAILS & ACCORDION MANAGEMENT
     ========================================================= */
  window.changeImage = function(element, src) {
    const mainImg = document.getElementById('mainImage');
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.thumb-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  };

  // Modern Accordion / FAQ Handler (Supports both details/summary & standard headers)
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const symbol = header.querySelector('span:last-child');
      if (content) {
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
        if (symbol) {
          symbol.textContent = isOpen ? '+' : '-';
        }
      }
    });
  });

  const generalFaqItems = document.querySelectorAll('.faq-item');
  generalFaqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        generalFaqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });


  /* =========================================================
     7. INQUIRY MODAL ENGINE
     ========================================================= */
  const modal = document.getElementById('inquiryModal');

  window.openModal = function() {
    if (modal) {
      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function() {
    if (modal) {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  window.handleInquirySubmit = function(e) {
    e.preventDefault();
    closeModal();
    showToast("Kërkesa u regjistrua me sukses! Do t'ju kontaktojmë brenda 24 orëve me preventivin e plotë.");
    e.target.reset();
  };

  window.handleSubscribe = function(e) {
    e.preventDefault();
    const input = document.getElementById('newsletterEmail');
    const msg = document.getElementById('subscribeMsg');
    if (input && input.value.trim() !== "") {
      if (msg) {
        msg.textContent = "Faleminderit! U regjistruat me sukses në Architectural Dispatch.";
        msg.style.display = "block";
      }
      showToast("Email-i juaj u regjistrua me sukses.");
      input.value = "";
    }
  };

  function showToast(text) {
    const existing = document.querySelector('.toast-msg');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span>${text}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 350);
    }, 4500);
  }


  /* =========================================================
     8. 10/10 COUNTER-UP ENGINE (PURE VANILLA)
     ========================================================= */
  const counters = document.querySelectorAll('.ring-val');

  if (counters.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.textContent.trim();
          const match = text.match(/(\d+)/);

          if (match) {
            const target = parseInt(match[0], 10);
            const prefix = text.split(match[0])[0] || '';
            const suffix = text.split(match[0])[1] || '';
            const duration = 2000;
            const start = performance.now();

            const step = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const val = Math.floor(easeOut * target);

              el.textContent = `${prefix}${val}${suffix}`;

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                el.textContent = text;
              }
            };

            requestAnimationFrame(step);
          }
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
  }

});