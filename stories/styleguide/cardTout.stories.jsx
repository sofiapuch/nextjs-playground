import CardTout from "../../components/UI/molecules/cards/CardTout";

const cardDefault = {
  title: "ALLES.AUTO Garage",
  description: "Registriere dich ganz einfach mit deinem aktuellen Fahrzeug für die Garage und sichere dir unzählige Vorteile.",
}

export default {
  title: "Card Tout",
  component: CardTout,
  argTypes: {
    modifier: {
      options: ['primary', 'secondary', 'light', 'dark'],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => <CardTout {...args} />

export const Primary = Template.bind({});
Primary.args = {
  ...cardDefault,
  modifier: "primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
  ...cardDefault,
  modifier: "secondary"
}

export const Light = Template.bind({});
Light.args = {
  ...cardDefault
}

export const Dark = Template.bind({});
Dark.args = {
  ...cardDefault,
  modifier: "dark"
}