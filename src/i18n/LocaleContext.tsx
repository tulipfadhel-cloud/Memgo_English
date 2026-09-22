"use client";
import {createContext,useContext,useEffect,useMemo,useState} from "react";
import {dictionary,type Locale} from "@/i18n/dictionary";
type LocaleContextValue={locale:Locale;t:typeof dictionary.ar;toggle:()=>void};
const LocaleContext=createContext<LocaleContextValue|null>(null);
export function LocaleProvider({children}:{children:React.ReactNode}){
 const [locale,setLocale]=useState<Locale>("ar");
 useEffect(()=>{const saved=localStorage.getItem("memgo_locale");if(saved==="ar"||saved==="en")setLocale(saved)},[]);
 useEffect(()=>{document.documentElement.lang=locale;document.documentElement.dir=locale==="ar"?"rtl":"ltr";localStorage.setItem("memgo_locale",locale)},[locale]);
 const value=useMemo(()=>({locale,t:dictionary[locale] as typeof dictionary.ar,toggle:()=>setLocale(v=>v==="ar"?"en":"ar")}),[locale]);
 return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
export function useLocale(){const v=useContext(LocaleContext);if(!v)throw new Error("useLocale must be used inside LocaleProvider");return v}
