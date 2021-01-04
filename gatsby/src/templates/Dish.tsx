import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { AllStoreType, DishType } from "../utils/types";
import Banner from "../components/StoreBanner";

interface DishProps {
  data: {
    dish: DishType;
    store: AllStoreType;
  };
}

const Dish: React.FC<DishProps> = ({ data }) => {
  const { dish, store } = data;

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
      }
    }
  }
`;

export default Dish;
