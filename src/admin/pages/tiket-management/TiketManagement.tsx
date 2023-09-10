import { FC, createContext, useState } from 'react';
import { TiketFilter } from '../../../shared/service/tiket/interfaces';
import { TiketListComponent } from '../../components/tiket-list/TiketListComponent';
import TiketPageBannerComponent from '../../components/tiket-page-banner/TiketPageBannerComponent';

const defaultFilters: TiketFilter = {
  search: ''
};
export const FiltersContext = createContext<TiketFilter>(defaultFilters);
interface TiketManagementProps {}
const TiketManagement: FC<TiketManagementProps> = ({}) => {
  const [filters, setFilters] = useState<TiketFilter>(defaultFilters);

  const handleSearchText = (e: string) => {
    let newFilters: TiketFilter = {
      ...filters,
      search: e
    };
    setFilters(newFilters);
  };

  return (
    <FiltersContext.Provider value={filters}>
      <TiketPageBannerComponent handleSearch={handleSearchText} />
      <TiketListComponent filters={filters} />
    </FiltersContext.Provider>
  );
};
export default TiketManagement;
