import { FlatList, StyleSheet, View,Text } from 'react-native';
import SearchUser from '../components/SearchUser'
import colors from '../utils/colors' 
import { useState } from 'react';
import { useUserStore } from '../store';
import { User } from '../types';
import UserItem from '../components/UserItem';

export default function SearchUsersScreen() {
	const [search,setSearch] = useState<string>('')
    const result = useUserStore(state => state.result)
	const [message,setMessage] = useState(false)
	const [dataSearch, setDataSearch] = useState<User[]>([])


	const handleSearch = () => {
		if(search.trim() === ''){
			setDataSearch(result)
		}else{
			const filterResult = result.filter(user =>
				user.name.toLowerCase().includes(search.toLowerCase())
			)
			if (filterResult.length === 0){
				setMessage(true)
				setSearch('')
				return 
			}
			
			setSearch('')
			setMessage(false)
			setDataSearch(filterResult)
		}
	}

	return (
		<View style={styles.container}>
		  <SearchUser 
		    search={search}
			setSearch={setSearch}
			onSearch = {handleSearch}
		  />
			{message ? (
			  <Text style={styles.notFound}>Búsqueda no encontrada</Text>  
		    ) : (
			<FlatList 
				data={dataSearch}
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
		flex: 1,
		backgroundColor: colors.white,
	},
	notFound:{
	  textAlign:'center',
	  marginTop:20,
	  fontSize:16,
	  color:'red'	
	}

});
