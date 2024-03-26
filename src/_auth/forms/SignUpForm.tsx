import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"
import { createUserAccount } from "@/lib/appwrite/api"

export default function SignUpForm() {
  const [loading,setLoading] = React.useState(false)

  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
    try{
      setLoading(true)
      const newUser = await createUserAccount(values)
      setLoading(false)
      console.log(newUser)
    }catch(error){
      console.log(error)
      console.log("caiu aqui")
    }
  
  }

  return (
    <Form {...form}>

      <div className="sm:w-420 flex-center flex-col">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_5WRz1jvLEfqj3QXFB2GQITbein1HdkQozr7BxJfwX_yJ2UMCxbX58kKSypaEfhP4Zs&usqp=CAU" alt="" srcset="" />
        <h3 className="font-bold italic text-center md:h2-bold ">Create New Account</h3>
        <p className="text-center mt-1">Cria sua conta na nossa rede social</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text"{...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text"{...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password"{...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <Button type="submit" className="mt-3">
            {loading ? (
              <div className="flex gap-2 items-center justify-center">
                <Loader/> Carregando...
              </div>
            ) :
              "Enviar"
            }
          </Button>
          <Link to="/sign-in" className="text-center hover:text-blue-600">Ja possiu uma conta? Faca seu login</Link>
        </form>

      </div>
    </Form>
  )
}
