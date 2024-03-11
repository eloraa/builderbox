'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';
import { Drawer, DrawerBody, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useFormState } from 'react-dom';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { handleUser } from '@/app/actions';
import { formSchema } from '@/app/schema';

export const GetStarted = () => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isLoading) return;
    try {
      setIsLoading(true);
      const user = await handleUser(values);

      if (user) {
        setShowForm(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error, 'error baby error');
      setIsLoading(false);
      form.setError('email', { message: 'Invalid email or password' });
    }
  }

  let timer: NodeJS.Timeout;
  const showSpinner = () => {
    setShow(true);
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setShowForm(true);
      setShow(false);
    }, 2000);
  };
  return (
    <>
      <Button onClick={showSpinner} className="px-4 py-2 h-auto bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors flex items-center gap-4 pr-8">
        <div className="overflow-hidden w-0 h-5 transition-[width]" style={{ width: show ? '20px' : '0' }}>
          <Spinner className="min-w-5"></Spinner>
        </div>
        Get Started
      </Button>
      <Drawer open={showForm} onOpenChange={setShowForm}>
        <DrawerContent className="md:max-w-sm mx-auto bg-white/5 backdrop-blur-md">
          <DrawerHeader>
            <DrawerTitle className="text-center">Sign In to Builder</DrawerTitle>
            <DrawerDescription className="text-center">Enter your email and password to sign in</DrawerDescription>
          </DrawerHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DrawerBody>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
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
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </DrawerBody>
              <DrawerFooter>
                <Button disabled={isLoading} type="submit" className="bg-white/5 disabled:hover:bg-white/5 flex items-center gap-2">
                  <div className="overflow-hidden w-0 h-5 transition-[width]" style={{ width: isLoading ? '20px' : '0' }}>
                    <Spinner className="min-w-5"></Spinner>
                  </div>
                  Submit
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full bg-black/10">
                    Later
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </DrawerContent>
      </Drawer>
    </>
  );
};
