import { FC } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export interface SelectData {
  value: string;
  name: string;
}

interface SelectInputProps {
  data: SelectData[];
  onChange: (e: string) => void;
}

export const SelectInput: FC<SelectInputProps> = ({ data, onChange }) => {
  return (
    <Select onValueChange={onChange} defaultValue={data[0].value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="max-h-[400px] overflow-auto">
        {data.map((item, index) => {
          return (
            <SelectItem key={index} value={item.value}>
              {item.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
