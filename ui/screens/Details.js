import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native-paper";

export default function Details() {
  //navigation
  const navigation = useNavigation();
  const route = useRoute();
  const u = route.params;
  //JSX
  return (
    <View>
      <Text>NAME:</Text>
      <Text>
        {u.firstName} {u.lastName}
      </Text>
      <Text>AGE:</Text>
      <Text>{u.age}</Text>
      <Text>EMAIL:</Text>
      <Text>{u.email}</Text>
      <Text>PHONE:</Text>
      <Text>DEPARTMENT:</Text>
      <Text>ADDRESS:</Text>
      <Text>{`${u.address.street}, ${u.address.suburb}, ${u.address.state}`}</Text>
    </View>
  );
}
