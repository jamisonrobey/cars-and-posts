"use client";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

import * as Select from "@radix-ui/react-select";
interface SelectProps {
  placeholder: string;
  items: Map<string, number>;
  onChange: (value: string) => void;
}
export const SelectCustom: React.FC<SelectProps> = ({
  placeholder,
  items,
  onChange,
}) => {
  return (
    <Select.Root onValueChange={(value) => onChange(value)}>
      <Select.Trigger
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium hover:bg-red-100 bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-accent hover:bg-lightGrey"
        aria-label="Make"
      >
        <Select.Value placeholder={`${placeholder}...`} />
        <Select.Icon className="ml-2">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
          <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-1">
            <Select.Group>
              <Select.Label className="px-6 py-2 text-xs">Makes</Select.Label>
              {Array.from(items).map(([item, count]) => {
                return (
                  <Select.Item
                    key={item}
                    className="relative flex items-center h-6 py-0 pl-8 pr-6 text-sm rounded-sm hover:bg-accent hover:text-white focus:outline-none select-none"
                    value={item.toLowerCase()}
                  >
                    <Select.ItemText>{`${item} \t(${count})`}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-0 inline-flex items-center justify-center w-6">
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
