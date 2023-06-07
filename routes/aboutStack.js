import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import Header from "../shared/header";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: ({navigation}) => <Header navigation={navigation} title="About GameZone" />,
    },
  },
};
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#edb", height: 60 },
  },
});

export default AboutStack
