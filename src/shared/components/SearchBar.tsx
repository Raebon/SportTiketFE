import { Search } from 'lucide-react';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Input } from './ui/input';

interface SearchBarProps {
  onEnter(e: string): void;
}

export const SearchBar: FC<SearchBarProps> = ({ onEnter }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.isDefaultPrevented());
    onEnter(searchValue);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  return (
    <form onSubmit={onSubmit} className="relative w-[400px]">
      <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3" />
      <Input
        id="search-tiket"
        type="text"
        placeholder="Vyhledat"
        className="pl-12 pr-4"
        onChange={handleOnChange}
        value={searchValue}
      />
    </form>
  );
};
