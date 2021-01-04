import { FluidObject } from "gatsby-image";

export interface StoreType {
  id: string;
  name: string;
  description: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      fluid: FluidObject;
    };
  };
}

export interface AllStoreType {
  totalCount: number;
  nodes: StoreType[];
}
