import { FC } from 'react';
import { TiketListComponent } from '../../components/tiket-list/TiketListComponent';
import TiketPageBannerComponent from '../../components/tiket-page-banner/TiketPageBannerComponent';

interface TiketManagementProps {}
export const TiketManagement: FC<TiketManagementProps> = ({}) => {
  return (
    <>
      <TiketPageBannerComponent />
      <TiketListComponent />;
    </>
  );
};
