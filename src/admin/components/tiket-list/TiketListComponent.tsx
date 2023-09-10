import { FC } from 'react';
import { AlertErrorMessage, AlertInfoMessage } from '../../../shared/components/AlertMessage';
import { LoadingBackground } from '../../../shared/components/LoadingBackground';
import { TiketFilter } from '../../../shared/service/tiket/interfaces';
import { useTiketListQuery } from '../../api/queries/tiket/getTiketListQuery';
import { TiketCardComponent } from '../tiket-card/TiketCardComponent';

interface TiketListComponentProps {
  filters: TiketFilter;
}

export const TiketListComponent: FC<TiketListComponentProps> = ({ filters }) => {
  const { isLoading, error, data } = useTiketListQuery(filters);
  if (error || !data) return <AlertErrorMessage text="Při načítání tiketů nastala chyba" />;
  if (data.data.length === 0)
    return <AlertInfoMessage text="Neexistuje záznam, který by odpovídal zadanému filtru" />;

  return (
    <div>
      {isLoading && <LoadingBackground />}
      <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2">
        {data.data.map((item, index) => (
          <TiketCardComponent key={index} tiket={item} isPublic={false} />
        ))}
      </div>
    </div>
  );
};
