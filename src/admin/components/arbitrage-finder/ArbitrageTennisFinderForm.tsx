import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { FC, useState } from 'react';
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
import { ArbitrageData, ArbitrageLinksParams } from '../../../shared/service/arbitrage/interfaces';
import { service } from '../../../shared/service/service';

const formSchema = z.object({
  tipsport: z.string().min(5),
  fortuna: z.string().min(5),
  desiredBet: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Chyba! Zadali jste špatný formát'
  }),
});

interface ArbitrageTennisFinderFormProps {
  onSubmitClick(e: ArbitrageData | undefined): void;
}

export const ArbitrageTennisFinderForm: FC<ArbitrageTennisFinderFormProps> = ({
  onSubmitClick
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipsport: 'https://www.tipsport.cz/kurzy/tenis/tenis-muzi-dvouhra/davis-cup-80856',
      fortuna: 'https://www.ifortuna.cz/sazeni/tenis/m-davis-cup-dvouhra',
      desiredBet: '1000',
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const payload: ArbitrageLinksParams = {
      ...values,
      desiredBet: Number(values.desiredBet)
    };
    let aData: ArbitrageData;
    service.arbitrage
      .getTennis(payload)
      .then((data) => {
        aData = data;
      })
      .finally(() => {
        onSubmitClick(aData);
        setLoading(false);
      });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
      <section className="flex gap-2">
        <FormField
          control={form.control}
          name="tipsport"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Tipsport tenis</FormLabel>
              <FormControl>
                <Input placeholder="vypiště url na Tipsport list tennisu..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fortuna"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Fortuna tenis</FormLabel>
              <FormControl>
                <Input placeholder="vypiště url na Fortunu list tennisu..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </section>
        <FormField
          control={form.control}
          name="desiredBet"
          render={({ field }) => (
            <FormItem className='w-[300px]'>
              <FormLabel>Částka k vsazení</FormLabel>
              <FormControl>
                <Input type="number" placeholder="začněte psát..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="animate-spin mr-2" />}
          Vyhledat
        </Button>
      </form>
    </Form>
  );
};
