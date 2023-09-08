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
import { TiketStatusType, UpdateStatusTiket } from '../../../shared/service/tiket/interfaces';
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
  id: string;
  status: TiketStatusType;
  closePopover(e: boolean): void;
}

export const CheckTiketForm: FC<CheckTiketFormProps> = ({ id, status, closePopover }) => {
  const updateStatus = useUpdateStatusTiketMutation();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: status,
      cashoutMoney: "0"
    }
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const updatedTiket: UpdateStatusTiket = {
      id:id,
      status: data.type as TiketStatusType,
      cashoutMoney: Number(data.cashoutMoney)
    }
    updateStatus.mutate(
      updatedTiket,
      {
        onSuccess: () => {
          closePopover(true);
        }
      }
    );
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
        {form.watch("type") ===  "cashout" && (
          <FormField
          
          control={form.control}
          name="cashoutMoney"
          render={({ field }) => (
            <FormItem className='m-0 space-y-0'>
              <FormControl >
                <Input  type="number" placeholder="Zadejte částku..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          )}
          </div>
          <div className='flex justify-end'>
        <Button variant="default" type="submit">
          Vyhodnotit
        </Button>
          </div>
      </form>
    </Form>
  );
};
