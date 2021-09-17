import Index from "../components/Countdown";

export default {
  title: 'Atoms/Index',
  component: Index
}

const Template = (args) => <Index {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  year: 2021,
  month: 9,
  day: 29,
  hour: 18,
  minute: 0,
  second: 0
}
