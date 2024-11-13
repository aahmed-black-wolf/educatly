import Image from "next/image";
import React from "react";
import Avatar from "../../common/avatar";
import blogImage from "@/public/images/Image.png";
import { LiaAnkhSolid } from "react-icons/lia";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";

type ArticleCardProps = {
  avatarName: string;
  avatarDate: string;
  avatarImage: string;
  job: string;
  title: string;
  description: string;
  articleLink: string;
};

const MAX_TITLE_SIZE = 20;

export default function ArticleCard({
  avatarName,
  avatarDate,
  avatarImage,
  job,
  title,
  description,
  articleLink,
}: ArticleCardProps) {
  return (
    <div className="shadow-xl z-[2] bg-white flex flex-col justify-between  p-6 h-[580px] w-full md:w-[384px]">
      <div className="flex flex-col gap-2">
        <div className="relative w-full lg:w-[336px] h-[200px] lg:h-[240px] mb-6">
          <Image alt="blogImage" fill src={blogImage} />
        </div>
        <div className="text-main-800 font-[600]">{job}</div>
        <Link
          href={articleLink}
          className="flex items-center justify-between w-full"
        >
          <div className="text-2xl font-[600]">
            {" "}
            {title.length > MAX_TITLE_SIZE
              ? `${title.slice(0, MAX_TITLE_SIZE)}...`
              : title}
          </div>
          <div>
            <RiArrowRightUpLine size={25} />
          </div>
        </Link>
        <p className="text-dark-900">{description}</p>
      </div>
      <Avatar
        src={avatarImage}
        title={avatarName}
        label={avatarDate}
        className="py-2"
      />
    </div>
  );
}
