import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

// Product type definition
interface Product {
  title: string;
  price: string;
  oldPrice: string;
  image: string;
}

const products: Product[] = [
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
];

// ProductBox component type definition
const ProductBox = ({ product }: { product: Product }) => (
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

const AllProducts = () => {
  return (
    <main className="">
      <div className="w-full flex justify-center items-center mt-16 mb-20  ">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <div className="flex justify-between ">
              <h1 className=" text-center items-center text-grey-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4 pb-10 ">
                All Products
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mt-5 gap-y-5 ">
            {products.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* section our subscribe to the news letter */}
      <div className="w-[1500x] h-[354px] mt-[100px] pt-[100px] pr-[300px] pb-[100px] pl-[300px] gap-[70px] bg-[#1E28320D]/[5%]  border-2  overflow-hidden">
        <div className="w-[760x] h-[165px] mt-[0px] text-center ">
          <h2 className="font-roboto font-medium text-[50px] leading-[58.59px] my-[9px] text-center text-[#000000]">
            Or subscribe to the newsletter
          </h2>
          {/* form */}
          <div className="flex justify-center items-center bg-gray-100">
            <div className="w-[760px] h-[150px] p-4 bg-gray-100 rounded-lg shadow-lg flex items-end justify-between">
              <form
                action="#"
                method="POST"
                className="w-full flex items-center space-x-4"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
                <button
                  type="submit"
                  className="px-6 py- text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:bg-gray-100"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* discount on Instagram */}
      <div className="w-[1520px] h-[419px] bg-gray-100 rounded-lg border-b-2 border-gray-0 shadow-[0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden ">
        <h2 className="w-[1500px] h-[59px] text-center text-black font-roboto font-semibold text-[50px] leading-[58.59px] p-20">
          Follow products and discounts on Instagram
        </h2>
        <div className="flex lg:justify-center lg:items-center lg:space-x-[12px] lg:w-[1500px] lg:h-[150px] lg:mt-[40px] lg:pb-4">
          <Image
            src="/topCat2.png"
            alt="Image 1"
            width={200}
            height={200}
            className="object-cover rounded-lg"
          />
          <Image
            src="/topCat1.png"
            alt="Image 2"
            width={200}
            height={200}
            className="object-cover rounded-lg"
          />
          <Image
            src="/feature2.png"
            alt="Image 3"
            width={200}
            height={200}
            className="object-cover rounded-lg"
          />
          <Image
            src="/pop-img5.png"
            alt="Image 4"
            width={200}
            height={200}
            className="object-cover rounded-lg"
          />
          <Image
            src="/pop-img1.png"
            alt="Image 5"
            width={200}
            height={200}
            className="object-cover rounded-lg"
          />
          <Image
            src="/topCat3.png"
            alt="Image 6"
            width={200}
            height={200}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default AllProducts;
