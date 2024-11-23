import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
interface SelectMenusProps {
  title: string;
  options: string[];
}
export function SelectMenus({ title, options }: SelectMenusProps) {
  return (
    <>
      {" "}
      <div className="flex flex-col">
        {" "}
        <label className="block text-sm font-medium text-gray-700">
          {title}
        </label>{" "}
        <Select>
          {" "}
          <SelectTrigger className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
            {" "}
            <SelectValue placeholder="Selecione uma opção" />{" "}
          </SelectTrigger>{" "}
          <SelectContent>
            {" "}
            {options.map((option, index) => (
              <SelectItem key={index} value={option}>
                {" "}
                {option}{" "}
              </SelectItem>
            ))}{" "}
          </SelectContent>{" "}
        </Select>{" "}
      </div>{" "}
    </>
  );
}