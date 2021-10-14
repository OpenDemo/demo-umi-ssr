var express = require('express');
var router = express.Router();
var {Api} = require("../../services/api");
const render = require('../../client/dist/umi.server');
const Stream = require('stream');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    // 或者从 CDN 上下载到 server 端
    // const serverPath = await downloadServerBundle('http://cdn.com/bar/umi.server.js');
    res.setHeader('Content-Type', 'text/html');

    const productUUID = req.query.ProductUuid;
    const data = await Api.DescribeProduct(productUUID);
    const {html, error, rootContainer} = await render({
        // 有需要可带上 query
        path: req.baseUrl,
        context: {},

        // 可自定义 html 模板
        // htmlTemplate: defaultHtml,

        // 启用流式渲染
        // mode: 'stream',

        // html 片段静态标记（适用于静态站点生成）
        // staticMarkup: false,

        // 扩展 getInitialProps 在服务端渲染中的参数
        getInitialPropsCtx: data.data.data.Response,

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

});

module.exports = router;
