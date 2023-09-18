import { FC } from 'react';
import DashboardCardComponent from './DashboardCardComponent';
import { PageBanner } from '../../../shared/components/PageBanner';
import { useStatisticsQuery } from '../../api/queries/log/getStatisticsQuery';

interface DaschboardOverviewComponentProps {}

const DashboardOverviewComponent: FC<DaschboardOverviewComponentProps> = ({}) => {
  const { data, isLoading } = useStatisticsQuery();
  const currentYear = new Date().getFullYear();
  if (isLoading) return null;
  return (
    <>
      <PageBanner title="Dashboard"></PageBanner>
      <h3 className="text-gray-500 px-1 mb-2 text-sm">Statistiky pro rok {currentYear}</h3>
      <div className="grid grid-cols-3 gap-5">
        <DashboardCardComponent
          title="Celkový vklad"
          description="Poslední vklad za 100,00 kč"
          value={data?.data.depositTotal}
        />
        <DashboardCardComponent
          title="Celkový výběr"
          description="Poslední výběr za 100,00 kč"
          value={data?.data.withdrawTotal}
        />
        <DashboardCardComponent
          title="Zisk/ztráta"
          description="výhra - prohra - deposit"
          value={data?.data.earnings}
        />
      </div>
    </>
  );
};

export default DashboardOverviewComponent;
