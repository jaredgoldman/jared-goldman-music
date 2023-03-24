class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="header-links_container">
                <div class="header-links">
                    <div class="header-link_container">
                        <a class="header-link" href="/">JG</a>
                    </div>
                    <div class="header-link_container">
                        <a class="header-link" href="/about.html">About</a>
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
                <div class="header-socials_container">
                    <a href=https://www.instagram.com/jaredgoldmandrums/ class="header-social_icon">Ig</a>
                    <a href=mailto:jaredgoldmandrums@gmail.com class="header-social_icon">email</a> 
                </div>
            </nav>
    `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <span>
                    Made with love by <a class='header-link' href=https://github.com/jaredgoldman> JG</a>
                </span>
            </footer>
        `
    }
}

customElements.define('main-header', Header)
customElements.define('main-footer', Footer)
