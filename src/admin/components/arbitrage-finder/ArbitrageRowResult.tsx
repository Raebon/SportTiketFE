import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/components/ui/card';
import { formatNumber } from '../../../shared/lib/utils';
import { ArbitrageResult } from '../../../shared/service/arbitrage/interfaces';
import { FortunaLogo } from './logos/FortunaLogo';
import { TipsportLogo } from './logos/TipsportLogo';

interface ArbitrageRowResultProps {
  data: ArbitrageResult[];
  links: string[];
  xs?: boolean;
}

export const ArbitrageRowResult: FC<ArbitrageRowResultProps> = ({ data, links, xs }) => {
  const getLink = (site: string): string => {
    const urls = links;
    const keyword = site;
    const matchingUrls = urls.filter((url) => url.includes(keyword));

    return matchingUrls[0];
  };
  console.log(data);
  return (
    <div className="grid grid-cols-2 gap-4 mt-2">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {!xs ? (
                    <a href={getLink(item.site)}>
                      {item.site === 'tipsport' && <TipsportLogo />}
                      {item.site === 'fortuna' && <FortunaLogo />}
                    </a>
                  ) : (
                    <div className="min-w-[220px]">
                      <span
                        className={`font-bold text-2xl ${
                          item.site === 'fortuna' ? ' text-yellow-300' : ' text-blue-600'
                        }`}
                      >
                        {item.site.toLocaleUpperCase()}
                      </span>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{item.name}</div>
                <div className="text-2xl font-bold">{formatNumber(item.amount)}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">Typ sázky: </span>
                  {item.type}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">Profit v kč: </span>
                  {formatNumber(item.profit)}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">Kurz: </span>
                  {item.rate}
                </p>
              </CardContent>
            </Card>
            {index === 0 && <div className="pl-4 my-auto font-bold">vs</div>}
          </div>
        );
      })}
    </div>
  );
};
