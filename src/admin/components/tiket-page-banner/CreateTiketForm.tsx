import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useState } from 'react';
import * as z from 'zod';
import { DateTimePicker } from '../../../shared/components/DateTimePicker';
import { Button, buttonVariants } from '../../../shared/components/ui/button';
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
import { SheetClose, SheetFooter } from '../../../shared/components/ui/sheet';

const formSchema = z.object({
  name: z.string().min(3).max(50),
  totalRate: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Chyba! Zadali jste špatný formát'
  }),
  deposit: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Chyba! Zadali jste špatný formát'
  }),
  approximateEndDatetime: z.date()
});

interface CreateTiketFormProps {
  closeSheet(e: boolean): void;
}

export const CreateTiketForm: FC<CreateTiketFormProps> = ({ closeSheet }) => {
  const [approximateEndDateTime, setApproximateEndDateTime] = useState<Date>(new Date());
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      totalRate: '0',
      deposit: '0',
      approximateEndDatetime: approximateEndDateTime
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    values.approximateEndDatetime = approximateEndDateTime;
    console.log(values);
    closeSheet(true);
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
          name="totalRate"
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
          name="deposit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vklad</FormLabel>
              <FormControl>
                <Input type="number" placeholder="začněte psát..." {...field} />
              </FormControl>
              <FormMessage />
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
        <SheetFooter className="space-x-2 pt-2">
          <SheetClose className={buttonVariants({ variant: 'outline' })}>Zrušit</SheetClose>
          <Button variant="default" type="submit">
            Vytvořit
          </Button>
        </SheetFooter>
      </form>
    </Form>
  );
};
