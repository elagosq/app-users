import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useUserStore } from '../store';
import { useEffect, useMemo } from 'react';
import UserItem from '../components/UserItem';
import colors from '../utils/colors';
import { Sentry } from '../utils/error';

export default function IndexScreen() {
	const fetchResult = useUserStore(state => state.fetchUsers)
	const result = useUserStore(state => state.result)
	const memoUsers = useMemo(() => result, [result]) 
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
	   error()	
       fetchResult()
	}, [])


	return (
        <View style={styles.container}>
			{loading ? (
			  <ActivityIndicator size="large" color={colors.blue} /> 
			) : (
			<FlatList 
			 data={memoUsers}
			 keyExtractor={(item) => item.id.toString()}
			 renderItem={({item}) => (
			    <UserItem item={item} />
			 )}
		   />
		   )}	
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
