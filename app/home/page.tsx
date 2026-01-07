import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";

import { Switch } from "@/components/ui/switch";
import ThemedImage from "@/components/bg-image";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home").catch(() => notFound());

  return (
    <main className="relative w-dvw h-dvh flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 p-6 max-w-147 w-full">
        <div className="flex flex-col items-center gap-2">
          <PrismicNextImage
            field={page.data.avatar}
            className="size-28 rounded-full border border-stroke"
          />
          <h1>{page.data.username}</h1>
        </div>

        <Switch />

        <SliceZone slices={page.data.slices} components={components} />

        <div className="text-sm">
          Feito com ♥ por <span className="underline">Rocketseat</span>
        </div>
      </div>

      <ThemedImage className="inset-0 absolute -z-10 object-fill w-full h-full" />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
