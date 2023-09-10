import { FC, useContext } from 'react';
import { CreateTiket } from '../../../shared/service/tiket/interfaces';
import { useCreateTiketMutation } from '../../api/mutations/tiket/useCreateTiket';
import { TiketForm } from '../tiket-form/TiketForm';
import { FiltersContext } from '../../pages/tiket-management/TiketManagement';

interface CreateTiketFormProps {
  closeSheet(e: boolean): void;
}

export const CreateTiketForm: FC<CreateTiketFormProps> = ({ closeSheet }) => {
  const filters = useContext(FiltersContext);
  const createTiket = useCreateTiketMutation(filters);

  const onSubmit = (payload: CreateTiket) => {
    createTiket.mutate(payload, {
      onSuccess() {
        closeSheet(true);
      }
    });
  };
  return <TiketForm onSubmitClick={onSubmit} />;
};
