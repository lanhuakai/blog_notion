# tw.andys.pro Blog

## TODO

- [x] Google Analytics 2022/03/25
- [x] cusdis 留言系統 2022/03/25
- [x] giscus 留言系統插件 2022/03/26
- [x] giscus 留言系統插件黑白切換 2022/03/26
- [x] giscus 留言系統設定 2022/03/26
- [x] line clamp for description @tailwindcss/line-clamp fix BlogPostCard summery 2022/03/26
- [x] 字體非新細明體 Remove Serif 2022/03/27
- [x] 相關文章 dark mode 文字黑白問題 2022/03/27
- [x] ArticleRecommend Image Round corner 2022/03/27
- [x] ArticleRecommend text margin spacing 2022/03/27
- [x] Site icon 2022/03/27
- [x] TagPage Hashtag title 2022/03/27
- [x] CategoryPage Folder title 2022/03/27
- [x] Add cover to the article list in mobile 2022/04/04
- [x] Change footer 2022/04/04
- [x] Fix facebook link info head metatdata 2022/04/04
- [x] 美化標題 2022/04/05
- [x] Add Facebook Messenger chat bubble 2022/04/05
- [ ] Facebook fanpage iframe to sidebar 2022/04/06 Need PR
- [ ] PR - More detail SEO for Facebook OpenGraph
- [ ] SEO publish time fix
- [ ] Add social share buttons
- [ ] User Head click to YouTube
- [ ] YouTube Social Button
- [ ] Facebook Social Button
- [ ] Discord Social Button
- [ ] Facebook Comment
- [ ] Discus Comment
- [ ] Bigger floating buttons
- [ ] PWA
- [ ] 字數統計
- [ ] 簡繁切換
- [ ] H1, H2... span anchor use meaningful title instead of id
- [ ] H1, H2... span anchor link scroll to target position instead of not scrolling

一个使用 NextJS + Notion API 实现的，部署在 Vercel 上的静态博客系统。为 Notion 和所有创作者设计。

<p>
  <a aria-label="GitHub commit activity" href="https://github.com/tangly1024/NotionNext/commits/main" title="GitHub commit activity">
    <img src="https://img.shields.io/github/commit-activity/m/tangly1024/NotionNext?style=for-the-badge"/>
  </a>
  <a aria-label="GitHub contributors" href="https://github.com/tangly1024/NotionNext/graphs/contributors" title="GitHub contributors">
    <img src="https://img.shields.io/github/contributors/tangly1024/NotionNext?color=orange&style=for-the-badge"/>
  </a>
  <a aria-label="Build status" href="#" title="Build status">
    <img src="https://img.shields.io/github/deployments/tangly1024/NotionNext/Production?logo=Vercel&style=for-the-badge"/>
  </a>
  <a aria-label="Powered by Vercel" href="https://vercel.com?utm_source=Craigary&utm_campaign=oss" title="Powered by Vercel">
    <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" height="28"/>
  </a>
</p>

