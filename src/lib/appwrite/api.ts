import { INewUser, ISessionUser } from "@/types";
import { ID } from "appwrite";
import { account } from "./config";

export async function createUserAccount(user:INewUser){

    try{
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )
        return newAccount

    }catch(err){
        console.log(err)
        return err
    }
}

export async function createSessionUser(user:ISessionUser) {
    try {
        const newSession = await account.createEmailPasswordSession(user.email, user.password)
        console.log(newSession)
    } catch (error) {
        console.log(error)
    }
}

export async function detailsAccount() {
    try {
        const newSession = await account.get()
        console.log(newSession)
    } catch (error) {
        console.log(error)
    }
}