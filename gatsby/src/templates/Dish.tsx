import { graphql } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AllStoreType, DishType } from "../utils/types";
import Banner from "../components/Banner";
import formatMoney from "../utils/formatMoney";

interface DishProps {
  data: {
    dish: DishType;
    store: AllStoreType;
  };
}

const Dish: React.FC<DishProps> = ({ data }) => {
  const { dish, store } = data;
  const [value, setValue] = useState(0);

  return (
    <>
      <Banner text={store.nodes[0].name} />
      <div className="grid grid-cols-2 gap-x-12 items-center my-6 border-solid border-2 border-gray-2 rounded-xl p-5 shadow-2xl">
        <div className="text-center">
          <Img fluid={dish.image.asset.fluid} />
          <h2 className="text-xl font-medium mb-4 bg-yellow-400 transform -rotate-2 -translate-y-5">
            {dish.name}
          </h2>
        </div>
        <div className="text-center">
          <p>{dish.description}</p>
          <hr className="my-4" />
          <p className="bg-yellow-400">Price: ¥{dish.price}</p>
        </div>
        <form className="col-span-2 my-4 mx-4 flex justify-center leading-none">
          <button
            type="button"
            className="text-white bg-yellow-400 p-6 rounded-full"
            onClick={() => setValue(Math.max(value - 1, 0))}
          >
            <FaMinus />
          </button>
          <button
            type="submit"
            className="text-white bg-red-400 p-6 rounded-2xl flex-grow mx-8"
          >
            Order
          </button>
          <button
            type="button"
            className="text-white bg-yellow-400 p-6 rounded-full"
            onClick={() => setValue(value + 1)}
          >
            <FaPlus />
          </button>
        </form>
        {value > 0 && (
          <div className="col-span-2 grid grid-cols-3 my-4 text-sm text-center mx-auto w-3/5">
            <p className="mr-auto">{formatMoney(dish.price)}</p>
            <p>x</p>
            <p className="ml-auto">{value}</p>
            <hr className="col-span-3 my-4" />
            <div />
            <div />
            <p className="ml-auto">{formatMoney(dish.price * value)}</p>
            <div />
            <p>VAT</p>
            <p className="ml-auto">{formatMoney(dish.price * value * 0.08)}</p>
            <div />
            <p>Total</p>
            <p className="ml-auto">{formatMoney(dish.price * value * 1.08)}</p>
          </div>
        )}
      </div>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    dish: sanityDish(slug: { current: { eq: $slug } }) {
      id
      name
      description
      price
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    store: allSanityStore(
      filter: { dishes: { elemMatch: { slug: { current: { eq: $slug } } } } }
      limit: 1
    ) {
      nodes {
        name
      }
    }
  }
`;

export default Dish;
