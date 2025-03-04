import { useState } from "react";
import SearchBox from "./searchBox";

const PostBar = () => {
    const topics = ['برنامه‌نویسی', 'تکنولوژی', 'هوش‌مصنوعی', 'داده‌ها', 'بازاریابی'];
    const [activeTopic, setActiveTopic] = useState(null); // ذخیره تاپیک انتخاب شده

    return (
        <div className="hidden sm:flex h-full  justify-cente">
            <div className="bg-slate-100 flex shadow-lg rounded-full py-3  justify-around items-center text-sm px-3">
                
                <div className="flex flex-wrap items-center">
                    <button 
                    className={`text-blue-600 font-semibold transition  px-3 py-2 ${
                        activeTopic === null ? "rounded-2xl bg-blue-600 !text-white" : ""
                    }`}
                    onClick={() => setActiveTopic(null)}
                >
                    <a href="#">همه پست‌ها</a>
                </button>

                {topics.map((topic, index) => (
                    <button
                        key={index}
                        className={`text-gray-700 hover:text-blue-600 transition px-3 py-2 ${
                            activeTopic === topic ? "rounded-2xl bg-blue-600 !text-white" : ""
                        }`}
                        onClick={() => setActiveTopic(topic)}
                    >
                        <a href={`#${topic}`}>{topic}</a>
                    </button>
                ))}
                
                </div>
                <p className="px-1">|</p>
                <SearchBox/>
            </div>
        </div>
    );
};

export default PostBar;
