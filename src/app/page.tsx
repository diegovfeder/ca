import { Hero, ProjectList } from "@/components";
import { getFeaturedProjects } from "@/utils";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="w-full">
      <Hero />
      <br className="py-4 w-full" />
      {/* TODO: Add more featured projects */}
      <ProjectList projects={featuredProjects} />
    </main>
  );
}
