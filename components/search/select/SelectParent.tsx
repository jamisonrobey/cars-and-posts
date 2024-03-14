"use client";
import {
  InterfaceMakesAndModels,
  InterfaceSelectItem,
} from "@/types/interfaces";
import { useState, useEffect } from "react";
import { SelectDropdown } from "./SelectDropdown";

interface SelectParentProps {
  makesAndModels: InterfaceMakesAndModels;
}

export const SelectParent: React.FC<SelectParentProps> = ({
  makesAndModels,
}) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState<string[]>([]);

  useEffect(() => {
    if (make === "" || make === "all") {
      setModels([]);
    } else {
      const selectedMake = makesAndModels[make];
      if (selectedMake) {
        setModels(selectedMake.models);
      } else {
        setModels([]);
      }
    }
    setModel(""); // Reset the selected model when make changes
  }, [make, makesAndModels]);

  const handleMakeChange = (value: string) => {
    setMake(value);
  };

  const handleModelChange = (value: string) => {
    setModel(value);
  };

  const makeItems: InterfaceSelectItem[] = Object.entries(makesAndModels).map(
    ([make, { count }]) => ({
      value: make,
      label: `${
        make.charAt(0).toUpperCase() + make.slice(1).replace(/_/g, " ")
      } (${count})`,
    })
  );

  const modelItems: InterfaceSelectItem[] = models.map((model) => ({
    value: model,
    label: model,
  }));

  return (
    <>
      <SelectDropdown
        items={makeItems}
        value={make}
        onValueChange={handleMakeChange}
        label="Makes"
        placeholder="Make..."
      />
      <SelectDropdown
        items={modelItems}
        value={model}
        onValueChange={handleModelChange}
        label="Models"
        placeholder="Model..."
        disabled={models.length === 0}
      />
    </>
  );
};
