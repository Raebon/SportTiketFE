import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { FC } from 'react';
import * as z from 'zod';
import { Button } from '../../../shared/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useForm
} from '../../../shared/components/ui/form';
import { Input } from '../../../shared/components/ui/input';
import { WalletLogEnum } from '../../../shared/enums';
import { IBalanceUpdateRequest } from '../../../shared/service/user/interface';
import { useWalletDepositOrCashoutMutation } from '../../api/mutations/user/useWalletDeposit';

interface CashoutFormProps {
  walletId: string;
}

export const formSchema = z.object({
  amount: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Chyba! Zadali jste špatný formát'
  })
});

const CashoutForm: FC<CashoutFormProps> = ({ walletId }) => {
  const cashout = useWalletDepositOrCashoutMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: '0'
    }
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const payload: IBalanceUpdateRequest = {
      id: walletId,
      amount: -Number(values.amount),
      type: WalletLogEnum.withdraw
    };
    cashout.mutate(payload, {
      onSuccess() {
        form.setValue('amount', '0');
      }
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-sm space-x-2">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="number" placeholder="Zadejte částku..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="space-x-2" disabled={false}>
          {false && <Loader2 className="animate-spin" />}
          <span>Vybrat</span>
        </Button>
      </form>
    </Form>
  );
};

export default CashoutForm;
