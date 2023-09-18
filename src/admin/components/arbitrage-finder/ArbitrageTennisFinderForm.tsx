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
import { ArbitrageData } from '../../../shared/service/arbitrage/interfaces';
import { service } from '../../../shared/service/service';

const formSchema = z.object({
  tipsport: z.string().min(5),
  fortuna: z.string().min(5)
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
      fortuna: 'https://www.ifortuna.cz/sazeni/tenis/m-davis-cup-dvouhra'
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    let aData: ArbitrageData;
    service.arbitrage
      .getTennis(values)
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
        <FormField
          control={form.control}
          name="tipsport"
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
              <FormLabel>Fortuna tenis</FormLabel>
              <FormControl>
                <Input placeholder="vypiště url na Fortunu list tennisu..." {...field} />
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
