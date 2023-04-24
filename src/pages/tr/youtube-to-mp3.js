import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP3 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("tr");
  const [openLanguage, setOpenLanguage] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setOpenLanguage(!openLanguage)
  };

  const isYtUrl = (url) => {
    const ytRegex = new RegExp(
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/g
    );
    return ytRegex.test(url)
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleClickEnter = (e) => {
    if (e.keyCode === 13) {
      if (isYtUrl(inputValue)) {
        navigate("/download", {state: {url: inputValue}});
      } else {
        navigate("/search", {state: {url: inputValue}});
      }
    }
  };

  const handleClickConvert = () => {
    if (isYtUrl(inputValue)) {
      navigate("/download", {state: {url: inputValue}});
    } else {
      navigate("/search", {state: {url: inputValue}});
    }
  };

  const languageOptions = [
    {lang: "en", label: "English", path: "/youtube-to-mp3/"},
    {lang: "de", label: "Deutsch", path: "/de/youtube-to-mp3/"},
    {lang: "es", label: "Español", path: "/es/youtube-to-mp3/"},
    {lang: "fr", label: "Français", path: "/fr/youtube-to-mp3/"},
    {lang: "hi", label: "हिन्दी / Hindi", path: "/hi/youtube-to-mp3/"},
    {lang: "id", label: "Indonesian", path: "/id/youtube-to-mp3/"},
    {lang: "it", label: "Italiano", path: "/it/youtube-to-mp3/"},
    {lang: "ja", label: "ह日本語", path: "/ja/youtube-to-mp3/"},
    {lang: "ko", label: "한국어", path: "/ko/youtube-to-mp3/"},
    {lang: "my", label: "Myanmar (မြန်မာ)", path: "/my/youtube-to-mp3/"},
    {lang: "ms", label: "Malay", path: "/ms/youtube-to-mp3/"},
    {lang: "ph", label: "Filipino", path: "/tl-ph/youtube-to-mp3/"},
    {lang: "pt", label: "Português", path: "/pt/youtube-to-mp3/"},
    {lang: "ru", label: "Русский", path: "/ru/youtube-to-mp3/"},
    {lang: "th", label: "ไทย", path: "/th/youtube-to-mp3/"},
    {lang: "tr", label: "Türkçe", path: "/tr/youtube-to-mp3/"},
    {lang: "vi", label: "Tiếng Việt", path: "/vi/youtube-to-mp3/"},
    {lang: "zh-cn", label: "简体中文", path: "/zh-cn/youtube-to-mp3/"},
    {lang: "zh-tw", label: "繁體中文", path: "/zh-tw/youtube-to-mp3/"},
    {lang: "ar", label: "عربي", path: "/ar/youtube-to-mp3/"},
    {lang: "bn", label: "বাঙালি", path: "/bn/youtube-to-mp3/"},
  ];

  return (
    <>
      <div className="mx-auto md:max-w-[890px] px-3">
        <header className="h-[68px] flex items-center top-0">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="lg:w-0 lg:flex-1">
                <Link to="/tr/" className="flex items-center">
                  <StaticImage src="../../images/logo.png" loading="eager" alt="y2meta" width={50} quality={50}/>
                  <h1 className="text-2xl font-semibold w-auto z-50 pl-2">y2meta</h1>
                </Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle Menu"
                  type="button"
                  className="inline-flex items-center justify-center border border-solid border-heading py-1 px-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <StaticImage src="../../images/mobile.svg" loading="eager" alt="y2meta" width={25} quality={25}/>
                </button>
              </div>
              <nav className="hidden md:flex">
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/tr/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/tr/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/tr/youtube-to-mp4/">
                  YouTube to MP4
                </Link>
                <div className="relative top-[21px]">
                  <button
                    className="text-sm px-3.5 text-heading hover:text-heading-clr"
                    onClick={() => setOpenLanguage(!openLanguage)}>
                    {languageOptions.find((option) => option.lang === selectedLanguage)?.label || "Language"}
                  </button>
                  {openLanguage &&
                    <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-lg">
                      {languageOptions.map((option) => (
                        <Link
                          key={option.lang}
                          to={option.path}
                          className="block px-4 py-0.5 text-gray-800 hover:bg-gray-200"
                          onClick={() => handleLanguageChange(option.lang)}
                        >
                          {option.label}
                        </Link>
                      ))}
                    </div>
                  }
                </div>
              </nav>
            </div>
          </div>
          <div
            className="absolute top-16 inset-x-0 transition transform origin-top-right md:!hidden z-20"
            style={{display: open ? "block" : "none"}}>
            <div className="shadow-lg">
              <div className="shadow-xs bg-background divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div>
                    <nav className="grid gap-y-8">
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/tr/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/tr/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/tr/youtube-to-mp4/">
                        YouTube to MP4
                      </Link>
                      <div className="relative">
                        <button
                          className="-m-3 p-3 flex items-center text-heading hover:text-heading-clr transition duration-300"
                          onClick={() => setOpenLanguage(!openLanguage)}>
                          {languageOptions.find((option) => option.lang === selectedLanguage)?.label || "Language"}
                        </button>
                        {openLanguage &&
                          <div className="absolute mt-2 py-2 w-40 bg-white rounded-md shadow-lg">
                            {languageOptions.map((option) => (
                              <Link
                                key={option.lang}
                                to={option.path}
                                className="block px-4 py-0.5 text-gray-800 hover:bg-gray-200"
                                onClick={() => handleLanguageChange(option.lang)}
                              >
                                {option.label}
                              </Link>
                            ))}
                          </div>
                        }
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="bg-white p-4 border border-solid rounded border-current border-solid-clr container mx-auto">
          <div className="md:py-8 py-7 text-center">
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTube'dan MP3'e Dönüştürücü</h1>
            <p>YouTube videolarını ücretsiz MP3'e dönüştürün ve indirin</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Arama yapın veya youtube bağlantısını buraya yapıştırın..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Aramak
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              Hizmetimizi kullanarak
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;Şartlar ve Koşullarımızı kabul etmiş
                olursunuz.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">En İyi YouTube'dan MP3'e Dönüştürücü</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta, hızlı ve basit bir YouTube'dan MP3'e dönüştürücüdür. Popüler YouTube'dan MP3'e indiricimiz,
              YouTube videolarını kolayca Yüksek kalitede ve ücretsiz olarak MP3'e dönüştürmenize ve indirmenize olanak
              tanır. Ayrıca 64kbps, 128kbps, 192kbps ve 320kbps'ye kadar birden fazla kalite seçeneği ile mp3
              indirebilirsiniz.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Bu YouTube'dan Mp3'e dönüştürücü, herhangi bir uygulama veya yazılım yüklemeden masaüstü bilgisayarlar,
              dizüstü bilgisayarlar, tabletler ve akıllı telefonlar dahil tüm cihazlarda sorunsuz çalışır. Dönüştürme
              işlemi hızlı ve kolaydır Sadece YouTube URL'sini yapıştırın ve birkaç basit adımda youtube mp3 dosyanız
              birkaç saniye içinde indirilmeye hazır hale gelsin. tamamen güvenli ve emniyetli YouTube MP3
              dönüştürücüsüdür.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>YouTube Videosunu Çevrimiçi MP3'e Ücretsiz Olarak
                Dönüştürme</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube video URL'sini yapıştırın veya Anahtar Kelimeyi arama kutusuna girin, ardından "Ara" düğmesini
                  tıklayın.
                </li>
                <li className="mb-2.5">MP3 kalitesini seçin ve "İndir" düğmesine basın.</li>
                <li className="mb-2.5">
                  Birkaç saniye bekleyin ve başarılı Mp3 dönüşümünden sonra İndir düğmesine tıklayın.
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta Avantajları</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">MP3 dosyalarını herhangi bir sınırlama olmaksızın YouTube'dan Dönüştürün ve
                  İndirin
                </li>
                <li className="mb-2.5">Herhangi bir yazılım yüklemeye gerek yok ve kayıt olmadan</li>
                <li className="mb-2.5">%100 Güvenli ve Güvenli YouTube Dönüştürücü</li>
                <li className="mb-2.5">tüm tarayıcılar ve Cihazlar ile uyumlu</li>
                <li className="mb-2.5">Tamamen Ücretsiz Youtube'u Yüksek kaliteli ses ile mp3'e dönüştürün</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Kolay ve Hızlı Dönüşüm</h3>
                <p>
                  YouTube'dan MP3 İndirmek Çok Kolay İndirmek istediğiniz YouTube URL'sini girin ve İndir düğmesini
                  tıklayın. dönüştürülen dosyalarınız birkaç saniye içinde hazır.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Yüksek Kaliteli Biçimler Sağlayın</h3>
                <p>
                  YouTube'u 64kbps, 128kbps, 192kbps, 256kbps ve 320 kbps gibi yüksek kaliteli formatlarda mp3'e
                  dönüştürmeyi teklif ediyoruz. İhtiyaca göre seçebilir ve indirebilirsiniz.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta download" width={50}
                           quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Sınırsız Dönüşüm</h3>
                <p>
                  Herhangi bir YouTube videosunu sınırlama olmaksızın ücretsiz olarak MP3'e dönüştürün. Youtube'dan Mp3
                  indirmek için herhangi bir yazılım veya uygulama yüklemenize gerek yoktur.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Tüm Platformlarla Uyumlu</h3>
                <p>
                  YouTube Dönüştürücümüz PC, Tablet, iPhone, Android telefon vb. her tür cihazla uyumludur. Ayrıca
                  Y2meta, Chrome, Microsoft Edge, Firefox, Opera ve diğerleri dahil tüm tarayıcıları destekler.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">SSS</h2>
            <h3 className="mt-2.5 font-semibold">Bu YouTube'dan MP3'e dönüştürücünün kullanımı ücretsiz mi?</h3>
            <p>
              Evet, Y2meta dönüştürücümüz YouTube'dan bir hesap açmadan Mp3 indirmek için tamamen ücretsizdir
            </p>
            <h3 className="mt-2.5 font-semibold">Bu Youtube'u tüm cihazlarda mp3 yapmak için kullanabilir miyim?</h3>
            <p>
              Evet, elbette, Bu YouTube'dan Mp3'e dönüştürücü, bilgisayarlar, Mobil ve Tabletler dahil her türlü cihazı
              destekler.
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube videolarından MP3 nasıl indirilir?</h3>
            <p>YouTube'u mp3'e dönüştürmek istediğiniz Youtube Video bağlantısını kopyalayın</p>
            <p>YouTube URL'sini arama kutusuna yapıştırın</p>
            <p>Ara düğmesine basın, ardından Mp3'ü seçin ve dönüştür düğmesine tıklayın</p>
            <p>Dönüşümün başarıyla tamamlanması için birkaç saniye bekleyin ve ardından "İndir" düğmesini tıklayın.</p>
            <h3 className="mt-2.5 font-semibold">YouTube'dan indirilebilecek maksimum Mp3 sayısı nedir?</h3>
            <p>
              YouTube'u sınırsızca Mp3'e dönüştürebilirsiniz ve bu YouTube dönüştürücüyü kullanmak söz konusu olduğunda
              herhangi bir kısıtlama yoktur. tüm özellikler tamamen ücretsiz ve sınırlama olmaksızın.
            </p>
            <h3 className="mt-2.5 font-semibold">Bir tarayıcı uzantısı veya yazılımı yüklemem gerekiyor mu?</h3>
            <p>
              Hayır, YouTube Dönüştürücümüz web üzerinde çalışır, bu nedenle herhangi bir yazılım veya uzantı yüklemeniz
              gerekmez. sadece bir web tarayıcısına ve güvenilir bir internet bağlantısına ihtiyacınız var.
            </p>
            <h3 className="mt-2.5 font-semibold">Bu YouTube dönüştürücüyü kullanarak YouTube'dan mp3 indirmek güvenli
              mi?</h3>
            <p>
              Evet, Youtube'dan Mp3'e dönüştürücümüz, bu kişilerin videoları güvenle indirebilmelerini sağlayan SSL
              katmanıyla güvenlidir. Virüslerden ve kötü amaçlı yazılımlardan korunmak için YouTube To Mp3
              dönüştürücümüzün güvenliğini günlük olarak izliyoruz.
            </p>
          </div>
        </section>
      </div>
      <footer>
        <div className="md:py-14 py-5	text-sm	text-center border-solid	border-y border-inherit">
          <p className="mb-5">@2023 y2meta.mobi</p>
          <ul className="flex justify-center">
            <li><Link className="mx-2" to="/about-us/">About</Link></li>
            <li><Link className="mx-2" to="/contact/">Contact</Link></li>
            <li><Link className="mx-2" to="/terms-condition/">Terms of Service</Link></li>
            <li><Link className="mx-2" to="/privacy-policy/">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default YouTubeToMP3;


export const Head = () => (
  <>
    <html lang="tr"/>
    <title>YouTube'dan MP3'e Dönüştürücü - Y2meta</title>
    <meta
      name="description"
      content="Y2meta Ücretsiz YouTube'dan MP3'e Dönüştürücüdür, yazılım yüklemeden PC, iPhone ve Android'de YouTube Ücretsiz'den MP3'e izin verir."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="tr"/>
    <meta property="og:title" content="YouTube'dan MP3'e Dönüştürücü - Y2meta"/>
    <meta
      property="og:description"
      content="Y2meta Ücretsiz YouTube'dan MP3'e Dönüştürücüdür, yazılım yüklemeden PC, iPhone ve Android'de YouTube Ücretsiz'den MP3'e izin verir."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/tr/youtube-to-mp3/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/tr/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="en" href="https://y2meta.mobi/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="de" href="https://y2meta.mobi/de/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="es" href="https://y2meta.mobi/es/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="fr" href="https://y2meta.mobi/fr/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="hi" href="https://y2meta.mobi/hi/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="id" href="https://y2meta.mobi/id/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="it" href="https://y2meta.mobi/it/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ja" href="https://y2meta.mobi/ja/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ko" href="https://y2meta.mobi/ko/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="my" href="https://y2meta.mobi/my/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ms" href="https://y2meta.mobi/ms/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ph" href="https://y2meta.mobi/tl-ph/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="pt" href="https://y2meta.mobi/pt/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ru" href="https://y2meta.mobi/ru/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="th" href="https://y2meta.mobi/th/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="tr" href="https://y2meta.mobi/tr/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="vi" href="https://y2meta.mobi/vi/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="zh-cn" href="https://y2meta.mobi/zh-cn/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="zh-tw" href="https://y2meta.mobi/zh-tw/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ar" href="https://y2meta.mobi/ar/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="bn" href="https://y2meta.mobi/bn/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="x-default" href="https://y2meta.mobi/youtube-to-mp3/"/>
  </>
)