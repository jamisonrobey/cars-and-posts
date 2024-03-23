"use client";
import { MakesModels } from "@/types/interfaces";
import { useState, useEffect } from "react";
import { boldSans } from "@/lib/fonts";
import Link from "next/link";
import { SelectDropdown } from "./SelectDropdown";

interface SelectParentProps {
  makesModels: MakesModels;
}

export const SelectParent: React.FC<SelectParentProps> = ({ makesModels }) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState<{ model: string; count: number }[]>([]);
  const [href, setHref] = useState("/search/all/");
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    if (make === "" || make === "all") {
      setModels([]);
      setModel("");
      setHref("/search/all/");
      setTotalPosts(
        Object.values(makesModels).reduce((sum, { count }) => sum + count, 0)
      );
    } else {
      const selectedMake = makesModels[make];
      if (selectedMake) {
        const modelEntries = Object.entries(selectedMake.models);
        setModels(modelEntries.map(([model, count]) => ({ model, count })));
        setHref(`/search/make?make=${make}`);
        setTotalPosts(selectedMake.count);
      } else {
        setModels([]);
        setHref("/search/all/");
        setTotalPosts(0);
      }
    }
  }, [make, makesModels]);

  useEffect(() => {
    if (model === "" || model === "all") {
      setHref(`/search/make?make=${make}`);
      setTotalPosts(makesModels[make]?.count || 0);
    } else {
      setHref(`/search/makeModel?make=${make}&model=${model}`);
      setTotalPosts(makesModels[make]?.models[model] || 0);
    }
  }, [model, make, makesModels]);

  const handleMakeChange = (value: string) => {
    setMake(value);
    setModel("");
  };

  const handleModelChange = (value: string) => {
    setModel(value);
  };

  const makeItems = Object.entries(makesModels).map(([make, { count }]) => ({
    value: make,
    label: `${
      make.charAt(0).toUpperCase() + make.slice(1).replace(/_/g, " ")
    } (${count})`,
  }));

  const modelItems = models.map(({ model, count }) => ({
    value: model,
    label: `${model} (${count})`,
  }));

  return (
    <>
      <SelectDropdown
        items={makeItems}
        value={make}
        onValueChange={handleMakeChange}
        placeholder="Select Make"
        label="Makes"
        allLabel="All makes"
        allCount={Object.values(makesModels).reduce(
          (sum, { count }) => sum + count,
          0
        )}
      />
      <SelectDropdown
        items={modelItems}
        value={model}
        onValueChange={handleModelChange}
        placeholder="Select Model"
        label="Models"
        disabled={models.length === 0}
        allLabel="All models"
        allCount={makesModels[make]?.count || 0}
      />
      <button
        className={`${boldSans.className} rounded-xl shadow-md border-accent bg-accent hover:scale-105 text-white duration-75 border-4 w-1/12`}
      >
        <Link href={href}>
          {totalPosts > 0 ? `Find (${totalPosts})` : "Find"}
        </Link>
      </button>
    </>
  );
};
