import Button from '../components/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      options: [ 'primary', 'secondary' ],
      control: { type: 'select' }
    },
    size: {
      options: [ 'sm', 'md', 'lg' ],
      control: { type: 'select' }
    }
  }
}
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  size: 'md',
  children: 'Primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  size: 'md',
  children: 'Secondary'
}

export const Small = Template.bind({});
Small.args = {
  color: 'primary',
  size: 'sm',
  children: 'Small'
}

export const Medium = Template.bind({});
Medium.args = {
  color: 'primary',
  size: 'md',
  children: 'Medium'
}

export const Large = Template.bind({});
Large.args = {
  color: 'primary',
  size: 'lg',
  children: 'Large'
}
