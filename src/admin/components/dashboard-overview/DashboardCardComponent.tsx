import { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/components/ui/card'
import { CircleDollarSign } from 'lucide-react'
import { formatNumber } from '../../../shared/lib/utils'

interface DashboardCardComponentProps {
  title?: string
  value?:  number
  //subdescription?:string
}

const DashboardCardComponent: FC<DashboardCardComponentProps> = ({title,value ,/* subdescription */}) => {
  return <Card>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-sm font-medium">
      {title ?? "Total Revenue"}
    </CardTitle>
    <CircleDollarSign />
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">{value ? formatNumber(value) : "$45,231.89"}</div>
    {/* <p className="text-xs text-muted-foreground">
      {subdescription ?? "+20.1% from last month"}
    </p> */}
  </CardContent>
</Card>
}

export default DashboardCardComponent