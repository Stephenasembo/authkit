import { useState } from "react"
import { useFormik } from "formik"
import { UserIcon, EmailIcon, EyeIcon } from "./svgs"
import * as Yup from "yup"

export default function SignUpForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .trim()
        .min(3, "Username must be at least 3 characters")
        .required("Username is required"),
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .trim()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    })
  })

  function viewPassword(e) {
    e.preventDefault()
    setPasswordVisible(!passwordVisible)
  }
  
  return (
    <form
    className="flex flex-col gap-4 mt-2"
    onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Username:*</label>
        <span
          className={`input-container ${formik.touched.username && formik.errors.username ? "error" : ""}`}
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
          onBlur={formik.handleBlur}
          />
        </span>
        {formik.touched.username && formik.errors.username ? (
          <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Email:*</label>
        <span
        className={`input-container ${formik.touched.email && formik.errors.email ? "error" : ""}`}
        >
          <EmailIcon />
          <input
          className={`input ${formik.touched.email && formik.errors.email ? "border-red-500" : ""}`}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="you@example.com"
          onBlur={formik.handleBlur}
          />
        </span>
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="password">Password:*</label>
        <span
        className={`input-container ${formik.touched.password && formik.errors.password ? "error" : ""}`}
        >
          <input
          className={`input ${formik.touched.password && formik.errors.password ? "border-red-500" : ""}`}
          id="password"
          name="password"
          type={passwordVisible? "text" : "password"}
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Enter your password"
          onBlur={formik.handleBlur}
          />
          <EyeIcon
          onClick={viewPassword}
          />
        </span>
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        ) : null}
      </div>

      <button
      className="w-full border rounded-xl h-12 flex cursor-pointer items-center justify-center
      font-roboto text-[#1f1f1f] bg-neutral-300 font-medium hover:bg-[#303030]/8
      transition-all duration-200 border-[#747775]
      hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]
      dark:border-[#747775] dark:bg-neutral-800 dark:text-[#e3e3e3] dark:hover:bg-[#2a2a2a]
      md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto"
      type="submit"
    >Submit</button>
    </form>
  )
}