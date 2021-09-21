import Text from '../components/Text'

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    size: {
      options: [ 'sm', 'md', 'lg' ],
      control: { type: 'select' }
    }
  }
}
const Template = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  italic: false,
  bold: false,
  size: 'sm',
  color: 'primary',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus.'
}

export const Medium = Template.bind({});
Medium.args = {
  italic: false,
  bold: false,
  size: 'md',
  color: 'primary',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
}

export const Large = Template.bind({});
Large.args = {
  italic: false,
  bold: false,
  size: 'lg',
  color: 'primary',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
}
