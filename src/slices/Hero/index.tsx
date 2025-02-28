import { FC } from "react";
import { asImageSrc, Content } from "@prismicio/client";
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
import { InteractiveSkateboard } from "@/components/Hero/InteractiveSkateboard";

const DEFAULT_DECK_TEXTURE = "/skateboard/Deck.webp";
const DEFAULT_WHEEL_TEXTURE = "/skateboard/Wheel.webp";
const DEFAULT_TRUCK_COLOR = "#333333";
const DEFAULT_BOLTS_COLOR = "#333333";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  const sliceData = slice.primary;
  // preparing the skateboard props
  const skateboardProps = {
    deckTextureUrl:
      asImageSrc(sliceData.skateboard_deck) || DEFAULT_DECK_TEXTURE,
    wheelsTextureUrl:
      asImageSrc(sliceData.skateboard_wheel_image) || DEFAULT_WHEEL_TEXTURE,
    truckColor: sliceData.truck_color || DEFAULT_TRUCK_COLOR,
    boltsColor: sliceData.bolts_color || DEFAULT_BOLTS_COLOR,
    deckTextureUrls: [""],
    wheelsTextureUrls: [""],
  };
  skateboardProps.deckTextureUrls = [skateboardProps.deckTextureUrl];
  skateboardProps.wheelsTextureUrls = [skateboardProps.wheelsTextureUrl];

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture "
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center h-dvh overflow-hidden">
        <ShortLogo
          className="flex-1 flex md:hidden items-center justify-center text-brand-purple opacity-25 mix-blend-multiply pt-20 "
          width={"100%"}
        />
        <LongLogo className="flex-1 hidden md:flex items-center justify-center text-brand-purple opacity-25 mix-blend-multiply pt-20" />
      </div>

      {/* skateboard */}
      <div className="absolute h-dvh w-full inset-0 z-20 flex items-center justify-center overflow-hidden">
        <InteractiveSkateboard {...skateboardProps} />
      </div>

      <div className="absolute z-30 inset-0 mt-24 mx-auto grid grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16 max-w-6xl gap-4">
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
