// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | SlidesSlice
  | ProductsSectionSlice
  | HeroSlice;

/**
 * Content for HomePage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *HomePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HomePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for Product Card documents
 */
interface ProductCardDocumentData {
  /**
   * name field in *Product Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_card.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Price field in *Product Card*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product_card.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Image field in *Product Card*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_card.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Customizer Link field in *Product Card*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: product_card.customizer_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  customizer_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Category field in *Product Card*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: moody
   * - **API ID Path**: product_card.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  category: prismic.SelectField<
    "moody" | "bb4l" | "miss-board" | "alpha",
    "filled"
  >;
}

/**
 * Product Card document from Prismic
 *
 * - **API ID**: `product_card`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductCardDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductCardDocumentData>,
    "product_card",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument | ProductCardDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *ProductsSection → Default → Primary → Product*
 */
export interface ProductsSectionSliceDefaultPrimaryProductItem {
  /**
   * Product Card field in *ProductsSection → Default → Primary → Product*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: products_section.default.primary.product[].product_card
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  product_card: prismic.ContentRelationshipField<"product_card">;
}

/**
 * Primary content in *ProductsSection → Default → Primary*
 */
export interface ProductsSectionSliceDefaultPrimary {
  /**
   * Heading field in *ProductsSection → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: products_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *ProductsSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: products_section.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Product field in *ProductsSection → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: products_section.default.primary.product[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  product: prismic.GroupField<
    Simplify<ProductsSectionSliceDefaultPrimaryProductItem>
  >;
}

/**
 * Default variation for ProductsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductsSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProductsSection*
 */
type ProductsSectionSliceVariation = ProductsSectionSliceDefault;

/**
 * ProductsSection Shared Slice
 *
 * - **API ID**: `products_section`
 * - **Description**: ProductsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductsSectionSlice = prismic.SharedSlice<
  "products_section",
  ProductsSectionSliceVariation
>;

/**
 * Primary content in *Slides → Default → Primary*
 */
export interface SlidesSliceDefaultPrimary {
  /**
   * Theme field in *Slides → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.default.primary.theme
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  theme: prismic.SelectField<"Blue" | "Orange" | "Navy" | "Lime">;

  /**
   * FG Image field in *Slides → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.default.primary.fg_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fg_image: prismic.ImageField<never>;

  /**
   * BG Image field in *Slides → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.default.primary.bg_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bg_image: prismic.ImageField<never>;

  /**
   * Heading field in *Slides → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Slides → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *Slides → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Slides Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SlidesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SlidesSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Slides → Image first → Primary*
 */
export interface SlidesSliceImageFirstPrimary {
  /**
   * Theme field in *Slides → Image first → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.imageFirst.primary.theme
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  theme: prismic.SelectField<"Blue" | "Orange" | "Navy" | "Lime">;

  /**
   * FG Image field in *Slides → Image first → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.imageFirst.primary.fg_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fg_image: prismic.ImageField<never>;

  /**
   * BG Image field in *Slides → Image first → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.imageFirst.primary.bg_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bg_image: prismic.ImageField<never>;

  /**
   * Heading field in *Slides → Image first → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.imageFirst.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Slides → Image first → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.imageFirst.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *Slides → Image first → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: slides.imageFirst.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Image first variation for Slides Slice
 *
 * - **API ID**: `imageFirst`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SlidesSliceImageFirst = prismic.SharedSliceVariation<
  "imageFirst",
  Simplify<SlidesSliceImageFirstPrimary>,
  never
>;

/**
 * Slice variation for *Slides*
 */
type SlidesSliceVariation = SlidesSliceDefault | SlidesSliceImageFirst;

/**
 * Slides Shared Slice
 *
 * - **API ID**: `slides`
 * - **Description**: Slides
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SlidesSlice = prismic.SharedSlice<"slides", SlidesSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      ProductCardDocument,
      ProductCardDocumentData,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProductsSectionSlice,
      ProductsSectionSliceDefaultPrimaryProductItem,
      ProductsSectionSliceDefaultPrimary,
      ProductsSectionSliceVariation,
      ProductsSectionSliceDefault,
      SlidesSlice,
      SlidesSliceDefaultPrimary,
      SlidesSliceImageFirstPrimary,
      SlidesSliceVariation,
      SlidesSliceDefault,
      SlidesSliceImageFirst,
    };
  }
}
