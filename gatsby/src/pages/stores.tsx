import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import NavBar from "../components/NavBar";
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
      <div className="m-7 grid grid-cols-fit gap-x-7">
        {stores.map((store) => (
          <div
            className="p-2 border-solid border-4 border-red-300"
            key={store.id}
          >
            <Link to={`/store/${store.name}`}>
              <p className="my-4 text-xl text-center hover:underline font-medium bg-yellow-300 transform -rotate-2">
                {store.name}
              </p>
            </Link>

            <Img className="my-4 " fluid={store.image.asset.fluid} />
            <p>{store.description}</p>
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
            fluid(maxHeight: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default StoresPage;
