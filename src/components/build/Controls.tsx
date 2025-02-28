"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Content, isFilled } from "@prismicio/client";
import { useCustomizerControls } from "./Context";
import Paragraph from "../Paragraph";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { useRouter } from "next/navigation";

type ControlItemParams = {
  label: string;
  items: any[];
  selected: any;
  onSelect: (item: any) => void;
};

type ControlsParams = {
  wheels: Content.CustomizerDocumentDataWheelsItem[];
  decks: Content.CustomizerDocumentDataDecksItem[];
  trucks: Content.CustomizerDocumentDataMetalsItem[];
  bolts: Content.CustomizerDocumentDataMetalsItem[];
};
function Controls({ wheels, decks, trucks, bolts }: ControlsParams) {
  const router = useRouter();
  const {
    selectedWheel,
    setSelectedWheel,
    selectedDeck,
    setSelectedDeck,
    selectedBolt,
    setSelectedBolt,
    selectedTruck,
    setSelectedTruck,
  } = useCustomizerControls();

  useEffect(() => {
    const url = new URL(window.location.href);
    if (isFilled.keyText(selectedDeck?.uid)) {
      url.searchParams.set("deck", selectedDeck?.uid);
    }
    if (isFilled.keyText(selectedWheel?.uid)) {
      url.searchParams.set("wheel", selectedWheel?.uid);
    }
    if (isFilled.keyText(selectedTruck?.uid)) {
      url.searchParams.set("truck", selectedTruck?.uid);
    }
    if (isFilled.keyText(selectedBolt?.uid)) {
      url.searchParams.set("bolt", selectedBolt?.uid);
    }

    router.replace(url.href);
  }, [selectedWheel, selectedDeck, selectedBolt, selectedTruck, router]);
  return (
    <div className="w-full flex flex-col ~gap-3/4 ~mt-4/5">
      <Control
        label="Decks"
        selected={selectedDeck || decks[0]}
        items={decks}
        onSelect={setSelectedDeck}
      />
      <Control
        label="Wheels"
        selected={selectedWheel || wheels[0]}
        items={wheels}
        onSelect={setSelectedWheel}
      />
      <Control
        label="Trucks"
        selected={selectedTruck || trucks[0]}
        items={trucks}
        onSelect={setSelectedTruck}
      />
      <Control
        label="Bolts"
        selected={selectedBolt || bolts[0]}
        items={bolts}
        onSelect={setSelectedBolt}
      />
    </div>
  );
}

function Control({ label, selected, items, onSelect }: ControlItemParams) {
  const [currentSelected, setCurrentSelected] = useState(selected);

  const onClick = (item: typeof selected) => {
    setCurrentSelected(item);
    onSelect(item);
  };
  return (
    <div className="flex flex-col ~gap-3/4">
      {/* label */}
      <div className="flex gap-2">
        <h2 className="text-white ~text-xs/sm font-sans capitalize">{label}</h2>
        <div className="flex-1 flex items-center">
          <Paragraph
            size="xs"
            className="text-zinc-300 font-[400] p-0 pl-2 border-l-[0.6px] border-zinc-600 "
          >
            {currentSelected.uid.replace(/-/g, " ")}
          </Paragraph>
        </div>
      </div>

      {/* items */}
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            className={clsx(
              "relative overflow-hidden size-10 flex items-center justify-center rounded-full cursor-pointer pg-black p-0.5 outline-2 outline-white",
              item.uid === currentSelected.uid && "outline"
            )}
            onClick={() => onClick(item)}
            key={item.uid}
          >
            {item.texture ? (
              <div className="overflow-hidden rounded-full">
                <PrismicNextImage
                  alt=""
                  // src={asImageSrc(item.texture) as string}
                  field={item.texture}
                  className="w-auto rounded-full"
                  imgixParams={{
                    rect:
                      label === "Decks"
                        ? [20, 1550, 1000, 1000]
                        : [20, 10, 850, 850],
                    width: 150,
                    height: 150,
                  }}
                />
              </div>
            ) : (
              <div
                className="size-full  rounded-full border-[0.6px] border-zinc-950"
                style={{ backgroundColor: item.color }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Controls;
