import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addUserAsync } from "../services/user.service";
import { Button } from "react-native-paper";

export default function Create() {
  const [text, setText] = React.useState("");
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
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainerStyle}
        label="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        placeholderTextColor={'grey'}
      />
      <TextInput
        style={styles.inputContainerStyle}
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.inputContainerStyle}
        label="Age"
        value={age}
        onChangeText={setAge}
        placeholder="Age"
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.inputContainerStyle}
        label="Email Address"
        value={email}
        onChangeText={setEmail}
        placeholder="E-Mail Address"
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.inputContainerStyle}
        label="Phone Number"
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone Number"
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.inputContainerStyle}
        label="Department"
        value={department}
        onChangeText={setDepartment}
        placeholder="Department"
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.inputContainerStyle}
        label="Street Address"
        value={street}
        onChangeText={setStreet}
        placeholder="Street Address"
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.inputContainerStyle}
        label="Suburb"
        value={suburb}
        onChangeText={setSuburb}
        placeholder="Suburb"
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.inputContainerStyle}
        label="State"
        value={state}
        onChangeText={setState}
        placeholder="State"
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.inputContainerStyle}
        label="Country"
        value={country}
        onChangeText={setCountry}
        placeholder="Country"
        placeholderTextColor={'grey'}
      />

      <Button style={styles.button}
        color="#941a1d"
        icon="content-save"
        mode="contained"
        onPress={submit}
      >
        <Text>SAVE</Text>
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    marginVertical: 10,
  },
  detail: {
    fontSize: 24,
    color: "black",
    marginVertical: 10,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    fontSize: 24,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  }
});
