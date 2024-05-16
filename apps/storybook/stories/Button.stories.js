import { ButtonTemplate } from './Button';

export default {
  title: 'Button',
  tags: ['!autodocs'],
  render: (args) => Button(args),
};

export const Button = ButtonTemplate.bind({});
Button.args = {
  label: 'My Button',
  disabled: false,
};
