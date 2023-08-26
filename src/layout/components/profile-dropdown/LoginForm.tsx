import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useContext } from 'react';
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
import AuthContext, { AuthContextType } from '../../../shared/context/AuthContext';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  userName: z.string().min(3).max(50),
  password: z.string()
});

interface LoginFormProps {
  login(e: z.infer<typeof formSchema>): void;
}

const LoginForm: FC<LoginFormProps> = ({ login }) => {
  const { loginLoading } = useContext<AuthContextType | any>(AuthContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      password: ''
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    login(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Login</FormLabel>
              <FormControl>
                <Input placeholder="začněte psát..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Heslo</FormLabel>
              <FormControl>
                <Input type="password" placeholder="začněte psát..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" variant={'default'} className="mt-4 flex gap-2">
            {loginLoading && <Loader2 className="animate-spin" />}
            Přihlásit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
