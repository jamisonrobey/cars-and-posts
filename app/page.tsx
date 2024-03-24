import { CustomImage } from "@/components/shared/CustomImage";
import { Search } from "@/components/search/Search";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-cols-1">
      <div className="relative">
        <div className="select-none max-h-48 sm:max-h-96 overflow-hidden">
          <CustomImage
            height={600}
            width={600}
            src="/splash.jpg"
            alt="Multiple cars driving on highway."
          />
        </div>
        <div className="flex items-center justify-center mt-[-150px]">
          <Search />
        </div>
      </div>
    </div>
  );
}
