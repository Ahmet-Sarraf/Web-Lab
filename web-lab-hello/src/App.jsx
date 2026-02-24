import "./App.css";

function App() {
  return (
    <>
      {/* Skip Navigation */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1>Ahmet Sarraf</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* HAKKIMDA */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure>
            <img
              src="/assets/profil.jpg"
              alt="Ahmet Sarraf'ın profil fotoğrafı"
            />
            <figcaption>Ahmet Sarraf</figcaption>
          </figure>

          <p>
            Yazılım mühendisliği öğrencisiyim.
          </p>
        </section>

        {/* PROJELER */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Örnek Proje</h3>
            <p>Kişisel portföy çalışması.</p>
          </article>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim">
          <h2>İletişim</h2>

          <form noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">Seçiniz</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2025 Ahmet Sarraf</p>
      </footer>
    </>
  );
}

export default App;