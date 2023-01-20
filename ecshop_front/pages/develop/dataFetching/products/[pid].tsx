import path from 'path';
import fs from 'fs/promises';

import { Fragment } from 'react';

function ProductDetailPage(props : any) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as any);

  return data;
}

export async function getStaticProps(context :any) {
  const { params } = context;

  console.log(' SSG getStaticProps()')
  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product: { id: any; }) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  console.log(' SSG getStaticPaths()')
  const data = await getData();

  const ids = data.products.map((product:any) => product.id);
  const pathsWithParams = ids.map((id : any) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProductDetailPage;