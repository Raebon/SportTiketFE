import { FC } from 'react'
import DashboardCardComponent from './DashboardCardComponent'
import { PageBanner } from '../../../shared/components/PageBanner'

interface DaschboardOverviewComponentProps {
  
}

const DaschboardOverviewComponent: FC<DaschboardOverviewComponentProps> = ({}) => {
  return <>
  <PageBanner title='Dashboard'>
  </PageBanner>
  <div className="grid grid-cols-3 gap-5">
        <DashboardCardComponent title="Celkový vklad" value={1200}/>
        <DashboardCardComponent title="Celkový výběr" value={1200}/>
        <DashboardCardComponent title="Zisk/ztráta" value={1200}/>
      </div>
  </>
}

export default DaschboardOverviewComponent