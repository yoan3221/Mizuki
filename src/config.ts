import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	PermalinkConfig,
	ProfileConfig,
	SakuraConfig,
	ShareConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 移除i18n導入以避免循環依賴

// 定義站點語言
const SITE_LANG = "en"; // 語言代碼，例如：'en', 'zh_CN', 'ja' 等。
const SITE_TIMEZONE = 8; // 設置你的網站時區 from -12 to 12 default in UTC+8
export const siteConfig: SiteConfig = {
	title: "g8kz",
	subtitle: "Exploring the Intersection of Hardware and Software",
	siteURL: "https://www.g8kz.com/", // 請替換為你的站點URL，以斜杠結尾
	siteStartDate: "2026-01-01", // 站點開始運行日期，用於站點統計組件計算運行天數

	timeZone: SITE_TIMEZONE,

	lang: SITE_LANG,

	themeColor: {
		hue: 230, // 主題色的默認色相，範圍從 0 到 360。例如：紅色：0，青色：200，藍綠色：250，粉色：345
		fixed: false, // 對訪問者隱藏主題色選擇器
	},

	// 特色頁面開關配置(關閉不在使用的頁面有助於提升SEO,關閉後直接在頂部導航刪除對應的頁面就行)
	featurePages: {
		anime: false, // 番劇頁面開關
		diary: true, // 日記頁面開關
		friends: true, // 友鏈頁面開關
		projects: false, // 項目頁面開關
		skills: false, // 技能頁面開關
		timeline: false, // 時間線頁面開關
		albums: true, // 相冊頁面開關
		devices: true, // 設備頁面開關
	},

	// 頂欄標題配置
	navbarTitle: {
		// 頂欄標題文本
		text: "g8kz",
		// 頂欄標題圖標路徑，默認使用 public/assets/home/home.png
		icon: "assets/home/home.png",
	},

	bangumi: {
		userId: "your-bangumi-id", // 在此處設置你的Bangumi用戶ID，可以設置為 "sai" 測試
		fetchOnDev: false, // 是否在開發環境下獲取 Bangumi 數據（默認 false），獲取前先執行 pnpm build 構建 json 文件
	},

	anime: {
		mode: "local", // 番劇頁面模式："bangumi" 使用Bangumi API，"local" 使用本地配置
	},

	// 文章列表佈局配置
	postListLayout: {
		// 默認佈局模式："list" 列表模式（單列佈局），"grid" 網格模式（雙列佈局）
		// 注意：如果側邊欄配置啟用了"both"雙側邊欄，則無法使用文章列表"grid"網格（雙列）佈局
		defaultMode: "list",
		// 允許用戶切換佈局
		allowSwitch: true,
	},

	// 標籤樣式配置
	tagStyle: {
		// 是否使用新樣式（懸停高亮樣式）還是舊樣式（外框常亮樣式）
		useNewStyle: false,
	},

	// 壁紙模式配置
	wallpaperMode: {
		// 默認壁紙模式：banner=頂部橫幅，fullscreen=全屏壁紙，none=無壁紙
		defaultMode: "fullscreen",
		// 整體佈局方案切換按鈕顯示設置（默認："desktop"）
		// "off" = 不顯示
		// "mobile" = 僅在移動端顯示
		// "desktop" = 僅在桌面端顯示
		// "both" = 在所有設備上顯示
		showModeSwitchOnMobile: "desktop",
	},

	banner: {
		// 支持單張圖片或圖片數組，當數組長度 > 1 時自動啟用輪播
		src: {
			desktop: [
				"/assets/desktop-banner/1.webp",
				"/assets/desktop-banner/2.webp",
				"/assets/desktop-banner/3.webp",
				"/assets/desktop-banner/4.webp",
				"/assets/desktop-banner/5.webp",
				"/assets/desktop-banner/6.webp",
			], // 桌面橫幅圖片
			mobile: [
				"/assets/mobile-banner/1.webp",
				"/assets/mobile-banner/2.webp",
				"/assets/mobile-banner/3.webp",
				"/assets/mobile-banner/4.webp",
				"/assets/mobile-banner/5.webp",
				"/assets/mobile-banner/6.webp",
			], // 移動橫幅圖片
		}, // 使用本地橫幅圖片

		position: "center", // 等同於 object-position，僅支持 'top', 'center', 'bottom'。默認為 'center'

		carousel: {
			enable: true, // 為 true 時：為多張圖片啟用輪播。為 false 時：從數組中隨機顯示一張圖片
			interval: 1.5, // 輪播間隔時間（秒）
		},

		waves: {
			enable: true, // 是否啟用水波紋效果(這個功能比較吃性能)
			performanceMode: false, // 性能模式：減少動畫複雜度(性能提升40%)
			mobileDisable: false, // 移動端禁用
		},

		// PicFlow API支持(智能圖片API)
		imageApi: {
			enable: false, // 啟用圖片API
			url: "http://domain.com/api_v2.php?format=text&count=4", // API地址，返回每行一個圖片鏈接的文本
		},
		// 這裡需要使用PicFlow API的Text返回類型,所以我們需要format=text參數
		// 項目地址:https://github.com/matsuzaka-yuki/PicFlow-API
		// 請自行搭建API

		homeText: {
			enable: true, // 在主頁顯示自定義文本
			title: "g8kz's Hub", // 主頁橫幅主標題

			subtitle: [
				"Fortune favors the bold.",
				"Knowledge is power.",
				"The devil is in the details.",
				"Standing on the shoulders of giants.",
				"Where there's a will, there's a way.",
			],
			typewriter: {
				enable: true, // 啟用副標題打字機效果
				speed: 100, // 打字速度（毫秒）
				deleteSpeed: 50, // 刪除速度（毫秒）
				pauseTime: 2000, // 完全顯示後的暫停時間（毫秒）
			},
		},

		credit: {
			enable: false, // 顯示橫幅圖片來源文本
			text: "Describe", // 要顯示的來源文本
			url: "", // （可選）原始藝術品或藝術家頁面的 URL 鏈接
		},

		navbar: {
			transparentMode: "semifull", // 導航欄透明模式："semi" 半透明加圓角，"full" 完全透明，"semifull" 動態透明
		},
	},
	toc: {
		enable: true, // 啟用目錄功能
		mode: "sidebar", // 目錄顯示模式："float" 懸浮按鈕模式，"sidebar" 側邊欄模式
		depth: 2, // 目錄深度，1-6，1 表示只顯示 h1 標題，2 表示顯示 h1 和 h2 標題，依此類推
		useJapaneseBadge: false, // 使用日語假名標記（あいうえお...）代替數字，開啟後會將 1、2、3... 改為 あ、い、う...
	},
	showCoverInContent: true, // 在文章內容頁顯示文章封面
	generateOgImages: false, // 啟用生成OpenGraph圖片功能,注意開啟後要渲染很長時間，不建議本地調試的時候開啟
	favicon: [
		// 留空以使用默認 favicon
		// {
		//   src: '/favicon/icon.png',    // 圖標文件路徑
		//   theme: 'light',              // 可選，指定主題 'light' | 'dark'
		//   sizes: '32x32',              // 可選，圖標大小
		// }
	],

	// 字體配置
	font: {
		// 注意：自定義字體需要在 src/styles/main.css 中引入字體文件
		// 注意：字體子集優化功能目前僅支持 TTF 格式字體,開啟後需要在生產環境才能看到效果,在Dev環境下顯示的是瀏覽器默認字體!
		asciiFont: {
			// 英文字體 - 優先級最高
			// 指定為英文字體則無論字體包含多大範圍，都只會保留 ASCII 字符子集
			fontFamily: "ZenMaruGothic-Medium",
			fontWeight: "400",
			localFonts: ["ZenMaruGothic-Medium.ttf"],
			enableCompress: true, // 啟用字體子集優化，減少字體文件大小
		},
		cjkFont: {
			// 中日韓字體 - 作為回退字體
			fontFamily: "萝莉体 第二版",
			fontWeight: "500",
			localFonts: ["萝莉体 第二版.ttf"],
			enableCompress: true, // 啟用字體子集優化，減少字體文件大小
		},
	},
	showLastModified: true, // 控制“上次編輯”卡片顯示的開關
};
export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	src: {
		desktop: [
			"/assets/desktop-banner/1.webp",
			"/assets/desktop-banner/2.webp",
			"/assets/desktop-banner/3.webp",
			"/assets/desktop-banner/4.webp",
			"/assets/desktop-banner/5.webp",
			"/assets/desktop-banner/6.webp",
		], // 桌面橫幅圖片
		mobile: [
			"/assets/mobile-banner/1.webp",
			"/assets/mobile-banner/2.webp",
			"/assets/mobile-banner/3.webp",
			"/assets/mobile-banner/4.webp",
			"/assets/mobile-banner/5.webp",
			"/assets/mobile-banner/6.webp",
		], // 移動橫幅圖片
	}, // 使用本地橫幅圖片
	position: "center", // 壁紙位置，等同於 object-position
	carousel: {
		enable: true, // 啟用輪播
		interval: 5, // 輪播間隔時間（秒）
	},
	zIndex: -1, // 層級，確保壁紙在背景層
	opacity: 0.8, // 壁紙透明度
	blur: 1, // 背景模糊程度
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "Gallery",
			url: "/albums/",
			icon: "material-symbols:photo-library",
		},
		{
			name: "About",
			url: "/about/",
			icon: "material-symbols:person",
		},
		{
			name: "Friends",
			url: "/friends/",
			icon: "material-symbols:group",
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp", // 相對於 /src 目錄。如果以 '/' 開頭，則相對於 /public 目錄
	name: "g8kz",
	bio: "Cross-domain integrator, blending PLC/Hardware with AI/Software. A Home Lab and photography enthusiast.",
	typewriter: {
		enable: true, // 啟用個人簡介打字機效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Discord",
			icon: "fa6-brands:discord",
			url: "https://discordapp.com/users/615479304540651541",
		},
		{
			name: "Facebook",
			icon: "fa6-brands:facebook",
			url: "https://www.facebook.com/yoan.happy.3",
		},
		{
			name: "Threads",
			icon: "fa6-brands:threads",
			url: "https://www.threads.com/@yuan_uwu?hl=zh-tw",
		},
		{
			name: "Instagram",
			icon: "fa6-brands:instagram",
			url: "https://www.instagram.com/yuan_uwu",
		},
		{
			name: "Openlist",
			icon: "material-symbols:list-alt",
			url: "https://openlist.g8kz.top/",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// Permalink 固定鏈接配置
export const permalinkConfig: PermalinkConfig = {
	enable: false, // 是否啟用全局 permalink 功能，關閉時使用默認的文件名作為鏈接
	/**
	 * permalink 格式模板
	 * 支持的佔位符：
	 * - %year% : 4位年份 (2024)
	 * - %monthnum% : 2位月份 (01-12)
	 * - %day% : 2位日期 (01-31)
	 * - %hour% : 2位小時 (00-23)
	 * - %minute% : 2位分鐘 (00-59)
	 * - %second% : 2位秒數 (00-59)
	 * - %post_id% : 文章序號（按發布時間升序排列，最早的文章為1）
	 * - %postname% : 文章文件名（slug）
	 * - %category% : 分類名（無分類時為 "uncategorized"）
	 *
	 * 示例：
	 * - "%year%-%monthnum%-%postname%" => "/2024-12-my-post/"
	 * - "%post_id%-%postname%" => "/42-my-post/"
	 * - "%category%-%postname%" => "/tech-my-post/"
	 *
	 * 注意：不支持斜杠 "/"，所有生成的鏈接都在根目錄下
	 */
	format: "%postname%", // 默認使用文件名
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些樣式（如背景顏色）已被覆蓋，請參閱 astro.config.mjs 文件。
	// 請選擇深色主題，因為此博客主題目前僅支持深色背景
	theme: "github-dark",
	// 在主題切換時隱藏代碼塊以避免卡頓
	hideDuringThemeTransition: true,
};

export const commentConfig: CommentConfig = {
	enable: false, // 啟用評論功能。當設置為 false 時，評論組件將不會顯示在文章區域。
	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: SITE_LANG,
	},
};

export const shareConfig: ShareConfig = {
	enable: true, // 啟用分享功能。當設置為 false 時，分享組件將不會顯示在文章區域，且不會加載其使用的庫
};

export const announcementConfig: AnnouncementConfig = {
	title: "Announcement", // 公告標題
	content: "Welcome to my blog! This is a sample announcement.", // 公告內容
	closable: true, // 允許用戶關閉公告
	link: {
		enable: true, // 啟用鏈接
		text: "Learn More", // 鏈接文本
		url: "/about/", // 鏈接 URL
		external: false, // 內部鏈接
	},
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: false, // 啟用音樂播放器功能
	mode: "meting", // 音樂播放器模式，"local" 或 "meting"
	meting_api:
		"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r", // Meting API 地址
	id: "14164869977", // 歌單ID
	server: "netease", // 音樂源服務器。一些 meting API 源支持更多平台，通常：netease=網易雲音樂, tencent=QQ音樂, kugou=酷狗音樂, xiami=蝦米音樂, baidu=百度音樂
	type: "playlist", // 播單類型
};

export const footerConfig: FooterConfig = {
	enable: false, // 是否啟用Footer HTML注入
	customHtml: "", // HTML格式的自定義頁腳信息，例如ICP備案號，默認為空
	// 你也可以直接編輯 FooterConfig.html 文件來添加自定義內容如ICP備案號
	// 注意：如果 customHtml 不為空，將使用其內容；如果為空，將使用 FooterConfig.html 的內容
	// FooterConfig.html 可能在未來版本中被棄用
};
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// 側邊欄位置：單側(unilateral)或雙側(both)
	position: "both",

	// 側邊欄組件配置列表
	components: [
		{
			// 組件類型：用戶資料組件
			type: "profile",
			// 是否啟用此組件
			enable: true,
			// 組件顯示順序（數字越小越靠前）
			order: 1,
			// 組件位置："top" 表示固定在頂部
			position: "top",
			// 所屬側邊欄
			sidebar: "left",
			// 用於樣式和動畫的CSS類
			class: "onload-animation",
			// 動畫延遲（毫秒），用於錯開效果
			animationDelay: 0,
		},
		{
			// 組件類型：公告組件
			type: "announcement",
			// 此組件是否啟用（現在由統一配置控制）
			enable: true,
			// 組件顯示順序
			order: 2,
			// 組件位置："top" 表示固定在頂部
			position: "top",
			// 所屬側邊欄
			sidebar: "left",
			// CSS類
			class: "onload-animation",
			// 動畫延遲
			animationDelay: 50,
		},
		{
			// 組件類型：分類組件
			type: "categories",
			// 是否啟用此組件
			enable: true,
			// 組件顯示順序
			order: 3,
			// 組件位置："sticky" 表示粘性定位，可滾動
			position: "sticky",
			// 所屬側邊欄
			sidebar: "left",
			// CSS類
			class: "onload-animation",
			// 動畫延遲
			animationDelay: 150,
			// 響應式配置
			responsive: {
				// 折疊閾值：當分類數量超過5個時自動折疊
				collapseThreshold: 5,
			},
		},
		{
			// 組件類型：標籤組件
			type: "tags",
			// 是否啟用此組件
			enable: true,
			// 組件顯示順序
			order: 5,
			// 組件位置："sticky" 表示粘性定位
			position: "top",
			// 所屬側邊欄
			sidebar: "left",
			// CSS類
			class: "onload-animation",
			// 動畫延遲
			animationDelay: 250,
			// 響應式配置
			responsive: {
				// 折疊閾值：當標籤數量超過20個時自動折疊
				collapseThreshold: 20,
			},
		},
		{
			// 組件類型：站點統計組件
			type: "site-stats",
			// 是否啟用此組件
			enable: false,
			// 組件顯示順序
			order: 5,
			// 組件位置
			position: "top",
			// 所屬側邊欄
			sidebar: "right",
			// CSS類
			class: "onload-animation",
			// 動畫延遲
			animationDelay: 200,
		},
		{
			// 組件類型：日曆組件（移動端不顯示）
			type: "calendar",
			// 是否啟用此組件
			enable: true,
			// 組件顯示順序
			order: 6,
			// 組件位置
			position: "top",
			// 所屬側邊欄
			sidebar: "right",
			// CSS類
			class: "onload-animation",
			// 動畫延遲
			animationDelay: 250,
		},
	],

	// 默認動畫配置
	defaultAnimation: {
		// 是否啟用默認動畫
		enable: true,
		// 基礎延遲（毫秒）
		baseDelay: 0,
		// 遞增延遲（毫秒），添加到每個後續組件
		increment: 50,
	},

	// 響應式佈局配置
	responsive: {
		// 斷點配置（像素值）
		breakpoints: {
			// 移動端斷點：屏幕寬度小於768px
			mobile: 768,
			// 平板端斷點：屏幕寬度小於1280px
			tablet: 1280,
			// 桌面端斷點：屏幕寬度小於1280px
			desktop: 1280,
		},
		// 不同設備的佈局模式
		// hidden: 隱藏側邊欄 (桌面端)   drawer: 抽屜模式 (移動端不顯示)   sidebar: 顯示側邊欄
		layout: {
			// 移動端：抽屜模式
			mobile: "sidebar",
			// 平板端：顯示側邊欄
			tablet: "sidebar",
			// 桌面端：顯示側邊欄
			desktop: "sidebar",
		},
	},
};

