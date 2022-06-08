import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, SafeAreaView } from "react-native";
import Index from "./screens/Index";
import Details from "./screens/Details";
import Create from "./screens/Create";
import Edit from "./screens/Edit";
import Delete from "./screens/Delete";
import {
  DefaultTheme,
  Provider as PaperProvider,
  // PaperDefaultTheme,
  // NavigationDefaultTheme,
} from "react-native-paper";


const Stack = createNativeStackNavigator();
export default function App(props) {
  let theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#941a1d",
      accent: "#262626",
    },
  };

  return (
    // <PreferencesContext.Provider value={preferences}>

    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitle: () => (
                  <Image
                    style={{ width: 115, height: 60}}
                    source={require("./assets/ROI-colour.png")}
                    resizeMode="contain"
                  />
              ),
              headerStyle: {
                backgroundColor: "#595959",
                height: 80,
              },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Index"
              component={Index}
              options={{ DefaultTheme }}
            />

            <Stack.Screen
              name="Create"
              component={Create}
              options={{ DefaultTheme, title: "Add Employee" }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{ DefaultTheme, title: "Employee Details" }}
            />
            <Stack.Screen
              name="Edit"
              component={Edit}
              options={{ DefaultTheme, title: "Update Employee Details" }}
            />
            <Stack.Screen
              name="Delete"
              component={Delete}
              options={{ DefaultTheme, title: "Delete Employee" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>

    // </PreferencesContext.Provider>
  );
}
