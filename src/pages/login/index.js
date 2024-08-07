import Image from "next/image";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/components/firebase/firebaseConfig";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      router.push("/");
    } catch (error) {
      console.error("Error logging in: ", error);
      alert("Failed to login. Please check your email and password.");
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Login with Google successful!", result);
      router.push("/");
    } catch (error) {
      console.error("Error logging in with Google: ", error);
      alert("Failed to login with Google.");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-5 p-5 h-screen" style={{ backgroundImage: "url('/IMG/bg-login.jpeg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="flex flex-col justify-between p-5">
        <img src="/IMG/logo.png" alt="" height={50} width={180} />
        <p className="text-white drop">
          Tumbuhkan Bakatmu, Temukan Passionmu: <br /> Bersama Eskul, Menyatu dalam Ekstrakurikuler!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl drop-shadow-xl flex justify-around items-center flex-col opacity-95">
        <img src="/IMG/welcome-black.png" alt="logo welcome" height={200} width={200} />
        <div className="mx-[13rem] mt-[-20rem]">
          <p className="text-center text-[#555353]">Silakan login untuk memulai berdiskusi dan berinteraksi dengan komunitas di forum kami.</p>
          <input 
            placeholder="Enter your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            className="h-[2.5rem] w-full border border-[#9A9A9A] rounded-full focus:outline-none px-4 py-4 mt-10" 
          />
          <input 
            placeholder="Enter your Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            className="h-[2.5rem] w-full border border-[#9A9A9A] rounded-full focus:outline-none px-4 py-4 mt-3" 
          />
          <button type="submit" className="h-[3.5rem] w-full bg-[#9A9A9A] text-[#fff] text-2xl rounded-full mt-[2.5rem]">
            Login
          </button>
          <div className="flex items-center py-3">
            <div className="mx-4 h-[1.3px] w-full rounded-full bg-[#a0a0a0]"></div>
            <p className="">or</p>
            <div className="mx-4 h-[1.3px] w-full rounded-full bg-[#a0a0a0]"></div>
          </div>
          <button 
            type="button"
            className="h-[2.5rem] w-full border border-[#9A9A9A] rounded-full flex justify-center items-center"
            onClick={handleLoginWithGoogle}
          >
            <Image src="/IMG/google.png" alt="" height={50} width={18} />
            <p className="px-2 text-[#c4b8b8] text-sm">Log in with Google</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
