import { Stack,useRouter } from "expo-router"
import { Pressable } from "react-native"
import Feather from '@expo/vector-icons/Feather';

export default function RootLayout() {
	const router = useRouter()
	return(
		<Stack
		 initialRouteName="Contacto"
		>
         <Stack.Screen 
		   name="index" 
		   options={{
			 headerTitle:"Contacto Usuarios",
			 headerRight: () => (
			   <Pressable onPress={() => router.push('/search')} >
					<Feather name="search" size={24} color="black" />
			   </Pressable>	
			 )
		   }}
		 />
		 <Stack.Screen 
		   name="user/[id]"
		   options={{
			 headerTitle:"Detalle Usuario"
		   }}
		 />
		 <Stack.Screen 
		   name="search"
		   options={{
			 headerTitle:"Buscar Usuario"
		   }}
		 />
		</Stack>
	)
}