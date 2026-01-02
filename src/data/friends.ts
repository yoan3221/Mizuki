// 友情链接数据配置
// 用于管理友情链接页面的数据
import CryptoJS from "crypto-js";

export interface FriendItem {
	id: number;
	title: string;
	imgurl?: string; // 图片链接，如果未设置且设置了 email，将使用 Gravatar
	desc: string;
	siteurl: string;
	tags: string[];
	email?: string; // 添加 email 字段用于 Gravatar
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Nelson",
		imgurl: "https://nelsongx.com/assets/images/nelsongx-32x32.png",
		desc: "Design | Tech",
		siteurl: "https://nelsongx.com/",
		tags: ["design", "tech"],
	},
	{
		id: 2,
		title: "n1cat",
		imgurl: "https://n1cat.xyz/_next/image?url=https%3A%2F%2Fapi.n1cat.xyz%2Fapi%2Fv2%2Fobjects%2Favatar%2Ff05glkbbc2o13i0fmr.jpg&w=384&q=75",
		desc: "Femboy",
		siteurl: "https://n1cat.xyz/",
		tags: ["femboy"],
	},
	{
		id: 3,
		title: "Charlie Wang",
		imgurl: "https://th.bing.com/th/id/OIP.x4rZxLKfocjOgVjFpOaaIgHaHa?w=108&h=108&c=1&bgcl=38e497&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3",
		desc: "Tech",
		siteurl: "https://www.cre0809.com/",
		tags: ["Tech"],
	},
	{
		id: 4,
		title: "Natsukawa_taoyuan",
		imgurl: "https://secure.gravatar.com/avatar/7b6c2dfa7967e9d6747a2cb7d052de230fce4016b1e48e5b856ae72ef293bd78?s=173&r=g",
		desc: "Introvert | Design | Cosplay | Tech",
		siteurl: "https://natsukawataoyuan.com",
		tags: ["introvert", "design", "cosplay", "tech", "femboy"],
	},
	{
		id: 5,
		title: "Zhenyuan",
		imgurl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm45n1fbv0zz2rl01qpxbwitp%2FCOHgi0Igy90JfkIj-CleanShot%25202025-10-24%2520at%252016.24.47.png",
		desc: "Introvert | Design | Cosplay | Tech",
		siteurl: "https://bento.me/zhenyuan",
		tags: ["introvert", "design", "cosplay", "tech", "femboy"],
	},
	{
		id: 6,
		title: "leinuoawa",
		imgurl: "https://leinuoawa.xyz/images/leinuo.png",
		desc: "Femboy",
		siteurl: "https://leinuoawa.xyz/",
		tags: ["femboy"],
	},
	{
		id: 7,
		title: "Wangure",
		imgurl: "https://ouo.糕.tw/IMG_1272.jpeg",
		desc: "Tech",
		siteurl: "https://link.xn--o8z.tw/",
		tags: ["Tech"],
	},
	{
		id: 8,
		title: "CH",
		imgurl: "https://thisisch.net/assets/img/me.png",
		desc: "Tech",
		siteurl: "https://thisisch.net/",
		tags: ["Tech"],
	},
	{
		id: 9,
		title: "Alan40405",
		imgurl: "https://db.1033.cloud/api/public/dl/-iwPFYwH/%E5%9C%96/202310.png",
		desc: "Introvert | Design | Cosplay | Tech",
		siteurl: "https://alan40405.me/",
		tags: ["introvert", "design", "cosplay", "tech", "femboy"],
	},
];

// 获取 Gravatar URL
function getGravatarUrl(email: string): string {
	const hash = CryptoJS.MD5(email.trim().toLowerCase()).toString();
	return `https://www.gravatar.com/avatar/${hash}?s=640`;
}

// 处理友情链接数据，如果有 email 则生成 Gravatar URL
function processFriendsData(data: FriendItem[]): (FriendItem & { imgurl: string })[] {
	return data.map((item) => {
		let imgurl = item.imgurl;
		if (!imgurl && item.email) {
			imgurl = getGravatarUrl(item.email);
		}
		// 如果仍然没有 imgurl，提供一个默认值或者保留 undefined (但类型声明说有 string)
		// 这里假设用户会提供其中之一。为了类型安全，我们可以提供一个空字符串或默认图
		if (!imgurl) {
			imgurl = ""; // 或者一个默认头像路径
		}
		return {
			...item,
			imgurl,
		};
	});
}

// 获取所有友情链接数据
export function getFriendsList(): (FriendItem & { imgurl: string })[] {
	return processFriendsData(friendsData);
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): (FriendItem & { imgurl: string })[] {
	const processedData = processFriendsData(friendsData);
	const shuffled = [...processedData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
