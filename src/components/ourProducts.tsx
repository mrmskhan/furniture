import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const products = [
  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "/feature1.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "$30",
    image: "/feature2.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "/feature3.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "/feature4.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "/our-product1.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "$30",
    image: "/our-product2.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "/our-product.png",
  },

  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "/our-product4.png",
  },
];

const ProductBox = ({ product }: { product: any }) => (
  <div>
    <div className="group shadow-md bg-neutral-100 w-[260px] h-[260px] flex justify-center items-center relative cursor-pointer ">
      <Image src={product.image} width={260} height={100} alt={product.title} />

      <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300 ">
        Add to Cart
      </button>
    </div>
    <h1 className="font-bold font-sans pt-4">{product.title}</h1>

    <div className="flex items-center  gap-20 space-x-2  mb-10">
      <span className=" text-gray-800 font-bold">{product.price}</span>
      {product.oldPrice && (
        <span className="text-gray-400 font-bold line-through">
          {product.oldPrice}
        </span>
      )}
      <CiShoppingCart className="text-gray-800 w-[22px] h-[22px] pl4 hover:bg-green-600" />
    </div>
  </div>
);

const Products = () => {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-16 mb-1 pb-20">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <div className="flex justify-between ">
              <h1 className=" text-center items-center text-grey-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4 pb-10 ">
                Our Products
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mt-5 gap-y-5">
            {products.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Products;
