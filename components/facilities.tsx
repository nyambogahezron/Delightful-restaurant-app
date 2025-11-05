import { Button } from '@/components/ui/button';

const facilities = [
	{
		title: 'Swimming Pool',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		image: 'https://picsum.photos/seed/pool/800/600',
	},
	{
		title: 'Spa Center',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		image: 'https://picsum.photos/seed/spa/800/600',
	},
	{
		title: 'Fitness Center',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		image: 'https://picsum.photos/seed/gym/800/600',
	},
	{
		title: 'Buffet Breakfast',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		image: 'https://picsum.photos/seed/buffet/800/600',
	},
];

export default function Facilities() {
	return (
		<section className='py-20 px-4 bg-background'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-16'>
					<div className='text-accent text-sm font-semibold tracking-wide mb-4'>
						FACILITIES
					</div>
					<h2 className='text-4xl md:text-5xl font-bold text-balance'>
						Our Delightful <span className='text-accent'>Facilities</span>
					</h2>
				</div>

				{/* Facilities grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
					{facilities.map((facility, i) => (
						<div
							key={i}
							className='bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow'
						>
							<div className='relative h-48 overflow-hidden'>
								<img
									src={facility.image || '/placeholder.svg'}
									alt={facility.title}
									className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
							</div>
							<div className='p-6 text-center'>
								<div className='w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4'>
									<div className='w-8 h-8 text-accent'>🏨</div>
								</div>
								<h3 className='text-xl font-bold mb-2'>{facility.title}</h3>
								<p className='text-muted-foreground text-sm mb-4'>
									{facility.description}
								</p>
								<Button
									variant='outline'
									className='border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent'
								>
									Read More
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* Rooms section */}
				<div className='flex justify-between items-center'>
					<div>
						<div className='text-accent text-sm font-semibold tracking-wide mb-2'>
							OUR FAVORITE ROOMS
						</div>
						<h3 className='text-3xl md:text-4xl font-bold'>
							Our Rooms & <span className='text-accent'>Suites</span>
						</h3>
					</div>
					<Button className='bg-accent hover:bg-accent/90 text-accent-foreground'>
						View All Rooms
					</Button>
				</div>
			</div>
		</section>
	);
}
