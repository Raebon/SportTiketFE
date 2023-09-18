import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { FC, useState } from 'react';
import * as z from 'zod';
import { SelectInput } from '../../../shared/components/SelectInput';
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
import { ArbitrageData, ArbitrageLinksParams, ArbitrageResult } from '../../../shared/service/arbitrage/interfaces';
import { service } from '../../../shared/service/service';
import { selectData } from './select-data';
import { Switch } from '../../../shared/components/ui/switch';
import { Label } from '../../../shared/components/ui/label';

const formSchema = z.object({
  tipsport: z.string().min(5),
  fortuna: z.string().min(5)
});

interface ArbitrageFootbalFinderFormProps {
  onSubmitClick(e: ArbitrageData | undefined): void;
}

export const ArbitrageFootbalFinderForm: FC<ArbitrageFootbalFinderFormProps> = ({
  onSubmitClick
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [newEvaluation, setNewEvaluation] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipsport: 'https://www.tipsport.cz/kurzy/fotbal/fotbal-muzi/1-ceska-liga-120',
      fortuna: 'https://www.ifortuna.cz/sazeni/fotbal/fortuna-liga'
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const payload: ArbitrageLinksParams = values;
    payload.newEvaluation = newEvaluation
    setLoading(true);
    fetchAllOptions()
    let aData: ArbitrageData;
  /*   service.arbitrage
      .getFootbal(payload)
      .then((data) => {
        aData = data;
      })
      .finally(() => {
        onSubmitClick(aData);

        setLoading(false);
      }); */
  };

  const fetchAllOptions = async () => {
    let newData:ArbitrageResult[][] = []
    for(let i =0; i < selectData.length; i++){
      const payload: ArbitrageLinksParams ={
        fortuna: selectData[i].fortunaUrl,
        tipsport: selectData[i].tipsportUrl,
        newEvaluation
      }
      await service.arbitrage
      .getFootbal(payload)
      .then((data) => {
        if(data && data.data && data.data.result){
          newData.push(...data.data.result)
        }
      }).finally(() => {
        console.log(newData)
      })
    }
    console.log(newData)
  };

  const onSelectChange = (e: string) => {
    const selectedItem = selectData.filter((item) => item.value === e);
    if (selectedItem.length === 1) {
      const payload: ArbitrageLinksParams = {
        tipsport: selectedItem[0].tipsportUrl,
        fortuna: selectedItem[0].fortunaUrl
      };
      form.setValue('tipsport', payload.tipsport!);
      form.setValue('fortuna', payload.fortuna!);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <section className="flex gap-2">
          <FormField
            control={form.control}
            name="tipsport"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tipsport fotbal</FormLabel>
                <FormControl>
                  <Input placeholder="vypiště url na Tipsport list fotbalu..." {...field} />
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
                <FormLabel>Fortuna fotbal</FormLabel>
                <FormControl>
                  <Input placeholder="vypiště url na Fortunu list fotbalu..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <div className="flex justify-center gap-5 w-full">
          <div className="flex items-center space-x-2">
            <Switch id="mode" checked={newEvaluation} onCheckedChange={setNewEvaluation} />
            <Label htmlFor="mode">Vyhledat jiné kombinace</Label>
          </div>
          <SelectInput data={selectData} onChange={onSelectChange} />

          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="animate-spin mr-2" />}
            Vyhledat
          </Button>
        </div>
      </form>
    </Form>
  );
};
