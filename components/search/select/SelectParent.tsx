"use client";
import { MakesAndModels, SelectItem } from "@/types/interfaces";
import { useState, useEffect } from "react";
import { SelectDropdown } from "./SelectDropdown";
import { boldSans } from "@/lib/fonts";
import Link from "next/link";
interface SelectParentProps {
  makesAndModels: MakesAndModels;
}

export const SelectParent: React.FC<SelectParentProps> = ({
  makesAndModels,
}) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState<string[]>([]);
  const [href, setHref] = useState("");

  useEffect(() => {
    if (make === "" || make === "all") {
      setModels([]);
      setHref("/search/all/");
    } else {
      const selectedMake = makesAndModels[make];
      if (selectedMake) {
        setModels(selectedMake.models);
        if (model === "" || model === "all") {
          setHref(`/search/make?make=${make}`);
        } else {
          setHref(`/search/makeModel?make=${make}&model=${model}`);
        }
      } else {
        setModels([]);
        setHref("/search/all/");
      }
    }
  }, [make, model, makesAndModels]);

  const handleMakeChange = (value: string) => {
    setMake(value);
  };

  const handleModelChange = (value: string) => {
    setModel(value);
  };

  const makeItems: SelectItem[] = Object.entries(makesAndModels).map(
    ([make, { count }]) => ({
      value: make,
      label: `${
        make.charAt(0).toUpperCase() + make.slice(1).replace(/_/g, " ")
      } (${count})`,
    })
  );

  const modelItems: SelectItem[] = models.map((model) => ({
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

      <button
        className={`${boldSans.className} rounded-xl shadow-md border-accent bg-accent hover:scale-105 text-white duration-75 border-4 w-1/12`}
      >
        {model ? <Link href={href}>Find</Link> : <Link href={href}>Find</Link>}
      </button>
    </>
  );
};
