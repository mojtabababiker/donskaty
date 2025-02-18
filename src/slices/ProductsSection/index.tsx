import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Heading } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { PrismicNextLink } from "@prismicio/next";
import ProductCard from "@/components/Products/ProductCard";

/**
 * Props for `ProductsSection`.
 */
export type ProductsSectionProps =
  SliceComponentProps<Content.ProductsSectionSlice>;

/**
 * Component for "ProductsSection" Slices.
 */
const ProductsSection: FC<ProductsSectionProps> = async ({ slice }) => {
  const client = createClient();
  // const products
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-gray ~pt-30/50"
    >
      <div className="w-full ~gap-6/10 flex flex-col items-center justify-center">
        <Heading as="h2" className="w-full flex flex-col text-center">
          <PrismicText field={slice.primary.heading} />
        </Heading>

        <Paragraph
          as="div"
          size="sm"
          className="w-full flex flex-col text-center"
        >
          <PrismicRichText field={slice.primary.body} />
        </Paragraph>
      </div>

      {/* products */}
      <div className="w-full grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center ~mt-8/12">
        {slice.primary.product.map(
          ({ product_card }) =>
            // Render the item
            isFilled.contentRelationship(product_card) && (
              <ProductCard key={product_card.id} id={product_card.id} />
            )
        )}
      </div>
    </Bounded>
  );
};

export default ProductsSection;
