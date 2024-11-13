import React from "react";
import SearchInput from "../../common/search-input";
export default function BlogBanner() {
  return (
    <div className="flex justify-center px-6 items-center min-h-[438px] relative bg-main-900 flex-col gap-8">
      <p className="rounded-full font-[600] bg-main-700 px-4 py-2 text-main-600">
        Our blog
      </p>
      <h1 className="font-[700] text-center text-[38px] md:text-[48px] text-main-800">
        Resources and insights
      </h1>
      <p className="text-main-600 text-center md:text-xl">
        The latest industry news, interviews, technologies, and resources.
      </p>
      <SearchInput />
    </div>
  );
}
