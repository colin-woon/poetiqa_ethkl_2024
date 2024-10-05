import React, { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function HeroSection() {
	const router =useRouter();
	const [userData, setUserData] = useState(null);

	// Fetch user data after the component mounts
	useEffect(() => {
	  const fetchUserData = async () => {
		try {
		  const response = await fetch("/api/auth/me");
		  if (response.ok) {
			const data = await response.json();
			setUserData(data); // Update the state with the fetched data
		  }
		} catch (error) {
		  console.error("Failed to fetch user data:", error);
		}
	  };

	  fetchUserData();
	}, []);

	const handleClick = () => {
		router.push("/profile")
	};
	return (
		<BackgroundBeamsWithCollision>
		  <div className="mt-0 flex flex-col justify-center gap-4">
			<h2 className="text-4xl relative w-[80%] mx-auto z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
			  Generate NFT art from poems using{" "}
			  <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
				<div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-0">
				  <span className="">Poetiqa</span>
				</div>
			  </div>
			</h2>
			<div className="flex flex-col sm:flex-row justify-center gap-4 w-[60%] mx-auto py-2">
			  {userData ? (
				<div className="flex flex-col items-center">
				  {/* Display the picture */}
				  <img
					src={userData.picture}
					alt="User Profile"
					className="rounded-full h-16 w-16"
				  />
				  {/* Display the sub */}
				  <p className="text-white mt-2">User ID: {userData.sub}</p>

				  <button
					className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
					onClick={handleClick}
				  >
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl">
					  Go to Profile
					</span>
				  </button>
				</div>
			  ) : (
				<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
				  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl">
					<a href="/api/auth/login">Login with World ID</a>
				  </span>
				</button>
			  )}
			</div>
		  </div>
		</BackgroundBeamsWithCollision>
	  );
	}
