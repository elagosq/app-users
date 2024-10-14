import axios from "axios"
import { UsersSchema } from "../schema/user-schema"

export async function getUsers(){
	try {
		const url = 'https://jsonplaceholder.typicode.com/users'
		const { data } = await axios(url)
		const result = UsersSchema.safeParse(data)
		if(result.success){
			return result.data
		}	
	} catch (error) {
	  console.log(error)	
	}
}