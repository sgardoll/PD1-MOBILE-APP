import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Caption,
  Headline,
  Paragraph,
  Subheading,
  Title,
  useTheme,
} from 'react-native-paper';

export default function Details() {
  //navigation
  const navigation = useNavigation();
  const route = useRoute();
  const u = route.params;
  //JSX
  return (

    <View style={[styles.container]}>
      <Text style={styles.item}>Name:</Text>
      <Text style={styles.detail}>
        {u.firstName} {u.lastName}
      </Text>

      <Text style={styles.item}>Age:</Text>
      <Text style={styles.detail}>{u.age}</Text>

      <Text style={styles.item}>E-Mail:</Text>
      <Text style={styles.detail}>{u.email}</Text>

      <Text style={styles.item}>Phone Number:</Text>
      <Text style={styles.detail}>{u.phone}</Text>

      <Text style={styles.item}>Department:</Text>
      <Text style={styles.detail}>{u.department}</Text>

      <Text style={styles.item}>Address:</Text>
      <Text style={styles.detail}>{`${u.address.street}
${u.address.suburb} ${u.address.state}
${u.address.country}`}</Text>
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
  detail: {
    fontSize: 24,
    color: "black",
    marginVertical: 10,
  },
});