"use server";
import bcrypt from "bcryptjs";import {redirect} from "next/navigation";import {z} from "zod";import {db} from "@/lib/db";import {clearSession,createSession} from "@/lib/auth";
const schema=z.object({email:z.string().email(),password:z.string().min(8)});
export async function signIn(_:unknown,formData:FormData){const parsed=schema.safeParse({email:formData.get("email"),password:formData.get("password")});if(!parsed.success)return {error:"بيانات الدخول غير صحيحة"};const user=await db.user.findUnique({where:{email:parsed.data.email.toLowerCase()}});if(!user||!(await bcrypt.compare(parsed.data.password,user.passwordHash)))return {error:"البريد الإلكتروني أو كلمة المرور غير صحيحة"};await createSession(user.id);redirect(user.role==="ADMIN"?"/admin":"/student");}
export async function logout(){await clearSession();redirect("/login");}
