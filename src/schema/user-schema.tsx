import { z } from "zod"

//Definir el esquema para los datos del usuario.
export const UserSchema = z.object({
	id: z.number(),
	name: z.string(),
	email: z.string(),
    address: z.object({
      street: z.string(),
	  suite: z.string(),
	  city: z.string()
	}),
	phone:z.string()
})

export const UsersSchema = z.array(UserSchema)

