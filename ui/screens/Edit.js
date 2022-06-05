import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Label from "../components/Label";
import { updateUserAsync } from "../services/user.service";
import { Button, useTheme } from "react-native-paper";

export default function Edit() {

  //navigation
  const navigation = useNavigation();
  const route = useRoute();
  const user = route.params;
  //state
  const [firstName, setFirstName] = React.useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [department, setDepartment] = useState(user.department);
  const [street, setStreet] = useState(user.address.street);
  const [suburb, setSuburb] = useState(user.address.suburb);
  const [state, setState] = useState(user.address.state);
  const [country, setCountry] = useState(user.address.country);
  //functions
  function submit() {
    updateUserAsync(getUserObject()).then((json) => {
      navigation.navigate("Index", { op: "edit", data: json });
    });
  }
  function getUserObject() {
    return {
      id: user.id,
      firstName: firstName,
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
      <Label value="First Name:" />
      <TextInput
        style={styles.inputContainerStyle}
        value={firstName}
        onChangeText={setFirstName}
      />
      <Label value="Last Name:" />
      <TextInput
        style={styles.inputContainerStyle}
        value={lastName}
        onChangeText={setLastName}
      />
      <Label value="Age::" />
      <TextInput
        style={styles.inputContainerStyle}
        value={age}
        onChangeText={setAge}
      />
      <Text>E-Mail:</Text>
      <TextInput
        style={styles.inputContainerStyle}
        value={email}
        onChangeText={setEmail}
      />
      <Text>Phone Number:</Text>
      <TextInput
        style={styles.inputContainerStyle}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Text>Department:</Text>
      <TextInput
        style={styles.inputContainerStyle}
        value={department}
        onChangeText={setDepartment}
      />
      <Text>Street Address:</Text>
      <TextInput
        style={styles.inputContainerStyle}
        value={street}
        onChangeText={setStreet}
      />
      <Text>Suburb:</Text>
      <TextInput
        style={styles.inputContainerStyle}
        value={suburb}
        onChangeText={setSuburb}
      />
      <Text>State:</Text>
      <TextInput
        style={styles.inputContainerStyle}
        value={state}
        onChangeText={setState}
      />
      <Text>Country::</Text>
      <TextInput
        style={styles.inputContainerStyle}
        value={country}
        onChangeText={setCountry}
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
  },
  detail: {
    fontSize: 24,
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
