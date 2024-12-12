import React from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";

const Products = () => {
  const dispatch = useDispatch()
  const data = useLoaderData();
  const productsData = data.data;

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
      {productsData.map(({id, title, category, image, price, description, quantity}) => (
        <div
          key={id}
          className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-textShadow relative duration-200 flex flex-col m-3 md:m-4 mt-0"
        >
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {category}
          </span>
          <div className="w-full h-auto flex items-center justify-center pb-4 relative group">
            <img
              className="w-52 h-64 object-contain"
              src={image}
              alt="ProductsImg"
            />
            <ul className="w-full h-36 bg-gray-100 absolute bottom-[-160px] flex flex-col items-end justify-center font-titleFont px-3 border-1 border-r group-hover:bottom-[0] duration-700">
              <li className="productLi mb-2">
                Compare
                <span className="ml-2">
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi mb-2">
                Add to Cart
                <span className="ml-2">
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi mb-2">
                View Details
                <span className="ml-2">
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi mb-2">
                Add to Wish List
                <span className="ml-2">
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4 z-10 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${price}
              </p>
            </div>
            <div>
              <p className="text-sm">{description.substring(0, 97)}...</p>
              <div className="text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button onClick={()=> dispatch(addToCart({
              id:id,
              title:title,
              description:description,
              price:price,
              category:category,
              image:image,
              quantity:1
            }))}  className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
