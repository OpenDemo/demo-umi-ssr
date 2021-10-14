# umi SSR 的后端实现

背景：公司的产品挂到了一个电商平台上，领导让我们给产品详情页做SEO，让用户在百度就能搜索到我们的产品，
但是商品详情是动态加载的，而且电商平台是第三方，他们肯定不会给我们做SEO，要实现SEO必须将商品页静态化，
只能想一些"歪门邪道"来做了；

```
                    [react component]
                    |
浏览器 - fake.com - nodejs - [shop server]
```

## 目录结构

```
- client - 使用 `umi` 创建的项目，用来开发需要渲染的组件，按 `react + umi` 正常开发即可
  - src/pages
    - index.tsx - 一个简单的组件demo
- public - express项目的静态文件都在这里，我们放了工业云的首页和其他资源文件，express 如果不配置根目录的路由，默认会从资源目录下找 index.html
- services
  - request.js - 单独封装的接口请求库，目前是扩展的`umi-request`
- app.js - `express` 入口文件
```

其他没提到的，不用去看

## technical

- [x] react 17.x
- [x] umi 3.x
- [x] express 4.x
- [x] umi-request 1.4.0

## show time

运行 `yarn start`

访问 http://localhost:3000

## 核心逻辑

通过 express 实现

我们需要将前端代码编译生成的文件引入，尤其是 `./dist/umi.server`

核心逻辑（app—demo.js）：
```
const render = require('../client/dist/umi.server');
res.setHeader('Content-Type', 'text/html');

const {html, error, rootContainer} = await render({
    // 有需要可带上 query
    path: req.url,
    context,

    // 可自定义 html 模板
    // htmlTemplate: defaultHtml,

    // 启用流式渲染
    // mode: 'stream',

    // html 片段静态标记（适用于静态站点生成）
    // staticMarkup: false,

    // 扩展 getInitialProps 在服务端渲染中的参数
    getInitialPropsCtx: data,

    // manifest，正常情况下不需要
});

// support stream content
if (html instanceof Stream) {
    html.pipe(res);
    html.on('end', function () {
        res.end();
    });
} else {
    res.send(html);
}
```

# 检查SSR是否生效

浏览器访问页面，然后右键 - 显示网页源代码，如果 `<div id="root">...</div>` 中有内容，说明成功


