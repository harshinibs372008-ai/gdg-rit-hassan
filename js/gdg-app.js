/**
 * GDG on Campus — Rajeev Institute of Technology, Hassan (CSE Department)
 * Interactive Application Controller & Feature Engines
 */

const GDGApp = (() => {
  // LocalStorage keys
  const THEME_KEY = 'gdg_rit_theme';
  const PROJECTS_KEY = 'gdg_rit_solution_projects';
  const MEMBERS_KEY = 'gdg_rit_members';

  // Seed Data: GDG Events
  const EVENTS_DATA = [
    {
      id: 'hackrit-2026',
      title: 'HackRIT 2026: 36-Hour National Innovation Challenge',
      category: 'hackathon',
      categoryLabel: 'Hackathon',
      date: 'Dec 12 - 14, 2026',
      venue: 'APJ Abdul Kalam Auditorium, RIT Hassan',
      speaker: 'Jointly organized with Department of CSE',
      seats: 38,
      desc: 'Annual national collegiate hackathon. Build software solutions addressing the 17 UN SDGs with Google Cloud, Gemini API, and Android Compose.'
    },
    {
      id: 'gemini-study-jam',
      title: 'Google Cloud GenAI & Gemini 2.0 Multimodal Study Jam',
      category: 'cloud',
      categoryLabel: 'Cloud & GenAI',
      date: 'Dec 22, 2026 • 2:00 PM',
      venue: 'High Performance Computing Lab, CSE Dept',
      speaker: 'GDG on Campus Cloud Lead',
      seats: 24,
      desc: 'Free Google Cloud Skills Boost credits provided. Hands-on workshop building agents and multimodal vision apps with Google Gemini API.'
    },
    {
      id: 'android-compose',
      title: 'Modern Android Apps with Jetpack Compose & Kotlin',
      category: 'mobile',
      categoryLabel: 'Android & Flutter',
      date: 'Jan 06, 2027 • 10:30 AM',
      venue: 'Seminar Hall, 2nd Floor, RIT Campus',
      speaker: 'Google Developer Community Mentor',
      seats: 40,
      desc: 'Build declarative user interfaces, implement Material 3 components, and integrate Firebase Authentication in native Android apps.'
    },
    {
      id: 'flutter-firebase',
      title: 'Flutter Cross-Platform Mastery: Mobile, Web & Desktop',
      category: 'mobile',
      categoryLabel: 'Android & Flutter',
      date: 'Jan 15, 2027 • 11:00 AM',
      venue: 'Computer Center 2, RIT Hassan',
      speaker: 'RIT Alumni Software Engineer',
      seats: 32,
      desc: 'Develop a single-codebase application from scratch with state management, Firestore real-time synchronization, and Cloud Functions.'
    },
    {
      id: 'web-vitals',
      title: 'High-Performance Web: Core Web Vitals & Chrome DevTools',
      category: 'web',
      categoryLabel: 'Web & Git',
      date: 'Jan 22, 2027 • 3:00 PM',
      venue: 'Virtual & CSE Seminar Hall',
      speaker: 'GDG Web Development Track Lead',
      seats: 55,
      desc: 'Optimize LCP, INP, and CLS performance metrics, debug memory leaks with Chrome DevTools, and implement modern CSS architectures.'
    },
    {
      id: 'git-opensource',
      title: 'Git & GitHub Onboarding: First Open-Source Contribution',
      category: 'web',
      categoryLabel: 'Web & Git',
      date: 'Feb 02, 2027 • 10:00 AM',
      venue: 'CSE Department Systems Lab',
      speaker: 'GDG Open Source Student Leads',
      seats: 50,
      desc: 'Step-by-step guidance on branching, resolving merge conflicts, crafting pull requests, and contributing to open-source student repositories.'
    }
  ];

  // Seed Data: Solution Challenge Projects
  const DEFAULT_PROJECTS = [
    {
      id: 'proj-1',
      title: 'AgroPulse: AI Crop Disease Detection via Gemini Vision',
      sdg: 'sdg2',
      sdgLabel: 'SDG 2: Zero Hunger',
      lead: 'Praveen Gowda (4RA22CS062)',
      stack: ['Flutter', 'Gemini API', 'Firebase', 'Google Cloud Run'],
      desc: 'Mobile application allowing Hassan farmers to photograph diseased coffee & potato leaves to receive instant diagnosis and organic treatment recommendations.',
      github: 'https://github.com/gdg-rit-hassan/agropulse-ai',
      stars: 52,
      starredByUser: false
    },
    {
      id: 'proj-2',
      title: 'MediScan: Automated Prescription OCR & Drug Interaction Checker',
      sdg: 'sdg3',
      sdgLabel: 'SDG 3: Good Health',
      lead: 'Ananya Rao (4RA22CS014)',
      stack: ['Android (Kotlin)', 'ML Kit', 'Firestore', 'Vertex AI'],
      desc: 'Extracts handwritten doctor prescriptions using Google Cloud Vision and warns rural patients of adverse drug interactions in Kannada and English.',
      github: 'https://github.com/gdg-rit-hassan/mediscan-health',
      stars: 64,
      starredByUser: false
    },
    {
      id: 'proj-3',
      title: 'EduBridge: Offline Audio Learning App for Rural Karnataka',
      sdg: 'sdg4',
      sdgLabel: 'SDG 4: Quality Education',
      lead: 'Suhas K (4RA23CS084)',
      stack: ['Flutter', 'TensorFlow Lite', 'SQLite', 'Text-to-Speech'],
      desc: 'PWA and mobile learning portal delivering digitized primary school curriculum with interactive quizzes without requiring cellular internet.',
      github: 'https://github.com/gdg-rit-hassan/edubridge-learn',
      stars: 43,
      starredByUser: false
    },
    {
      id: 'proj-4',
      title: 'SmartCity Hassan: Civic Waste Hotspot Tagging & Route Optimizer',
      sdg: 'sdg11',
      sdgLabel: 'SDG 11: Sustainable Cities',
      lead: 'Mohammed Zaid (4RA22CS044)',
      stack: ['React', 'Google Maps Platform', 'Node.js', 'Google Cloud'],
      desc: 'Crowdsourced civic reporting web app integrating Google Maps Geocoding API to route municipal collection trucks along high-priority waste clusters.',
      github: 'https://github.com/gdg-rit-hassan/smartcity-hassan',
      stars: 39,
      starredByUser: false
    }
  ];

  // Quiz Questions Data
  const QUIZ_QUESTIONS = [
    {
      domain: 'GenAI & Gemini',
      question: 'Which Google API enables developers to generate structured JSON outputs and process multimodal inputs (images, audio, video, text) with large context windows?',
      options: ['Google Maps API', 'Gemini API on Vertex AI / Google AI Studio', 'Google Analytics Data API', 'Android NDK'],
      correctIndex: 1,
      explanation: 'The Gemini API (Gemini 1.5/2.0) provides native multimodal comprehension across text, vision, audio, and code, with structured JSON schema outputs.'
    },
    {
      domain: 'Android Architecture',
      question: 'What is the recommended modern UI toolkit for building native Android user interfaces with declarative Kotlin code?',
      options: ['XML Layouts & ViewBinding', 'Jetpack Compose', 'Apache Cordova', 'Swing Components'],
      correctIndex: 1,
      explanation: 'Jetpack Compose is Google’s modern declarative UI toolkit for Android, simplifying and accelerating UI development with reactive Kotlin state.'
    },
    {
      domain: 'Cloud & Containers',
      question: 'Which fully managed serverless platform on Google Cloud enables developers to run stateless HTTP containers that automatically scale from zero to thousands of instances?',
      options: ['Google Cloud Run', 'Compute Engine Standard VMs', 'Google BigQuery', 'Cloud DNS'],
      correctIndex: 0,
      explanation: 'Google Cloud Run is a managed compute platform that automatically scales container images up or down to zero, charging only for the exact CPU/memory consumed.'
    },
    {
      domain: 'Web Performance',
      question: 'In Google’s Core Web Vitals standard, which metric measures overall page responsiveness and user interaction latency?',
      options: ['Largest Contentful Paint (LCP)', 'Cumulative Layout Shift (CLS)', 'Interaction to Next Paint (INP)', 'First Contentful Paint (FCP)'],
      correctIndex: 2,
      explanation: 'Interaction to Next Paint (INP) replaced FID as a Core Web Vital metric in 2024 to assess page responsiveness to user clicks, taps, and keystrokes.'
    },
    {
      domain: 'Firebase Backend',
      question: 'Which NoSQL document database in Firebase provides real-time data synchronization, offline caching, and ACID transaction support?',
      options: ['Firebase Cloud Firestore', 'Firebase Realtime Database (JSON tree)', 'Cloud Spanner', 'Memcached'],
      correctIndex: 0,
      explanation: 'Cloud Firestore is Firebase’s flexible, scalable NoSQL document database featuring automatic offline support, real-time listeners, and global scalability.'
    }
  ];

  let currentCategory = 'all';
  let activeEventForRsvp = null;
  let solutionProjects = [];
  let currentSdgFilter = 'all';
  let searchSolutionQuery = '';

  // Quiz State
  let quizIndex = 0;
  let userQuizAnswers = {};
  let quizSeconds = 210; // 3m 30s
  let quizTimer = null;

  function init() {
    initTheme();
    initMobileNav();
    initCountdown();
    initEvents();
    initSolutionChallenge();
    initQuiz();
    initMembership();
    initFaq();
  }

  /* 1. Theme Engine */
  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
        showToast(next === 'dark' ? 'Dark Mode 🌙' : 'Light Mode ☀️', 'Theme updated.', 'info');
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b1120' : '#4285F4');
  }

  /* 2. Mobile Nav Drawer */
  function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const drawer = document.getElementById('mobile-drawer');

    if (!toggle || !drawer) return;

    function setDrawer(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      drawer.hidden = !open;
      document.body.style.overflow = open ? 'hidden' : '';
    }

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      setDrawer(open);
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setDrawer(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !drawer.hidden) setDrawer(false);
    });
  }

  /* 3. Live Countdown */
  function initCountdown() {
    const target = new Date('2026-12-12T09:00:00+05:30').getTime();

    function update() {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) return;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      const dElem = document.getElementById('t-days');
      const hElem = document.getElementById('t-hours');
      const mElem = document.getElementById('t-mins');
      const sElem = document.getElementById('t-secs');
      const heroTag = document.getElementById('hero-countdown-tag');

      if (dElem) dElem.textContent = String(d).padStart(2, '0');
      if (hElem) hElem.textContent = String(h).padStart(2, '0');
      if (mElem) mElem.textContent = String(m).padStart(2, '0');
      if (sElem) sElem.textContent = String(s).padStart(2, '0');
      if (heroTag) heroTag.textContent = `${d}d ${h}h to start`;
    }

    update();
    setInterval(update, 1000);
  }

  /* 4. Events & Digital Pass RSVP */
  function initEvents() {
    const tabs = document.querySelectorAll('#events-tabs .filter-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        currentCategory = tab.dataset.filter || 'all';
        renderEvents();
      });
    });

    renderEvents();
    bindRsvpModal();
  }

  function renderEvents() {
    const container = document.getElementById('events-container');
    if (!container) return;

    const filtered = EVENTS_DATA.filter(ev => {
      if (currentCategory === 'all') return true;
      return ev.category === currentCategory;
    });

    container.innerHTML = '';

    filtered.forEach(ev => {
      const card = document.createElement('article');
      card.className = 'event-item-card';

      card.innerHTML = `
        <div class="e-top">
          <span class="e-badge">${ev.categoryLabel}</span>
          <span class="e-date">${ev.date}</span>
        </div>
        <h3 class="e-title">${ev.title}</h3>
        <p class="e-desc">${ev.desc}</p>
        <div class="e-meta">
          <span>📍 ${ev.venue}</span>
          <span>🎙️ ${ev.speaker}</span>
          <span>🎟️ ${ev.seats} seats available</span>
        </div>
        <button class="btn btn-outline btn-block btn-sm open-rsvp-btn" data-id="${ev.id}">
          RSVP for Event &rarr;
        </button>
      `;

      card.querySelector('.open-rsvp-btn').addEventListener('click', () => openRsvp(ev));
      container.appendChild(card);
    });

    // Link banner RSVP button
    const bannerBtn = document.querySelector('.banner-countdown .rsvp-btn');
    if (bannerBtn) {
      bannerBtn.onclick = () => openRsvp(EVENTS_DATA[0]);
    }
  }

  function bindRsvpModal() {
    const modal = document.getElementById('rsvp-modal');
    const closeBtn = document.getElementById('btn-close-rsvp');
    const form = document.getElementById('event-rsvp-form');
    const downloadBtn = document.getElementById('btn-download-pass');

    if (closeBtn) closeBtn.onclick = closeRsvp;
    if (modal) {
      modal.onclick = (e) => { if (e.target === modal) closeRsvp(); };
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.hidden) closeRsvp();
    });

    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('rsvp-full-name');
        const usnInput = document.getElementById('rsvp-vtu-usn');
        const branchInput = document.getElementById('rsvp-branch-select');
        const emailInput = document.getElementById('rsvp-email-addr');

        let valid = true;

        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
          showFieldErr('err-rsvp-name', nameInput);
          valid = false;
        } else {
          hideFieldErr('err-rsvp-name', nameInput);
        }

        const usn = usnInput.value.trim().toUpperCase();
        if (!usn || usn.length < 5) {
          showFieldErr('err-rsvp-usn', usnInput);
          valid = false;
        } else {
          hideFieldErr('err-rsvp-usn', usnInput);
        }

        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
          showFieldErr('err-rsvp-email', emailInput);
          valid = false;
        } else {
          hideFieldErr('err-rsvp-email', emailInput);
        }

        if (!valid) return;

        // Generate Ticket
        const passNum = Math.floor(1000 + Math.random() * 9000);
        const passCode = `PASS #GDG-RIT-${passNum}`;

        document.getElementById('t-event-name').textContent = activeEventForRsvp ? activeEventForRsvp.title : 'HackRIT 2026';
        document.getElementById('t-attendee-name').textContent = nameInput.value.trim();
        document.getElementById('t-attendee-usn').textContent = usn;
        document.getElementById('t-attendee-branch').textContent = `${branchInput.value} • RIT Hassan`;
        document.getElementById('t-pass-code').textContent = passCode;

        form.hidden = true;
        document.getElementById('generated-ticket-view').hidden = false;

        showToast('Ticket Generated! 🎟️', `Your pass #${passCode} is confirmed.`, 'success');
      };
    }

    if (downloadBtn) {
      downloadBtn.onclick = () => {
        const title = document.getElementById('t-event-name').textContent;
        const name = document.getElementById('t-attendee-name').textContent;
        const usn = document.getElementById('t-attendee-usn').textContent;
        const code = document.getElementById('t-pass-code').textContent;

        const text = `========================================================
GDG ON CAMPUS — RAJEEV INSTITUTE OF TECHNOLOGY, HASSAN
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
DIGITAL EVENT ATTENDEE TICKET
========================================================
Event: ${title}
Attendee: ${name}
USN: ${usn}
Pass ID: ${code}
Verification: [AUTHENTICATED STUDENT RSVP]
Venue: Rajeev Institute of Technology Campus, Hassan

* Present this ticket at the registration desk for verification.
========================================================`;

        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${code.replace(/[^a-zA-Z0-9-]/g, '_')}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      };
    }
  }

  function openRsvp(eventItem) {
    activeEventForRsvp = eventItem;
    const modal = document.getElementById('rsvp-modal');
    const titleElem = document.getElementById('rsvp-title');
    const form = document.getElementById('event-rsvp-form');
    const ticketView = document.getElementById('generated-ticket-view');

    if (!modal) return;
    if (titleElem) titleElem.textContent = `${eventItem.title} Ticket`;
    if (form) { form.hidden = false; form.reset(); }
    if (ticketView) ticketView.hidden = true;

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeRsvp() {
    const modal = document.getElementById('rsvp-modal');
    if (modal) modal.hidden = true;
    document.body.style.overflow = '';
    activeEventForRsvp = null;
  }

  /* 5. Solution Challenge Showcase */
  function initSolutionChallenge() {
    loadSolutionProjects();

    const searchInput = document.getElementById('project-search');
    const clearBtn = document.getElementById('project-clear-btn');
    const sdgChips = document.querySelectorAll('#sdg-filters .sdg-chip');
    const resetBtn = document.getElementById('btn-reset-solution');

    if (searchInput) {
      searchInput.oninput = (e) => {
        searchSolutionQuery = e.target.value.trim().toLowerCase();
        if (clearBtn) clearBtn.hidden = searchSolutionQuery.length === 0;
        renderSolutionGrid();
      };
    }

    if (clearBtn) {
      clearBtn.onclick = () => {
        if (searchInput) searchInput.value = '';
        searchSolutionQuery = '';
        clearBtn.hidden = true;
        renderSolutionGrid();
      };
    }

    sdgChips.forEach(chip => {
      chip.onclick = () => {
        sdgChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentSdgFilter = chip.dataset.sdg || 'all';
        renderSolutionGrid();
      };
    });

    if (resetBtn) {
      resetBtn.onclick = () => {
        if (searchInput) searchInput.value = '';
        searchSolutionQuery = '';
        currentSdgFilter = 'all';
        sdgChips.forEach(c => {
          if (c.dataset.sdg === 'all') c.classList.add('active');
          else c.classList.remove('active');
        });
        renderSolutionGrid();
      };
    }

    bindSolutionModal();
    renderSolutionGrid();
  }

  function loadSolutionProjects() {
    try {
      const saved = localStorage.getItem(PROJECTS_KEY);
      solutionProjects = saved ? JSON.parse(saved) : [...DEFAULT_PROJECTS];
    } catch (e) {
      solutionProjects = [...DEFAULT_PROJECTS];
    }
  }

  function saveSolutionProjects() {
    try {
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(solutionProjects));
    } catch (e) {
      console.warn('Could not save projects', e);
    }
  }

  function renderSolutionGrid() {
    const grid = document.getElementById('solution-projects-grid');
    const emptyState = document.getElementById('solution-empty-state');
    if (!grid) return;

    const filtered = solutionProjects.filter(p => {
      if (currentSdgFilter !== 'all' && p.sdg !== currentSdgFilter) return false;
      if (searchSolutionQuery) {
        const text = `${p.title} ${p.desc} ${p.lead} ${p.stack.join(' ')}`.toLowerCase();
        return text.includes(searchSolutionQuery);
      }
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.hidden = false;
      return;
    }

    if (emptyState) emptyState.hidden = true;
    grid.innerHTML = '';

    filtered.forEach(p => {
      const card = document.createElement('article');
      card.className = 'solution-card';

      const stackPills = p.stack.map(s => `<span class="stack-chip">${escapeHTML(s)}</span>`).join('');

      card.innerHTML = `
        <div class="s-top-row">
          <span class="sdg-tag">${p.sdgLabel}</span>
          <button class="upvote-btn ${p.starredByUser ? 'starred' : ''}" data-id="${p.id}" title="Star Solution Challenge Project">
            <span>⭐</span>
            <span>${p.stars}</span>
          </button>
        </div>
        <h3 class="s-title">${escapeHTML(p.title)}</h3>
        <p class="s-desc">${escapeHTML(p.desc)}</p>
        <div class="s-stack-tags">${stackPills}</div>
        <div class="s-footer">
          <span>👥 ${escapeHTML(p.lead)}</span>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" style="font-weight: 700;">GitHub &rarr;</a>
        </div>
      `;

      card.querySelector('.upvote-btn').onclick = () => {
        if (p.starredByUser) {
          p.stars = Math.max(0, p.stars - 1);
          p.starredByUser = false;
        } else {
          p.stars += 1;
          p.starredByUser = true;
          showToast('Project Starred! ⭐', `You supported "${p.title}"`, 'info');
        }
        saveSolutionProjects();
        renderSolutionGrid();
      };

      grid.appendChild(card);
    });
  }

  function bindSolutionModal() {
    const openBtn = document.getElementById('btn-open-project-modal');
    const modal = document.getElementById('solution-modal');
    const closeBtn = document.getElementById('btn-close-solution');
    const form = document.getElementById('solution-project-form');

    if (openBtn) openBtn.onclick = () => { modal.hidden = false; document.body.style.overflow = 'hidden'; };
    if (closeBtn) closeBtn.onclick = () => { modal.hidden = true; document.body.style.overflow = ''; };
    if (modal) {
      modal.onclick = (e) => { if (e.target === modal) { modal.hidden = true; document.body.style.overflow = ''; } };
    }

    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();

        const title = document.getElementById('sp-title');
        const sdg = document.getElementById('sp-sdg');
        const lead = document.getElementById('sp-lead');
        const stack = document.getElementById('sp-stack');
        const desc = document.getElementById('sp-desc');
        const github = document.getElementById('sp-github');

        let valid = true;

        if (!title.value.trim() || title.value.trim().length < 4) {
          showFieldErr('err-sp-title', title);
          valid = false;
        } else {
          hideFieldErr('err-sp-title', title);
        }

        if (!lead.value.trim() || lead.value.trim().length < 4) {
          showFieldErr('err-sp-lead', lead);
          valid = false;
        } else {
          hideFieldErr('err-sp-lead', lead);
        }

        const stackItems = stack.value.split(',').map(s => s.trim()).filter(Boolean);
        if (stackItems.length === 0) {
          showFieldErr('err-sp-stack', stack);
          valid = false;
        } else {
          hideFieldErr('err-sp-stack', stack);
        }

        if (!desc.value.trim() || desc.value.trim().length < 20) {
          showFieldErr('err-sp-desc', desc);
          valid = false;
        } else {
          hideFieldErr('err-sp-desc', desc);
        }

        if (!github.value.trim() || !github.value.startsWith('http')) {
          showFieldErr('err-sp-github', github);
          valid = false;
        } else {
          hideFieldErr('err-sp-github', github);
        }

        if (!valid) return;

        const sdgLabels = {
          'sdg2': 'SDG 2: Zero Hunger',
          'sdg3': 'SDG 3: Good Health',
          'sdg4': 'SDG 4: Quality Education',
          'sdg11': 'SDG 11: Sustainable Cities'
        };

        const newP = {
          id: `proj-${Date.now()}`,
          title: title.value.trim(),
          sdg: sdg.value,
          sdgLabel: sdgLabels[sdg.value] || 'UN SDG Project',
          lead: lead.value.trim(),
          stack: stackItems,
          desc: desc.value.trim(),
          github: github.value.trim(),
          stars: 1,
          starredByUser: true
        };

        solutionProjects.unshift(newP);
        saveSolutionProjects();
        renderSolutionGrid();

        form.reset();
        modal.hidden = true;
        document.body.style.overflow = '';
        showToast('Project Published! 🚀', 'Your Solution Challenge entry is live.', 'success');
      };
    }
  }

  /* 6. Google Tech Skill Quiz */
  function initQuiz() {
    renderQuizQuestion(0);
    startQuizTimer();

    const prevBtn = document.getElementById('btn-quiz-prev');
    const nextBtn = document.getElementById('btn-quiz-next');
    const restartBtn = document.getElementById('btn-restart-quiz');

    if (prevBtn) {
      prevBtn.onclick = () => {
        if (quizIndex > 0) renderQuizQuestion(quizIndex - 1);
      };
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        if (quizIndex < QUIZ_QUESTIONS.length - 1) {
          renderQuizQuestion(quizIndex + 1);
        } else {
          finishQuiz();
        }
      };
    }

    if (restartBtn) {
      restartBtn.onclick = () => {
        userQuizAnswers = {};
        quizSeconds = 210;
        document.getElementById('quiz-result-card').hidden = true;
        document.getElementById('active-question-container').hidden = false;
        document.querySelector('.quiz-card-bottom').hidden = false;
        document.querySelector('.quiz-card-top').hidden = false;
        renderQuizQuestion(0);
        startQuizTimer();
      };
    }
  }

  function startQuizTimer() {
    clearInterval(quizTimer);
    const elem = document.getElementById('quiz-countdown-timer');

    quizTimer = setInterval(() => {
      quizSeconds--;
      if (quizSeconds <= 0) {
        clearInterval(quizTimer);
        finishQuiz();
        return;
      }

      const m = Math.floor(quizSeconds / 60);
      const s = quizSeconds % 60;
      if (elem) elem.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }, 1000);
  }

  function renderQuizQuestion(idx) {
    quizIndex = idx;
    const q = QUIZ_QUESTIONS[idx];
    if (!q) return;

    document.getElementById('q-domain-tag').textContent = q.domain;
    document.getElementById('q-count-text').textContent = `Question ${idx + 1} of ${QUIZ_QUESTIONS.length}`;
    document.getElementById('q-text').textContent = q.question;

    const optionsContainer = document.getElementById('q-options-list');
    const explanationBox = document.getElementById('q-explanation-box');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    const hasAnswered = userQuizAnswers[idx] !== undefined;

    q.options.forEach((opt, optIdx) => {
      const isSelected = userQuizAnswers[idx] === optIdx;
      const isCorrect = optIdx === q.correctIndex;

      const item = document.createElement('div');
      let status = '';
      if (hasAnswered) {
        if (isSelected && isCorrect) status = 'correct';
        else if (isSelected && !isCorrect) status = 'wrong';
        else if (isCorrect) status = 'correct';
      } else if (isSelected) {
        status = 'selected';
      }

      item.className = `opt-item ${status}`;
      item.innerHTML = `<span class="opt-letter">${letters[optIdx]}</span><span>${escapeHTML(opt)}</span>`;

      item.onclick = () => {
        if (hasAnswered) return;
        userQuizAnswers[idx] = optIdx;
        renderQuizQuestion(idx);
      };

      optionsContainer.appendChild(item);
    });

    if (explanationBox) {
      if (hasAnswered) {
        explanationBox.hidden = false;
        const correct = userQuizAnswers[idx] === q.correctIndex;
        explanationBox.innerHTML = `<strong>${correct ? '✅ Correct Answer!' : '❌ Incorrect.'}</strong><p style="margin-top: 4px;">${q.explanation}</p>`;
      } else {
        explanationBox.hidden = true;
      }
    }

    const prev = document.getElementById('btn-quiz-prev');
    const next = document.getElementById('btn-quiz-next');
    if (prev) prev.disabled = idx === 0;
    if (next) next.textContent = (idx === QUIZ_QUESTIONS.length - 1) ? 'Finish & Claim Badge 🏆' : 'Next Question →';

    renderQuizIndicators();
  }

  function renderQuizIndicators() {
    const container = document.getElementById('quiz-indicators-row');
    if (!container) return;

    container.innerHTML = '';
    QUIZ_QUESTIONS.forEach((_, i) => {
      const dot = document.createElement('span');
      let cls = 'indicator-dot';
      if (i === quizIndex) cls += ' active';
      if (userQuizAnswers[i] !== undefined) cls += ' done';
      dot.className = cls;
      dot.onclick = () => renderQuizQuestion(i);
      container.appendChild(dot);
    });
  }

  function finishQuiz() {
    clearInterval(quizTimer);

    let score = 0;
    QUIZ_QUESTIONS.forEach((q, i) => {
      if (userQuizAnswers[i] === q.correctIndex) score++;
    });

    document.getElementById('active-question-container').hidden = true;
    document.querySelector('.quiz-card-bottom').hidden = true;
    document.querySelector('.quiz-card-top').hidden = true;

    document.getElementById('quiz-result-card').hidden = false;
    document.getElementById('result-score-val').textContent = `${score} / ${QUIZ_QUESTIONS.length}`;

    const summary = document.getElementById('result-summary-text');
    if (score >= 4) {
      summary.textContent = '🌟 Excellent! You demonstrated strong mastery of Google technologies and have unlocked your verified Explorer Badge.';
    } else {
      summary.textContent = 'Keep exploring! Check out our upcoming GDG study jams on Google Cloud and Jetpack Compose to boost your skills.';
    }

    showToast('Quiz Completed!', `You scored ${score}/${QUIZ_QUESTIONS.length}`, 'success');
  }

  /* 7. Membership Portal */
  function initMembership() {
    const form = document.getElementById('membership-form');
    const downloadBtn = document.getElementById('btn-download-member-pass');

    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();

        const name = document.getElementById('mem-name');
        const usn = document.getElementById('mem-usn');
        const branch = document.getElementById('mem-branch');
        const email = document.getElementById('mem-email');
        const track = document.getElementById('mem-track');

        let valid = true;

        if (!name.value.trim() || name.value.trim().length < 2) {
          showFieldErr('err-mem-name', name);
          valid = false;
        } else {
          hideFieldErr('err-mem-name', name);
        }

        const usnVal = usn.value.trim().toUpperCase();
        if (!usnVal || usnVal.length < 5) {
          showFieldErr('err-mem-usn', usn);
          valid = false;
        } else {
          hideFieldErr('err-mem-usn', usn);
        }

        const emailVal = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailVal || !emailRegex.test(emailVal)) {
          showFieldErr('err-mem-email', email);
          valid = false;
        } else {
          hideFieldErr('err-mem-email', email);
        }

        if (!valid) return;

        const memberId = `#GDG-RIT-2026-${Math.floor(1000 + Math.random() * 9000)}`;

        document.getElementById('card-member-name').textContent = name.value.trim();
        document.getElementById('card-member-usn').textContent = usnVal;
        document.getElementById('card-member-branch').textContent = `${branch.value} • RIT Hassan`;
        document.getElementById('card-member-track').textContent = track.value;
        document.getElementById('card-member-id').textContent = memberId;

        // Save member in localStorage
        const memberData = {
          memberId,
          name: name.value.trim(),
          usn: usnVal,
          branch: branch.value,
          email: emailVal,
          track: track.value,
          joinedDate: new Date().toISOString()
        };
        localStorage.setItem(`gdg_member_${usnVal}`, JSON.stringify(memberData));

        form.hidden = true;
        document.getElementById('member-pass-view').hidden = false;

        showToast('Welcome to GDG on Campus! 🎉', `Your Member ID is ${memberId}`, 'success');
      };
    }

    if (downloadBtn) {
      downloadBtn.onclick = () => {
        const name = document.getElementById('card-member-name').textContent;
        const usn = document.getElementById('card-member-usn').textContent;
        const track = document.getElementById('card-member-track').textContent;
        const id = document.getElementById('card-member-id').textContent;

        const slip = `========================================================
GDG ON CAMPUS — RAJEEV INSTITUTE OF TECHNOLOGY, HASSAN
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
OFFICIAL STUDENT CHAPTER MEMBERSHIP
========================================================
Member: ${name}
USN: ${usn}
Track: ${track}
Member ID: ${id}
Institution: Rajeev Institute of Technology (RIT Hassan)
Status: ACTIVE CHAPTER MEMBER (2026-2027)

* Welcome to Google Developer Groups on Campus RIT Hassan!
========================================================`;

        const blob = new Blob([slip], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `GDG-Member-${usn}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      };
    }
  }

  /* 8. FAQ Accordion */
  function initFaq() {
    const toggles = document.querySelectorAll('.faq-toggle');
    toggles.forEach(toggle => {
      toggle.onclick = () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        const panelId = toggle.getAttribute('aria-controls');
        const content = document.getElementById(panelId);

        toggles.forEach(t => {
          if (t !== toggle) {
            t.setAttribute('aria-expanded', 'false');
            const other = document.getElementById(t.getAttribute('aria-controls'));
            if (other) other.hidden = true;
          }
        });

        toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (content) content.hidden = expanded;
      };
    });
  }

  /* Helpers */
  function showToast(title, desc, type = 'info') {
    const hub = document.getElementById('toast-hub');
    if (!hub) return;

    const toast = document.createElement('div');
    toast.className = `toast-msg toast-${type}`;
    toast.setAttribute('role', 'alert');

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';

    toast.innerHTML = `
      <span style="font-size: 1.25rem;">${icon}</span>
      <div>
        <strong style="display: block; font-size: 0.9rem;">${title}</strong>
        <span style="font-size: 0.82rem; color: var(--text-secondary);">${desc}</span>
      </div>
    `;

    hub.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => { if (toast.parentNode === hub) hub.removeChild(toast); }, 250);
    }, 3600);
  }

  function showFieldErr(errId, input) {
    document.getElementById(errId)?.classList.add('visible');
    input?.classList.add('is-invalid');
  }

  function hideFieldErr(errId, input) {
    document.getElementById(errId)?.classList.remove('visible');
    input?.classList.remove('is-invalid');
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  return { init, showToast };
})();

document.addEventListener('DOMContentLoaded', () => {
  GDGApp.init();
});
