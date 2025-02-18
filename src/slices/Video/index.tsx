import clsx from "clsx";
import { FC } from "react";
import Image from "next/image";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { YTLazyPlayer } from "@/components/Video/YTLazyPlayer";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:[center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

/**
 * Props for `Video`.
 */
export type VideoProps = SliceComponentProps<Content.VideoSlice>;

/**
 * Component for "Video" Slices.
 */
const Video: FC<VideoProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-zinc-900"
    >
      <div className="aspect-video relative">
        <h2 className="sr-only">DongolSkate Video Reel</h2>
        {/* Masks */}
        <div
          className={clsx(
            MASK_CLASSES,
            "absolute inset-0 ~translate-x-2/3 ~translate-y-2/3  bg-brand-lime"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "absolute inset-0 ~translate-x-1/3 ~translate-y-1/2 bg-white"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3 bg-white"
          )}
        />
        <div className={clsx(MASK_CLASSES, "relative h-full")}>
          <YTLazyPlayer
            youTubeID={slice.primary.youtube_id}
            placeholderImage={slice.primary.placeholder_image}
          />
          <Image
            src="/bg-texture.webp"
            layout="fill"
            objectFit="cover"
            alt=""
            className="pointer-events-none opacity-50 object-cover"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Video;
