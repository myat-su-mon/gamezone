import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='GameZone' />
      }
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: "#edb", height: 60 },
  },
});

export default HomeStack;