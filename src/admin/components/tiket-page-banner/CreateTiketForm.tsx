import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useState } from 'react';
import * as z from 'zod';
import { DateTimePicker } from '../../../shared/components/DateTimePicker';
import { Button, buttonVariants } from '../../../shared/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm
} from '../../../shared/components/ui/form';
import { Input } from '../../../shared/components/ui/input';
import { SheetClose, SheetFooter } from '../../../shared/components/ui/sheet';
import { useUserWalletQuery } from '../../api/queries/user/getUserWalletQuery';
import { useCreateTiketMutation } from '../../api/mutations/tiket/useCreateTiket';
import { TiketStatusEnum } from '../../../shared/enums';

const formSchema = z.object({
  name: z.string().min(3).max(50),
  rate: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Chyba! Zadali jste špatný formát'
  }),
  bet: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Chyba! Zadali jste špatný formát'
  }),
  approximateEndDatetime: z.date()
});

interface CreateTiketFormProps {
  closeSheet(e: boolean): void;
}

export const CreateTiketForm: FC<CreateTiketFormProps> = ({ closeSheet }) => {
  const [approximateEndDateTime, setApproximateEndDateTime] = useState<Date>(new Date());
  const { data } = useUserWalletQuery();
  const createTiket = useCreateTiketMutation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      rate: '0',
      bet: '0',
      approximateEndDatetime: approximateEndDateTime
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    values.approximateEndDatetime = approximateEndDateTime;
    const payload ={...values, rate:Number(values.rate),bet: Number(values.bet ), status:TiketStatusEnum.notEvaluated }
    createTiket.mutate(payload as any, {
      onSuccess(){
        closeSheet(true);
      }
    })
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Název tiketu</FormLabel>
              <FormControl>
                <Input placeholder="začněte psát..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Celkový kurz</FormLabel>
              <FormControl>
                <Input type="number" placeholder="začněte psát..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vsadit částku</FormLabel>
              <FormControl>
                <Input type="number" placeholder="začněte psát..." {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>
                <small>
                  zůstatek na účtu:{' '}
                  <span className="font-medium">
                    {(data?.data.balance! - Number(field.value)).toFixed(2)}Kč
                  </span>
                </small>
              </FormDescription>
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Přibližný datum a čas ukončení</FormLabel>
          <FormControl>
            <DateTimePicker date={approximateEndDateTime} setDate={setApproximateEndDateTime} />
          </FormControl>
          <FormMessage />
        </FormItem>
        <div className="grid py-2 text-sm text-end text-gray-500">
          <span>Možná výhra:</span>
          <span className="font-medium text-lg">
            {(Number(form.watch('bet')) * Number(form.watch('rate'))).toFixed(2)}Kč
          </span>
        </div>
        <SheetFooter>
          <div className="space-x-2">
            <SheetClose className={buttonVariants({ variant: 'outline' })}>Zrušit</SheetClose>
            <Button variant="default" type="submit">
              Vytvořit
            </Button>
          </div>
        </SheetFooter>
      </form>
    </Form>
  );
};
