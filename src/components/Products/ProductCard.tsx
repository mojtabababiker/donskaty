import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { Content, isFilled } from "@prismicio/client";

import ButtonLink from "../ButtonLink";
import { Heading } from "../Heading";
import clsx from "clsx";
import { HorizontalLine, VerticalLine } from "../Line";
import {
  TieShape,
  LineShape,
  MonsterShape,
  ShaggyShape,
} from "@/components/Scruples";

const categories = {
  moody: "text-brand-lime",
  bb4l: "",
  "miss-board": "text-brand-purple",
  alpha: "text-brand-orange",
};

const LINE_STYLE =
  "absolute text-zinc-300 group-hover:text-zinc-400 transition-color duration-300 ease-in-out";
const H_LINE_STYLE = "w-full h-5 left-1/2 -translate-x-1/2";

const V_LINE_STYLE = "h-full stroke-2 -top-2";

type Props = {
  id: string;
};

async function ProductCard({ id }: Props) {
  const client = createClient();

  const product = await client.getByID<Content.ProductCardDocument>(id);
  const price = isFilled.number(product.data.price)
    ? `$${(product.data.price / 100).toFixed(2)}`
    : "Price not available";

  const category = product.data.category;
  return (
    <div className="product-card group relative flex flex-col items-center h-full w-full gap-4 pt-6">
      {/* border lines */}
      <HorizontalLine className={clsx(LINE_STYLE, H_LINE_STYLE, "top-2")} />
      <HorizontalLine
        className={clsx(LINE_STYLE, H_LINE_STYLE, "~bottom-7/9")}
      />

      <VerticalLine className={clsx(LINE_STYLE, V_LINE_STYLE, "left-4")} />
      <VerticalLine className={clsx(LINE_STYLE, V_LINE_STYLE, "right-4")} />
      {/* price and category */}
      <div className="w-full flex px-8 items-center justify-between ~text-sm/2xl">
        <span>{price}</span>
        <p
          className={clsx(
            "uppercase font-bold ~text-xs/lg text-center animate-squiggle",
            categories[category]
          )}
        >
          {category}
        </p>
      </div>

      {/* image */}
      <div className="relative w-full overflow-hidden py-4">
        {category === "moody" && (
          <LineShape
            className="absolute h-full w-full inset-0  text-brand-lime"
            color="#d9f154"
          />
        )}
        {category === "miss-board" && (
          <TieShape
            className="absolute h-full w-full inset-0 text-brand-purple"
            color="#692e54"
          />
        )}
        {category === "bb4l" && (
          <MonsterShape
            className="absolute h-full w-full inset-0"
            color="#000"
          />
        )}
        {category === "alpha" && (
          <ShaggyShape
            className="absolute h-full w-full text-brand-orange inset-0"
            color="#ff7347"
          />
        )}
        <PrismicNextImage
          field={product.data.image}
          className="mx-auto relative w-[48%] origin-top transform-gpu transition-transform duration-300 ease-in-out group-hover:scale-150"
          width={150}
          alt={""}
        />
      </div>

      {/* name */}
      <Heading size="sm" as="h3" className="text-center mt-2">
        {product.data.name}
      </Heading>
      {/* customize button */}
      <div className="absolute inset-0 flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 duration-300 delay-100">
        <ButtonLink
          size="sm"
          className="text-center"
          // href={product.data.customizer_link}
          field={product.data.customizer_link}
        >
          Customize
        </ButtonLink>
      </div>
    </div>
  );
}

export default ProductCard;
