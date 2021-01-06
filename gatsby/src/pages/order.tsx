import { graphql } from "gatsby";
import React, { useContext } from "react";
import Img from "gatsby-image";
import { Link } from "@reach/router";
import Banner from "../components/Banner";
import { OrderContext } from "../components/OrderProvider";
import { AllDishType } from "../utils/types";
import formatMoney from "../utils/formatMoney";

interface OrderPageProps {
  data: { dishes: AllDishType };
}

const OrderPage: React.FC<OrderPageProps> = ({ data }) => {
  const [order] = useContext(OrderContext);
  const dishes = data.dishes.nodes.filter((d) =>
    Object.keys(order).includes(d.id)
  );
  const orderSum = dishes.reduce(
    (sum, dish) => sum + dish.price * order[dish.id],
    0
  );

  return (
    <>
      <Banner text="Here is your order so far" />
      <div className="text-center my-4 mb-6 border-solid border-2 border-red-400 rounded-2xl p-5 shadow-xl">
        {Object.keys(order).length === 0 && (
          <p>You haven&apos;t ordered anything yet!</p>
        )}
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="grid sm:grid-cols-3 grid-cols-1 items-center"
          >
            <Img
              className="w-20 mx-auto sm:mb-0 mb-2"
              fluid={dish.image.asset.fluid}
            />
            <Link
              className="bg-yellow-400 p-2 rounded-xl hover:bg-red-400 hover:text-white"
              to={`/dish/${dish.slug.current}`}
            >
              <div>
                {dish.name} x {order[dish.id]}
              </div>
            </Link>
            <p className="sm:w-1/2 sm:text-right">
              {formatMoney(order[dish.id] * dish.price)}
            </p>
            <hr className="sm:col-span-3 my-4" />
          </div>
        ))}
        {dishes.length > 0 && (
          <div className="grid grid-cols-3 items-center">
            <div />
            <div />
            <p className="w-1/2 text-right">{formatMoney(orderSum)}</p>
            <div />
            <p className="font-bold">VAT</p>
            <p className="w-1/2 text-right">{formatMoney(orderSum * 0.08)}</p>
            <hr className="col-span-3 my-4" />
            <div />
            <p className="font-bold">Total</p>
            <p className="w-1/2 text-right">{formatMoney(orderSum * 1.08)}</p>
            <Link to="/checkout" className="col-span-3 my-4">
              <button
                type="button"
                className="p-4 px-16 bg-red-400 rounded-xl text-white"
              >
                Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export const query = graphql`
  query {
    dishes: allSanityDish {
      nodes {
        id
        name
        price
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default OrderPage;
