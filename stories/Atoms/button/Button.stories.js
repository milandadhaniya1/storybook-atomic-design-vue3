import MyButton from './Button.vue';

export default {
  title: 'Atoms/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const LargePrimary = {
  args: {
    primary: true,
    size: 'large',
    label: 'Button',
  },
};

export const SmallPrimary = {
  args: {
    primary: true,
    size: 'small',
    label: 'Button',
  },
};

export const LargeSecondary = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const SmallSecondary = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
