export interface Product {
  id: string;
  title: string;
  price: number;
  image: {
    url: string;
  };
  description: string;
}

export interface Products {
  contents: Product[];
}
