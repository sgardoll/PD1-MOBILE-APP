import { Text, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deleteUserAsync } from "../services/user.service";
import { Button, Headline } from "react-native-paper";

export default function Delete() {
  //navigation
  const navigation = useNavigation();
  const route = useRoute();
  const u = route.params;
  //functions
  function submit() {
    deleteUserAsync(u.id).then((r) => {
      if (r.status == 204) {
        navigation.navigate("Index", { op: "delete", data: u });
      }
    });
  }
  //JSX
  return (
    <View style={[styles.container]}>
      <Headline style={styles.heading}>Are you sure you want to delete this person?</Headline>
      <Text style={styles.item}>Name:</Text>
      <Text style={styles.detail}>
        {u.firstName} {u.lastName}
      </Text>
      <Button color="#941a1d" icon="delete" mode="contained" onPress={submit}>
        <Text>DELETE</Text>
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    fontWeight: 'bold',
    fontSize: 24,
    color: "black",
    marginVertical: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    color: "#941a1d",
    marginVertical: 10,
  },
  detail: {
    fontSize: 24,
    color: "black",
    marginVertical: 10,
  },
});