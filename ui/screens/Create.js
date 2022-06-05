import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addUserAsync } from "../services/user.service";
import { Button } from "react-native-paper";

export default function Create() {
  //navigation
  const navigation = useNavigation();
  //state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  //functions
  function submit() {
    let user = getUserObject();
    addUserAsync(user).then((json) =>
      navigation.navigate("Index", { op: "create", data: json })
    );
  }
  function getUserObject() {
    return {
      firstName,
      lastName,
      age,
      email,
      phone,
      department,
      address: {
        street,
        suburb,
        state,
        country,
      },
    };
  }
  //JSX
  return (
    <View>
      <Text>FIRST NAME:</Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
      />
      <Text>LAST NAME:</Text>
      <TextInput
        value={lastName}
        onChangeText={setLastName}
      />
      <Text>AGE:</Text>
      <TextInput value={age} onChangeText={setAge} />
      <Text>EMAIL:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
      />
      <Text>PHONE:</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
      />
      <Text>DEPARTMENT:</Text>
      <TextInput
        value={department}
        onChangeText={setDepartment}
      />
      <Text>ADDRESS:</Text>
      <Text>STREET:</Text>
      <TextInput
        value={street}
        onChangeText={setStreet}
      />
      <Text>SUBURB:</Text>
      <TextInput
        value={suburb}
        onChangeText={setSuburb}
      />
      <Text>STATE:</Text>
      <TextInput
        value={state}
        onChangeText={setState}
      />
      <Text>COUNTRY:</Text>
      <TextInput
        value={country}
        onChangeText={setCountry}
      />
      <Button mode="contained" onPress={submit}>
        <Text>SAVE</Text>
      </Button>
    </View>
  );
}
