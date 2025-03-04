import FeaturedPosts from "../components/featuredPosts";
import LinksMap from "../components/links";
import PostBar from "../components/postsBar";
import { Link } from "react-router-dom";
import RecentPosts from "../components/recentPosts";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-4 md:px-8 lg:px-15 xl:px-40 2xl:px-64">
      <LinksMap />
      <div className="w-full my-6 mx-3 flex justify-center">
        <div className=" gap-x-6 flex justify-center ">
          <div className="w-full  md:w-2/3 flex flex-col">
            <h1 className=" text-3xl my-3 text-wrap font-bold">
              چای داغ، هوای بارانی و یک کتاب خوب. گاهی متن‌ها برای پر کردن فضا
              نیستند، بلکه حس می‌سازند!
            </h1>
            <p className=" text-gray-800 text-xl text-wrap">
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر
            </p>
          </div>
          <div className="hidden md:block md:w-1/3  text-xl text-wrap">
            <Link to="write" className="relative flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                width="200"
                height="200"
                className="text-lg tracking-widest animate-spin animeButton"
              >
                <path
                  id="circlePath"
                  fill="none"
                  d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
                />
                <text>
                  <textPath href="#circlePath" startOffset="95%">
                    دانسته‌هاتو بنویس.
                  </textPath>
                  <textPath href="#circlePath" startOffset="50%">
                    {" "}
                    ایده تو به اشتراک بزار.
                  </textPath>
                </text>
              </svg>
              <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <PostBar />
      <FeaturedPosts/>
      <RecentPosts/>
    </div>
  );
};

export default Home;
