import Countdown from "../components/Countdown";

export default {
  title: 'Atoms/Countdown',
  component: Countdown
}

const Template = (args) => <Countdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  date: new Date()
}
