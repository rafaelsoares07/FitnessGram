import * as z from "zod"

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
import { SignInValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {Button} from "@/components/ui/button"

export default function SignInForm() {
const isLoading = true
  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      username: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof SignInValidation>) {

  
  }
  return (
    <Form {...form}>

      <div className="sm:w-420 flex-center flex-col">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_5WRz1jvLEfqj3QXFB2GQITbein1HdkQozr7BxJfwX_yJ2UMCxbX58kKSypaEfhP4Zs&usqp=CAU" alt="" srcset="" />
        <p className="text-gray-300 text-center">Movimento que trasforma</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1 w-full mt-4">
        
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
            {isLoading ? (
              <div className="flex gap-2 items-center justify-center">
                <Loader /> Carregando...
              </div>
            ) :
              "Enviar"
            }
          </Button>
          <Link to="/sign-up" className="text-center hover:text-blue-600">Ainda nao possue uma conta? Faca seu cadastro</Link>
        </form>

      </div>
    </Form>
  )
}

