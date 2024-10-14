import { Pressable,Text,View,StyleSheet } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { User } from "../types";
import { useRouter } from "expo-router";

type UserProps = {
	item: User
}

export default function UserItem({item}: UserProps) {
  const router = useRouter()
  		
  return (
    <Pressable
	  onPress={() => router.push({
		pathname: "/user/[id]",
		params: {id: item.id}
	  })}
	  style={styles.btnItemUser}
	>
	<View style={styles.userInfo}>
	  <FontAwesome name="user-circle-o" size={40} color="black" />
       <View style={styles.details}>
		<Text>{item.name}</Text>
		<Text>{item.email}</Text>
	   </View>
	</View>
	</Pressable>
  )
}

const styles = StyleSheet.create({
   btnItemUser:{
     paddingHorizontal:20
   },
   userInfo:{
	 flex:1,
     flexDirection:'row',
	 alignItems: 'center',
	 paddingVertical:16,
	 paddingRight:24,
	 borderBottomWidth: 1.5 
   },
   details:{
	justifyContent:'flex-start',
	flex:1,
	marginLeft:20
   }
})
