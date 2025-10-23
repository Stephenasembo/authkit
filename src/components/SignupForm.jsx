import { useFormik } from "formik"
import { UserIcon } from "./svgs"
import { EmailIcon } from "./svgs"
import { EyeIcon } from "./svgs"

export default function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values))
    }
  })

  return (
    <form
    className="flex flex-col gap-4 mt-2"
    onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Username:*</label>
        <span
        className="input-container"
        >
          <UserIcon />
          <input
          className="input"
          id="username"
          name="username"
          type="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Enter your username"
          />
        </span>
      </div>

      <div>
        <label htmlFor="email">Email:*</label>
        <span
        className="input-container"
        >
          <EmailIcon />
          <input
          className="input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="you@example.com"
          />
        </span>
      </div>

      <div>
        <label htmlFor="password">Password:*</label>
        <span
        className="input-container"
        >
          <input
          className="input"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Enter your password"
          />
          <EyeIcon />
        </span>
      </div>

      <button
      className="w-full border rounded-xl h-12 flex cursor-pointer items-center justify-center
      font-roboto text-[#1f1f1f] bg-neutral-300 font-medium hover:bg-[#303030]/8
      transition-all duration-200 border-[#747775]
      hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]
      dark:border-[#747775] dark:bg-neutral-800 dark:text-[#e3e3e3] dark:hover:bg-[#2a2a2a]"
      type="submit"
    >Submit</button>
    </form>
  )
}