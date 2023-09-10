import { FC } from 'react';
import { PageBanner } from '../../../shared/components/PageBanner';
import { SearchBar } from '../../../shared/components/SearchBar';
import CreateTiketButton from './CreateTiketButton';

interface TiketPageBannerComponentProps {
  handleSearch(e: string): void;
}

const TiketPageBannerComponent: FC<TiketPageBannerComponentProps> = ({ handleSearch }) => {
  return (
    <PageBanner title="Správa tiketů">
      <SearchBar onEnter={handleSearch} />
      <CreateTiketButton />
    </PageBanner>
  );
};

export default TiketPageBannerComponent;
