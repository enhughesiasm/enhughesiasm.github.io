import { OnePointCircle } from 'iconoir-react';
import { useState } from 'react';

const subtitles = [
	'where disappointment gets disappointed',
	'home of the third-best Neil Hughes',
	'may mildly improve your day',
	'better than at least one other website',
	'website officially rated "hmmm"',
	'a way to spend time',
	'a great geocities neighbour',
	'please enjoy your stay',
	'silly things about serious things',
	'expertise in generality',
	'a refuge from the internet',
];

export const RandomSubtitle: React.FC = () => {
	const [subtitle, setSubtitle] = useState<string | undefined>();

	if (!subtitle) {
		setSubtitle(subtitles[Math.floor(Math.random() * subtitles.length)]);
		return (
			<span>
				<OnePointCircle className='inline animate-spin' />
			</span>
		);
	}

	return (
		<div className='animate-fade-once'>
			{subtitle ?? (
				<span>
					<OnePointCircle className='inline animate-spin' />
				</span>
			)}
		</div>
	);
};
