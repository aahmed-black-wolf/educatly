import React from "react";
import { CiSearch } from "react-icons/ci";
import { cn } from "../../utils/cn";

type SearchInputProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  placeholder = "Search",
  className = "",
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div
      className={cn(
        "flex items-center border border-gray-300 bg-white rounded-lg px-2",
        className
      )}
    >
      <CiSearch className="text-gray-500 mr-1" size={25} />
      <input
        type="text"
        className="flex-grow p-2 text-dark-900 outline-none placeholder:text-dark-900 text-xl bg-transparent"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        aria-label={placeholder}
        aria-required="true"
        role="searchbox"
      />
    </div>
  );
}
