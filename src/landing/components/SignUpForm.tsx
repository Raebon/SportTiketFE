import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import * as z from 'zod';
import { Button } from '../../shared/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm
} from '../../shared/components/ui/form';
import { Input } from '../../shared/components/ui/input';
import { useSignUpMutation } from '../api/mutation/auth/useSignUp';
import { CreateUserDto } from '../../shared/service/auth/dto/CreateUserDto';
import { service } from '../../shared/service/service';
import AuthContext, { AuthContextType } from '../../shared/context/AuthContext';
import { useContext } from 'react';
import { LoginDetail } from '../../shared/interfaces';
import { useNavigate } from 'react-router-dom';

const formSchema = z
  .object({
    userName: z
      .string()
      .min(3, {
        message: 'Přezdívka musí obsahovat minimálně 3 znaky.'
      })
      .max(50, {
        message: 'Přezdívka musí obsahovat maximalně 50 znaků.'
      })
      .refine(async (e) => {
        const validation = await service.auth.isUserNameValid(e);
        return validation.data;
      }, 'Tuhle přezdívku již používá jiný uživatel'),
    firstName: z.string(),
    lastName: z.string(),
    email: z
      .string()
      .min(1)
      .email('Tohle není validní e-mail.')
      .refine(async (e) => {
        const validation = await service.auth.isEmailValid(e);
        return validation.data;
      }, 'Tenhle email již používá jiný uživatel'),
    password: z.string().min(4),
    confirmPassword: z.string().min(4)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Hesla se neshodují.',
    path: ['confirmPassword']
  });

export const SignUpForm = ({}) => {
  const { login } = useContext<AuthContextType | any>(AuthContext);
  const signUp = useSignUpMutation();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newUser = new CreateUserDto(values);
    signUp.mutate(newUser, {
      onSuccess: () => {
        let loginDetail: LoginDetail = {
          userName: newUser.userName,
          password: newUser.password
        };
        login(loginDetail).then(() => {
          navigate('/');
        });
      }
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jméno</FormLabel>
                <FormControl>
                  <Input placeholder="jméno" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Příjmení</FormLabel>
                <FormControl>
                  <Input placeholder="příjmení" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Přezdívka</FormLabel>
              <FormControl>
                <Input placeholder="přezdívka" {...field} />
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
                <Input type="password" placeholder="heslo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Potvrďte heslo</FormLabel>
              <FormControl>
                <Input type="password" placeholder="znovu heslo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button type="submit" className="mt-4 flex gap-2">
            {false && <Loader2 className="animate-spin" />}
            Registrovat se
          </Button>
        </div>
      </form>
    </Form>
  );
};
