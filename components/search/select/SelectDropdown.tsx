import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { sans } from "@/lib/fonts";
import * as Select from "@radix-ui/react-select";

interface SelectItem {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectDropdownProps {
  items: SelectItem[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
  label: string;
  allLabel?: string;
  allCount?: number;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  items,
  value,
  onValueChange,
  placeholder,
  disabled = false,
  label,
  allLabel = "All",
  allCount = 0,
}) => {
  return (
    <Select.Root
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <Select.Trigger
        className={`${
          sans.className
        } inline-flex items-center justify-center px-4 py-2 text-sm w-1/4 ${
          disabled
            ? "bg-gray-100 text-gray-400"
            : "hover:text-white duration-75 hover:bg-accent bg-white"
        } rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-accent`}
        aria-label={placeholder}
      >
        <Select.Value placeholder={placeholder} />
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
              <Select.Label className="relative flex items-center h-6 py-0 text-gray-500 pl-8 pr-6 select-none">
                {label}
              </Select.Label>
              <Select.Separator className="bg-accent min-h-px my-1" />
              <Select.Item
                key="all"
                value="all"
                className="relative flex items-center h-6 py-0 pl-8 pr-6 text-sm rounded-sm hover:bg-accent hover:text-white focus:outline-none select-none"
              >
                <Select.ItemText>{`${allLabel} (${allCount})`}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 inline-flex items-center justify-center w-6">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Separator className="bg-accent min-h-px mt-1 mb-1" />
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  value={item.value}
                  className="relative flex items-center h-6 py-0 pl-8 pr-6 text-sm rounded-sm hover:bg-accent hover:text-white focus:outline-none select-none"
                  disabled={item.disabled}
                >
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-0 inline-flex items-center justify-center w-6">
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
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
