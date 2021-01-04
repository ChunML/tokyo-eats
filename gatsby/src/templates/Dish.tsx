import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { DishType } from "../utils/types";

interface DishProps {
  data: {
    dish: DishType;
  };
}

const Dish: React.FC<DishProps> = ({ data }) => {
  const { dish } = data;

  return (
    <div className="grid grid-cols-2 gap-x-12 items-center my-6 border-solid border-2 border-gray-2 rounded-xl p-6 shadow-2xl">
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
  }
`;

export default Dish;
