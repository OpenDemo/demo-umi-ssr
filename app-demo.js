var {request} = require("./services/request");

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Stream = require('stream');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const {post} = require("./services/http");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

app.use(async (req, res) => {
    // 或者从 CDN 上下载到 server 端
    // const serverPath = await downloadServerBundle('http://cdn.com/bar/umi.server.js');
    const render = require('../iiot-seo-fe/dist/umi.server');
    res.setHeader('Content-Type', 'text/html');

    const data = await request('https://so.chongqingiicloud.com/cgi/capi?cmd=DescribeProduct&action=delegate&serviceType=undefined&secure=1&version=3&sts=1', {
        method: 'POST',
        data: {
            "regionId": 1,
            "serviceType": "imfg",
            "cmd": "DescribeProduct",
            "data": {
                "Service": "product-mgmt-app",
                "Module": "product",
                "Version": "2019-12-26",
                "ProductUuid": "cb789272-cb17-48e9-8897-e8e43098f61d",
                "CloudId": "0"
            }
        }
    });

    console.log('data', data.data.data.Response)
    const context = {};
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

})

module.exports = app;
