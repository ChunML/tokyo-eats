import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { StoreType } from "../utils/types";

interface StoreProps {
  data: {
    store: StoreType;
  };
}

const Store: React.FC<StoreProps> = ({ data }) => {
  const { store } = data;

  return (
    <div className="grid grid-cols-2 gap-x-10">
      <h2 className="mb-6 text-2xl col-span-2 text-center font-medium bg-green-400 rounded-2xl p-2">
        {store.name}
      </h2>
      {store.dishes.map((dish) => (
        <div className="border-solid border-2 rounded-xl border-gray-300 p-5 shadow-lg">
          <Img fluid={dish.image.asset.fluid} className="mb-2" />
          <Link to={`/dish/${dish.slug.current}`}>
            <h2 className="text-center font-medium bg-yellow-400 hover:text-white hover:bg-red-500 transform -rotate-2 -translate-y-6">
              {dish.name}
            </h2>
          </Link>
          <Link to={`/dish/${dish.slug.current}`}>
            <p className="text-center w-1/2 mx-auto border-solid border-2 rounded-3xl border-red-500 p-2 px-7 hover:bg-red-500 hover:text-white">
              ¥{dish.price}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    store: sanityStore(slug: { current: { eq: $slug } }) {
      id
      name
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
      dishes {
        id
        name
        slug {
          current
        }
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
  }
`;

export default Store;
