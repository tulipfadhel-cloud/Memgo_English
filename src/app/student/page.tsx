import Link from "next/link";
import {AppShell} from "@/components/AppShell";
import {BookOpen,Headphones,MessageSquareText,Languages} from "lucide-react";

const activities=[
  {name:"Listening Practice",meta:"15 دقيقة · استماع",icon:Headphones,done:true},
  {name:"Shadowing Session",meta:"15 دقيقة · نطق",icon:MessageSquareText,done:true},
  {name:"Reading Practice",meta:"15 دقيقة · قراءة",icon:BookOpen,done:false},
  {name:"Vocabulary Review",meta:"15 دقيقة · مفردات",icon:Languages,done:false},
];

export default function Student(){
  return <AppShell><div className="dashboard">
    <div className="dashboardHead"><div><span className="eyebrow">MEMGO ENGLISH · A2</span><h1>لوحة التعلّم</h1></div><span className="dateText">خطة اليوم · 60 دقيقة</span></div>
    <div className="dashboardGrid">
      <div className="stack">
        <section className="card planCard">
          <div className="planTop"><div><span className="eyebrow">TODAY'S PLAN</span><h2>Day 1 — A2 Study Plan</h2><p>أكملي خطة اليوم خطوة بخطوة. كل نشاط مصمم حتى تتدربين على مهارة محددة بدون تشتيت.</p></div><span className="badge">2 من 4 مكتملة</span></div>
          <div className="progressMeta"><span>التقدم اليومي</span><b>50%</b></div><div className="progress"><span style={{width:"50%"}}/></div>
          <div className="planFooter"><Link className="primaryBtn" href="/student/plan">متابعة خطة اليوم</Link><span className="mutedText">متبقي تقريباً 30 دقيقة</span></div>
        </section>
        <section className="card sectionCard"><div className="sectionTitle"><h3>أنشطة اليوم</h3><Link href="/student/plan">عرض الخطة</Link></div><div className="activityList">{activities.map(({name,meta,icon:Icon,done})=><div className="activity" key={name}><span className="activityIcon"><Icon size={17}/></span><div><b>{name}</b><small>{meta}</small></div><span className={done?"statusDone":"statusNext"}>{done?"مكتمل":"التالي"}</span></div>)}</div></section>
      </div>
      <div className="stack">
        <section className="card statCard"><div className="statTop"><h3>الاستمرارية</h3><span>🔥</span></div><div className="streak">6</div><div className="streakLabel">أيام متتالية في التعلّم</div></section>
        <section className="card infoCard"><span className="eyebrow">UPCOMING QUIZ</span><h3>A2 — Week 1 Quiz</h3><p>20 سؤال · 25 دقيقة<br/>متاح بعد إكمال خطة الأسبوع.</p></section>
        <section className="card infoCard"><span className="eyebrow">HOMEWORK</span><h3>Daily Writing Practice</h3><p>اكتبي فقرة قصيرة باستخدام مفردات اليوم. موعد التسليم غداً.</p></section>
        <section className="card infoCard"><span className="eyebrow">ANNOUNCEMENT</span><h3>تم نشر خطة جديدة</h3><p>راجعي المواد المرفقة قبل بدء نشاط الاستماع.</p></section>
      </div>
    </div>
  </div></AppShell>
}