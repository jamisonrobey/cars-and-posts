import { WidthIcon } from "@radix-ui/react-icons";
import Image from "next/image";

// next image component for easier styling - just adjust width in parent div
interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  return (
    <Image
      placeholder="empty"
      alt={alt}
      height={height}
      width={width}
      sizes="100vw"
      src={src}
      className="w-full h-auto "
    />
  );
};
