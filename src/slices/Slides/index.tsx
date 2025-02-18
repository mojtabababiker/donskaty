import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import clsx from "clsx";
import ButtonLink from "@/components/ButtonLink";
import { PrismicNextImage } from "@prismicio/next";
import { Heading } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import SlideImage from "@/components/Slides/SlideImage";

/**
 * Props for `Slides`.
 */
export type SlidesProps = SliceComponentProps<Content.SlidesSlice>;

/**
 * Component for "Slides" Slices.
 */
const Slides: FC<SlidesProps> = ({ slice, index }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        `bg-texture sticky`,
        slice.primary.theme === "Blue" && "bg-brand-blue",
        slice.primary.theme === "Lime" && "bg-brand-lime",
        slice.primary.theme === "Navy" && "bg-brand-navy",
        slice.primary.theme === "Orange" && "bg-brand-orange"
      )}
      style={{ top: `${index * 2}rem` }}
    >
      <div className=" min-h-[75dvh] grid grid-cols-2 ~gap-6/9 justify-center place-content-center">
        {/* text */}
        <div
          className={clsx(
            "flex flex-col ~gap-4/8 col-span-2 md:col-span-1 items-center justify-center",
            slice.variation === "imageFirst" && "md:order-2"
          )}
        >
          {/* heading */}

          <Heading
            as="h2"
            className={clsx(
              "text-center sm:text-left w-full max-w-[640px]",
              slice.primary.theme !== "Lime" && "text-white"
            )}
          >
            <PrismicText field={slice.primary.heading} />
          </Heading>

          {/* body */}
          <Paragraph
            as="div"
            size="md"
            className={clsx(
              "text-center sm:text-left w-full max-w-[640px]",
              slice.primary.theme !== "Lime" && "text-white"
            )}
          >
            <PrismicRichText field={slice.primary.body} />
          </Paragraph>

          {/* button */}
          <div className="flex items-center justify-center sm:justify-start w-full">
            <ButtonLink
              field={slice.primary.button}
              size="md"
              color={slice.primary.theme === "Lime" ? "orange" : "lime"}
            >
              {slice.primary.button.text}
            </ButtonLink>
          </div>
        </div>

        {/* image */}
        <div className="w-full flex items-center justify-center col-span-2 sm:col-span-1 relative">
          <SlideImage
            fgImage={slice.primary.fg_image}
            bgImage={slice.primary.bg_image}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Slides;
