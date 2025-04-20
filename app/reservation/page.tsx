'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Container } from '@/components/ui/container';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useReservationStore } from '@/lib/store/reservation-store';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
	date: z.date({
		required_error: 'Please select a date',
	}),
	time: z.string().min(1, 'Please select a time'),
	guests: z.string().min(1, 'Please select number of guests'),
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Please enter a valid email'),
	phone: z.string().min(10, 'Please enter a valid phone number'),
	specialRequests: z.string().optional(),
});

const timeSlots = [
	'17:00',
	'17:30',
	'18:00',
	'18:30',
	'19:00',
	'19:30',
	'20:00',
	'20:30',
	'21:00',
	'21:30',
];

export default function ReservationPage() {
	const [date, setDate] = useState<Date>();
	const addReservation = useReservationStore((state) => state.addReservation);
	const { toast } = useToast();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			specialRequests: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		addReservation({
			...values,
			date: values.date,
			guests: parseInt(values.guests, 10),
		});

		toast({
			title: 'Reservation Confirmed',
			description: `Your reservation for ${format(values.date, 'PPP')} at ${
				values.time
			} has been confirmed.`,
		});

		form.reset();
	};

	return (
		<div className='pt-24 pb-16'>
			<Container>
				<div className='max-w-2xl mx-auto'>
					<h1 className='text-3xl font-playfair font-bold mb-6'>
						Make a Reservation
					</h1>

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<FormField
									control={form.control}
									name='date'
									render={({ field }) => (
										<FormItem className='flex flex-col'>
											<FormLabel>Date</FormLabel>
											<Calendar
												mode='single'
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) => date < new Date()}
												className='rounded-md border'
											/>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className='space-y-6'>
									<FormField
										control={form.control}
										name='time'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Time</FormLabel>
												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder='Select a time' />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														{timeSlots.map((time) => (
															<SelectItem key={time} value={time}>
																{time}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name='guests'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Number of Guests</FormLabel>
												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder='Select number of guests' />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														{Array.from({ length: 10 }, (_, i) => i + 1).map(
															(num) => (
																<SelectItem key={num} value={num.toString()}>
																	{num} {num === 1 ? 'Guest' : 'Guests'}
																</SelectItem>
															)
														)}
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</div>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input placeholder='Your name' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													type='email'
													placeholder='Your email'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone</FormLabel>
										<FormControl>
											<Input placeholder='Your phone number' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='specialRequests'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Special Requests</FormLabel>
										<FormControl>
											<Textarea
												placeholder='Any special requests or dietary requirements?'
												className='resize-none'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type='submit' className='w-full'>
								Confirm Reservation
							</Button>
						</form>
					</Form>
				</div>
			</Container>
		</div>
	);
}
