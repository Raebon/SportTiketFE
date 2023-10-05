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
import {
  ArbitrageData,
  ArbitrageLinksParams,
  ArbitrageResult
} from '../../../shared/service/arbitrage/interfaces';
import { service } from '../../../shared/service/service';
import { TennisLoaderEventManagement } from './feature/TennisLoaderEventManagement';
import { EventLink } from './feature/utils';
import SearchingArbitrageDialog from './feature/components/SearchingArbitrageDialog';
import { getCurrentDateInFormat } from '../../../shared/lib/get-current-date-in-format';

const formSchema = z.object({
  tipsport: z.string().min(5),
  fortuna: z.string().min(5),
  desiredBet: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Chyba! Zadali jste špatný formát'
  })
});

interface ArbitrageTennisFinderFormProps {
  onSubmitClick(e: ArbitrageData | undefined): void;
}

export const ArbitrageTennisFinderForm: FC<ArbitrageTennisFinderFormProps> = ({
  onSubmitClick
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingFromLoader, setLoadingFromLoader] = useState<boolean>(false);
  const [dataFromLoader, setDataFromLoader] = useState<ArbitrageResult[][]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipsport: 'https://www.tipsport.cz/kurzy/tenis/tenis-muzi-dvouhra/davis-cup-80856',
      fortuna: 'https://www.ifortuna.cz/sazeni/tenis/m-davis-cup-dvouhra',
      desiredBet: '1000'
    }
  });

  const fetchData = async (payload: ArbitrageLinksParams) => {
    setLoading(true);
    let aData: ArbitrageData;
    await service.arbitrage
      .getTennis(payload)
      .then((data) => {
        aData = data;
      })
      .finally(() => {
        onSubmitClick(aData);
        setLoading(false);
      });
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const payload: ArbitrageLinksParams = {
      ...values,
      desiredBet: Number(values.desiredBet)
    };
    fetchData(payload);
  };
  const startSearchingArbitrageFromLoader = async (e: EventLink[]) => {
    setDataFromLoader([]);
    setLoadingFromLoader(true);
    setLoading(true);
    let newData: ArbitrageResult[][] = [];
    for (let i = 0; i <  e.length; i++) {
      let payload: ArbitrageLinksParams = {
        tipsport: `${e[i].tipsportLink}?timeFilter=form.period.today`, 
        fortuna: `${e[i].fortunaLink}?date=${getCurrentDateInFormat()}`,
        desiredBet: Number(form.getValues('desiredBet'))
      };
      await service.arbitrage
        .getTennis(payload)
        .then((data) => {
          if (data && data.data && data.data.result) {
            newData.push(...data.data.result);
          }
        })
        .finally(() => {
          setDataFromLoader([...dataFromLoader, ...newData]);
          console.log(newData);
        });
    }
    // setLoadingFromLoader(false);
    setLoading(false);
  };

  const closeLoaderDialog = () => setLoadingFromLoader(false);

  return (
    <>
      <SearchingArbitrageDialog
        open={loadingFromLoader}
        data={dataFromLoader}
        close={closeLoaderDialog}
        isFetching={loading}
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          <div className="flex justify-end">
            <FormField
              control={form.control}
              name="desiredBet"
              render={({ field }) => (
                <FormItem className="w-[300px]">
                  <FormLabel>Částka k vsazení</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="začněte psát..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between gap-5 w-full">
            <TennisLoaderEventManagement
              onClick={startSearchingArbitrageFromLoader}
              isLoading={loading}
            />
            <Button type="submit" disabled={loading} className="min-w-[88px]">
              {loading ? <Loader2 className="animate-spin mx-auto" /> : 'Vyhledat'}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
