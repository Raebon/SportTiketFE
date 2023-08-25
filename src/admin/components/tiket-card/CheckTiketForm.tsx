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
import { RadioGroup, RadioGroupItem } from '../../../shared/components/ui/radio-group';
import { toast } from '../../../shared/components/ui/use-toast';
import { TiketStatuses } from '../../../shared/constants';
import { TTiketStatuses } from '../../../shared/service/tiket/interface';
import { getStatusText } from './utils';

const FormSchema = z.object({
  type: z.enum(['not-evaluated', 'victory', 'defeat'], {
    required_error: 'Je potřeba vybrat stav k vyhodnocení tiketu.'
  })
});

interface CheckTiketFormProps {
  id: string;
  status: TTiketStatuses;
  closePopover(e: boolean): void;
}

export const CheckTiketForm: FC<CheckTiketFormProps> = ({ id, status, closePopover }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: status
    }
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    closePopover(true);
    toast({
      title: 'Vaše akce byla úspěšná',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
        <Button variant="default" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
