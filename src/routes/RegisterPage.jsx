import {  SignUp } from "@clerk/clerk-react"

const RegisterPage = () => {
    return(
        <div className="flex justify-center items-center mt-16 ">
            <SignUp signInUrl="/login"
            />
        </div>
    )
}

export default RegisterPage