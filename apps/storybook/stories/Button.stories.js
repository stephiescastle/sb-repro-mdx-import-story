import { ButtonTemplate } from './Button';

export default {
  title: 'Button',
  tags: ['!autodocs'],
};

export const Button = ButtonTemplate.bind({});
Button.args = {
  label: 'My Button',
  disabled: false,
};
