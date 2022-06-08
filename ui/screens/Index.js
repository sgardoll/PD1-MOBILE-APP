import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchUsersAsync } from "../services/user.service";
import User from "../components/User";

import { FAB } from "react-native-paper";
//import App from "./src/App";
//import store from "./store";

export default function Index(props) {
  //navigation
  const navigation = useNavigation();
  const route = useRoute();
  //state
  const [users, setUsers] = useState([]);
  //use effect
  useEffect(() => {
    switch (route.params?.op) {
      case undefined: //first time loading this view
        fetchUsersAsync().then((json) => setUsers(json));
        break;
      case "create":
        setUsers([...users, route.params.data]);
        break;
      case "edit":
        setUsers(
          users.map((u) =>
            u.id === route.params.data.id ? route.params.data : u
          )
        );
        break;
      case "delete":
        setUsers(users.filter((u) => u.id != route.params.data.id));
        break;
      default:
        throw new Error("Unknown Operation");
    }
  }, [route.params]);

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  };

  return (
    <View style={[styles.MainContainer]}>
      <View style={{flex: 1, flexDirection: "row"}}>
        <FlatList 
          data={users}
          renderItem={(u) => <User user={u} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemDivider}
        />
      </View>
      <FAB
        icon="plus"
        large="true"
        color="white"
        style={{
          position: "absolute",
          margin: 16,
          right: 10,
          bottom: 10,
        }}
        theme={{ colors: { accent: "#941a1d" } }}
        onPress={() => navigation.navigate("Create")}
      ></FAB>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },

  EmployeeBox: {
    flex: 1,
    flexDirection: "row",

    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
    padding: 20,
  },


});
