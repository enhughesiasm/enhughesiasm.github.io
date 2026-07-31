import { useEffect, useState } from 'react';

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

	useEffect(() => {
		setSubtitle(subtitles[Math.floor(Math.random() * subtitles.length)]);
	}, []);

	return <div>{subtitle ?? 'silly things about serious things'}</div>;
};
