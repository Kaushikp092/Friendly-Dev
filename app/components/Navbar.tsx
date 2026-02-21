import { useState } from "react";
import { NavLink } from "react-router";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const base = "transition hover:text-blue-400";
	const active = "text-blue-400 font-semibold ";

	return (
		<nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
				<NavLink
					to="/"
					className="flex items-center gap-2 text-lg fontbold text-blue-300"
				>
					<FaLaptopCode className="text-blue-400 text-xl" />
					<span>The Friendly Developer</span>
				</NavLink>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center fap-6">
					<div className="space-x-4 text-sm text-gray-300">
						<NavLink
							className={({ isActive }) => (isActive ? active : base)}
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? active : base)}
							to="/projects"
						>
							Projects
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? active : base)}
							to="/blog"
						>
							Blog
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? active : base)}
							to="/about"
						>
							About
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? active : base)}
							to="/contact"
						>
							contact
						</NavLink>
					</div>
				</div>
				<div className="md:hidden flex items-center gap-4">
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="text-blue-400 text-xl cursor-pointer"
						title="Menu"
					>
						{menuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>
			{/* Mobile View */}
			{menuOpen && (
				<div className="lg:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
					{" "}
					<div className="space-x-4 text-sm text-gray-300">
						<NavLink
							onClick={() => setMenuOpen(false)}
							className={({ isActive }) => (isActive ? active : base)}
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							onClick={() => setMenuOpen(false)}
							className={({ isActive }) => (isActive ? active : base)}
							to="/projects"
						>
							Projects
						</NavLink>
						<NavLink
							onClick={() => setMenuOpen(false)}
							className={({ isActive }) => (isActive ? active : base)}
							to="/blog"
						>
							Blog
						</NavLink>
						<NavLink
							onClick={() => setMenuOpen(false)}
							className={({ isActive }) => (isActive ? active : base)}
							to="/about"
						>
							About
						</NavLink>
						<NavLink
							onClick={() => setMenuOpen(false)}
							className={({ isActive }) => (isActive ? active : base)}
							to="/contact"
						>
							contact
						</NavLink>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
