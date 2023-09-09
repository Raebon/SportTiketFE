import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import * as z from 'zod';
import { Button } from '../../../shared/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm
} from '../../../shared/components/ui/form';
import { Input } from '../../../shared/components/ui/input';
import { RadioGroup, RadioGroupItem } from '../../../shared/components/ui/radio-group';
import { TiketStatuses } from '../../../shared/constants';
import {
  TTiket,
  TiketStatusType,
  UpdateTiketStatus
} from '../../../shared/service/tiket/interfaces';
import { useUpdateStatusTiketMutation } from '../../api/mutations/tiket/useUpdateStatusTiket';
import { getStatusText } from './utils';

const FormSchema = z.object({
  type: z.enum(['not-evaluated', 'victory', 'defeat', 'cashout'], {
    required_error: 'Je potřeba vybrat stav k vyhodnocení tiketu.'
  }),
  cashoutMoney: z
    .string()
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: 'Chyba! Zadali jste špatný formát'
    })
    .optional()
});

interface CheckTiketFormProps {
  tiket: TTiket;
  closePopover(e: boolean): void;
}

export const CheckTiketForm: FC<CheckTiketFormProps> = ({ closePopover, tiket }) => {
  const updateStatus = useUpdateStatusTiketMutation();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: tiket.status,
      cashoutMoney: '0'
    }
  });

  const cashoutMoneyWatch = form.watch('cashoutMoney');

  const isCashoutValid = () => {
    const cashoutMoneyToNumber = Number(cashoutMoneyWatch);
    return cashoutMoneyToNumber <= tiket.bet * tiket.rate;
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const updatedTiket: UpdateTiketStatus = {
      id: tiket.id,
      bet: tiket.bet,
      rate: tiket.rate,
      cashoutMoney: Number(data.cashoutMoney),
      status: data.type as TiketStatusType
    };
    updateStatus.mutate(updatedTiket, {
      onSuccess: () => {
        closePopover(true);
      }
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Vyber stav tiketu</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {TiketStatuses.map((item, index) => {
                      return (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{getStatusText(item)}</FormLabel>
                        </FormItem>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch('type') === 'cashout' && (
            <FormField
              control={form.control}
              name="cashoutMoney"
              render={({ field }) => (
                <FormItem className="m-0 space-y-0">
                  <FormControl>
                    <Input type="number" placeholder="Zadejte částku..." {...field} />
                  </FormControl>
                  <FormMessage />
                  <div className="h-[48px] mt-2">
                    {!isCashoutValid() && (
                      <p className="text-sm font-medium text-destructive">
                        Nelze cashnout více než je možná výhra tiketu
                      </p>
                    )}
                  </div>
                </FormItem>
              )}
            />
          )}
        </div>
        <div className="flex justify-end">
          <Button variant="default" type="submit" disabled={!isCashoutValid()}>
            Vyhodnotit
          </Button>
        </div>
      </form>
    </Form>
  );
};
