import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { FaHeart } from "react-icons/fa";
import Banner from "../components/Banner";
import { AllDishType } from "../utils/types";
import formatMoney from "../utils/formatMoney";

interface IndexPageProps {
  data: {
    dishes: AllDishType;
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const dishes = data.dishes.nodes;
  return (
    <>
      <Banner text="Hot dishes right now!!!" />
      <div className="grid grid-cols-2 my-6 gap-x-10 items-start">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="border-solid border-2 rounded-xl border-gray-300 p-5 shadow-lg mb-6"
          >
            <Img fluid={dish.image.asset.fluid} className="mb-2 h-80" />
            <Link to={`/dish/${dish.slug.current}`}>
              <h2 className="text-center font-medium bg-yellow-400 hover:text-white hover:bg-red-500 transform -rotate-2 -translate-y-6">
                {dish.name}
              </h2>
            </Link>
            <Link
              className="grid grid-cols-3 items-center justify-items-center"
              to={`/dish/${dish.slug.current}`}
            >
              <p className="flex items-center">
                <span className="inline mr-1">{dish.votes}</span>
                <FaHeart className="inline text-red-400" />
              </p>
              <p className="text-center col-span-2 border-solid border-2 rounded-3xl border-red-500 p-2 px-7 hover:bg-red-500 hover:text-white w-4/5">
                {formatMoney(dish.price)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export const query = graphql`
  query {
    dishes: allSanityDish(sort: { order: DESC, fields: votes }, limit: 4) {
      nodes {
        id
        name
        price
        votes
        slug {
          current
        }
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
