import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import * as z from 'zod';
import { Button } from '../../../../../shared/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useForm
} from '../../../../../shared/components/ui/form';
import { Input } from '../../../../../shared/components/ui/input';
import { EventLink } from '../utils';

const formSchema = z.object({
  name: z.string().min(1),
  tipsportLink: z.string().min(5),
  fortunaLink: z.string().min(5)
});
interface AddLinkFormProps {
  addRow(e: EventLink): void;
}

const AddLinkForm: FC<AddLinkFormProps> = ({ addRow }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      tipsportLink: '',
      fortunaLink: ''
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addRow(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form className="flex">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full p-4">
              <FormControl>
                <Input placeholder="Název..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tipsportLink"
          render={({ field }) => (
            <FormItem className="w-full  p-4">
              <FormControl>
                <Input placeholder="Tipsport link..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fortunaLink"
          render={({ field }) => (
            <FormItem className="w-full p-4">
              <FormControl>
                <Input placeholder="Fortuna link..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end p-4">
          <Button type="button" onClick={form.handleSubmit(onSubmit)}>
            +
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddLinkForm;
