import { Content } from "@prismicio/client";
import React from "react";
import ButtonLink from "../ButtonLink";
import { PrismicNextImage } from "@prismicio/next";
import { Heading } from "../Heading";
import { createClient } from "@/prismicio";
import {
  LineShape,
  MonsterShape,
  ShaggyShape,
  TieShape,
} from "@/components/Scruples";

type Props = {
  id: string;
};

async function Skater({ id }: Props) {
  const client = createClient();

  const skater = (await client.getByID<Content.SkaterCardDocument>(id)).data;
  return (
    <div className="overflow-hidden group grid grid-cols-1 gap-5 ~py-3/5">
      {/* image card */}
      <div className="relative overflow-hidden h-[360px]">
        {/* foreground image */}
        <PrismicNextImage
          alt=""
          field={skater.fg_image}
          className="absolute origin-top bottom-0 w-full z-30 object-cover transition-transform duration-300 group-hover:scale-110 ease-in-out"
        />
        {/* scruples */}
        {skater.team === "moody" && (
          <LineShape
            className="absolute z-20 h-full w-full inset-0  text-brand-lime"
            color="#d9f154"
          />
        )}
        {skater.team === "miss-board" && (
          <TieShape
            className="absolute z-20 h-full w-full inset-0 text-brand-purple"
            color="#692e54"
          />
        )}
        {skater.team === "bb4l" && (
          <MonsterShape
            className="absolute z-20 h-full w-full inset-0"
            color="#000"
          />
        )}
        {skater.team === "alpha" && (
          <ShaggyShape
            className="absolute z-20 h-full w-full text-brand-orange inset-0"
            color="#ff7347"
          />
        )}
        {/* <MonsterShape
          className="absolute z-20 h-full w-full inset-0"
          color="#000"
        /> */}
        {/* background image */}
        <PrismicNextImage
          alt=""
          field={skater.bg_image}
          className="h-full object-cover absolute inset-0 transition-all duration-300 group-hover:[filter:brightness(0.8)] "
        />
        {/* name */}
        <div className="absolute z-40 bottom-4 left-3 text-white">
          <Heading as="h3" size="sm">
            {skater.name}
          </Heading>
        </div>
      </div>
      {/* button link */}
      <div>
        <ButtonLink field={skater.customizer_link} size="sm">
          {skater.customizer_link.text || "Build Your Own"}
        </ButtonLink>
      </div>
    </div>
  );
}

export default Skater;
