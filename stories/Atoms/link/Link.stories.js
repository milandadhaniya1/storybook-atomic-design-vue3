import MyLink from "./Link.vue";

export default {
  title: "Atoms/Link",
  component: MyLink,
  tags: ["autodocs"],
  argTypes: {
    target: {
      control: {
        type: "select",
      },
      options: ["", "_self", "_blank", "_parent", "_top"],
    },
  },
};

export const basicLink = {
  args: {
    url: "https://www.google.com",
    title: "Google",
    target: "_blank"
  },
};
