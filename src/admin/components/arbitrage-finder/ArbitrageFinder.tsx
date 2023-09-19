import { FC, useState } from 'react';
import { PageBanner } from '../../../shared/components/PageBanner';

import { ArbitrageData } from '../../../shared/service/arbitrage/interfaces';
import { ArbitrageFootbalFinderForm } from './ArbitrageFootbalFinderForm';
import { ArbitrageRowResult } from './ArbitrageRowResult';
import { ArbitrageTennisFinderForm } from './ArbitrageTennisFinderForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../shared/components/ui/tabs';
interface ArbitrageFinderProps {}

export const ArbitrageFinder: FC<ArbitrageFinderProps> = ({}) => {
  const [tennisData, setTennisData] = useState<ArbitrageData>();
  const [footbalData, setFootbalData] = useState<ArbitrageData>();

  const onFootbalSearch = (e: ArbitrageData | undefined) => {
    setFootbalData(e);
  };
  const onTennisSearch = (e: ArbitrageData | undefined) => {
    setTennisData(e);
  };

  return (
    <>
      <PageBanner title="Vyhledat Arbitrážní Sázky"></PageBanner>
      <Tabs defaultValue="footbal">
        <TabsList>
          <TabsTrigger value="footbal">Footbal</TabsTrigger>
          <TabsTrigger value="tennis">Tennis</TabsTrigger>
        </TabsList>
        <TabsContent value="footbal" className="h-auto">
          <ArbitrageFootbalFinderForm onSubmitClick={onFootbalSearch} />
          <h1 className="font-bold text-5xl my-5">Fotbal</h1>
          {footbalData &&
            footbalData.data &&
            footbalData.data.result &&
            footbalData?.data.result.map((item, index) => {
              return <ArbitrageRowResult key={index} data={item} links={footbalData.data.links} />;
            })}
        </TabsContent>
        <TabsContent value="tennis" className="h-auto">
          <ArbitrageTennisFinderForm onSubmitClick={onTennisSearch} />
          <h1 className="font-bold text-5xl my-5">Tenis</h1>
          {tennisData &&
            tennisData.data &&
            tennisData?.data.result &&
            tennisData?.data.result.map((item, index) => {
              return <ArbitrageRowResult key={index} data={item} links={tennisData.data.links} />;
            })}
        </TabsContent>
      </Tabs>
    </>
  );
};
