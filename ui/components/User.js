import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, IconButton, FAB } from "react-native-paper";

export default function User(props) {
  //navigation
  const navigation = useNavigation();
  let u = props.user.item;

    return (
      <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.

      }]}>
        <View style={{ flex: 12 }} />
        <IconButton
          icon="account-details"
          size={28}
          color="#941a1d"
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Details", u)}
        >
          <Text>Details</Text>
        </IconButton>
        <View style={{ flex: 1 }} />
        <IconButton
          icon="square-edit-outline"
          size={28}
          color="#941a1d"
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Edit", u)}
        >
          <Text>Edit</Text>
        </IconButton>
        <View style={{ flex: 1 }} />
        <IconButton
          icon="delete"
          size={28}
          color="#941a1d"
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Delete", u)}
        >
          <Text>Delete</Text>
        </IconButton>
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexDirection: "row"
    },
  });


     