export const sakuraConfig: SakuraConfig = {
	enable: false, // 默認禁用櫻花效果
	sakuraNum: 21, // 櫻花花瓣數量
	limitTimes: -1, // 櫻花越界次數，-1為無限循環
	size: {
		min: 0.5, // 最小櫻花尺寸倍數
		max: 1.1, // 最大櫻花尺寸倍數
	},
	opacity: {
		min: 0.3, // 最小櫻花不透明度
		max: 0.9, // 最大櫻花不透明度
	},
	speed: {
		horizontal: {
			min: -1.7, // 最小水平速度
			max: -1.2, // 最大水平速度
		},
		vertical: {
			min: 1.5, // 最小垂直速度
			max: 2.2, // 最大垂直速度
		},
		rotation: 0.03, // 旋轉速度
		fadeSpeed: 0.03, // 淡出速度，不應大於最小不透明度
	},
	zIndex: 100, // z-index，確保櫻花在正確的層級顯示
};

// Pio Live2D 角色配置
export const pioConfig: import("./types/config").PioConfig = {
	enable: false, // 啟用 Live2D 角色
	models: ["/pio/models/pio/model.json"], // 默認模型路徑
	position: "left", // 默認位置在右側
	width: 280, // 默認寬度
	height: 250, // 默認高度
	mode: "draggable", // 默認為可拖拽模式
	hiddenOnMobile: true, // 默認在移動設備上隱藏
	dialog: {
		welcome: "Welcome to Mizuki Website!", // 歡迎信息
		touch: [
			"What are you doing?",
			"Stop touching me!",
			"HENTAI!",
			"Don't bully me like that!",
		], // 觸摸提示
		home: "Click here to go back to the homepage!", // 主頁提示
		skin: ["Want to see my new outfit?", "The new outfit looks great~"], // 皮膚更換提示
		close: "QWQ See you next time~", // 關閉提示
		link: "https://github.com/matsuzaka-yuki/Mizuki", // 關於鏈接
	},
};

// 所有小部件配置的統一導出
export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig, // 添加 pio 配置
	share: shareConfig, // 添加分享配置
} as const;

export const umamiConfig = {
	enabled: false, // 是否顯示Umami統計信息
	apiKey: import.meta.env.UMAMI_API_KEY || "api_xxxxxxxx", // API密鑰首先從環境變量讀取，否則使用配置文件中的值
	baseUrl: "https://api.umami.is", // Umami Cloud API 地址
	scripts: `
<script defer src="XXXX.XXX" data-website-id="ABCD1234"></script>
  `.trim(), // 在此處插入你想要的腳本，無需在佈局中插入
} as const;
