import { useState } from "react";
import Image from "./image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center my-3 px-4 sm:px-4 md:px-8 lg:px-15 xl:px-40 2xl:px-64">
      {/* لوگو */}
      <Link to="/" className="flex justify-center items-center">
        <Image src="logo.png" alt="log" w={32} h={32} />
        <span className="mx-3 font-bold text-2xl">SoHoLoG.</span>
      </Link>

      {/* دکمه منو در موبایل */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl sticky z-10"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* آیتم‌های منو */}
      <div
        className={`sm:flex gap-x-10 ${
          isOpen
            ? "flex flex-col gap-8 absolute top-0 left-0 h-screen w-full bg-[#c9c2e7] shadow-lg justify-center items-center"
            : "hidden md:flex"
        }`}
      >
        <button>
          <Link to="/">خانه</Link>
        </button>
        <button>
          <Link to="/trend">روبورسیها</Link>
        </button>
        <button>
          <Link to="/popular">پربازدید</Link>
        </button>
        <button>
          <Link to="/about">درباره</Link>
        </button>
        <SignedOut>
          <Link to="/login">
            <button className="bg-blue-800 text-white rounded-lg w-24 py-1">
              ورود 👋🏻
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default NavBar;
