import { FC } from 'react'
import { TTiket, UpdateTiket } from '../../../shared/service/tiket/interfaces';
import { TiketForm } from '../tiket-form/TiketForm';
import { useUpdateTiketMutation } from '../../api/mutations/tiket/useUpdateTiket';

interface EditTiketFormProps {
  closeSheet(e: boolean): void;
  tiket: TTiket
}

export const EditTiketForm: FC<EditTiketFormProps> = ({ closeSheet, tiket }) => {
  const updateTiket = useUpdateTiketMutation()
  const onSubmit = (payload: UpdateTiket) => {
    updateTiket.mutate(payload, {
      onSuccess() {
        closeSheet(true);
      }
    });
  };
  return <TiketForm onSubmitClick={onSubmit} tiket={tiket} actionButtonName="Uložit"/>
}