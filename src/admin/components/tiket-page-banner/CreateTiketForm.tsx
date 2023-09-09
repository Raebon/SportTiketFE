import { FC } from 'react';
import { CreateTiket } from '../../../shared/service/tiket/interfaces';
import { useCreateTiketMutation } from '../../api/mutations/tiket/useCreateTiket';
import { TiketForm } from '../tiket-form/TiketForm';

interface CreateTiketFormProps {
  closeSheet(e: boolean): void;
}

export const CreateTiketForm: FC<CreateTiketFormProps> = ({ closeSheet }) => {
  const createTiket = useCreateTiketMutation();

  const onSubmit = (payload: CreateTiket) => {
    createTiket.mutate(payload, {
      onSuccess() {
        closeSheet(true);
      }
    });
  };
  return <TiketForm onSubmitClick={onSubmit} />;
};
