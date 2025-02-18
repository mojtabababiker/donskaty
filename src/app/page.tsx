import { Metadata } from "next";
import { isFilled, asImageSrc, Content } from "@prismicio/client";
import { SliceComponentProps, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  const slices = bundleSlides(page.data.slices);

  return (
    <SliceZone
      slices={slices}
      components={{
        ...components,
        slides_bundle: ({ slice }: SliceComponentProps<SlidesBundle>) => (
          <div className="bundle relative">
            <SliceZone slices={slice.slices} components={components} />
          </div>
        ),
      }}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: isFilled.keyText(page.data.meta_title)
        ? page.data.meta_title
        : undefined,
      description: isFilled.keyText(page.data.meta_description)
        ? page.data.meta_description
        : undefined,
      images: isFilled.image(page.data.meta_image)
        ? [asImageSrc(page.data.meta_image)]
        : undefined,
    },
  };
}

type SlidesBundle = {
  id: string;
  slices: Content.SlidesSlice[];
  slice_type: "slides_bundle";
};

/**
 * extract slides from homepage slices into one bundle for styling
 * @param slices array of all the homepage slices
 * @returns array of slices with slides bundled together
 * @description loop through all the slices on the homepage slice and bundle all the slides together into one array
 */
function bundleSlides(slices: Content.HomepageDocumentDataSlicesSlice[]) {
  const result: (Content.HomepageDocumentDataSlicesSlice | SlidesBundle)[] = [];
  for (const slice of slices) {
    if (slice.slice_type !== "slides") {
      result.push(slice);
      continue;
    }

    const bundle = result.at(-1);
    if (bundle?.slice_type === "slides_bundle") {
      bundle.slices.push(slice);
    } else {
      result.push({
        id: `bundle-${slice.id}`,
        slice_type: "slides_bundle",
        slices: [slice],
      });
    }
  }
  return result;
}
