import { ImportedButtonTemplate } from './ImportedButton';

export default {
  title: 'ImportedButton',
  tags: ['!autodocs'],
};

export const ImportedButton = ImportedButtonTemplate.bind({});
ImportedButton.args = {
  label: 'My Imported Button',
  disabled: false,
};
