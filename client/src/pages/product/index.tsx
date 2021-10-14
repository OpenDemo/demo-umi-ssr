import {IGetInitialProps} from 'umi';

class IndexProps {
  ProductInfo!: Product;
}

class Product {
  BaseInfo: any;
  Category: any;
  IsvInfo: any;
}

export default function ProductPage(props: any) {
  const info = props.ProductInfo || {
    BaseInfo: {},
    Category: {},
    IsvInfo: {},
  };
  const {BaseInfo, Category, IsvInfo} = info;
  return (
    <div>
      <h1>{BaseInfo.ProductName}</h1>
    </div>
  );
}

ProductPage.getInitialProps = (async (ctx) => {
  // 后端通过 getInitialPropsCtx 属性，把 data 传递给 ctx，这里我们不做处理，直接返回

  if (!ctx.ProductInfo) {
    ctx.ProductInfo = {
      BaseInfo: {
        ProductName: '...'
      }
    }
  }

  return Promise.resolve(ctx);
}) as IGetInitialProps;
