import { Link } from 'react-router-dom';
const RecentPosts = () => {
  const items = [
    {
      id: 1,
      author: "سعید رضایی",
      date: "۱۴۰۲/۱۲/۱۰",
      title: "نقش هوش مصنوعی در آینده برنامه‌نویسی",
      category: "هوش مصنوعی",
      image:
        "https://www.chieflearningofficer.com/wp-content/uploads/2023/05/AdobeStock_577015054.jpeg",
      excerpt:
        "هوش مصنوعی در حال تغییر دنیای برنامه‌نویسی است و توسعه‌دهندگان باید خود را با این تغییرات وفق دهند...",
    },
    {
      id: 2,
      author: "مریم احمدی",
      date: "۱۴۰۲/۱۱/۲۵",
      title: "بهترین روش‌های یادگیری جاوااسکریپت",
      category: "برنامه‌نویسی",
      image:
        "https://www.chieflearningofficer.com/wp-content/uploads/2023/05/AdobeStock_577015054.jpeg",
      excerpt:
        "یادگیری جاوااسکریپت نیاز به برنامه‌ریزی درست و منابع مناسب دارد. در این مقاله، بهترین روش‌های یادگیری این زبان محبوب را بررسی می‌کنیم...",
    },
    {
      id: 3,
      author: "علی کریمی",
      date: "۱۴۰۲/۱۰/۱۵",
      title: "چرا Next.js برای توسعه وب مناسب است؟",
      category: "فریمورک‌ها",
      image:
        "https://www.chieflearningofficer.com/wp-content/uploads/2023/05/AdobeStock_577015054.jpeg",
      excerpt:
        "Next.js یکی از محبوب‌ترین فریمورک‌های React است که امکانات فوق‌العاده‌ای برای بهینه‌سازی سئو و افزایش سرعت دارد...",
    },
    {
      id: 4,
      author: "نرگس موسوی",
      date: "۱۴۰۲/۰۹/۲۰",
      title: "۱۰ اشتباه رایج در طراحی وبسایت",
      category: "طراحی وب",
      image:
        "https://www.chieflearningofficer.com/wp-content/uploads/2023/05/AdobeStock_577015054.jpeg",
      excerpt:
        "طراحی وبسایت نیاز به رعایت اصولی دارد که عدم توجه به آن‌ها می‌تواند باعث کاهش کاربران و افزایش نرخ پرش شود...",
    },
    {
      id: 5,
      author: "محمد حسینی",
      date: "۱۴۰۲/۰۸/۳۰",
      title: "آموزش بهینه‌سازی عملکرد React",
      category: "فریمورک‌ها",
      image:
        "https://www.chieflearningofficer.com/wp-content/uploads/2023/05/AdobeStock_577015054.jpeg",
      excerpt:
        "اگر پروژه React شما کند اجرا می‌شود، در این مقاله تکنیک‌هایی برای بهبود عملکرد آن بررسی می‌کنیم...",
    },
    {
      id: 6,
      author: "زهرا عباسی",
      date: "۱۴۰۲/۰۷/۱۲",
      title: "راهنمای جامع برای شروع یادگیری ماشین",
      category: "یادگیری ماشین",
      image:
        "https://www.chieflearningofficer.com/wp-content/uploads/2023/05/AdobeStock_577015054.jpeg",
      excerpt:
        "یادگیری ماشین یکی از مهم‌ترین حوزه‌های فناوری امروز است و در این مقاله، مسیر یادگیری آن را بررسی خواهیم کرد...",
    },
    {
      id: 7,
      author: "سینا مرادی",
      date: "۱۴۰۲/۰۶/۲۸",
      title: "تفاوت‌های SSR و CSR در توسعه وب",
      category: "برنامه‌نویسی",
      image:
        "https://www.chieflearningofficer.com/wp-content/uploads/2023/05/AdobeStock_577015054.jpeg",
      excerpt:
        "درک تفاوت‌های SSR (رندر سمت سرور) و CSR (رندر سمت کلاینت) برای انتخاب بهترین روش توسعه وب بسیار مهم است...",
    },
    {
      id: 8,
      author: "ریحانه قاسمی",
      date: "۱۴۰۲/۰۵/۱۷",
      title: "۵ تکنیک افزایش امنیت وبسایت",
      category: "امنیت سایبری",
      image:
        "https://www.chieflearningofficer.com/wp-content/uploads/2023/05/AdobeStock_577015054.jpeg",
      excerpt:
        "امنیت وبسایت یکی از مهم‌ترین دغدغه‌های توسعه‌دهندگان است و در این مقاله به بررسی ۵ تکنیک کاربردی برای افزایش امنیت می‌پردازیم...",
    },
  ];
  return (
    <div className="mt-10 w-full flex flex-col !justify-start !items-start ">
      <h1 className="text-3xl font-bold">پست‌های اخیر‌</h1>
      <div className='grid grid-cols-1 my-6 gap-4 sm:grid-cols-2 w-full'>
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 flex-col lg:flex-row">
          <div className='w-full lg:w-1/4'>
            <img className='rounded-2xl ' src={item.image} alt="" />
          </div>
          <div className='w-full lg:w-2/3 mr-3'>
            <h1 className='font-bold  text-lg'>{item.title}</h1>
            <div className='flex'>
              <p className="text-xs p-1 text-gray-700"> نوشته شده</p>
              <p className="text-xs p-1 text-blue-900"> {item.author}</p>
              <p className="text-xs p-1 text-gray-700"> در تاریخ</p>
              <p className="text-xs p-1 text-blue-900"> {item.date}</p>
              <p className="text-xs p-1 text-blue-900"> {item.category}</p>
            </div>
            <p></p>
            <button className="text-blue-800"><Link to=''>بیشتر بخوانید...</Link></button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RecentPosts;
