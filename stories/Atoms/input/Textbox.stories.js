import MyInput from "./Textbox.vue";

export default {
  title: "Atoms/Form Elements/Input",
  component: MyInput,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["text", "date", "email", "password", "time", "datetime"],
    },
  },
};

export const TextInput = {
  args: {
    type: "text",
    name: "firstName",
    id: "firstName",
    label: "First Name",
    placeholder: "First Name",
    class: "",
    error: false,
    message: "",
    required: false,
  },
};

export const ErrorTextInput = {
  args: {
    type: "text",
    name: "username",
    id: "username",
    label: "Username",
    placeholder: "Username",
    class: "",
    error: true,
    message: "Username is required",
    required: true,
  },
};

export const PasswordInput = {
  args: {
    type: "password",
    name: "password",
    id: "password",
    label: "Password",
    placeholder: "Password",
    class: "",
    error: false,
    message: "Password must be 6-25 alphanumeric characters in length",
    required: false,
  },
};

export const DateTimeInput = {
  args: {
    type: "datetime-local",
    name: "datetime",
    id: "datetime",
    label: "DateTime",
    placeholder: "DateTime",
    class: "",
    error: false,
    message: "",
    required: false,
  },
};