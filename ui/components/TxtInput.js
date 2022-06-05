import { TextInput } from "react-native";
import { Button } from "react-native-paper";

export default function TxtInput(props) {
  return <TextInput value={props.value} onChangeText={props.onChangeText} />;
}
