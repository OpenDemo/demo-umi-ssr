# 使用 umi 实现 SSR

umi文档：https://umijs.org/zh-CN/docs/ssr

我们只需要定义组件的 getInitialProps 方法，该方法用来初始化 props；

然后后端（by express）就可以直接拿到你的组件，通过 getInitialPropsCtx 属性把 data 传递进来，最后渲染为静态HTML

```
XXXComponent.getInitialProps = (async (ctx) => {
  // 后端通过 getInitialPropsCtx 属性，把 data 传递给 ctx，这里我们不做处理，直接返回
  return Promise.resolve(ctx);
}) as IGetInitialProps;
```

由于后端也是用 nodejs + express 实现的，前端开发人员也可以看一下
