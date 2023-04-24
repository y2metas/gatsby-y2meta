import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
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
    {lang: "en", label: "English", path: "/"},
    {lang: "de", label: "Deutsch", path: "/de/"},
    {lang: "es", label: "Español", path: "/es/"},
    {lang: "fr", label: "Français", path: "/fr/"},
    {lang: "hi", label: "हिन्दी / Hindi", path: "/hi/"},
    {lang: "id", label: "Indonesian", path: "/id/"},
    {lang: "it", label: "Italiano", path: "/it/"},
    {lang: "ja", label: "ह日本語", path: "/ja/"},
    {lang: "ko", label: "한국어", path: "/ko/"},
    {lang: "my", label: "Myanmar (မြန်မာ)", path: "/my/"},
    {lang: "ms", label: "Malay", path: "/ms/"},
    {lang: "ph", label: "Filipino", path: "/tl-ph/"},
    {lang: "pt", label: "Português", path: "/pt/"},
    {lang: "ru", label: "Русский", path: "/ru/"},
    {lang: "th", label: "ไทย", path: "/th/"},
    {lang: "tr", label: "Türkçe", path: "/tr/"},
    {lang: "vi", label: "Tiếng Việt", path: "/vi/"},
    {lang: "zh-cn", label: "简体中文", path: "/zh-cn/"},
    {lang: "zh-tw", label: "繁體中文", path: "/zh-tw/"},
    {lang: "ar", label: "عربي", path: "/ar/"},
    {lang: "bn", label: "বাঙালি", path: "/bn/"},
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
                    <nav className="grid gap-y-4">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube Video İndirici</h1>
            <p>YouTube videolarını MP3 ve MP4 yüksek kalitede ücretsiz olarak indirin</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">En İyi YouTube Video İndirici</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta, YouTube videolarını ücretsiz olarak indirmenize izin veren en popüler YouTube Downloader'dır.
              YouTube videolarını kişisel cihazınıza kaydetmek için üçüncü taraf Uygulamaları ve yazılımları yüklemenize
              gerek yoktur. Just You güvenilir bir tarayıcıya ve internet bağlantısına ihtiyaç duyar. YouTube, Facebook,
              Video, Dailymotion, Youku ve diğer sosyal paylaşım sitelerinden en sevdiğiniz videoları istediğiniz
              kalitede indirmenin keyfini çıkarın. Y2meta, YouTube videolarını HD Kalitede İndirmenin en güvenli yolunu
              sunar ve oturum açmayı veya kişisel bilgileri paylaşmayı gerektirmez.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              YouTube ses ve videolarını MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO vb. çeşitli formatlarda ve 64kbps,
              128kbps, 192kbps, 256kbps ve 320kbps gibi farklı MP3 bit hızlarında indirin. Y2meta, bilgisayarınızda, cep
              telefonunuzda, Tabletinizde ve diğer Cihazlarınızda sorunsuz çalışır. basit ve Kolay bir YouTube
              İndiricisidir.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Y2meta kullanarak YouTube videoları nasıl indirilir?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube web sitesini açın ve cihazınıza indirmek istediğiniz YouTube URL'sini kopyalayın
                </li>
                <li className="mb-2.5">Kopyalanan URL'yi Y2meta Arama kutusuna yapıştırın ve MP4 veya MP3 biçimini
                  seçin
                </li>
                <li className="mb-2.5">
                  Dönüşüm tamamlanana kadar birkaç saniye bekleyin ve "İndir" düğmesine basın
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta Avantajları</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Sınırsız YouTube videosunu ücretsiz olarak dönüştürün ve indirin</li>
                <li className="mb-2.5">Herhangi bir YouTube videosunu indirmenin ve kaydetmenin hızlı ve kolay yolu</li>
                <li className="mb-2.5">YouTube indiricimiz tüm cihazlarla tamamen uyumludur</li>
                <li className="mb-2.5">Her zaman ücretsizdir ve kayıt olması gerekmez</li>
                <li className="mb-2.5">Yüksek kaliteli ses ve video dosyaları sağlıyoruz</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">%100 Güvenli ve Ücretsiz</h3>
                <p>
                  Y2meta, YouTube'dan tamamen ücretsiz olarak mp3 ve mp4 indirme imkanı sunar. Ayrıca bu YouTube Video
                  İndirici, virüslere ve Kötü Amaçlı Yazılımlara karşı tamamen güvenli ve güvenlidir.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Videoyu Hızlı ve Kolayca İndirin</h3>
                <p>
                  Y2meta aracı, YouTube'dan MP3 ve MP4'ü hızlı bir şekilde indirmenize yardımcı olur. Kopyalanan YouTube
                  URL'sini arama kutusuna yapıştırmanız ve "Dönüştür" düğmesini tıklamanız yeterlidir. YouTube Videosunu
                  İndirmek için basit adımları uygulamanız yeterlidir.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Sınırsız YouTube Videosu İndirin</h3>
                <p>
                  Bu Y2meta Downloader'ı kullanarak YouTube Videolarını herhangi bir sınırlama olmaksızın istediğiniz
                  kadar indirin. tamamen ücretsizdir ve kayıt olmanıza ve giriş yapmanıza gerek yoktur.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Çoklu kaliteyi destekleyin</h3>
                <p>
                  Y2meta, YouTube Videolarını MP3, 3GP, MP4, WMA, M4A, FLV, WEBM, MO biçimlerine vb. dönüştürebilmeniz
                  için birden fazla Ses ve video kalitesi sunar.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">SSS</h2>
            <h3 className="mt-2.5 font-semibold">Y2meta nedir?</h3>
            <p>
              Y2meta, YouTube'dan Hızlı ve Ücretsiz Video İndirmenize izin veren en iyi YouTube Video İndiricisidir.
              ayrıca YouTube'u yüksek kalitede Mp3'e dönüştürün.
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta Tamamen Ücretsiz mi?</h3>
            <p>
              Evet, Y2meta YouTube videolarını kullanmak ve indirmek tamamen ücretsizdir. herhangi bir abonelik tutarı
              ödemenize gerek yok, sadece cihazınıza indirmek istediğiniz YouTube video URL'sine ihtiyacınız var.
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube videoları iPhone'a nasıl indirilir?</h3>
            <p>
              iPhone kullanıcılarının işlemi Tüm kullanımdan biraz farklıdır. iOS 13'te Safari tarayıcısını kullanmanız
              veya Documents by Readdle uygulamasını almanız gerekir ve tüm işlemler yukarıdakiyle aynıdır.
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta, YouTube'dan Video indirmek için güvenli midir?</h3>
            <p>
              Evet, İndiricimizi kullanarak YouTube Videoları İndirin, herhangi bir kişisel bilgi paylaşmanıza ve ayrıca
              cihazlarınıza üçüncü taraf uygulamaları ve yazılımları yüklemenize gerek yoktur.
            </p>
            <h3 className="mt-2.5 font-semibold">Desteklenen video/ses biçimleri nelerdir?</h3>
            <p>
              Çeşitli yüksek kaliteli formatlar sağlıyoruz ve 320kbps, 256kbps, 192kbps, 128kbps, 64kbps bit hızında mp3
              ve 720p, 1080p, 1440p, 2160p kalitesinde mp4 indirmenize izin veriyoruz.
            </p>
            <h3 className="mt-2.5 font-semibold">İndirilen YouTube video dosyası cihazımda nerede depolanır?</h3>
            <p>
              Video, Youtube'dan bilgisayarınıza kaydedildikten sonra doğrudan tarayıcınızın "indirme geçmişi" veya
              cihazınızdaki "İndirilenler" klasörüne bakın.
            </p>
            <h3 className="mt-2.5 font-semibold">Bu YouTube video indiricisi tüm cihazlarla uyumlu mu?</h3>
            <p>
              Evet, Y2meta, YouTube'dan video indirmeyi destekler; bilgisayarlar, cep telefonları ve tabletler gibi tüm
              cihazlarda ve Chrome, Firefox, Microsoft Edge, Safari, Opera vb. her türlü tarayıcıda sorunsuz çalışır.
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

