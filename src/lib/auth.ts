import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { db } from "@/lib/db";
const COOKIE="memgo_session";
const secret=()=>new TextEncoder().encode(process.env.SESSION_SECRET??"");
export async function createSession(userId:string){if(!process.env.SESSION_SECRET)throw new Error("SESSION_SECRET is required");const token=await new SignJWT({userId}).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("7d").sign(secret());(await cookies()).set(COOKIE,token,{httpOnly:true,sameSite:"lax",secure:process.env.NODE_ENV==="production",path:"/",maxAge:60*60*24*7});}
export async function clearSession(){(await cookies()).delete(COOKIE);}
export async function currentUser(){const token=(await cookies()).get(COOKIE)?.value;if(!token)return null;try{const {payload}=await jwtVerify(token,secret());if(typeof payload.userId!=="string")return null;return db.user.findUnique({where:{id:payload.userId},select:{id:true,email:true,name:true,role:true}});}catch{return null;}}
