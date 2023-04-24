import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP3 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("ja");
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
                <Link to="/ja/" className="flex items-center">
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
                  to="/ja/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/ja/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/ja/youtube-to-mp4/">
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
                        to="/ja/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/ja/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/ja/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTubeからMP3へのコンバーター</h1>
            <p>YouTube 動画を無料で MP3 に変換してダウンロードする</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="YouTube のリンクを検索するか、ここに貼り付けてください..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  検索
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              当社のサービスを使用することにより、お客様は当社の
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;利用規約に同意したことになります。</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">最高の YouTube から MP3 へのコンバーター</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta は、高速でシンプルな YouTube から MP3 へのコンバーターです。私たちの人気のある YouTube から MP3 へのダウンローダーを使用すると、YouTube 動画を高品質で無料で MP3 に簡単に変換してダウンロードできます。また、64kbps、128kbps、192kbps、最大 320kbps などの複数の品質オプションで mp3 をダウンロードできます。
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              この YouTube から Mp3 へのコンバーターは、アプリケーションやソフトウェアをインストールすることなく、デスクトップ、ラップトップ、タブレット、スマートフォンを含むすべてのデバイスでスムーズに動作します。変換プロセスは迅速で便利です。YouTube の URL を貼り付けて、いくつかの簡単な手順を実行するだけで、YouTube mp3 ファイルを数秒でダウンロードできます。それは完全に安全で安全な YouTube MP3 コンバーターです。
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>無料でオンラインで YouTube 動画を MP3 に変換する方法</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube 動画の URL を貼り付けるか、検索ボックスにキーワードを挿入して、[検索] ボタンをクリックします。
                </li>
                <li className="mb-2.5">MP3 の品質を選択し、「ダウンロード」ボタンを押します。</li>
                <li className="mb-2.5">
                  数秒待ってから、MP3 変換が成功したら、[ダウンロード] ボタンをクリックします。
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2メタの利点</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">YouTube から MP3 ファイルを無制限に変換してダウンロードする</li>
                <li className="mb-2.5">ソフトウェアをインストールする必要はなく、登録も必要ありません</li>
                <li className="mb-2.5">100% 安全で安全な YouTube コンバーター</li>
                <li className="mb-2.5">すべてのブラウザとデバイスと互換性があります</li>
                <li className="mb-2.5">YouTubeを高品質のオーディオでmp3に完全に無料で変換</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">簡単かつ迅速な変換</h3>
                <p>
                  YouTube から MP3 をダウンロードするのは簡単です。ダウンロードしたい YouTube の URL を入力して、[ダウンロード] ボタンをクリックするだけです。変換されたファイルは数秒で準備が整います。
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">高品質なフォーマットを提供</h3>
                <p>
                  YouTube を 64kbps、128kbps、192kbps、256kbps、320 kbps などの高品質形式の mp3 に変換することを提案しています。要件に従って選択してダウンロードできます。
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta download" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">変換 制限なし</h3>
                <p>
                  YouTube 動画を無制限に無料で MP3 に変換します。Youtube から Mp3 をダウンロードするためにソフトウェアやアプリをインストールする必要はありません。
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">すべてのプラットフォームに対応</h3>
                <p>
                  当社の YouTube コンバーターは、PC、タブレット、iPhone、Android フォンなど、あらゆる種類のデバイスと互換性があります。また、Y2meta は、Chrome、Microsoft Edge、Firefox、Opera などのすべてのブラウザーをサポートしています。
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">よくある質問</h2>
            <h3 className="mt-2.5 font-semibold">この YouTube から MP3 へのコンバーターは無料で使用できますか?</h3>
            <p>
              はい、当社の Y2meta コンバーターは、アカウントを登録せずに YouTube から Mp3 を完全に無料でダウンロードできます
            </p>
            <h3 className="mt-2.5 font-semibold">この Youtube をすべてのデバイスで mp3 に使用できますか?</h3>
            <p>
              はい、もちろん、この YouTube から Mp3 へのコンバーターは、コンピューター、モバイル、タブレットなど、あらゆる種類のデバイスをサポートしています。
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube 動画から MP3 をダウンロードする方法</h3>
            <p>YouTube を mp3 に変換したい YouTube ビデオのリンクをコピーします。</p>
            <p>YouTube の URL を検索ボックスに貼り付けます</p>
            <p>検索ボタンを押してからMP3を選択し、変換ボタンをクリックします</p>
            <p>変換が正常に完了するまで数秒待ってから、[ダウンロード] ボタンをクリックします。</p>
            <h3 className="mt-2.5 font-semibold">YouTube からの Mp3 ダウンロードの最大数は?</h3>
            <p>
              YouTube を無制限に Mp3 に変換でき、この YouTube コンバーターの使用に関して制限はありません。すべての機能は完全に無料で、制限はありません。
            </p>
            <h3 className="mt-2.5 font-semibold">ブラウザの拡張機能やソフトウェアをインストールする必要がありますか?</h3>
            <p>
              いいえ、当社の YouTube コンバーターはウェブ上で動作するため、ソフトウェアや拡張機能をインストールする必要はありません。必要なのは、Web ブラウザーと信頼できるインターネット接続だけです。
            </p>
            <h3 className="mt-2.5 font-semibold">この YouTube コンバーターを使用して YouTube から mp3 をダウンロードしても安全ですか?</h3>
            <p>
              はい、当社の Youtube から Mp3 へのコンバーターは SSL レイヤーで保護されており、これらの人々が動画を安全にダウンロードできるようになっています。ウイルスやマルウェアから安全に保護するために、YouTube から Mp3 へのコンバーターのセキュリティを毎日監視しています。
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
    <html lang="ja"/>
    <title>YouTube から MP3 へのコンバーター - Y2meta</title>
    <meta
      name="description"
      content="Y2meta は無料の YouTube から MP3 へのコンバーターで、ソフトウェアをインストールせずに PC、iPhone、Android で YouTube から無料で MP3 に変換できます。"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="ja"/>
    <meta property="og:title" content="YouTube から MP3 へのコンバーター - Y2meta"/>
    <meta
      property="og:description"
      content="Y2meta は無料の YouTube から MP3 へのコンバーターで、ソフトウェアをインストールせずに PC、iPhone、Android で YouTube から無料で MP3 に変換できます。"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/ja/youtube-to-mp3/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/ja/youtube-to-mp3/"/>
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