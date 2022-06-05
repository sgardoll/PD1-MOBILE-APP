import { Text, View } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native'; 
import {deleteUserAsync} from '../services/user.service'; 
import { DefauButtonltTheme } from "react-native-paper";

export default function Delete(){
    //navigation
    const navigation  = useNavigation(); 
    const route = useRoute(); 
    const u = route.params; 
    //functions
    function submit(){
      deleteUserAsync(u.id)
        .then(r=>{
          if(r.status == 204){
            navigation.navigate("Index",{op:'delete',data:u}); 
          }
        })
    }
    //JSX
    return (
      <View>
        <Text>Are you sure you want to delete this person?</Text>
        <Text>NAME:</Text>
        <Text>{u.firstName} {u.lastName}</Text>
        <Text>AGE:</Text>
        <Text>{u.age}</Text>
        <Text>EMAIL:</Text>
        <Text>{u.email}</Text>
        <Text>PHONE:</Text>
        <Text>DEPARTMENT:</Text>
        <Text>ADDRESS:</Text>
        <Text>{`${u.address.street}, ${u.address.suburb}, ${u.address.state}`}</Text>
        <Button mode="contained" onPress={submit}>
                <Text>DELETE</Text>
        </Button>    
      </View>
    ); 
  }