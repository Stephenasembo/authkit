import GoogleButton from "./GoogleButton";
import SignUpForm from "./SignupForm";

export default function AuthContainer() {
  return(
    <div
    className="border w-full max-w-xs mx-auto p-6 bg-white font-roboto rounded-xl shadow-md flex flex-col gap-5
    border-[#dadce0] dark:bg-[#1a1a1a] text-[#1f1f1f] dark:text-[#e3e3e3]
    "
    >
      <h1
      className="text-center text-2xl font-semibold"
      >Sign Up</h1>
      <GoogleButton />
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-[#dadce0] dark:bg-[#3c4043]" />
        <span className="text-sm text-[#5f6368] dark:text-[#9aa0a6]">or</span>
        <div className="h-px flex-1 bg-[#dadce0] dark:bg-[#3c4043]" />
      </div>
      <p
      className="text-sm text-[#5f6368] dark:text-[#9aa0a6]"
      >Fields marked with an asterisk(*) are mandatory.</p>
      <SignUpForm />
    </div>
  )
}