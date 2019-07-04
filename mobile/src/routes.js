import { createAppContainer, createStackNavigator } from "react-navigation";

import Main from "./pages/Main";

export default createAppContainer(
  createStackNavigator(
    {
      Main
    },
    {
      headerLayoutPreset: "left",
      transparentCard: true,
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#e7e7e7",
          borderBottomWidth: 0,
          elevation: 0
        },
        headerTintColor: "#000"
      }
    }
  )
);
