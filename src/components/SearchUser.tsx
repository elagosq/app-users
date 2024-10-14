import {View,StyleSheet, TextInput} from "react-native"
import Feather from '@expo/vector-icons/Feather';
import colors from "../utils/colors"

type SearchProps = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  onSearch: () => void
}

export default function SearchUser({search,setSearch,onSearch}: SearchProps) {
	return(
	 <View style={styles.backgroundSearch}>
		<Feather name="search" style={styles.iconStyles} />
		<TextInput 
		  autoCapitalize="none"
		  autoCorrect={false}
		  placeholder="Buscar"
		  style={styles.inputStyle}
		  value={search}
		  onChangeText={setSearch}
		  onEndEditing={onSearch}
		/>
	 </View>
   )
}

const styles = StyleSheet.create({
	backgroundSearch:{
	  backgroundColor: colors.greyLight,
	  height:50,
	  borderRadius:5,
	  marginHorizontal:15,
	  flexDirection:'row',
	  marginVertical:10	
	},
	inputStyle:{
      flex:1,
	  fontSize:18,
	},
	iconStyles:{
	 fontSize:32,
     alignSelf:'center',
	 marginHorizontal:15 
	}
})