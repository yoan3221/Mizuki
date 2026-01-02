import type { DeviceItem } from "../types/data";

export const devicesData: Record<string, DeviceItem[]> = {
	"Custom PC": [
		{
			name: "RYZEN5800X (Custom Build)",
			image: "", // 來源: [13, 14]
			link: "https://www.amd.com/en/products/cpu/amd-ryzen-7-5800x", // 示例連結，可替換為您的組裝清單或詳細介紹頁面
			specs: "AMD Ryzen 7 5800X, RTX 3080 Ti, 64GB DDR4, 1.9TB SSD RAID, Dell AW3418DW",
			description:
				"這台代號 RYZEN5800X 的主機是您進行 AI 模型訓練 (YOLO)、開發與高效能運算的核心樞紐。",
		},
	],
	Apple: [
		{
			name: "MacBook Air M2",
			image: "https://i.imgur.com/g8kz_macbook_air_m2.webp", // 來源: [25, 26, 34, 38, 39]
			link: "https://www.apple.com/macbook-air-m2/",
			specs: "8GB RAM / 256GB SSD",
			description: "用於外出開發、筆記與遊戲的輕量化設備。",
		},
		{
			name: "iPad Air 5",
			image: "https://i.imgur.com/g8kz_ipad_air_5.webp", // 來源: [22, 27, 30, 35, 49]
			link: "https://www.apple.com/ipad-air/",
			specs: "64GB",
			description: "用於外出開發、筆記與遊戲的輕量化設備。",
		},
		{
			name: "AirPods 4",
			image: "https://i.imgur.com/g8kz_airpods_pro_2.webp", // 來源: [2, 23, 24, 55] (使用 AirPods Pro 2 代替，因 AirPods 4 尚未發布)
			link: "https://www.apple.com/airpods/",
			specs: "無線入耳式耳機",
			description: "確保開發專注力與通訊品質的配置。",
		},
	],
	Valve: [
		{
			name: "Steam Deck LCD",
			image: "https://i.imgur.com/g8kz_steam_deck_lcd.webp", // 來源: [1, 37, 47]
			link: "https://www.steamdeck.com/en/",
			specs: "256GB",
			description: "用於外出開發、筆記與遊戲的輕量化設備。",
		},
	],
	MikroTik: [
		{
			name: "RB5009UG+S+",
			image: "https://i.imgur.com/g8kz_mikrotik_rb5009.webp", // 來源: [4, 33, 53]
			link: "https://mikrotik.com/product/rb5009ug_s_in",
			specs: "核心路由器 (搭配 WinBox 管理)",
			description: "作為 Home Lab 玩家的核心骨幹，提供企業級路由。",
		},
	],
	Fortinet: [
		{
			name: "Fortigate FG90D",
			image: "https://i.imgur.com/g8kz_fortigate_fg90d.webp", // 來源: [58]
			link: "https://www.fortinet.com/", // Fortinet 官網連結，特定型號可能較舊
			specs: "防火牆 (系統中有運行 FortiExplorer)",
			description: "作為 Home Lab 玩家的核心骨幹，提供多層次網路安全。",
		},
	],
	Redmi: [
		{
			name: "Redmi AX6",
			image: "https://i.imgur.com/g8kz_redmi_ax6.webp", // 來源: [20, 46, 60]
			link: "https://www.mi.com/redmi-router-ax6/", // 示例連結
			specs: "Wi-Fi 路由器",
			description: "作為 Home Lab 玩家的核心骨幹，提供多層次無線覆蓋。",
		},
		{
			name: "Redmi AX3000",
			image: "https://i.imgur.com/g8kz_redmi_ax3000.webp", // 來源: [51, 57]
			link: "https://www.mi.com/redmi-router-ax3000/", // 示例連結
			specs: "Wi-Fi 路由器",
			description: "作為 Home Lab 玩家的核心骨幹，提供多層次無線覆蓋。",
		},
		{
			name: "Redmi AX1500",
			image: "https://i.imgur.com/g8kz_redmi_ax1500.webp", // 來源: [50, 56]
			link: "https://www.mi.com/redmi-router-ax1500/", // 示例連結
			specs: "Wi-Fi 路由器",
			description: "作為 Home Lab 玩家的核心骨幹，提供多層次無線覆蓋。",
		},
	],
	Canon: [
		{
			name: "EOS 5D Mark II (5D2)",
			image: "https://i.imgur.com/g8kz_canon_5d2.webp", // 來源: [15, 21, 28, 48]
			link: "https://www.usa.canon.com/", // Canon 官網連結
			specs: "全片幅單眼相機",
			description: "紀錄生活與工程專案的高品質影像設備。",
		},
		{
			name: "EF 24-105mm f/4L IS II USM",
			image: "https://i.imgur.com/g8kz_canon_24_105.webp", // 來源: [29, 32, 59]
			link: "https://www.usa.canon.com/",
			specs: "標準變焦鏡頭 (紅圈鏡)",
			description: "擁有完整的「大三元」等級長焦鏡頭。",
		},
		{
			name: "EF 70-200mm f/2.8L IS III USM",
			image: "https://i.imgur.com/g8kz_canon_70_200.webp", // 來源: [16, 18, 19, 36]
			link: "https://www.usa.canon.com/",
			specs: "望遠變焦鏡頭 (小白三代，紅圈鏡)",
			description: "擁有完整的「大三元」等級長焦鏡頭。",
		},
	],
	Elgato: [
		{
			name: "Wave:1",
			image: "https://i.imgur.com/g8kz_elgato_wave1.webp", // 來源: [3, 17]
			link: "https://www.elgato.com/us/en/p/wave-1",
			specs: "USB 電容式麥克風",
			description: "確保開發專注力與通訊品質的配置。",
		},
	],
	Razer: [
		{
			name: "Viper 8KHz",
			image: "https://i.imgur.com/g8kz_razer_viper_8khz.webp", // 來源: [12, 31, 40, 42, 44, 45]
			link: "https://www.razer.com/gaming-mice/razer-viper-8khz",
			specs: "電競滑鼠",
			description: "確保開發專注力與通訊品質的配置。",
		},
	],
	Sony: [
		{
			name: "ULT WEAR",
			image: "https://i.imgur.com/g8kz_sony_ult_wear.webp", // 來源: [5, 6, 8, 10, 11, 41, 43]
			link: "https://www.sony.com/", // Sony 官網連結
			specs: "耳罩式耳機",
			description: "確保開發專注力與通訊品質的配置。",
		},
	],
};