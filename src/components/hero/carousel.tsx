"use client";

import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import { Category, Project } from "@/types";
import { CarouselControls } from "./carousel-controls";

const heroProjects: Project[] = [
  {
    id: "apt-trw-01",
    title: "Residência Jardins",
    image: "/images/hero/apt-trw-01.jpg",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-trw-02",
    title: "Escritório Corporativo",
    image: "/images/hero/apt-trw-02.jpg",
    category: Category.RESIDENCIAL,
  },
  {
    id: "apt-trw-03",
    title: "Loja Conceito",
    image: "/images/hero/apt-trw-03.jpg",
    category: Category.RESIDENCIAL,
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      {/* Background Slider */}
      <div className="relative h-full w-full">
        {heroProjects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-stone-950/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
        <Image
          src="/logos/white.png"
          alt="Caroline Andrusko"
          width={320}
          height={320}
          priority
        />
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0">
        <CarouselControls
          total={heroProjects.length}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </section>
  );
}
