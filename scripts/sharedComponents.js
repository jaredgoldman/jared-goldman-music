class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="header-links_container">
                <div class="header-links">
                    <div>
                        <a class="header-link" href="/">JG</a>
                    </div>
                    <div>
                        <a class="header-link" href="/gigs.html">Gigs</a>
                    </div>
                    <div>
                        <a class="header-link" href="/media.html">Media</a>
                    </div>
                    <div>
                        <a class="header-link" href="/music.html">Music</a>
                    </div>
                </div>
            </div>
    `
    }
}

customElements.define('main-header', Header)
