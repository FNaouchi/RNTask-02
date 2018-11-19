import { createStackNavigator } from "react-navigation";
import ListScreen from "../Components/CoffeeList";
import DetailScreen from "../Components/CoffeeDetail";
import Cart from "../Components/CoffeeCart";
import Login from "../Components/Login";

export default createStackNavigator(
  {
    Login: Login,
    List: ListScreen,
    Detail: DetailScreen,
    Cart: Cart
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: { backgroundColor: "rgb(20,90,100)" }
  }
);
