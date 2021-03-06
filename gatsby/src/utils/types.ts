import { FixedObject, FluidObject } from "gatsby-image";

export interface DishType {
  id: string;
  name: string;
  description: string;
  price: number;
  votes: number;
  slug: {
    current: string;
  };
  image: {
    asset: {
      fluid: FluidObject;
      fixed: FixedObject;
    };
  };
}

export interface LocationType {
  lat: number;
  lng: number;
}

export interface StoreType {
  id: string;
  name: string;
  description: string;
  slug: {
    current: string;
  };
  locations: LocationType[];
  image: {
    asset: {
      fluid: FluidObject;
      fixed: FixedObject;
    };
  };
  dishes: DishType[];
}

export interface AllStoreType {
  totalCount: number;
  nodes: StoreType[];
}

export interface AllDishType {
  totalCount: number;
  nodes: DishType[];
}

export interface OrderStyle {
  [id: string]: number;
}
