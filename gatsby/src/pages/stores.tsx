import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { AllStoreType } from "../utils/types";

interface StoresPageProps {
  data: {
    stores: AllStoreType;
  };
}

const StoresPage: React.FC<StoresPageProps> = ({ data }) => {
  const stores = data.stores.nodes;
  return (
    <>
      <h2 className="text-center text-2xl font-medium bg-green-400 p-2 rounded-2xl">
        Stores that you can choose from
      </h2>
      <div className="m-7 grid grid-cols-fit gap-x-7 text-center">
        {stores.map((store) => (
          <div
            className="p-2 border-solid border-2 border-gray-300 rounded-lg shadow-2xl"
            key={store.id}
          >
            <Link to={`/store/${store.slug.current}`}>
              <p className="my-4 text-xl text-center hover:underline font-medium bg-yellow-300 transform -rotate-2">
                {store.name}
              </p>
            </Link>

            <Img className="my-4" fixed={store.image.asset.fixed} />
            <p className="text-sm text-center">{store.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export const query = graphql`
  query {
    stores: allSanityStore {
      totalCount
      nodes {
        id
        name
        description
        slug {
          current
        }
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
            fixed(height: 200, width: 200) {
              ...GatsbySanityImageFixed
            }
          }
        }
        dishes {
          id
          name
        }
      }
    }
  }
`;

export default StoresPage;
