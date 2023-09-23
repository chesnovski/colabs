import { FC } from 'react'

import { EyeOutlineIcon, GihubIcon, GoogleIcon } from '@/shared/assets'

export const SignUpWidget: FC = () => {
  return (
    <div className=" border border-dark-100 rounded-sm px-8 py-8 max-md:w-full lg:w-1/4 bg-dark-500">
      <h3 className=" text-light-100 font-bold text-xl text-center ">Sign Up</h3>
      <div className="flex justify-center items-center my-4">
        <a href="" className="mx-8">
          <GoogleIcon />
        </a>
        <a href="" className="mx-8">
          <GihubIcon className="fill-light-100" />
        </a>
      </div>
      <form>
        <div className="mb-4">
          <label className="block mb-1 text-light-900 ">Username</label>
          <input
            type="text"
            className="w-full bg-dark-500 border-2 border-dark-100 p-2 rounded text-dark-100"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1  text-light-900 ">Email</label>
          <input
            type="text"
            className="w-full bg-dark-500 border-2 border-dark-100 p-2 rounded text-dark-100"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1  text-light-900 ">Password</label>
          <div className="relative">
            <input
              type="password"
              className="w-full bg-dark-500 border-2 border-dark-100 p-2 rounded text-dark-100"
              placeholder="Password"
            />
            <EyeOutlineIcon className="absolute top-1/2 right-3 -translate-y-1/2 fill-light-100" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1  text-light-900 ">Password confirmation</label>
          <div className="relative">
            <input
              type="password"
              className="w-full bg-dark-500 border-2 border-dark-100 p-2 text-dark-100 rounded"
              placeholder="Password confirmation"
            />
            <EyeOutlineIcon className="absolute top-1/2 right-3 -translate-y-1/2 fill-light-100" />
          </div>
        </div>
        <div className="mb-4">
          <input type="checkbox" id="agree" className=" border-gray-400 rounded" />
          <label htmlFor="agree" className="ml-2 text-sm text-light-100">
            I agree to the{' '}
            <a className="underline decoration-primary-300 text-primary-300" href="">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="underline decoration-primary-300 text-primary-300" href="">
              Privacy Policy
            </a>
          </label>
        </div>

        <button className="block w-full bg-primary-500   font-semibold text-light-100 p-2 rounded  my-2 ">
          Sign Up
        </button>
        <div className="font-bold text-light-100 text-center">Do you have an account?</div>
        <button className="font-semibold text-primary-500 p-2 bg-transparent w-full">
          Sign In
        </button>
      </form>
    </div>
  )
}
