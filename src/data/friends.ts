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
		title: "Natsukawa_taoyuan",
		imgurl: "https://secure.gravatar.com/avatar/7b6c2dfa7967e9d6747a2cb7d052de230fce4016b1e48e5b856ae72ef293bd78?s=173&r=g",
		desc: "Introvert | Design | Cosplay | Tech",
		siteurl: "https://natsukawataoyuan.com",
		tags: ["Framework"],
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
