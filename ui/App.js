import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./screens/Index";
import Details from "./screens/Details";
import Create from "./screens/Create";
import Edit from "./screens/Edit";
import Delete from "./screens/Delete";
import {
  FAB,
  DefaultTheme,
  Provider as PaperProvider,
  // PaperDefaultTheme,
  // NavigationDefaultTheme,
} from "react-native-paper";

import { React, View } from "react";
//import { PreferencesContext } from './PreferencesContext';

// export const PreferencesContext = React.createContext({
//   toggleTheme: () => {},
//   isThemeDark: false,
// });

// const CombinedDefaultTheme = merge(
//   PaperDefaultTheme,
//   NavigationDefaultTheme
// );
// const CombinedDarkTheme = merge(
//   PaperDarkTheme,
//   NavigationDarkTheme
// );
// const CombinedDefaultTheme =

const Stack = createNativeStackNavigator();
export default function App(props) {
  // const [isThemeDark, setIsThemeDark] = React.useState(false);

  // let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  // const toggleTheme = React.useCallback(() => {
  //   return setIsThemeDark(!isThemeDark);
  // }, [isThemeDark]);

  // const preferences = React.useMemo(
  //   () => ({
  //     toggleTheme,
  //     isThemeDark,
  //   }),
  //   [toggleTheme, isThemeDark]
  // );
  let theme = {
    ...DefaultTheme,
    roundness: 6,
    mode: "outlined",
    colors: {
      ...DefaultTheme.colors,
      primary: "#941a1d",
      accent: "#262626",
    },
  };
  return (
    // <PreferencesContext.Provider value={preferences}>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={Index}
            options={{ DefaultTheme, title: "My Contacts" }}
          />
          <Stack.Screen
            name="Create"
            component={Create}
            options={{ DefaultTheme, title: "Add Contact" }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ DefaultTheme, title: "Contact Details" }}
          />
          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{ DefaultTheme, title: "Update Contact" }}
          />
          <Stack.Screen
            name="Delete"
            component={Delete}
            options={{ DefaultTheme, title: "Delete Contact" }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </PaperProvider>
    // </PreferencesContext.Provider>
  );
}
