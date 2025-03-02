import { CustomizerControlsProvider } from "@/components/build/Context";
import Controls from "@/components/build/Controls";
import Preview from "@/components/build/Preview";
import ButtonLink from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import Logo from "@/components/Logo";
import { createClient } from "@/prismicio";
import { asImageSrc } from "@prismicio/client";
import Link from "next/link";
import Loading from "./Loading";
type SearchParams = {
  wheel?: string;
  deck?: string;
  truck?: string;
  bolt?: string;
};

async function Page(props: { searchParams: Promise<SearchParams> }) {
  const {
    wheel: passedWheel,
    deck: passedDeck,
    truck: passedTruck,
    bolt: passedBlot,
  } = await props.searchParams;
  const client = createClient();
  const customizerSettings = await client.getSingle("customizer");

  // const {
  //   wheel: passedWheel,
  //   deck: passedDeck,
  //   truck: passedTruck,
  //   bolt: passedBlot,
  // } = searchParams || {};

  const { wheels, decks, metals } = customizerSettings.data;

  const defaultBolt =
    metals.find((item) => item.uid === passedBlot) || metals[0];
  const defaultDeck = decks.find((item) => item.uid === passedDeck) || decks[0];
  const defaultTruck =
    metals.find((item) => item.uid === passedTruck) || metals[0];
  const defaultWheel =
    wheels.find((item) => item.uid === passedWheel) || wheels[0];

  const wheelsTexturesUrls = wheels
    .map((item) => asImageSrc(item.texture))
    .filter((item): item is string => Boolean(item));
  const decksTexturesUrls = decks
    .map((item) => asImageSrc(item.texture))
    .filter((item): item is string => Boolean(item));
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row bg-zinc-700">
      <CustomizerControlsProvider
        defaultBolt={defaultBolt}
        defaultDeck={defaultDeck}
        defaultTruck={defaultTruck}
        defaultWheel={defaultWheel}
      >
        {/* preview */}
        <div className="relative min-h-[50vh] shrink-0 lg:grow">
          <div className="absolute inset-0">
            <Preview
              wheelsTexturesUrls={wheelsTexturesUrls}
              decksTexturesUrls={decksTexturesUrls}
            />
          </div>
          <Link href="/">
            <Logo className="absolute top-4 left-4 w-24 h-auto text-white" />
          </Link>
        </div>
        {/* controls */}
        <div className="flex flex-col bg-texture bg-zinc-900 lg:w-96 ~p-4/6">
          <Heading as="h1" size="sm" className="text-white mt-4 mb-0">
            Build your board
          </Heading>

          <Controls
            wheels={wheels}
            decks={decks}
            bolts={metals}
            trucks={metals}
          />

          <ButtonLink
            color="lime"
            size="sm"
            href="#"
            icon="plus"
            className="mt-4 mb-4 w-fit"
          >
            Add to Cart
          </ButtonLink>
        </div>
      </CustomizerControlsProvider>
      <Loading />
    </div>
  );
}

export default Page;
