import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchUsersAsync } from "../services/user.service";
import User from "../components/User";
import * as React from "react";
import { Button, FAB, IconButton } from "react-native-paper";
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

  return (
    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          data={users}
          renderItem={(u) => <User user={u} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <FAB
        icon="plus"
        large="true"
        color="white"
        theme={{ colors: { accent: "#941a1d" } }}
        style={{
          position: "absolute",
          margin: 16,
          right: 10,
          bottom: 10,
        }}
        onPress={() => navigation.navigate("Create")}
      ></FAB>
    </View>
  );
}
