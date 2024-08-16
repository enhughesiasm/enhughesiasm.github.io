import { EmojiThinkLeft, OnePointCircle, WarningHexagon } from 'iconoir-react';
import { Suspense, useEffect, useState } from 'react';
import worries from '../../../data/worries.json';
import worryLevels from '../../../data/worry_levels.json';

export const CurrentWorry = () => {
	const [level, setLevel] = useState<string | undefined>();
	const [worry, setWorry] = useState<string | undefined>();

	useEffect(() => {
		setLevel(worryLevels[Math.floor(Math.random() * worryLevels.length)]);
		setWorry(worries[Math.floor(Math.random() * worries.length)]);
	}, []);

	// const level = worryLevels[Math.floor(Math.random() * worryLevels.length)];
	// const worry = worries[Math.floor(Math.random() * worries.length)];

	return (
		<Suspense
			fallback={
				<span>
					<OnePointCircle className='inline animate-spin' />
				</span>
			}>
			<div className='grid animate-fade-once grid-cols-2 gap-x-2 gap-y-3 rounded bg-red-100 px-3 py-2 group-hover:bg-transparent'>
				<div className='mr-3 flex items-center justify-end text-right'>
					<strong>current concern level: </strong>
				</div>
				<div className='flex items-center  rounded bg-red-200 px-3 text-sm group-hover:bg-transparent'>
					<div>
						<EmojiThinkLeft className='float-left mr-3' />
					</div>
					<span>{level}</span>
				</div>
				<div className='mr-3 flex items-center justify-end '>
					<strong>cause: </strong>
				</div>
				<div className='flex items-center rounded bg-red-200 px-3 text-sm group-hover:bg-transparent'>
					<div>
						<WarningHexagon className='float-left mr-3' />
					</div>
					<span>{worry}</span>
				</div>
			</div>
		</Suspense>
	);
};
