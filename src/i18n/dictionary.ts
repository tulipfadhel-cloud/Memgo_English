export type Locale = "ar" | "en";
export const dictionary = {
  ar: {
    dashboard:"الرئيسية", today:"خطة اليوم", quizzes:"الاختبارات", homework:"الواجبات", resources:"المصادر", results:"النتائج", notifications:"الإشعارات", profile:"الملف الشخصي",
    welcome:"مرحباً بكِ", welcomeSub:"جاهزة لخطة اليوم؟", learningDashboard:"لوحة التعلّم", todayDuration:"خطة اليوم · 60 دقيقة",
    todayPlan:"خطة اليوم", planTitle:"Day 1 — A2 Study Plan", planDescription:"أكملي خطة اليوم خطوة بخطوة. كل نشاط مصمم حتى تتدربين على مهارة محددة بدون تشتيت.",
    completed:"2 من 4 مكتملة", dailyProgress:"التقدم اليومي", continuePlan:"متابعة خطة اليوم", remaining:"متبقي تقريباً 30 دقيقة", activities:"أنشطة اليوم", viewPlan:"عرض الخطة",
    done:"مكتمل", next:"التالي", streak:"الاستمرارية", streakLabel:"أيام متتالية في التعلّم", upcomingQuiz:"الاختبار القادم", homeworkLabel:"الواجب", announcement:"إعلان",
    login:"تسجيل الدخول", loginLead:"ادخلي إلى مساحتك التعليمية وتابعي خطة اليوم، الاختبارات والواجبات من مكان واحد.", email:"البريد الإلكتروني", password:"كلمة المرور", signingIn:"جاري تسجيل الدخول...",
    platformCopy:"منصة تعليمية منظمة لطلاب اللغة الإنجليزية الناطقين بالعربية. تعلّم يومي واضح، متابعة حقيقية، وتجربة بدون تشتيت."
  },
  en: {
    dashboard:"Dashboard", today:"Today's Plan", quizzes:"Quizzes", homework:"Homework", resources:"Resources", results:"Results", notifications:"Notifications", profile:"Profile",
    welcome:"Welcome back", welcomeSub:"Ready for today's plan?", learningDashboard:"Learning Dashboard", todayDuration:"Today's plan · 60 min",
    todayPlan:"TODAY'S PLAN", planTitle:"Day 1 — A2 Study Plan", planDescription:"Complete today's plan step by step. Each activity focuses on one skill so you can learn without distraction.",
    completed:"2 of 4 completed", dailyProgress:"Daily progress", continuePlan:"Continue today's plan", remaining:"About 30 minutes remaining", activities:"Today's activities", viewPlan:"View plan",
    done:"Completed", next:"Next", streak:"Learning streak", streakLabel:"consecutive learning days", upcomingQuiz:"UPCOMING QUIZ", homeworkLabel:"HOMEWORK", announcement:"ANNOUNCEMENT",
    login:"Sign in", loginLead:"Access your learning space and manage today's plan, quizzes, and homework in one place.", email:"Email address", password:"Password", signingIn:"Signing in...",
    platformCopy:"An organized English learning platform for Arabic-speaking students. Clear daily learning, real progress tracking, and a focused experience."
  }
} as const;
