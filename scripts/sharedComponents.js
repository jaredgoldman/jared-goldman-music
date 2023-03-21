class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="header-links_container">
                <div class="header-links">
                    <div class="header-link_container">
                        <a class="header-link" href="/">JG</a>
                    </div>
                    <div class="header-link_container">
                        <a class="header-link" href="/gigs.html">Gigs</a>
                    </div>
                    <div class="header-link_container">
                        <a class="header-link" href="/media.html">Media</a>
                    </div>
                    <div class="header-link_container">
                        <a class="header-link" href="/music.html">Music</a>
                    </div>
                </div>
            </nav>
    `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
               Made with love by JG
            </footer>
        `
    }
}

customElements.define('main-header', Header)
customElements.define('main-footer', Footer)
