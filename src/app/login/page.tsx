import {redirect} from "next/navigation";
import {currentUser} from "@/lib/auth";
import {LoginForm} from "./LoginForm";
export default async function Login(){
  const user=await currentUser();if(user)redirect(user.role==="ADMIN"?"/admin":"/student");
  return <main className="auth">
    <section className="authPanel"><div className="authBrand"><div className="logoMini">ميم<span>GO</span></div></div><div><span className="eyebrow">MEMGO ENGLISH</span><h1>تسجيل الدخول</h1><p className="authLead">ادخلي إلى مساحتك التعليمية وتابعي خطة اليوم، الاختبارات والواجبات من مكان واحد.</p><LoginForm/></div></section>
    <aside className="authAside"><div className="authVisual"><div className="bigWord">ميم<span>GO</span></div><p>منصة تعليمية منظمة لطلاب اللغة الإنجليزية الناطقين بالعربية. تعلّم يومي واضح، متابعة حقيقية، وتجربة بدون تشتيت.</p></div></aside>
  </main>
}