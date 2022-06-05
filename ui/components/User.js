import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, IconButton, FAB } from "react-native-paper";

export default function User(props) {
  //navigation
  const navigation = useNavigation();
  let u = props.user.item;

  return (
    <View style={[styles.container]}>
      <View>
        <Text style={[styles.itemText]}>
          {u.firstName} {u.lastName}
        </Text>
      </View>
      <View style={[styles.icons]}>
        <IconButton
          icon="account-details"
          size={28}
          color="#941a1d"
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Details", u)}
        ></IconButton>
        <IconButton
          icon="square-edit-outline"
          size={28}
          color="#941a1d"
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Edit", u)}
        ></IconButton>
        <IconButton
          icon="delete"
          size={28}
          color="#941a1d"
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Delete", u)}
        ></IconButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  icons: {
    flexDirection: "row",
  },

  itemText: {
    fontSize: 24,
    color: "black",
  },
});
