import React from "react";
import { SelectCustom } from "./select/SelectCustom";
import { SelectParent } from "./select/SelectParent";
import { getMakes } from "@/util/getMakes";
export const Search = async () => {
  const makes = await getMakes();
  return (
    <div className="w-5/6 h-72 grid grid-cols-1 bg-white shadow-2xl rounded-3xl">
      <div className="flex items-center justify-around border-b-2 border-greyLight">
        <SelectParent makes={makes} />
      </div>
      <div className="flex items-center justify-around"></div>
    </div>
  );
};

export default Search;
