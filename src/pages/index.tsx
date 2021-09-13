import { GetStaticProps } from 'next';
import { client } from '../lib/client';
import { Products } from '../types/product';
export const getStaticProps: GetStaticProps = async (ctx) => {
  const data: Products = await client.get({ endpoint: 'product' });

  return {
    props: {
      product: data.contents,
    },
  };
};
export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
