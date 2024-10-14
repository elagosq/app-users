import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useUserStore } from '../store';
import { useEffect } from 'react';
import UserItem from '../components/UserItem';
import colors from '../utils/colors';
import { Sentry } from '../utils/error';

export default function IndexScreen() {
	const fetchResult = useUserStore(state => state.fetchUsers)
	const result = useUserStore(state => state.result)
	const loading = useUserStore(state => state.loading)

	useEffect(() => {
	   const error = () => {
         try {
		   const object = undefined
		   console.log(object.url);
		 } catch (error) {
			//Capturamos manualmente el error
			Sentry.captureException(error)
		 }
	   }
	   //error()	
       fetchResult()
	}, [])

	if(loading){
		return <View style={styles.indicator}><ActivityIndicator size="large" color={colors.blue}/></View>
	}
    
	return (
		<View style={styles.container}>
		   <FlatList 
		     data={result}
			 keyExtractor={(item) => item.id.toString()}
			 renderItem={({item}) => (
			    <UserItem item={item} />
			 )}
		   />	
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	   flex:1,
	   justifyContent:'center',
	   paddingVertical:15,
	   backgroundColor: colors.white
	},
	indicator:{
		flex: 1, 
		justifyContent: 'center'
	}
});
