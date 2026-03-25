import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import Alert from "./components/Alert";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";

function App() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortField, setSortField] = useState("year");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    fetchProjects().then(data => setProjects(data));
  }, []);

  const filteredProjects = applyFilters(projects, search, category, sortField, sortOrder);

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
      <header className="px-4 py-4 md:px-8">
        <h1 className="text-xl md:text-2xl">Ahmet Portfolio</h1>
        <nav aria-label="Ana navigasyon" className="flex items-center gap-2 md:gap-4 flex-wrap">
          <ul className="flex flex-wrap gap-2 text-sm md:text-base">
            <li><a href="#anasayfa" onClick={(e) => handleScroll(e, 'anasayfa')}>Ana Sayfa</a></li>
            <li><a href="#projeler" onClick={(e) => handleScroll(e, 'projeler')}>Projeler</a></li>
            <li><a href="#yetenekler" onClick={(e) => handleScroll(e, 'yetenekler')}>Yetenekler</a></li>
            <li><a href="#iletisim" onClick={(e) => handleScroll(e, 'iletisim')}>İletişim</a></li>
          </ul>
          <ThemeToggle />
        </nav>
      </header>

      <main className="bg-surface dark:bg-gray-900">
        {/* HERO SECTION */}
        <section id="anasayfa" className="hero">
          <h2>Merhaba, Ben Ahmet!</h2>
          <p>Modern web teknolojileri kullanarak estetik, hızı ve kullanıcı deneyimini ön planda tutan arayüzler tasarlıyor, hayallerinizi koda döküyorum.</p>
        </section>

        {/* PROJELER */}
        <section id="projeler" className="px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="mb-0">Projelerim</h2>
            <div className="flex flex-wrap gap-2 items-center">
              <Input 
                placeholder="Proje ara..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className="min-w-[200px]"
              />
              <select 
                title="Kategori"
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 dark:border-gray-700"
              >
                <option value="all">Tüm Kategoriler</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
              </select>
              <select 
                title="Sıralama Alanı"
                value={sortField} 
                onChange={(e) => setSortField(e.target.value)}
                className="px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 dark:border-gray-700"
              >
                <option value="year">Yıla Göre</option>
                <option value="title">İsme Göre</option>
              </select>
              <select 
                title="Sıralama Yönü"
                value={sortOrder} 
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 dark:border-gray-700"
              >
                <option value="desc">Azalan</option>
                <option value="asc">Artan</option>
              </select>
            </div>
          </div>
          
          <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <Card 
                  key={project.id} 
                  title={project.title} 
                  image={project.image} 
                  imageAlt={project.title}
                  footer={
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-gray-500 dark:text-gray-400">{project.year}</span>
                      <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 capitalize">{project.category}</span>
                    </div>
                  }
                >
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">{t}</span>
                    ))}
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                Aradığınız kriterlere uygun proje bulunamadı.
              </div>
            )}
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
                <Input
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
                <Input
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
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                  rows={5}
                  placeholder="Merhabalar, projeniz hakkında konuşmak isterim..."
                  required
                  minLength={10}
                ></textarea>
              </div>

              <Button type="submit" variant="primary">Gönder</Button>
            </fieldset>
          </form>
        </section>

        {/* UI KIT SECTION */}
        <section id="uikit" className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">UI Kit (Bileşen Vitrini)</h2>
            
            <div className="space-y-12">
              {/* Buttons */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">Buttons</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </div>

              {/* Inputs */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">Inputs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Standart Input" id="ui-input-1" placeholder="Metin giriniz..." />
                  <Input label="Hatalı Input" id="ui-input-2" placeholder="Geçersiz email" error="Lütfen geçerli bir e-posta adresi girin." defaultValue="test@test" />
                  <Input label="Yardımcı Metinli Input" id="ui-input-3" placeholder="Parola" type="password" helpText="En az 8 karakter olmalıdır." />
                  <Input label="Devre Dışı Input" id="ui-input-4" placeholder="Değiştirilemez..." disabled />
                </div>
              </div>

              {/* Alerts */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">Alerts (Uyarılar)</h3>
                <div className="flex flex-col gap-4">
                  <Alert variant="info">Bu bir bilgilendirme mesajıdır. Kullanıcıya ek bilgiler sunar.</Alert>
                  <Alert variant="success">İşlem başarıyla tamamlandı! Verileriniz kaydedildi.</Alert>
                  <Alert variant="warning">Uyarı: Bu işlem geri alınamaz. Devam etmek istediğinize emin misiniz?</Alert>
                  <Alert variant="error">Hata: Sunucuya bağlanılamadı. Lütfen daha sonra tekrar deneyin.</Alert>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">Cards</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card title="Elevated Card" variant="elevated" footer={<Button variant="primary" size="sm">Oluştur</Button>}>
                    Bu varsayılan kart varyantıdır. Hafif bir gölgesi vardır ve üzerine gelindiğinde gölge artar. Elevate etkisi verir.
                  </Card>
                  
                  <Card title="Outlined Card" variant="outlined" footer={<Button variant="secondary" size="sm">İptal</Button>}>
                    Bu, çizgili kart varyantıdır. Etrafında ince bir sınır çizgisi bulunur. Gölge içermez.
                  </Card>
                  
                  <Card title="Filled Card" variant="filled" footer={<Button variant="ghost" size="sm">Detaylar</Button>}>
                    Bu, dolgulu kart varyantıdır. Arka plan rengi belirgindir ve sınırı veya gölgesi yoktur.
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Ahmet Portfolio. Tüm Hakları Saklıdır.</p>
      </footer>
    </>
  );
}

export default App;