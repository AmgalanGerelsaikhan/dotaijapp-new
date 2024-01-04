export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl bg-[#e5e5e5]">
			{children}
		</div>
	);
}
