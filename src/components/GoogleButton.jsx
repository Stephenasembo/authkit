import { GoogleIcon } from "./svgs";

export default function GoogleButton({text}) {
  return(
    <button
    className="w-full border rounded-sm h-12 pr-3 flex cursor-pointer items-center font-roboto text-center bg-white
    text-[#1f1f1f] font-medium hover:bg-[#303030]/8 transition-all duration-218 border-[#747775]
    hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]
    dark:border-[#747775] dark:bg-[#131314] dark:text-[#e3e3e3] dark:hover:bg-[#2a2a2a]
    md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto
    "
    >
      <span
      className="pl-2.5 pr-3"
      >
        <GoogleIcon />
      </span>
      <span
      className="justify-self-start"
      >{text}</span>
    </button>
  )
}