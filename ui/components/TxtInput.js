import { TextInput } from "react-native";

export default function TxtInput(props) {
  return <TextInput value={props.value} onChangeText={props.onChangeText} />;
}
