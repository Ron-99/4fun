import Title from '../components/Title'

export default {
  title: 'Atoms/Title',
  component: Title,
  argTypes: {
    typography: {
      options: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ],
      control: { type: 'select' }
    }
  }
}

const Template = (args) => <Title {...args} />;
export const Heading1 = Template.bind({});
Heading1.args = {
  typography: 'h1',
  children: 'HEADING H1 - AA BB CC DD'
}

export const Heading2 = Template.bind({});
Heading2.args = {
  typography: 'h2',
  children: 'HEADING H2 - AA BB CC DD'
}

export const Heading3 = Template.bind({});
Heading3.args = {
  typography: 'h3',
  children: 'HEADING H3 - AA BB CC DD'
}

export const Heading4 = Template.bind({});
Heading4.args = {
  typography: 'h4',
  children: 'HEADING H4 - AA BB CC DD'
}

export const Heading5 = Template.bind({});
Heading5.args = {
  typography: 'h5',
  children: 'HEADING H5 - AA BB CC DD'
}

export const Heading6 = Template.bind({});
Heading6.args = {
  typography: 'h6',
  children: 'HEADING H6 - AA BB CC DD'
}
