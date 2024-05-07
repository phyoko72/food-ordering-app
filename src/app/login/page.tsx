import Image from "next/image"
import Link from "next/link"
import login from "@/../public/loginBg.png"
import google from "@/../public/google.png"
import facebook from "@/../public/facebook.png"

export default function Login() {
    return (
        <div className=" min-h-[calc(100vh-6rem)] flex justify-center items-center max-sm:p-4">
            <div className=" sm:w-4/5 lg:w-3/5 h-full sm:h-[40vh] md:h-[50vh] flex flex-col sm:flex-row sm:shadow-lg md:shadow-xl lg:shadow-2xl ">
                <div className=" max-sm:h-[40vh] sm:flex-1 bg-slate-100 relative">
                    <Image
                        src={login}
                        alt="login"
                        fill
                        className=" object-cover"
                    />
                </div>
                <div className=" max-sm:h-1/2 sm:flex-1 flex flex-col gap-2 p-3 md:p-5 justify-around">
                    <h1 className=" font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl">
                        Welcome
                    </h1>
                    <p className=" text-sm md:text-base">
                        Log into your account or create a new one using social
                        buttons
                    </p>
                    <button className=" flex justify-start items-center gap-3 border p-2 rounded">
                        <Image
                            src={google}
                            alt="google"
                            width={20}
                            height={20}
                        />
                        <span className=" text-sm md:text-base">
                            Sign in with Google
                        </span>
                    </button>
                    <button className=" flex justify-start items-center gap-3 border p-2 rounded">
                        <Image
                            src={facebook}
                            alt="facebook"
                            width={20}
                            height={20}
                        />
                        <span className=" text-sm md:text-base">
                            Sign in with Facebook
                        </span>
                    </button>
                    <span className=" text-sm">
                        Have a problem?{" "}
                        <Link href={"/"} className=" underline">
                            Contact us
                        </Link>{" "}
                    </span>
                </div>
            </div>
        </div>
    )
}
