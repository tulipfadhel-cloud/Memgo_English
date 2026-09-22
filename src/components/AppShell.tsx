"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useState} from "react";
import {Bell,BookOpen,ClipboardCheck,FileText,Home,Library,UserRound,BarChart3} from "lucide-react";

const items=[
  {ar:"الرئيسية",en:"Dashboard",href:"/student",icon:Home},
  {ar:"خطة اليوم",en:"Today's Plan",href:"/student/plan",icon:BookOpen},
  {ar:"الاختبارات",en:"Quizzes",href:"/student/quizzes",icon:ClipboardCheck},
  {ar:"الواجبات",en:"Homework",href:"/student/homework",icon:FileText},
  {ar:"المصادر",en:"Resources",href:"/student/resources",icon:Library},
  {ar:"النتائج",en:"Results",href:"/student/results",icon:BarChart3},
  {ar:"الإشعارات",en:"Notifications",href:"/student/notifications",icon:Bell},
  {ar:"الملف الشخصي",en:"Profile",href:"/student/profile",icon:UserRound},
];

export function AppShell({children}:{children:React.ReactNode}){
  const path=usePathname(); const [locale,setLocale]=useState<"ar"|"en">("ar");
  useEffect(()=>{const saved=localStorage.getItem("memgo-locale");if(saved==="en"||saved==="ar")setLocale(saved)},[]);
  useEffect(()=>{document.documentElement.lang=locale;document.documentElement.dir=locale==="ar"?"rtl":"ltr";localStorage.setItem("memgo-locale",locale)},[locale]);
  const active=(href:string)=>href==="/student"?path===href:path.startsWith(href);
  return <div className="shell" dir={locale==="ar"?"rtl":"ltr"}>
    <aside className="sidebar">
      <div className="brandLockup"><div className="logoMini">ميم<span>GO</span></div></div>
      <nav className="nav">{items.map(({ar,en,href,icon:Icon})=><Link key={href} className={active(href)?"active":""} href={href}><Icon/>{locale==="ar"?ar:en}</Link>)}</nav>
      <div className="sidebarFoot"><div className="profileMini"><div className="avatar">M</div><div><b style={{fontSize:12}}>MEMGO Student</b><div style={{fontSize:11,color:"#98A2B3"}}>A2 Course</div></div></div></div>
    </aside>
    <main className="main">
      <header className="topbar"><div className="welcome"><strong>{locale==="ar"?"مرحباً بكِ 👋":"Welcome back 👋"}</strong><span>{locale==="ar"?"جاهزة لخطة اليوم؟":"Ready for today's plan?"}</span></div><div className="topActions"><button className="iconBtn" aria-label="Notifications"><Bell size={17}/></button><button className="lang" onClick={()=>setLocale(locale==="ar"?"en":"ar")}>{locale==="ar"?"EN":"العربية"}</button></div></header>
      {children}
    </main>
    <nav className="mobileNav">{items.slice(0,4).map(({ar,en,href,icon:Icon})=><Link key={href} className={active(href)?"active":""} href={href}><Icon/>{locale==="ar"?ar:en}</Link>)}</nav>
  </div>
}