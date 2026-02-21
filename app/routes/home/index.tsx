import type { Route } from "./+types/index";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "the Friendly Dev I welcome" },
		{ name: "description", content: "learning react router 7" },
	];
}

export default function Home() {
  // const now = new Date().toDateString();
  // if(typeof window === 'undefined'){
  //   console.log('Server render at:', now);
  // }else{
  //   console.log('Client hydration at:', now);
  // }
	

  useEffect(() => {console.log(window.scrollX);}, []);
  
	return (
		<>
			<section>My App</section>
		</>
	);
}
