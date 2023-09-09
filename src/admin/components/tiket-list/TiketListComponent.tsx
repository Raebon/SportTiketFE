import { FC } from 'react';
import { useTiketListQuery } from '../../api/queries/tiket/getTiketListQuery';
import { TiketCardComponent } from '../tiket-card/TiketCardComponent';

interface TiketListComponentProps {}

export const TiketListComponent: FC<TiketListComponentProps> = ({}) => {
  const { isLoading, error, data } = useTiketListQuery();

  if (isLoading) return 'načítání';
  if (error) return 'chyba';

  return (
    <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2">
      {data &&
        data.data.map((item, index) => (
          <TiketCardComponent key={index} tiket={item} isPublic={false} />
        ))}
    </div>
  );
};
