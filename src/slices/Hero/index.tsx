import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ButtonLink from "@/components/ButtonLink";
import ShortLogo from "@/components/Hero/ShortLogo";
import LongLogo from "@/components/Hero/LongLogo";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center h-dvh ">
        <ShortLogo
          className="flex-1 flex md:hidden items-center justify-center text-brand-purple opacity-25 mix-blend-multiply pt-20 "
          width={"100%"}
        />
        <LongLogo className="flex-1 hidden md:flex items-center justify-center text-brand-purple opacity-25 mix-blend-multiply pt-20" />
      </div>
      <div className="absolute z-20 inset-0 mt-24 mx-auto grid grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16 max-w-6xl gap-4">
        <Heading className="relative max-w-2xl place-self-start">
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="w-full flex flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <Paragraph
            as="div"
            size="md"
            className="text-center lg:text-left font-600 max-w-[50ch]"
          >
            <PrismicRichText field={slice.primary.body} />
          </Paragraph>
          <ButtonLink
            icon="skateboard"
            size="lg"
            field={slice.primary.button}
            className="z-20 block mt-4 lg:mt-0"
          >
            {slice.primary.button.text}
          </ButtonLink>
          {/* <PrismicNextLink field={slice.primary.button} /> */}
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
