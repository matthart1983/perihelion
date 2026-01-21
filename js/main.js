// =============================================
// Newco - Capital Markets Systems Assurance
// Main JavaScript
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initArchitectureDemo();
});

// =============================================
// Navigation
// =============================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Initial check
}

// =============================================
// Mobile Menu
// =============================================

function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// =============================================
// Smooth Scrolling
// =============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (!target) return;
            
            e.preventDefault();
            
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// =============================================
// Scroll Animations
// =============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll(
        '.problem-card, .approach-card, .deliverables-list li, .platform-features li, .credential'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Add CSS for animated elements
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// =============================================
// Contact Form Handling
// =============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            form.innerHTML = `
                <div class="form-success">
                    <div class="success-icon">✓</div>
                    <h3>Thank you for reaching out</h3>
                    <p>We'll be in touch within one business day to schedule a conversation.</p>
                </div>
            `;
        } catch (error) {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            alert('There was an error sending your message. Please try again.');
        }
    });
}

// =============================================
// Architecture Demo (Embedded)
// =============================================

function initArchitectureDemo() {
    const canvas = document.getElementById('archCanvas');
    if (!canvas) return;

    // Connection definitions
    const connections = [
        { from: 'market-data', to: 'oms', type: 'market' },
        { from: 'market-data', to: 'matching-engine', type: 'market' },
        { from: 'fix-gateway', to: 'oms', type: 'order' },
        { from: 'client-orders', to: 'oms', type: 'order' },
        { from: 'web-api', to: 'ems', type: 'order' },
        { from: 'oms', to: 'risk-engine', type: 'risk' },
        { from: 'oms', to: 'ems', type: 'order' },
        { from: 'ems', to: 'matching-engine', type: 'order' },
        { from: 'risk-engine', to: 'oms', type: 'risk' },
        { from: 'matching-engine', to: 'trade-db', type: 'trade' },
        { from: 'matching-engine', to: 'position-keeper', type: 'trade' },
        { from: 'matching-engine', to: 'clearing', type: 'trade' },
        { from: 'matching-engine', to: 'surveillance', type: 'trade' },
        { from: 'trade-db', to: 'regulatory', type: 'trade' },
        { from: 'clearing', to: 'regulatory', type: 'trade' },
    ];

    let particles = [];
    let incidentActive = false;

    // Draw connections
    function drawConnections() {
        const svg = document.getElementById('archConnections');
        if (!svg) return;
        svg.innerHTML = '';

        connections.forEach(conn => {
            const fromEl = canvas.querySelector(`[data-node="${conn.from}"]`);
            const toEl = canvas.querySelector(`[data-node="${conn.to}"]`);
            
            if (!fromEl || !toEl) return;

            const canvasRect = canvas.getBoundingClientRect();
            const fromRect = fromEl.getBoundingClientRect();
            const toRect = toEl.getBoundingClientRect();

            const x1 = fromRect.left + fromRect.width / 2 - canvasRect.left;
            const y1 = fromRect.top + fromRect.height / 2 - canvasRect.top;
            const x2 = toRect.left + toRect.width / 2 - canvasRect.left;
            const y2 = toRect.top + toRect.height / 2 - canvasRect.top;

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('data-from', conn.from);
            line.setAttribute('data-to', conn.to);
            svg.appendChild(line);
        });
    }

    // Particle class
    class ArchParticle {
        constructor(fromId, toId, type) {
            this.fromEl = canvas.querySelector(`[data-node="${fromId}"]`);
            this.toEl = canvas.querySelector(`[data-node="${toId}"]`);
            if (!this.fromEl || !this.toEl) {
                this.dead = true;
                return;
            }
            this.type = type;
            this.progress = 0;
            this.speed = 0.015 + Math.random() * 0.01;
            this.element = document.createElement('div');
            this.element.className = `arch-particle ${type}`;
            canvas.appendChild(this.element);
        }

        update() {
            if (this.dead) return false;
            this.progress += this.speed;
            if (this.progress >= 1) {
                this.element.remove();
                return false;
            }

            const canvasRect = canvas.getBoundingClientRect();
            const fromRect = this.fromEl.getBoundingClientRect();
            const toRect = this.toEl.getBoundingClientRect();

            const x1 = fromRect.left + fromRect.width / 2 - canvasRect.left;
            const y1 = fromRect.top + fromRect.height / 2 - canvasRect.top;
            const x2 = toRect.left + toRect.width / 2 - canvasRect.left;
            const y2 = toRect.top + toRect.height / 2 - canvasRect.top;

            const t = this.progress;
            const x = x1 + (x2 - x1) * t;
            const y = y1 + (y2 - y1) * t;

            this.element.style.left = `${x - 2}px`;
            this.element.style.top = `${y - 2}px`;
            return true;
        }
    }

    function spawnParticles() {
        connections.forEach(conn => {
            if (Math.random() > 0.75) {
                const p = new ArchParticle(conn.from, conn.to, conn.type);
                if (!p.dead) particles.push(p);
            }
        });
    }

    function updateParticles() {
        particles = particles.filter(p => p.update());
    }

    // Animate metrics
    function animateMetrics() {
        const mdRate = document.getElementById('mdRate');
        const orderRate = document.getElementById('orderRate');
        const meMatches = document.getElementById('meMatches');
        const dbWrites = document.getElementById('dbWrites');
        const throughput = document.getElementById('archThroughput');

        if (mdRate) mdRate.textContent = (1.1 + Math.random() * 0.2).toFixed(1) + 'M';
        if (orderRate) orderRate.textContent = Math.floor(800 + Math.random() * 100);
        if (meMatches) meMatches.textContent = Math.floor(4000 + Math.random() * 1000).toLocaleString();
        if (dbWrites) dbWrites.textContent = Math.floor(10 + Math.random() * 5) + 'k';
        if (throughput) throughput.textContent = Math.floor(800000 + Math.random() * 100000).toLocaleString();
    }

    // Throughput chart
    function initThroughputChart() {
        const chart = document.getElementById('archThroughputChart');
        if (!chart) return;
        for (let i = 0; i < 15; i++) {
            const bar = document.createElement('div');
            bar.className = 'arch-throughput-bar';
            bar.style.height = `${30 + Math.random() * 70}%`;
            chart.appendChild(bar);
        }
    }

    function updateThroughputChart() {
        const bars = document.querySelectorAll('.arch-throughput-bar');
        bars.forEach(bar => {
            bar.style.height = `${30 + Math.random() * 70}%`;
        });
    }

    // Incident simulation
    function triggerIncident() {
        incidentActive = true;
        const incidentEl = document.getElementById('archIncident');
        const overlay = document.getElementById('archIncidentOverlay');
        const riskLatency = document.getElementById('riskLatency');

        if (incidentEl) incidentEl.style.display = 'flex';
        if (overlay) overlay.classList.add('visible');
        if (riskLatency) {
            riskLatency.textContent = '12.4ms';
            riskLatency.className = 'metric-val critical';
        }

        // Mark affected nodes
        const affected = ['risk-engine', 'oms', 'ems', 'matching-engine'];
        affected.forEach(id => {
            const node = canvas.querySelector(`[data-node="${id}"]`);
            if (node) node.classList.add('affected');
        });

        setTimeout(resolveIncident, 8000);
    }

    function resolveIncident() {
        incidentActive = false;
        const incidentEl = document.getElementById('archIncident');
        const overlay = document.getElementById('archIncidentOverlay');
        const riskLatency = document.getElementById('riskLatency');

        if (incidentEl) incidentEl.style.display = 'none';
        if (overlay) overlay.classList.remove('visible');
        if (riskLatency) {
            riskLatency.textContent = '4.2ms';
            riskLatency.className = 'metric-val warning';
        }

        canvas.querySelectorAll('.arch-node.affected').forEach(node => {
            node.classList.remove('affected');
        });
    }

    // Animation loop
    function animate() {
        updateParticles();
        requestAnimationFrame(animate);
    }

    // Initialize when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                drawConnections();
                initThroughputChart();
                animate();

                setInterval(spawnParticles, 150);
                setInterval(animateMetrics, 1000);
                setInterval(updateThroughputChart, 500);

                // Trigger incident after delay
                setTimeout(triggerIncident, 6000);
                setInterval(() => {
                    if (!incidentActive) {
                        setTimeout(triggerIncident, 5000 + Math.random() * 15000);
                    }
                }, 25000);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(canvas);

    // Redraw on resize
    window.addEventListener('resize', debounce(drawConnections, 250));
}

// Initialize contact form if on contact page
if (document.getElementById('contactForm')) {
    initContactForm();
}

// =============================================
// Utility Functions
// =============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
