import { FC } from 'react';
import CreateTiketButton from './CreateTiketButton';
import { PageBanner } from '../../../shared/components/PageBanner';

interface TiketPageBannerComponentProps {}

const TiketPageBannerComponent: FC<TiketPageBannerComponentProps> = ({}) => {
  return (
    <PageBanner title="Správa tiketů">
      <CreateTiketButton />
    </PageBanner>
  );
};

export default TiketPageBannerComponent;
