import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import Skater from "@/components/Team/Skater";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team: FC<TeamProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-navy text-white"
    >
      <Heading as="h2" size="lg" className="text-center w-full text-white">
        <PrismicText field={slice.primary.heading} />
      </Heading>

      <div className="~mt-6/8 grid grid-cols-1 md:grid-cols-4 ~gap-8/12 ">
        {/* render Skater */}
        {slice.primary.skaters.map(
          (skater, index) =>
            isFilled.contentRelationship(skater.skater) && (
              <Skater key={index} id={skater.skater.id} />
            )
        )}
      </div>
    </Bounded>
  );
};

export default Team;
