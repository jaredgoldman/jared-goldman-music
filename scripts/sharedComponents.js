class Header extends HTMLElement {
    connectedCallback() {
        const isLocal = window.location.href.includes('8080')
        const extension = isLocal ? '.html' : ''

        this.innerHTML = `
      <nav class="header_container">
          <div class="menu-toggle">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
          </div>
          <div class="menu-full">
              <div class="header-links_container">
                  <div class="header-link_container">
                      <a class="header-link" href="/">JG</a>
                  </div>
                  <div class="header-link_container">
                      <a class="header-link" href="/about${extension}">About</a>
                  </div>
                  <div class="header-link_container">
                      <a class="header-link" href="/gigs${extension}">Gigs</a>
                  </div>
                  <div class="header-link_container">
                      <a class="header-link" href="/media${extension}">Media</a>
                  </div>
                  <div class="header-link_container">
                      <a class="header-link" href="/music${extension}">Music</a>
                  </div>
              </div>
               <div class="header-socials">
                  <a href="https://www.instagram.com/jaredgoldmandrums/" class="header-social_icon">
                      <div class='header-socials_image-container'>
                          <img src='../assets/images/insta.png'/>
                      </div>
                  </a>
                  <a href="mailto:jaredgoldmandrums@gmail.com" class="header-social_icon">
                      <div class='header-socials_image-container'>
                          <img src='../assets/images/email.png'/>
                      </div>
                  </a>
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
          <span>
              made with love by <a class='header-link' href="https://github.com/jaredgoldman">jg</a>
          </span>
      </footer>
    `
    }
}

class Loader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="loader-overlay">
            <div class="loader-spinner">
                <img src="../assets/images/spinner.png" />
            </div>
        </div>
    `
    }
}

customElements.define('main-header', Header)
customElements.define('main-footer', Footer)
customElements.define('main-loader', Loader)
// Create an instance of the Header and Footer elements
const header = new Header()
const footer = new Footer()
const loader = new Loader()
