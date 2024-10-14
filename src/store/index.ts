import { create } from "zustand"
import { User } from "../types"
import { getUsers } from "../services/UserService"

type UserStore =  {
  result : User[],
  loading: Boolean,
  fetchUsers : () => Promise<void> 
}

export const useUserStore = create<UserStore>((set) => ({
   result:[],
   loading: false,
   fetchUsers: async () => {
	set(() => ({
     loading: true
    }))
	const result = await getUsers()
	set(() => ({
      result,
      loading: false
    }))
   }
}));
