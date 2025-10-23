import { useState } from "react";
import GoogleButton from "./GoogleButton";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm"

export default function AuthContainer() {
  const [isLogin, setIsLogin] = useState(false);

  return(
    <div
    className="border w-full max-w-xs mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col gap-5
    border-[#dadce0] dark:bg-[#1a1a1a] text-[#1f1f1f] dark:text-[#e3e3e3]
    md:max-w-lg lg:max-w-xl md:p-10 transition-all duration-218
    "
    >
      <h1
      className="text-center text-2xl font-semibold"
      >App name</h1>
      <GoogleButton
      text={isLogin? "Sign in with Google" : "Sign up with Google"}
      />
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-[#dadce0] dark:bg-[#3c4043]" />
        <span className="text-sm text-[#5f6368] dark:text-[#9aa0a6]">or</span>
        <div className="h-px flex-1 bg-[#dadce0] dark:bg-[#3c4043]" />
      </div>
      <p
      className="text-sm text-[#5f6368] dark:text-[#9aa0a6]"
      >Fields marked with an asterisk(*) are mandatory.</p>
      {isLogin ?
      <div>
        <LoginForm />
        <p
        className="mt-2"
        >
          <span>
            Don't have an account?
          </span> {" "}
          <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer
          hover:text-blue-800 dark:hover:text-blue-600">
            Sign up
          </button>
        </p>

      </div> :
      <div>
        <SignUpForm />
        <p
        className="mt-2"
        >
          <span>
            Already have an account?
          </span> {" "}
          <button
          type="button"
          onClick={() => setIsLogin(true)}
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer
          hover:text-blue-800 dark:hover:text-blue-600">
            Login
          </button>
        </p>
      </div>
      }
    </div>
  )
}