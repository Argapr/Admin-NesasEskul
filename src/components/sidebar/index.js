import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useUser } from "@/components/context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "@/components/firebase/firebaseConfig";
import withAuth from "@/components/WithAuth/withAuth";

const Sidebar = () => {
  const router = useRouter();
  const { user } = useUser();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="w-64 bg-[#2F2D2D] m-5 rounded-3xl flex flex-col justify-between">
      <div className="h-[7rem] text-white flex items-center justify-center">
        <Image src="/IMG/logo.png" alt="" height={50} width={150} />
      </div>
      <ul className="py-5">
        <li className={`px-6 py-3 text-gray-300 cursor-pointer rounded-xl hover:bg-[#777575] hover:mx-5  ${router.pathname === "/" ? "bg-[#777575] mx-5 font-semibold" : ""}`}>
          <Link href="/" className="flex items-center">
            <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                  stroke="#e6dbdb"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                  stroke="#e6dbdb"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                  stroke="#e6dbdb"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                  stroke="#e6dbdb"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="text-[#e6dbdb] ms-2">Dashboard</p>
          </Link>
        </li>
        <li className={`px-6 py-3 text-gray-300 cursor-pointer rounded-xl hover:bg-[#777575] hover:mx-5 mt-2 ${router.pathname === "/galeri" ? "bg-[#777575] mx-5 font-semibold" : ""}`}>
          <Link href="/galeri" className="flex items-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z" fill="#e6dbdb"></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0309C22.75 13.9397 22.75 15.5023 22.6463 16.7745C22.5422 18.0531 22.3287 19.1214 21.8509 20.0087C21.6401 20.4001 21.3812 20.7506 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.14086 20.2726 1.7312 19.2852 1.51335 18.0604C1.29935 16.8573 1.2602 15.3603 1.25207 13.5015C1.25 13.0287 1.25 12.5286 1.25 12.001V11.9426C1.24999 9.63424 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63424 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 12.2905 2.75 12.5715 2.75034 12.8435L3.75148 11.9675C4.66275 11.1702 6.03617 11.2159 6.89238 12.0721L11.1821 16.3618C11.8693 17.0491 12.9511 17.1428 13.7463 16.5839L14.0445 16.3744C15.1887 15.5702 16.7368 15.6634 17.7764 16.599L20.6068 19.1463C20.8917 18.548 21.0609 17.7618 21.1513 16.6527C21.2494 15.4482 21.25 13.9459 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637Z"
                  fill="#e6dbdb"
                ></path>{" "}
              </g>
            </svg>
            <p className="text-[#e6dbdb] ms-2">Galeri</p>
          </Link>
        </li>
        <li className={`px-6 py-3 text-gray-300 cursor-pointer rounded-xl hover:bg-[#777575] hover:mx-5 mt-2 ${router.pathname === "/pengumuman" ? "bg-[#777575] mx-5 font-semibold" : ""}`}>
          <Link href="/pengumuman" className="flex items-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 13.9999L5.57465 20.2985C5.61893 20.4756 5.64107 20.5642 5.66727 20.6415C5.92317 21.397 6.60352 21.9282 7.39852 21.9933C7.4799 21.9999 7.5712 21.9999 7.75379 21.9999C7.98244 21.9999 8.09677 21.9999 8.19308 21.9906C9.145 21.8982 9.89834 21.1449 9.99066 20.193C10 20.0967 10 19.9823 10 19.7537V5.49991M18.5 13.4999C20.433 13.4999 22 11.9329 22 9.99991C22 8.06691 20.433 6.49991 18.5 6.49991M10.25 5.49991H6.5C4.01472 5.49991 2 7.51463 2 9.99991C2 12.4852 4.01472 14.4999 6.5 14.4999H10.25C12.0164 14.4999 14.1772 15.4468 15.8443 16.3556C16.8168 16.8857 17.3031 17.1508 17.6216 17.1118C17.9169 17.0756 18.1402 16.943 18.3133 16.701C18.5 16.4401 18.5 15.9179 18.5 14.8736V5.1262C18.5 4.08191 18.5 3.55976 18.3133 3.2988C18.1402 3.05681 17.9169 2.92421 17.6216 2.88804C17.3031 2.84903 16.8168 3.11411 15.8443 3.64427C14.1772 4.55302 12.0164 5.49991 10.25 5.49991Z"
                  stroke="#e6dbdb"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="text-[#e6dbdb] ms-2">Pengumuman</p>
          </Link>
        </li>
        <li className={`px-6 py-3 text-gray-300 cursor-pointer rounded-xl hover:bg-[#777575] hover:mx-5 mt-2 ${router.pathname === "/profil" ? "bg-[#777575] mx-5 font-semibold" : ""}`}>
          <Link href="/profil" className="flex items-center">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="w-5">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="#e6dbdb"
                  fill-rule="evenodd"
                  d="M8,16 C12.4183,16 16,12.4183 16,8 C16,3.58172 12.4183,0 8,0 C3.58172,0 0,3.58172 0,8 C0,12.4183 3.58172,16 8,16 Z M12.9533,11.387 C13.6137,10.4231 14,9.25665 14,8 C14,4.68629 11.3137,2 8,2 C4.68629,2 2,4.68629 2,8 C2,9.25665 2.38632,10.4231 3.04668,11.387 C3.25368,10.0411 4.13147,8.91649 5.32791,8.36519 C5.11827,7.95568 5,7.49165 5,7 C5,5.34315 6.34315,4 8,4 C9.65685,4 11,5.34315 11,7 C11,7.49165 10.8817,7.95568 10.6721,8.36519 C11.8685,8.91649 12.7463,10.0411 12.9533,11.387 Z M11,13.1973 L11,12 C11,10.8954 10.1046,10 9,10 L7,10 C5.89543,10 5,10.8954 5,12 L5,13.1973 C5.88252,13.7078 6.90714,14 8,14 C9.09286,14 10.1175,13.7078 11,13.1973 Z M8,8 C8.55228,8 9,7.55228 9,7 C9,6.44772 8.55228,6 8,6 C7.44772,6 7,6.44772 7,7 C7,7.55228 7.44772,8 8,8 Z"
                ></path>{" "}
              </g>
            </svg>
            <p className="text-[#e6dbdb] ms-2">Profil</p>
          </Link>
        </li>
        <li className={`px-6 py-3 text-gray-300 cursor-pointer rounded-xl hover:bg-[#777575] hover:mx-5 mt-2 ${router.pathname === "/jadwal" ? "bg-[#777575] mx-5 font-semibold" : ""}`}>
          <Link href="/jadwal" className="flex items-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                  stroke="#e6dbdb"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="text-[#e6dbdb] ms-2">Jadwal</p>
          </Link>
        </li>
      </ul>
      
      <div className="text-white bg-[#777575] m-3 rounded-xl text-center py-3 mt-auto flex justify-between items-center px-4">
        {user ? (
          <>
            <p className="font-semibold">{user.displayName}</p>
            <button onClick={handleLogout}>
              <Image src="/IMG/logout.png" alt="logout-icon" height={"20"} width={30}/>
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default withAuth(Sidebar);
