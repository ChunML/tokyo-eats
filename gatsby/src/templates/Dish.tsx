import { graphql, Link } from "gatsby";
import React, { useContext } from "react";
import Img from "gatsby-image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { navigate } from "@reach/router";
import { AllStoreType, DishType } from "../utils/types";
import Banner from "../components/Banner";
import formatMoney from "../utils/formatMoney";
import { OrderContext } from "../components/OrderProvider";

interface DishProps {
  data: {
    dish: DishType;
    store: AllStoreType;
  };
}

const Dish: React.FC<DishProps> = ({ data }) => {
  const { dish, store } = data;
  const [order, setOrder] = useContext(OrderContext);

  return (
    <>
      <Banner text={store.nodes[0].name} />
      <div className="grid grid-cols-2 gap-x-12 items-center my-6 border-solid border-2 border-gray-2 rounded-xl p-5 shadow-2xl">
        <Link
          className="col-span-2 mb-6"
          to={`/store/${store.nodes[0].slug.current}`}
        >
          <p className="text-center border-solid border-2 border-yellow-400 rounded-2xl mx-auto w-2/5 py-2 hover:bg-yellow-400 hover:text-white">
            Back to store
          </p>
        </Link>
        <form className="col-span-2 mb-6 mx-4 flex justify-center leading-none">
          <button
            type="button"
            className="text-white bg-yellow-400 p-6 rounded-full"
            onClick={() => {
              setOrder({
                ...order,
                [dish.id]:
                  typeof order[dish.id] !== "undefined"
                    ? Math.max(0, order[dish.id] - 1)
                    : 0,
              });
            }}
          >
            <FaMinus />
          </button>
          <button
            type="button"
            className="text-white bg-red-400 p-6 rounded-2xl flex-grow mx-8"
            disabled={!(order[dish.id] > 0)}
            onClick={() => {
              localStorage.setItem("tokyoEatsOrder", JSON.stringify(order));
              navigate("/order");
            }}
          >
            Confirm Order
          </button>
          <button
            type="button"
            className="text-white bg-yellow-400 p-6 rounded-full"
            onClick={() => {
              setOrder({
                ...order,
                [dish.id]:
                  typeof order[dish.id] !== "undefined"
                    ? order[dish.id] + 1
                    : 1,
              });
            }}
          >
            <FaPlus />
          </button>
        </form>
        {order[dish.id] > 0 && (
          <>
            <div className="col-span-2 grid grid-cols-3 mb-6 text-sm text-center mx-auto w-3/5">
              <p className="mr-auto">{formatMoney(dish.price)}</p>
              <p>x</p>
              <p className="ml-auto">{order[dish.id]}</p>
              <hr className="col-span-3 my-4" />
              <div />
              <div />
              <p className="ml-auto">
                {formatMoney(dish.price * order[dish.id])}
              </p>
              <div />
              <p>VAT</p>
              <p className="ml-auto">
                {formatMoney(dish.price * order[dish.id] * 0.08)}
              </p>
              <hr className="col-span-3 my-4" />
              <div />
              <p>Total</p>
              <p className="ml-auto">
                {formatMoney(dish.price * order[dish.id] * 1.08)}
              </p>
            </div>
            <hr className="col-span-2 mb-6" />
          </>
        )}
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
        slug {
          current
        }
      }
    }
  }
`;

export default Dish;
