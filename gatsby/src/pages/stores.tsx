import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { AllStoreType } from "../utils/types";
import Banner from "../components/StoreBanner";

interface StoresPageProps {
  data: {
    stores: AllStoreType;
  };
}

const StoresPage: React.FC<StoresPageProps> = ({ data }) => {
  const stores = data.stores.nodes;
  return (
    <>
      <Banner text="Stores that you can choose from" />
      <div className="m-6 grid grid-cols-fit gap-7 text-center">
        {stores.map((store) => (
          <div
            className="p-2 pb-4 border-solid border-2 border-gray-300 rounded-xl shadow-2xl"
            key={store.id}
          >
            <Link to={`/store/${store.slug.current}`}>
              <h2 className="my-4 text-xl text-center hover:text-white hover:bg-red-500 font-medium bg-yellow-300 transform -rotate-2">
                {store.name}
              </h2>
            </Link>

            <Img className="my-4" fluid={store.image.asset.fluid} />
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
