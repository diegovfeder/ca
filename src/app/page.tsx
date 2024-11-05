import { Hero, HomeProjectGrid } from "@/components";
import { getFeaturedProjects } from "@/utils";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="w-full">
      <Hero />
      <HomeProjectGrid projects={featuredProjects} />
    </main>
  );
}
