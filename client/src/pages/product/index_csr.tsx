import {Helmet, IGetInitialProps} from 'umi';
import request from '@/services/request';

class IndexProps {
  ProductInfo!: Product;
}

class Product {
  BaseInfo: any;
  Category: any;
  IsvInfo: any;
}

export default function IndexPage(props: any) {
  const info = props.ProductInfo || {
    BaseInfo: {},
    Category: {},
    IsvInfo: {},
  };
  const {BaseInfo, Category, IsvInfo} = info;
  return (<>
      <Helmet>
        <title>{BaseInfo.ProductName}</title>
        <meta charSet="utf-8"/>
        <meta name={"keywords"} content={BaseInfo.TagSet.join(',')}/>
        <meta name={"description"} content={BaseInfo.Summary.substr(0, 150)}/>
        <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
              name="viewport"/>
      </Helmet>
      <div>
        <h1>{BaseInfo.ProductName}</h1>
        <div>
          <img src={BaseInfo.Logo} alt={BaseInfo.ProductName}/>
        </div>
        <p>{BaseInfo.Summary}</p>
        <p>产品描述</p>
        <div>
          {/* dangerouslySetInnerHTML标签外层必须再套一层 */}
          <div dangerouslySetInnerHTML={{__html: BaseInfo.Detail}}/>
        </div>
      </div>
    </>
  );
}

IndexPage.getInitialProps = (async (ctx) => {
  // 后端通过 getInitialPropsCtx 属性，把 data 传递给 ctx，这里我们不做处理，直接返回

  const data = await request('/cgi/capi?cmd=DescribeProduct&action=delegate&serviceType=undefined&secure=1&version=3&sts=1', {
    method: 'POST',
    data: {
      "regionId": 1,
      "serviceType": "imfg",
      "cmd": "DescribeProduct",
      "data": {
        "Service": "product-mgmt-app",
        "Module": "product",
        "Version": "2019-12-26",
        "ProductUuid": "d8bd9a28-ab43-4309-acc6-b22e245a90bd",
        "CloudId": "0"
      }
    }
  });
  ctx.ProductInfo = data.data.data.Response.ProductInfo;

  return Promise.resolve(ctx);
}) as IGetInitialProps;
