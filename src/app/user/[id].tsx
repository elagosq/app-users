import { useLayoutEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useUserStore } from '../../store';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '../../utils/colors';

export default function DetailUserScreen() {
	const { id } = useLocalSearchParams<{id: string}>()
	const navigation = useNavigation()
    const result = useUserStore(state => state.result)
	const user = result.find(user => user.id.toString() === id)

	useLayoutEffect(() => {
      navigation.setOptions({
		headerTitle: user?.name 
	  })
	},[])

	return (
		<View style={styles.container}>
			<View style={styles.avatarUser}>
			   <FontAwesome name="user-circle-o" size={180} color="black" />
			   <Text style={styles.title}>{user?.name}</Text>
			   <Text style={styles.subtitle}>{user?.phone}</Text>
			</View>
			<View style={styles.containerDetailUser}>
              <Text style={styles.title}>{`Correo: ${user?.email}`}</Text>
			  <Text style={styles.title}>{`Calle: ${user?.address?.street}`}</Text>
			  <Text style={styles.title}>{`Numero: ${user?.address.suite}`}</Text>
			  <Text style={styles.title}>{`Ciudad: ${user?.address.city}`}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	avatarUser:{
		flex:0.5,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor: colors.blue	
	},
	containerDetailUser: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title:{
       fontWeight:'bold',
	   fontSize:16,
	   marginTop:10,
	   color: colors.black		
	},
	subtitle:{
	   fontSize:15,
       marginTop:4,
	   fontWeight:'bold',
	   color: colors.black
	}
});