演示地址：[https://preview.tangly1024.com/](https://preview.tangly1024.com/)

## 继承自 Nobelium 的亮点 ✨

**🚀 &nbsp;秒开，设备全适配**

- 快速的页面渲染和响应式设计
- 高效编译器的快速静态页面生成

**🤖 &nbsp;自动，无需重新部署**

- 部署在免费、高速的 Vercel 平台
- 支持增量式更新，更新文章后无需重复部署

**🚙 &nbsp;全功能，完全不操心**

- 评论、搜索、标签、分类
- 订阅、网站统计
- 本地化多语言
- 服务端渲染、优秀的 SEO

**🎨 &nbsp;美观，轻松自定义**

- 丰富的配置项，更支持多语言
- 使用 Tailwind CSS，轻松实现二次开发

## 特色

- 支持更多的页面，功能，更多特性、欢迎移步[我的博客](https://tangly1024.com/article/notion-next)查看
- 支持多主题切换

| Next                                                                                                   | Medium                                                                                                       | Hexo                                                                                                   | Fukasawa                                                                                                           |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| <img src='./docs/theme-next.png' width='300'/> [预览 NEXT](https://preview.tangly1024.com/?theme=next) | <img src='./docs/theme-medium.png' width='300'/> [预览 MEDIUM](https://preview.tangly1024.com/?theme=medium) | <img src='./docs/theme-hexo.png' width='300'/> [预览 HEXO](https://preview.tangly1024.com/?theme=hexo) | <img src='./docs/theme-fukasawa.png' width='300'/> [预览 FUKASAWA](https://preview.tangly1024.com/?theme=fukasawa) |

_只需修改`blog.config.js`文件的`THEME`即可实现主题切换。_

## 更新日志

请移步 [更新文档](https://docs.tangly1024.com/zh/changelog)查看

## 快速起步

- 给这个项目点个小星星 😉
- 将 [这个 Notion 模板](https://tanghh.notion.site/02ab3b8678004aa69e9e415905ef32a5) 制作副本，并分享这个页面给所有人
- [Fork](https://github.com/tangly1024/NotionNext/fork) 这个项目
- _(可选)_ 用自己的图片替换 `/public` 文件夹里的 `avatar.jpg`、`favicon.svg` 和 `favicon.ico`
- 在 `blog.config.js` 配置相关选项，`NOTION_PAGE_ID`: 你刚刚分享出去的 Notion 页面网址中的页面 ID，通常是网址中工作区地址后的 32 位字符串

部署方式一：

- 点击 [Vercel 一键开始](https://vercel.com/new/clone?demo-description=Notion%20powered%20site%20Built%20with%20Next.js.&demo-image=https%3A%2F%2Fdocs.tangly1024.com%2Ftheme-medium.png&demo-title=Notion%20Next%20Blog&demo-url=https%3A%2F%2Fblog.tangly1024.com%2F&project-name=notion-next-blog&repository-name=NotionNext&s=https%3A%2F%2Fgithub.com%2Ftangly1024%2FNotionNext) 部署该项目

部署方式二：

- 通过 Docker 部署

```bash
docker run -p 3000:3000 -e NOTION_PAGE_ID="你的Notion_Page_ID" tangly1024/notionnext:2.8.1
```

- **稍微等等就可以访问了！** 简单吗?
- 更多项目特性及配置的说明，请移步 [NotionNext 文档](https://docs.tangly1024.com/zh) 查看，文档正在完善中,欢迎 [参与编辑](https://github.com/tangly1024/nextjs-docs-notion-next)

## 快速开发

- 需要安装 Nodejs 环境

```bash
yarn # 安装依赖
yarn run dev # 本地开发
yarn run build # 本地打包编译
yarn run start # 本地启动NextJS服务
```

## 引用技术

- **框架**: Next.js
- **样式**: [Tailwind CSS](https://www.tailwindcss.cn/) 和 `@tailwindcss/jit` compiler
- **渲染**: [React-notion-x](https://github.com/NotionX/react-notion-x)
- **评论**: Gitalk, Cusdis, Utterances
- **图标**：[fontawesome](https://fontawesome.com/v5.15/icons?d=gallery)

## 致谢

感谢 Craig Hart 发起的 Nobelium 项目

<table><tr align="left">
  <td align="center"><a href="https://github.com/craigary" title="Craig Hart"><img src="https://avatars.githubusercontent.com/u/10571717" width="64px;"alt="Craig Hart"/></a><br/><a href="https://notion.so/cnotion" title="Craig Hart">Craig Hart</a></td>
</tr></table>

## Contributors

<table>
  <tr align="left">
  <td align="center"><a href="https://github.com/tangly1024"><img src="https://avatars.githubusercontent.com/u/15920488" width="64px;"alt="tangly1024"/><br/><sub><b>tangly1024</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=tangly1024" title="Owner" >🎫 🔧 🎨 🐛</a></td>  
  <td align="center"><a href="https://github.com/uWayLu"><img src="https://avatars.githubusercontent.com/u/21689326" width="64px;" alt="uWayLu"/><br/><sub><b>uWayLu</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=uWayLu" title="uWayLu" >🔧 🐛</a>
</td>
  <td align="center"><a href="https://github.com/txs"><img src="https://avatars.githubusercontent.com/u/554329" width="64px;" alt="txs"/><br/><sub><b>txs</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=txs" title="txs" >🔧 🐛</a>
</td>  
<td align="center"><a href="https://github.com/yuzhanglong"><img src="https://avatars.githubusercontent.com/u/56540811" width="64px;" alt="txs"/><br/><sub><b>yuzhanglong</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=yuzhanglong" title="yuzhanglong" >🔧 🐛</a>
</td> 
</tr>
</table>

## License

The MIT License.
# blog_notion_next
# blog_notion_next
