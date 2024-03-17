import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Import auth functions for email/password authentication and Google authentication
import { auth } from "@/components/firebase/firebaseConfig"; // Import auth object from firebaseConfig
import { useRouter } from "next/router"; // Import useRouter

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize the router

  // Submit the form data to firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      router.push("/forum"); // Redirect to the forum page after successful login
    } catch (error) {
      console.error("Error logging in: ", error);
      alert("Failed to login. Please check your email and password.");
    }
  };

  // Handle login with Google
  const handleLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("Login with Google successful!");
      router.push("/"); // Redirect to the forum page after successful login
    } catch (error) {
      console.error("Error logging in with Google: ", error);
      alert("Failed to login with Google.");
    }
  };

  return (
    <div className="relative h-screen w-full flex justify-center items-center flex-col overflow-hidden">
      <form onSubmit={handleSubmit} className="h-[30rem] w-[25rem] bg-[#fff] shadow-xl rounded-lg flex justify-center items-center flex-col">
        <p className="text-[#9A9A9A] font-semibold text-2xl text-center mt-5">Welcome Admin</p>
        <div className="mx-10 mt-11">
          <label htmlFor="email" className="text-[#9A9A9A] font-semibold">
            Email
          </label>
          <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="h-[3rem] w-[20rem] border border-[#9A9A9A] rounded-lg focus:outline-none px-4 py-4" />
          <label htmlFor="password" className="text-[#9A9A9A] font-medium">
            Password
          </label>
          <input id="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} className="h-[3rem] w-[20rem] border border-[#9A9A9A] rounded-lg focus:outline-none px-4 py-4" />
          <button type="submit" className="h-[4rem] w-[20rem] bg-[#9A9A9A] text-[#fff] text-2xl rounded-xl mt-[4rem]">
            Login
          </button>
          <div className="h-[2px] w-full bg-[#9A9A9A] rounded-lg mt-4"></div>
          <p className="text-[#9A9A9A] md:text-[1rem] text-sm text-center mt-2">Login menggunakan Google</p>
          <div className="flex justify-center items-center flex-col mt-3">
            <div className="google" onClick={handleLoginWithGoogle}>
              <Image src="/IMG/google.png" alt="" height={50} width={20} className="text-center" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
