export const SITE = {
  title: '学习笔记',
  description: '学习记录及整理.',
  defaultLanguage: 'zh_CH',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.go2yd.com%2Fimage.php%3Furl%3D0Xj4ErRTNC&refer=http%3A%2F%2Fi1.go2yd.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648684890&t=e2ff8b9181678a9ba31e11727690044d',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
  English: 'zh_CH',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: '', header: true },
    { text: '算法', header: true },
    { text: '回溯', link: 'en/introduction' },
    { text: '动态规划', link: 'en/page-2' },
    { text: '二叉树', link: 'en/page-3' },
    { text: '数组', link: 'en/page-3' },
    { text: '字符串', link: 'en/page-3' },
    { text: '其他', link: 'en/page-3' },

    { text: '项目', header: true },
    { text: 'Page 4', link: 'en/page-4' },

    { text: '八股文', header: true },
    { text: 'Page 4', link: 'en/page-4' },

    { text: 'BQ', header: true },
    { text: 'Page 4', link: 'en/page-4' },

    { text: '系统设计', header: true },
    { text: 'Page 4', link: 'en/page-4' },
  ],
};
