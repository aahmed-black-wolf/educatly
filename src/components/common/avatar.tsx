import Image from "next/image";
import React from "react";
import avatarImage from "@/public/images/avatar.png";
import { cn } from "../../utils/cn";
type AvatarProps = {
  src?: string;
  alt?: string;
  label?: string;
  title?: string;
  className?: string;
};

export default function Avatar({
  src,
  alt,
  label,
  title,
  className,
}: AvatarProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        width={40}
        height={40}
        className="rounded-full"
        alt={alt ? alt : "user-info"}
        src={src ? src : avatarImage}
      />
      <div className="flex flex-col">
        <div className="text-md">{title ? title : "Olivia Rhye"}</div>
        <p className="text-sm text-dark-900">{label ? label : "20 Jan 2022"}</p>
      </div>
    </div>
  );
}
