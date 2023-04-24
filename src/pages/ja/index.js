import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
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
                    <nav className="grid gap-y-4">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube 動画ダウンローダー</h1>
            <p>YouTube 動画を MP3 と MP4 の高品質で無料でダウンロード</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">最高の YouTube 動画ダウンローダー</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta は、YouTube 動画を無料でダウンロードできる最も人気のある YouTube ダウンローダーです。個人のデバイスに YouTube 動画を保存するためにサードパーティのアプリケーションやソフトウェアをインストールする必要はありません。Just You には、信頼できるブラウザとインターネット接続が必要です。YouTube、Facebook、Video、Dailymotion、Youku、その他のソーシャル共有 Web サイトからお気に入りの動画をお望みの品質でダウンロードしてお楽しみください。Y2meta は、YouTube 動画を HD 品質でダウンロードする最も安全な方法を提供し、ログインや個人情報の共有を必要としません。
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              MP3、WEBM、MP4、M4V、3GP、WMV、FLV、MO などのさまざまな形式、および 64kbps、128kbps、192kbps、256kbps、320kbps を含むさまざまな MP3 ビット レートで YouTube オーディオとビデオをダウンロードします。Y2meta は、コンピューター、モバイル、タブレット、およびその他のデバイスでスムーズに動作します。シンプルで簡単な YouTube ダウンローダーです。
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Y2meta を使用して YouTube 動画をダウンロードする方法は?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube の Web サイトを開き、ダウンロードしたい YouTube の URL をデバイスにコピーします。
                </li>
                <li className="mb-2.5">コピーした URL を Y2meta 検索ボックスに貼り付け、MP4 または MP3 形式を選択します</li>
                <li className="mb-2.5">
                  変換が完了するまで数秒待ってから、「ダウンロード」ボタンを押します
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2メタの利点</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">無制限の YouTube 動画を無料で変換してダウンロードする</li>
                <li className="mb-2.5">YouTube 動画をすばやく簡単にダウンロードして保存する方法</li>
                <li className="mb-2.5">当社の YouTube ダウンローダーは、すべてのデバイスと完全に互換性があります</li>
                <li className="mb-2.5">常に無料で、登録は必要ありません</li>
                <li className="mb-2.5">高品質のオーディオおよびビデオファイルを提供します</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% 安全で無料</h3>
                <p>
                  Y2meta では、YouTube から mp3 と mp4 を完全に無料でダウンロードできます。また、この YouTube Video Downloader はウイルスやマルウェアから完全に安全で安全です。
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">ビデオをすばやく簡単にダウンロード</h3>
                <p>
                  Y2meta ツールを使用すると、YouTube から MP3 と MP4 をすばやくダウンロードできます。コピーした YouTube の URL を検索ボックスに貼り付けて、[変換] ボタンをクリックするだけです。簡単な手順に従って YouTube 動画をダウンロードしてください。
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">無制限の YouTube 動画をダウンロード</h3>
                <p>
                  この Y2meta Downloader を使用すると、無制限に YouTube 動画を好きなだけダウンロードできます。完全に無料で、登録してログインする必要はありません。
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">複数の品質をサポート</h3>
                <p>
                  Y2meta は複数のオーディオおよびビデオ品質を提供するため、YouTube ビデオを MP3、3GP、MP4、WMA、M4A、FLV、WEBM、MO 形式などに変換できます。
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">よくある質問</h2>
            <h3 className="mt-2.5 font-semibold">Y2メタとは？</h3>
            <p>
              Y2meta は、YouTube から動画をすばやく無料でダウンロードできる最高の YouTube 動画ダウンローダーです。また、YouTube を高品質で Mp3 に変換します。
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta は完全に無料ですか?</h3>
            <p>
              はい、Y2meta は完全に無料で YouTube 動画を使用およびダウンロードできます。サブスクリプションの金額を支払う必要はありません。デバイスにダウンロードしたい YouTube ビデオの URL が必要なだけです。
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube 動画を iPhone にダウンロードする方法</h3>
            <p>
              iPhoneユーザーのプロセスは、すべての使用とは少し異なります。iOS 13 で Safari ブラウザーを使用するか、Readdle アプリでドキュメントを取得する必要があり、すべてのプロセスは上記と同じです。
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta は YouTube から動画をダウンロードしても安全ですか?</h3>
            <p>
              はい、ダウンローダーを使用して YouTube 動画をダウンロードする場合、個人情報を共有する必要はありません。また、デバイスにサードパーティのアプリケーションやソフトウェアをインストールする必要もありません。
            </p>
            <h3 className="mt-2.5 font-semibold">サポートされているビデオ/オーディオ形式は何ですか?</h3>
            <p>
              さまざまな高品質フォーマットを提供し、320kbps、256kbps、192kbps、128kbps、64kbps ビット レートの mp3 と 720p、1080p、1440p、2160p 品質の mp4 をダウンロードできます。
            </p>
            <h3 className="mt-2.5 font-semibold">ダウンロードした YouTube 動画ファイルはデバイスのどこに保存されますか?</h3>
            <p>
              ビデオがYoutubeからコンピュータに保存されたら、ブラウザの「ダウンロード履歴」またはデバイスの「ダウンロード」フォルダを直接確認してください。
            </p>
            <h3 className="mt-2.5 font-semibold">この YouTube 動画ダウンローダーはすべてのデバイスと互換性がありますか?</h3>
            <p>
              はい、Y2meta は YouTube からの動画のダウンロードをサポートしており、コンピューター、モバイル、タブレットなどのすべてのデバイス、および Chrome、Firefox、Microsoft Edge、Safari、Opera などのすべての種類のブラウザーでスムーズに動作します。
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
    <html lang="ja"/>
    <title>Y2meta - YouTube ダウンローダー | YouTube 動画を無料でダウンロード</title>
    <meta
      name="description"
      content="Y2meta は人気のある無料の YouTube ダウンローダーで、ソフトウェアをインストールせずに 1080p、2160p、2k、4k、8k の高品質で YouTube ビデオを無料でダウンロードできます。"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="ja"/>
    <meta property="og:title" content="Y2meta - YouTube ダウンローダー | YouTube 動画を無料でダウンロード"/>
    <meta
      property="og:description"
      content="Y2meta は人気のある無料の YouTube ダウンローダーで、ソフトウェアをインストールせずに 1080p、2160p、2k、4k、8k の高品質で YouTube ビデオを無料でダウンロードできます。"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/ja/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/ja/"/>
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
