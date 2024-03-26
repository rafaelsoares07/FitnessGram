import * as z from "zod"

export const SignUpValidation = z.object({
    name:z.string().min(2, {message:"Nome muito curto"}),
    username: z.string().min(5,{message:"Nome de usuario muito curto"}).max(20),
    email: z.string().email(),
    password: z.string().min(8, {message:"A senha deve conter no minimo 8 digitos"})
  })

  export const SignInValidation = z.object({
    username: z.string().min(5,{message:"Nome de usuario muito curto"}).max(20),
    password: z.string().min(8, {message:"A senha deve conter no minimo 8 digitos"})
  })