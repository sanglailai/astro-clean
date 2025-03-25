export const SITE = {
  website: "https://astro-clean.vercel.app", // 或等你部署后填入自己的域名
  author: "Lailai",
  profile: "",
  desc: "眨眼就过了",
  title: "Lailai's Blog",
  ogImage: "https://emojicdn.elk.sh/🐶", // emoji 风格头像
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/sanglailai/astro-clean/edit/main/",
  },
  dynamicOgImage: true,
  lang: "zh",
  timezone: "Asia/Shanghai",
  
} as const;
