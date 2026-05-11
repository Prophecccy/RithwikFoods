class PremiumInteractivity {
    constructor() {
        this.activeCategory = 'all';
        this.searchQuery = '';
        this.initMagneticButtons();
        this.initSplitText();
        this.initIntersectionObserver();
        this.initHeaderEffect();
        this.initMobileMenu();
        this.initSmoothScroll();
        this.initCategoryFilter();
        this.initCollectionSearch();
    }





    initMagneticButtons() {
        const magnets = document.querySelectorAll('.magnetic');
        magnets.forEach(m => {
            m.addEventListener('mousemove', (e) => {
                const rect = m.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                m.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
            });
            m.addEventListener('mouseleave', () => {
                m.style.transform = 'translate3d(0, 0, 0)';
            });
        });
    }



    initMobileMenu() {
        const toggle = document.querySelector('.mobile-toggle');
        const nav = document.querySelector('.nav-links');
        if (!toggle || !nav) return;

        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            const icon = toggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }




    initSplitText() {
        const splitTargets = document.querySelectorAll('h1, .display-title, .spotlight-title');
        splitTargets.forEach(target => {
            const text = target.innerText;
            target.innerHTML = '';
            
            const words = text.split(' ');
            words.forEach((word, wIndex) => {
                const wordSpan = document.createElement('span');
                wordSpan.classList.add('text-reveal-char');
                wordSpan.style.whiteSpace = 'nowrap';
                
                word.split('').forEach((char, cIndex) => {
                    const charSpan = document.createElement('span');
                    charSpan.classList.add('char-inner');
                    charSpan.innerText = char;
                    charSpan.style.transitionDelay = `${(wIndex * 0.1) + (cIndex * 0.02)}s`;
                    wordSpan.appendChild(charSpan);
                });
                
                target.appendChild(wordSpan);
                if (wIndex < words.length - 1) {
                    target.appendChild(document.createTextNode(' '));
                }
            });
        });
    }

    initIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal, .bento-item, .product-card-premium, .philosophy-card').forEach(el => observer.observe(el));
    }



    initHeaderEffect() {
        const header = document.getElementById('main-header');
        const wrapper = document.querySelector('.nav-wrapper');
        if (!header) return;

        const isAlwaysScrolled = header.classList.contains('scrolled-permanent');

        const handleScroll = () => {
            if (window.scrollY > 50 || isAlwaysScrolled) {
                header.classList.add('scrolled');
                if (wrapper) wrapper.style.top = '12px';
            } else {
                header.classList.remove('scrolled');
                if (wrapper) wrapper.style.top = '24px';
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Set initial state
    }



    initSmoothScroll() {
        // Implement simple smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ─── Collection Page: Category Filter ───────────────────────────────────
    initCategoryFilter() {
        const categoryCards = document.querySelectorAll('.category-card[data-filter]');
        if (!categoryCards.length) return;

        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                // Update active state
                categoryCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');

                this.activeCategory = card.dataset.filter;
                this.applyFilters();

                // Update dynamic background on the header block
                const bg = document.getElementById('category-dynamic-bg');
                if (bg) {
                    const bgSrc = card.querySelector('.category-card-bg');
                    if (bgSrc) {
                        const style = window.getComputedStyle(bgSrc);
                        const url = style.backgroundImage;
                        bg.style.backgroundImage = url;
                    }
                }
            });
        });
    }

    // ─── Collection Page: Live Search ────────────────────────────────────────
    initCollectionSearch() {
        const searchInput = document.getElementById('collection-search');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.trim().toLowerCase();
            this.applyFilters();
        });

        // Clear on Escape
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                this.searchQuery = '';
                this.applyFilters();
            }
        });
    }

    // ─── Shared: Apply both category + search filters together ───────────────
    applyFilters() {
        const cards = document.querySelectorAll('.product-card[data-category]');
        let visibleCount = 0;

        cards.forEach(card => {
            const category = card.dataset.category;
            const name = (card.querySelector('h3')?.textContent || '').toLowerCase();
            const tag  = (card.querySelector('.category-tag')?.textContent || '').toLowerCase();

            const matchesCategory = this.activeCategory === 'all' || category === this.activeCategory;
            const matchesSearch   = !this.searchQuery || name.includes(this.searchQuery) || tag.includes(this.searchQuery);

            if (matchesCategory && matchesSearch) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show / hide empty state message
        let emptyMsg = document.getElementById('no-results-msg');
        if (!emptyMsg) {
            emptyMsg = document.createElement('div');
            emptyMsg.id = 'no-results-msg';
            emptyMsg.style.cssText = `
                display: none; grid-column: 1 / -1; text-align: center;
                padding: 60px 20px; color: var(--color-text-muted);
            `;
            emptyMsg.innerHTML = `
                <i class="fa-solid fa-magnifying-glass" style="font-size:2.5rem;margin-bottom:16px;display:block;opacity:0.4;"></i>
                <p style="font-size:1.2rem;font-weight:600;">No products found</p>
                <p style="font-size:0.95rem;margin-top:8px;">Try a different keyword or browse another category.</p>
            `;
            document.getElementById('product-grid')?.appendChild(emptyMsg);
        }
        emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new PremiumInteractivity();
});
