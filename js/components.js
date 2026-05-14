class SiteNavbar extends HTMLElement {
    connectedCallback() {
        // Determine active page
        const currentPath = window.location.pathname;
        const page = currentPath.split("/").pop() || 'index.html';
        
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top glass-nav">
                <div class="container">
                    <a class="navbar-brand d-flex align-items-center" href="index.html">
                        <img src="assets/logo.png" alt="CYBERHAWK AI" class="navbar-logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto align-items-center">
                            <li class="nav-item">
                                <a class="nav-link ${page === 'index.html' || page === '' ? 'active text-neon' : ''}" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${page === 'dashboard.html' ? 'active text-neon' : ''}" href="dashboard.html">Dashboard</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown">AI Tools</a>
                                <ul class="dropdown-menu dropdown-menu-dark glass-dropdown">
                                    <li><a class="dropdown-item" href="scam-detector.html"><i class="fa-solid fa-magnifying-glass-chart text-neon"></i> Scam Detector</a></li>
                                    <li><a class="dropdown-item" href="fir-generator.html"><i class="fa-solid fa-file-contract text-neon"></i> AI FIR Generator</a></li>
                                    <li><a class="dropdown-item" href="url-checker.html"><i class="fa-solid fa-link text-neon"></i> Fake URL Checker</a></li>

                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${page === 'news.html' ? 'active text-neon' : ''}" href="news.html">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${page === 'about.html' ? 'active text-neon' : ''}" href="about.html">About</a>
                            </li>
                            <li class="nav-item ms-lg-2">
                                <a class="nav-link text-danger fw-bold" href="emergency.html">
                                    <i class="fa-solid fa-triangle-exclamation glow-animation"></i> EMERGENCY
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('site-navbar', SiteNavbar);

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="glass-panel mt-5 py-5 border-bottom-0 border-start-0 border-end-0 rounded-0" style="background: rgba(5, 5, 8, 0.9);">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-4 col-md-6">
                            <h5 class="mb-3 d-flex align-items-center">
                                <img src="assets/logo.png" alt="CYBERHAWK AI" class="footer-logo">
                            </h5>
                            <p class="text-secondary">AI-Powered Cybercrime & Legal Advisory Platform. Empowering users against digital threats with advanced AI analysis and legal assistance.</p>
                            <div class="d-flex gap-3 mt-3">
                                <a href="#" class="text-secondary text-neon-hover fs-5"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" class="text-secondary text-neon-hover fs-5"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="#" class="text-secondary text-neon-hover fs-5"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h6 class="text-white mb-3">Quick Links</h6>
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="index.html" class="text-secondary text-decoration-none text-neon-hover">Home</a></li>
                                <li class="mb-2"><a href="dashboard.html" class="text-secondary text-decoration-none text-neon-hover">Dashboard</a></li>
                                <li class="mb-2"><a href="about.html" class="text-secondary text-decoration-none text-neon-hover">About Us</a></li>

                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h6 class="text-white mb-3">AI Tools</h6>
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="scam-detector.html" class="text-secondary text-decoration-none text-neon-hover">Scam Detector</a></li>
                                <li class="mb-2"><a href="fir-generator.html" class="text-secondary text-decoration-none text-neon-hover">FIR Generator</a></li>
                                <li class="mb-2"><a href="url-checker.html" class="text-secondary text-decoration-none text-neon-hover">Fake URL Checker</a></li>

                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h6 class="text-white mb-3">Emergency Contact</h6>
                            <p class="text-secondary mb-1">Cybercrime Helpline:</p>
                            <h4 class="text-danger font-monospace mb-3">1930</h4>
                            <a href="emergency.html" class="btn btn-danger-neon btn-sm w-100">Get Immediate Help</a>
                        </div>
                    </div>
                    <hr class="mt-4 mb-4 border-secondary">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="text-secondary mb-0 small">&copy; 2026 CYBERHAWK AI. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
                            <p class="text-secondary mb-0 small">Powered by <span class="text-neon-purple">IBM Cloud & Watson</span></p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('site-footer', SiteFooter);

