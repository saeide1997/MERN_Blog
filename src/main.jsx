import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import AboutePage from "./routes/AboutePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./routes/Home";
import { ClerkProvider } from "@clerk/clerk-react";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboute", element: <AboutePage /> },
      { path: "/posts", element: <AboutePage /> },
      { path: "/:slug", element: <AboutePage /> },
      { path: "/write", element: <AboutePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

const customLocalization = {
  signIn: {
    start: {
      title: "ورود به حساب کاربری",
      subtitle: "لطفاً اطلاعات خود را وارد کنید",
    },
    alternativeMethods: {
      actionText: "یا از روش‌های دیگر استفاده کنید",
    },
    formFieldLabel: "ایمیل خود را وارد کنید",
    formFieldLabel__password: "رمز عبور",
    formButton: "ورود به حساب",
    forgotPassword: "فراموشی رمز عبور؟",
  },
  signUp: {
    start: {
      title: 'ایجاد حساب کاربری',
      subtitle: 'برای ادامه به {{applicationName}}',
      actionText: 'حساب کاربری دارید؟',
      actionLink: 'ورود به حساب',
    },
    emailLink: {
      title: 'تأیید ایمیل',
      subtitle: 'برای ادامه به {{applicationName}}',
      formTitle: 'لینک تأیید',
      formSubtitle: 'لینک تأیید ارسال‌شده به ایمیل خود را استفاده کنید',
      resendButton: 'لینک را دریافت نکردید؟ ارسال مجدد',
      verified: {
        title: 'ثبت‌نام با موفقیت انجام شد',
      },
      loading: {
        title: 'در حال ثبت‌نام...',
      },
      verifiedSwitchTab: {
        title: 'ایمیل با موفقیت تأیید شد',
        subtitle: 'به تب جدید بازگشته و ادامه دهید',
        subtitleNewTab: 'به تب قبلی بازگردید و ادامه دهید',
      },
    },
    emailCode: {
      title: 'تأیید ایمیل',
      subtitle: 'برای ادامه به {{applicationName}}',
      formTitle: 'کد تأیید',
      formSubtitle: 'کد تأیید ارسال‌شده به ایمیل خود را وارد کنید',
      resendButton: 'کد را دریافت نکردید؟ ارسال مجدد',
    },
    phoneCode: {
      title: 'تأیید شماره تلفن',
      subtitle: 'برای ادامه به {{applicationName}}',
      formTitle: 'کد تأیید',
      formSubtitle: 'کد تأیید ارسال‌شده به شماره تلفن خود را وارد کنید',
      resendButton: 'کد را دریافت نکردید؟ ارسال مجدد',
    },
    continue: {
      title: 'پر کردن فیلدهای باقی‌مانده',
      subtitle: 'برای ادامه به {{applicationName}}',
      actionText: 'حساب کاربری دارید؟',
      actionLink: 'ورود به حساب',
    },
  }
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/ "
      localization={customLocalization}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
