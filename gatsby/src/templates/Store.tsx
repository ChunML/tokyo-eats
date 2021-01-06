import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import { FaHeart } from "react-icons/fa";
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
  const [marker, setMarker] = useState({ lat: null, lng: null });

  return (
    <>
      <Banner text={store.name} />
      <hr />
      <h2 className="text-center font-bold text-2xl mt-4 mx-auto w-1/2 py-2 rounded-2xl bg-gray-200">
        MENU
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 my-6 gap-x-10">
        {store.dishes.map((dish) => (
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
      <hr />
      <h2 className="text-center font-bold text-2xl mt-4 mx-auto w-1/2 py-2 rounded-2xl bg-gray-200">
        ADDRESS
      </h2>
      <div className="my-8 border-solid border-2 border-gray-2 p-1 rounded-xl shadow-lg text-center">
        {store.locations.map(({ lat, lng }, id) => (
          <button
            type="button"
            key={`${lat}-${lng}`}
            className="m-4 p-2 bg-yellow-400 rounded-xl shadow-lg"
            onClick={() => setMarker({ lat, lng })}
          >
            {`Address ${id}`}
          </button>
        ))}
        {marker.lat && marker.lng && (
          <StoreMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            lat={marker.lat}
            lng={marker.lng}
          />
        )}
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
      locations {
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
        votes
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
