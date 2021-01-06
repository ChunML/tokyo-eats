import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { StoreType } from "../utils/types";
import Banner from "../components/Banner";
import formatMoney from "../utils/formatMoney";
import StoreMap from "../components/StoreMap";

interface StoreProps {
  data: {
    store: StoreType;
  };
}

const Store: React.FC<StoreProps> = ({ data }) => {
  const { store } = data;

  return (
    <>
      <Banner text={store.name} />
      <div className="grid grid-cols-2 my-6 gap-x-10">
        {store.dishes.map((dish) => (
          <div
            key={dish.id}
            className="border-solid border-2 rounded-xl border-gray-300 p-5 shadow-lg"
          >
            <Img fluid={dish.image.asset.fluid} className="mb-2" />
            <Link to={`/dish/${dish.slug.current}`}>
              <h2 className="text-center font-medium bg-yellow-400 hover:text-white hover:bg-red-500 transform -rotate-2 -translate-y-6">
                {dish.name}
              </h2>
            </Link>
            <Link to={`/dish/${dish.slug.current}`}>
              <p className="text-center w-1/2 mx-auto border-solid border-2 rounded-3xl border-red-500 p-2 px-7 hover:bg-red-500 hover:text-white">
                {formatMoney(dish.price)}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="my-8 rounded-xl">
        <StoreMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          lat={store.location.lat}
          lng={store.location.lng}
        />
      </div>
    </>
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
      location {
        lat
        lng
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
