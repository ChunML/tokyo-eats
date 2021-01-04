/* eslint-disable import/prefer-default-export */
import path from "path";

const turnStoresIntoPages = async ({ graphql, actions }) => {
  const component = path.resolve("./src/templates/Store.tsx");

  const { data } = await graphql(`
    query {
      stores: allSanityStore {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.stores.nodes.forEach((store) => {
    actions.createPage({
      path: `/store/${store.slug.current}`,
      component,
      context: {
        slug: store.slug.current,
      },
    });
  });
};

const turnDishesIntoPages = async ({ graphql, actions }) => {
  const component = path.resolve("./src/templates/Dish.tsx");

  const { data } = await graphql(`
    query {
      dishes: allSanityDish {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.dishes.nodes.forEach((dish) => {
    actions.createPage({
      path: `/dish/${dish.slug.current}`,
      component,
      context: {
        slug: dish.slug.current,
      },
    });
  });
};

export const createPages = async (params) => {
  await Promise.all([turnStoresIntoPages(params), turnDishesIntoPages(params)]);
};
