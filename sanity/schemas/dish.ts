import { MdRestaurant as icon } from "react-icons/md";

export default {
  name: "dish",
  title: "Dish",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      description: "Name of the dish",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "description",
      title: "Description",
      description: "A little bit detail about this dish",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
  ],
};
