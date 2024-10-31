"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-1">
      {images.map((image, index) => (
        <Dialog.Root
          key={index}
          open={openIndex === index}
          onOpenChange={(open) => setOpenIndex(open ? index : null)}
        >
          <Dialog.Trigger asChild>
            <div className="relative aspect-[16/9] cursor-pointer">
              <Image
                src={image}
                alt={`${projectTitle} - Imagem ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
            </div>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Title>{projectTitle}</Dialog.Title>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            {/* FIXME: The size of the dialog should be dynamic */}
            {/* FIXME: The size of the image should be dynamic */}
            <Dialog.Content className="fixed top-[calc(50%+2rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[calc(90vh-4rem)] max-w-6xl">
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`${projectTitle} - Imagem ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>

              {/* Navigation buttons */}
              {index > 0 && (
                <button
                  onClick={() => setOpenIndex(index - 1)}
                  className="absolute left-16 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white"
                >
                  ←
                </button>
              )}
              {index < images.length - 1 && (
                <button
                  onClick={() => setOpenIndex(index + 1)}
                  className="absolute right-16 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white"
                >
                  →
                </button>
              )}

              <Dialog.Close className="absolute top-4 right-16 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white">
                ✕
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  );
}
