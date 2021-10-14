var {request} = require("./request");

const Api = {

    DescribeProduct: function (productUUID) {
        return request('https://wemake.tencent.com/cgi/capi?cmd=DescribeProduct&action=delegate&serviceType=undefined&secure=1&version=3&sts=1', {
            method: 'POST',
            data: {
                "regionId": 1,
                "serviceType": "imfg",
                "cmd": "DescribeProduct",
                "data": {
                    "Service": "product-mgmt-app",
                    "Module": "product",
                    "Version": "2019-12-26",
                    "ProductUuid": productUUID,
                    "CloudId": "0"
                }
            }
        });
    }


};

module.exports = { Api };
