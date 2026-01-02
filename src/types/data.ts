export interface DeviceItem {
  name: string;
  image: string; // 設備圖片的路徑，例如：'/assets/devices/macbook-air-m2.webp'
  link: string; // 設備的外部連結，例如：官方產品頁面或購買連結
  specs: string; // 設備的簡要規格描述
  description: string; // 設備的詳細描述
}