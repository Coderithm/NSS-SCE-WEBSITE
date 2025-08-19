document.addEventListener("DOMContentLoaded", function () {
  // --- INITIALIZATION ---
  const isMobile = window.innerWidth <= 768;

  // Initialize Locomotive Scroll only on desktop for performance
  let scroll;
  if (!isMobile) {
    scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      lerp: 0.08,
    });
  }

  loaderAnimation();
  menuAnimation();
  setupEventBook();
  setupSmoothScrolling(isMobile, scroll);

  // --- LOADER ANIMATION ---
  function loaderAnimation() {
    const loader = document.querySelector("#loader");
    if (loader) {
      setTimeout(() => {
        loader.style.top = "-100%";
      }, 3500);
    }
  }

  // --- MENU ANIMATION ---
  function menuAnimation() {
    const menuBtn = document.querySelector("#menu-btn");
    const fullScreenMenu = document.querySelector("#full-scr");
    const nav = document.querySelector("#nav");

    if (menuBtn && fullScreenMenu) {
      let menuOpen = false;
      menuBtn.addEventListener("click", () => {
        menuOpen = !menuOpen;
        document.body.style.overflow = menuOpen ? "hidden" : "";
        menuBtn.classList.toggle("open", menuOpen);
        fullScreenMenu.style.top = menuOpen ? "0" : "-100%";
        nav.style.backgroundColor = menuOpen
          ? "transparent"
          : "rgba(239, 234, 227, 0.8)";
      });

      // Close menu when a link is clicked
      const menuLinks = document.querySelectorAll("#full-div1 a");
      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          menuOpen = false;
          document.body.style.overflow = "";
          menuBtn.classList.remove("open");
          fullScreenMenu.style.top = "-100%";
          nav.style.backgroundColor = "rgba(239, 234, 227, 0.8)";
        });
      });
    }
  }

  // --- SMOOTH SCROLLING FOR NAV LINKS ---
  function setupSmoothScrolling(isMobile, scrollInstance) {
    const navLinks = document.querySelectorAll("#nav-part2 a, #full-div1 a");

    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          if (isMobile) {
            // Native smooth scroll for mobile
            targetElement.scrollIntoView({ behavior: "smooth" });
          } else if (scrollInstance) {
            // Locomotive scroll for desktop
            scrollInstance.scrollTo(targetElement);
          }
        }
      });
    });
  }

  // --- EVENT BOOK ---
  function setupEventBook() {
    const book = document.getElementById("eventBook");
    if (!book) return;

    const eventData = [
      {
        img: "https://placehold.co/400x300/EFEAE3/2b2b80?text=Health+Camp",
        title: "Health Camp",
        desc: "Organized an ENT health camp to provide basic healthcare, offering free check-ups and promoting early detection and healthy practices.",
        date: "📅 March 2025",
        loc: "📍 Damana High School",
      },
      {
        img: "https://placehold.co/400x300/d3d3f7/2b2b80?text=Orphanage+Visit",
        title: "Orphanage Visit",
        desc: "Engaged with children at a local orphanage, teaching good habits and moral values through fun, interactive sessions to inspire and educate.",
        date: "📅 March 2025",
        loc: "📍 Madhurmaye Orphanage",
      },
      {
        img: "https://placehold.co/400x300/9f9fe5/ffffff?text=Plantation+Drive",
        title: "Plantation Drive",
        desc: "Conducted a plantation drive, planting saplings in public spaces to promote environmental sustainability and a greener community.",
        date: "📅 July 2025",
        loc: "📍 Prasanti Vihar",
      },
      {
        img: "https://placehold.co/400x300/6b6bc8/ffffff?text=Cleanliness+Drive",
        title: "Cleanliness Drive",
        desc: "Participated in a cleanliness drive, cleaning public areas and spreading awareness about waste management for a healthier environment.",
        date: "📅 Sep 2024",
        loc: "📍 KIIT Road",
      },
      {
        img: "https://placehold.co/400x300/4a4aa8/ffffff?text=Road+Safety",
        title: "Road Safety Rally",
        desc: "Organized a road safety rally to educate the public on traffic rules and responsible driving to reduce accidents.",
        date: "📅 Jan 2025",
        loc: "📍 KIIT Road",
      },
      {
        img: "https://placehold.co/400x300/2b2b80/ffffff?text=Animal+Feeding",
        title: "Animal Feeding",
        desc: "Showed compassion to stray animals by providing food and water, fostering empathy and humane treatment in the community.",
        date: "📅 Nov 2024",
        loc: "📍 KIIT Road",
      },
      {
        img: "https://placehold.co/400x300/EFEAE3/2b2b80?text=Special+Camp",
        title: "Special Camp",
        desc: "Conducted a camp with cleanliness drives, health check-ups, and educational sessions to address community needs.",
        date: "📅 March 2024",
        loc: "📍 Village",
      },
      {
        img: "https://placehold.co/400x300/d3d3f7/2b2b80?text=DAAN",
        title: "DAAN",
        desc: "Organized a donation drive, collecting and distributing essentials like clothes and food to support underprivileged communities.",
        date: "📅 Nov 2024",
        loc: "📍 Slum",
      },
      {
        img: "https://placehold.co/400x300/9f9fe5/ffffff?text=Slum+Visit",
        title: "Slum Visit",
        desc: "Visited a local slum to understand challenges, organizing awareness sessions on hygiene, education, and health.",
        date: "📅 March 2025",
        loc: "📍 Local Slum",
      },
      {
        img: "https://placehold.co/400x300/6b6bc8/ffffff?text=School+Visit",
        title: "School Visit",
        desc: "Visited a local school for interactive sessions on hygiene, discipline, and moral values to inspire young minds.",
        date: "📅 Dec 2025",
        loc: "📍 Damana High School",
      },
    ];

    // Create book pages dynamically
    let pagesHTML = `
            <div class="book-page front-cover" style="z-index: ${
              eventData.length + 2
            };">
                <div class="book-cover-content">
                    <h1 class="book-title">NSS SCE KIIT</h1>
                    <h2 class="book-subtitle">EVENT DIARY</h2>
                    <div class="nss-logo-book">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/NSS-symbol-rgb.svg/1200px-NSS-symbol-rgb.svg.png" alt="NSS Logo" onerror="this.onerror=null;this.src='https://placehold.co/100x100/EFEAE3/2b2b80?text=NSS';">
                    </div>
                    <p class="book-year">2025 Edition</p>
                </div>
            </div>
        `;

    eventData.forEach((event, i) => {
      pagesHTML += `
                <div class="book-page" id="page-${i + 1}" style="z-index: ${
        eventData.length - i
      };">
                    <div class="page-content">
                        <div class="page-half left">
                            <img src="${event.img}" alt="${
        event.title
      }" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/333333?text=Image+Not+Found';">
                        </div>
                        <div class="page-half right">
                            <h2>${event.title}</h2>
                            <p>${event.desc}</p>
                            <div class="event-details">
                                <span>${event.date}</span>
                                <span>${event.loc}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    });

    pagesHTML += `
            <div class="book-page back-cover" style="z-index: 1;">
                 <div class="book-cover-content">
                    <h1 class="book-title">THE END</h1>
                    <p class="book-year">Thank You for Reading</p>
                </div>
            </div>`;

    book.innerHTML = pagesHTML;

    const pages = document.querySelectorAll(".book-page");
    const prevBtn = document.getElementById("prevEvent");
    const nextBtn = document.getElementById("nextEvent");
    const currentPageSpan = document.getElementById("currentPage");
    const totalPages = eventData.length;
    let currentPage = 0;

    function updateBook() {
      pages.forEach((page, i) => {
        // The first page is the cover, so we flip pages with index <= currentPage
        if (i <= currentPage) {
          page.classList.add("flipped");
          page.style.zIndex = i + 2; // Flipped pages get higher z-index to stay on top
        } else {
          page.classList.remove("flipped");
          page.style.zIndex = totalPages - i + 2; // Unflipped pages are stacked naturally
        }
      });

      // Update controls
      prevBtn.disabled = currentPage === 0;
      nextBtn.disabled = currentPage === totalPages;
      currentPageSpan.textContent =
        currentPage === 0 ? "Cover" : `Page ${currentPage}`;
    }

    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updateBook();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--;
        updateBook();
      }
    });

    updateBook();
  }
});
