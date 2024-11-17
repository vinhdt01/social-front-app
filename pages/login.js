"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth, provider, signInWithPopup } from "../firebaseConfig";
import Image from "next/image";
const Login = () => {
  const router = useRouter();

  useEffect(() => {
    // This code will only run on the client side
    const handleGoogleSignIn = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const idToken = await result.user.getIdToken();

        const response = await fetch("http://localhost:3000/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idToken }),
        });

        const data = await response.json();
        console.log(data);

        // Redirect or handle login success
        router.push("/");
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    };

    // Attach the sign-in handler to the button click event
    const signInButton = document.getElementById("google-sign-in");
    if (signInButton) {
      signInButton.addEventListener("click", handleGoogleSignIn);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (signInButton) {
        signInButton.removeEventListener("click", handleGoogleSignIn);
      }
    };
  }, [router]);

  return (
    <div className="w-[600px] sm:px-[20px] px-[10px] mx-auto flex flex-col items-center justify-between h-screen py-[20px]">
      <Image
        src="https://i.pinimg.com/1200x/4a/06/7c/4a067c8bfca548884382a7a30cbdf6aa.jpg"
        width="467"
        height="467"
        alt="logo"
      />

      <button
        className=" bg-[#000000] text-center rounded-lg py-[10px] w-full text-white cursor-pointer"
        id="google-sign-in"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
