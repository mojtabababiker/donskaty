"use client";

import { Content } from "@prismicio/client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type CustomizerControls = {
  selectedWheel?: Content.CustomizerDocumentDataWheelsItem;
  setSelectedWheel: (wheel: Content.CustomizerDocumentDataWheelsItem) => void;
  selectedDeck?: Content.CustomizerDocumentDataDecksItem;
  setSelectedDeck: (deck: Content.CustomizerDocumentDataDecksItem) => void;
  selectedTruck?: Content.CustomizerDocumentDataMetalsItem;
  setSelectedTruck: (trucks: Content.CustomizerDocumentDataMetalsItem) => void;
  selectedBolt?: Content.CustomizerDocumentDataMetalsItem;
  setSelectedBolt: (bolts: Content.CustomizerDocumentDataMetalsItem) => void;
};

const defaultCustomizerControls: CustomizerControls = {
  selectedWheel: undefined,
  setSelectedWheel: () => {},
  selectedDeck: undefined,
  setSelectedDeck: () => {},
  selectedTruck: undefined,
  setSelectedTruck: () => {},
  selectedBolt: undefined,
  setSelectedBolt: () => {},
};

const CustomizerControlsContext = createContext<CustomizerControls>(
  defaultCustomizerControls
);

type CustomizerControlsProviderProps = {
  defaultWheel?: Content.CustomizerDocumentDataWheelsItem;
  defaultDeck?: Content.CustomizerDocumentDataDecksItem;
  defaultTruck?: Content.CustomizerDocumentDataMetalsItem;
  defaultBolt?: Content.CustomizerDocumentDataMetalsItem;
  children?: ReactNode;
};

export function CustomizerControlsProvider({
  defaultWheel,
  defaultDeck,
  defaultTruck,
  defaultBolt,
  children,
}: CustomizerControlsProviderProps) {
  const [selectedWheel, setSelectedWheel] = useState(defaultWheel);
  const [selectedDeck, setSelectedDeck] = useState(defaultDeck);
  const [selectedTruck, setSelectedTruck] = useState(defaultTruck);
  const [selectedBolt, setSelectedBolt] = useState(defaultBolt);
  const value = useMemo<CustomizerControls>(() => {
    return {
      selectedWheel,
      setSelectedWheel,
      selectedDeck,
      setSelectedDeck,
      selectedTruck,
      setSelectedTruck,
      selectedBolt,
      setSelectedBolt,
    };
  }, [selectedBolt, selectedTruck, selectedDeck, selectedWheel]);
  return (
    <CustomizerControlsContext.Provider value={value}>
      {children}
    </CustomizerControlsContext.Provider>
  );
}

export function useCustomizerControls() {
  return useContext(CustomizerControlsContext);
}
