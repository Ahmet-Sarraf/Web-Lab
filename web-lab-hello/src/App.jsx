import "./App.css";

function App() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yStr = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: yStr, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header>
        <h1>Ahmet Portfolio</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#anasayfa" onClick={(e) => handleScroll(e, 'anasayfa')}>Ana Sayfa</a></li>
            <li><a href="#projeler" onClick={(e) => handleScroll(e, 'projeler')}>Projeler</a></li>
            <li><a href="#yetenekler" onClick={(e) => handleScroll(e, 'yetenekler')}>Yetenekler</a></li>
            <li><a href="#iletisim" onClick={(e) => handleScroll(e, 'iletisim')}>İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="anasayfa" className="hero">
          <h2>Merhaba, Ben Ahmet!</h2>
          <p>Modern web teknolojileri kullanarak estetik, hızı ve kullanıcı deneyimini ön planda tutan arayüzler tasarlıyor, hayallerinizi koda döküyorum.</p>
        </section>

        {/* PROJELER */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <div className="card">
              <h3>Portföy Sitesi</h3>
              <p>React, Vite ve modern CSS mimarisi kullanarak geliştirdiğim kişisel web sitem.</p>
            </div>
            <div className="card">
              <h3>E-Ticaret Arayüzü</h3>
              <p>Kullanıcı deneyimini ön planda tutan, karanlık mod destekli alışveriş platformu prototipi.</p>
            </div>
            <div className="card">
              <h3>Görev Yöneticisi</h3>
              <p>Günlük işlerinizi organize etmenize yardımcı olan minimal bir To-Do uygulaması.</p>
            </div>
          </div>
        </section>

        {/* YETENEKLER */}
        <section id="yetenekler">
          <h2>Yetenekler</h2>
          <ul className="skill-tags">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Vite</li>
            <li>Responsive Design</li>
          </ul>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form noValidate>
            <fieldset>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ahmet Sarraf"
                  required
                  minLength={2}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ahmet@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Merhabalar, projeniz hakkında konuşmak isterim..."
                  required
                  minLength={10}
                ></textarea>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Ahmet Portfolio. Tüm Hakları Saklıdır.</p>
      </footer>
    </>
  );
}

export default App;