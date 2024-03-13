import Image from "next/image";

// next image component for easier styling - just adjust width in parent div
interface CustomImageProps {
  src: string;
  alt: string;
}

export const CustomImage: React.FC<CustomImageProps> = ({ src, alt }) => {
  return (
    <Image
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      src={src}
      className="w-full h-auto "
    />
  );
};
