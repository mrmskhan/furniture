// types/Product.ts

export type Product = {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  image: any;
  slug: { current: string };
};
