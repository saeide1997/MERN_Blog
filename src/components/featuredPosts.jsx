const FeaturedPosts = () => {
  const items = [

    {
      id: 2,
      title: "چگونه یک برنامه‌نویس فول‌استک شویم؟",
      image:
        "https://thefusioneer.com/wp-content/uploads/2023/11/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg",
      summary:
        "برای تبدیل شدن به یک فول‌استک، باید هم در فرانت‌اند و هم در بک‌اند مهارت کافی داشته باشید.",
    },
    {
      id: 3,
      title: "تأثیر UX بر موفقیت وبسایت",
      image:
        "https://www.timescale.com/_next/image?url=https%3A%2F%2Ftimescale.ghost.io%2Fblog%2Fcontent%2Fimages%2F2024%2F07%2FA-Brief-History-of-AI_cover.jpg&w=1920&q=75",
      summary:
        "یک تجربه کاربری خوب می‌تواند نرخ تبدیل کاربران را به میزان قابل توجهی افزایش دهد.",
    },
    {
      id: 4,
      title: "چرا Next.js برای سئو عالی است؟",
      image:
        "https://s7d1.scene7.com/is/image/dmqualcommprod/getting-personal-with-on-device-ai",
      summary:
        "Next.js با رندر سمت سرور و بهینه‌سازی تصاویر، به بهبود رتبه سئوی سایت کمک می‌کند.",
    },
  ];
  return (
    <div className=" flex md:flex-row flex-col gap-4 my-4 ">
      <div className="w-full md:w-2/5">
        <div>
          <img className="rounded-xl w-full h-64" src="https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg" alt="" />
        </div>
        <div>
          <p className="my-2">
            1. هوش مصنوعی در طراحی وب
          </p>
          <h1 className="font-bold">هوش مصنوعی در طراحی وب باعث بهینه‌سازی تجربه کاربری و افزایش سرعت توسعه شده است.</h1>
        </div>
      </div>
      <div className="w-full md:w-3/5 flex flex-col">
      {items.map((item, index) => (
        <div key={index} className="flex" onClick={() => ""}>
          <div className="mx-2 md:mx-6 ">
            <img className="w-40 h-24 rounded-xl mb-3" src={item.image} alt="" />
          </div>
          <div>
            <p className="my-2">
              {item.id}. {item.title}
            </p>
            <h1 className="font-bold">{item.summary}</h1>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