export default YouTubeDownloader;

export const Head = () => (
  <>
    <html lang="tr"/>
    <title>Y2meta - YouTube İndirici | YouTube Videosunu Ücretsiz İndirin</title>
    <meta
      name="description"
      content="Y2meta, popüler bir Ücretsiz YouTube İndiricisidir ve YouTube videosunu yükleme yazılımı olmadan 1080p, 2160p, 2k, 4k, 8k'de yüksek kalitede Ücretsiz olarak İndirmenize olanak tanır."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="tr"/>
    <meta property="og:title" content="Y2meta - YouTube İndirici | YouTube Videosunu Ücretsiz İndirin"/>
    <meta
      property="og:description"
      content="Y2meta, popüler bir Ücretsiz YouTube İndiricisidir ve YouTube videosunu yükleme yazılımı olmadan 1080p, 2160p, 2k, 4k, 8k'de yüksek kalitede Ücretsiz olarak İndirmenize olanak tanır."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/tr/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/tr/"/>
    <link rel="alternate" hrefLang="en" href="https://y2meta.mobi/"/>
    <link rel="alternate" hrefLang="de" href="https://y2meta.mobi/de/"/>
    <link rel="alternate" hrefLang="es" href="https://y2meta.mobi/es/"/>
    <link rel="alternate" hrefLang="fr" href="https://y2meta.mobi/fr/"/>
    <link rel="alternate" hrefLang="hi" href="https://y2meta.mobi/hi/"/>
    <link rel="alternate" hrefLang="id" href="https://y2meta.mobi/id/"/>
    <link rel="alternate" hrefLang="it" href="https://y2meta.mobi/it/"/>
    <link rel="alternate" hrefLang="ja" href="https://y2meta.mobi/ja/"/>
    <link rel="alternate" hrefLang="ko" href="https://y2meta.mobi/ko/"/>
    <link rel="alternate" hrefLang="my" href="https://y2meta.mobi/my/"/>
    <link rel="alternate" hrefLang="ms" href="https://y2meta.mobi/ms/"/>
    <link rel="alternate" hrefLang="tl-ph" href="https://y2meta.mobi/tl-ph/"/>
    <link rel="alternate" hrefLang="pt" href="https://y2meta.mobi/pt/"/>
    <link rel="alternate" hrefLang="ru" href="https://y2meta.mobi/ru/"/>
    <link rel="alternate" hrefLang="th" href="https://y2meta.mobi/th/"/>
    <link rel="alternate" hrefLang="tr" href="https://y2meta.mobi/tr/"/>
    <link rel="alternate" hrefLang="vi" href="https://y2meta.mobi/vi/"/>
    <link rel="alternate" hrefLang="zh-cn" href="https://y2meta.mobi/zh-cn/"/>
    <link rel="alternate" hrefLang="zh-tw" href="https://y2meta.mobi/zh-tw/"/>
    <link rel="alternate" hrefLang="ar" href="https://y2meta.mobi/ar/"/>
    <link rel="alternate" hrefLang="bn" href="https://y2meta.mobi/bn/"/>
    <link rel="alternate" hrefLang="x-default" href="https://y2meta.mobi/"/>
  </>
)
