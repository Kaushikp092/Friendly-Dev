import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "the Friendly Dev I welcome" },
		{ name: "description", content: "learning react router 7" },
	];
}

export default function Home() {
	return (
		<>
			<>Home Page</>
		</>
	);
}
