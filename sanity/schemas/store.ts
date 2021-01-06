import { MdStore as icon } from "react-icons/md";

export default {
  name: "store",
  title: "Store",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 50,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "What do you have to say about this store?",
    },
    {
      name: "locations",
      title: "Locations",
      type: "array",
      of: [{ type: "geopoint" }],
      description: "The store localtions",
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
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
