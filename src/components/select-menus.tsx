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

export function SelectMenus({title,options}) {
  return (
    <>
      <div className="flex flex-col">
        <h4>{title}</h4>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Selecione a opção" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{title=='Origem do documento'?'Origem':'Tipos'}</SelectLabel>
              {options.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
