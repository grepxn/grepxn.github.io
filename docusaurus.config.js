// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '程序员茶馆',
  tagline: '一位不纯粹的开发者，对酒不感兴趣，却热衷于品茶。因此，他创办了一家小茶馆，用以记录生活中的点滴。',
  favicon: 'img/favicon.ico',

  // 设置网站的url，因为用的github pages，且用户名按<username>.github.io创建的，因此静态网页的地址是https://username.github.io
  url: 'https://grepxn.github.io',
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: '7wate', // Usually your GitHub org/user name.
  // projectName: 'wiki', // Usually your repo name.

    // GitHub pages部署相关的配置
    organizationName: 'grepxn', // Usually your GitHub org/user name.
    projectName: 'grepxn.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages', // 要把静态文件部署到的分支名称
    onBrokenLinks: 'warn', // 检查失效的链接，可以用throw抛出
    onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "xxx",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        blog: {
          blogTitle: "Blog",
          blogDescription: "向南的工作记录",
          blogSidebarCount: 20,
          blogSidebarTitle: "近期文章",
          showReadingTime: true,
          editUrl: "xxx",
          feedOptions: {
            title: "向南`s Blog",
            description: "向南的工作记录",
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} grepxn, Inc.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: 'sitemap.xml',
        },
        googleAnalytics: {
          trackingID: "G-MHMEL0F832",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-MHMEL0F832',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "inbox",
        path: "inbox",
        routeBasePath: "inbox",
        sidebarPath: require.resolve("./sidebars.js"),
        // editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    
    // "docusaurus-plugin-umami", // 这个是站点信息
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Always For Freedom. The site by 7Wate.',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      metadata: [
        {
          name: 'keywords', 
          content: '程序员茶馆, 程序员, 技术, 编程, 算法, 数据结构,'
        },
      ],
      navbar: {
        title: "程序员茶馆",
        hideOnScroll: true,
        // logo: {
        //   alt: 'Site Logo',
        //   src: 'img/logo.svg',
        //   srcDark: 'img/logo_dark.svg',
        //   href: 'https://docusaurus.io/',
        //   target: '_self',
        //   width: 32,
        //   height: 32,
        // },
        items: [
          { to: "/blog", label: "👨🏻‍🌾 博客", position: "right" }, 
          { to: "/inbox", label: "随手记", position: "right" },
        ],
      },
      algolia: {
        // apiKey: "5d5a02bdf02df700355c8ccd84b78d13",
        // appId: "8W3YJXJGF2",
        apiKey: "xxx",
        appId: "xxx",
        indexName: "wiki",
      },
      // umami: {
      //   websiteid: "7efcd733-c232-43db-9f17-10a00c53b152",
      //   src: "https://umami.7wate.org/script.js",
      // },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} 7Wate, Inc. Built with <a href="https://www.docusaurus.cn/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.<br>Powered by <a href="https://webify.cloudbase.net/" target="_blank" rel="noopener noreferrer">CloudBase Webify</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "markdown",
        additionalLanguages: ["java", "git","nginx","http"],
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
    }),
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
