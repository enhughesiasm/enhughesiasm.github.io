import { EmojiThinkLeft, WarningHexagon } from 'iconoir-react';
import worries from '../../../data/worries.json';
import worryLevels from '../../../data/worry_levels.json';

export const CurrentWorry = () => {
	const level = worryLevels[Math.floor(Math.random() * worryLevels.length)];
	const worry = worries[Math.floor(Math.random() * worries.length)];
	return (
		<>
			<p className='smallPrint'>
				<EmojiThinkLeft className='mr-3 inline' />
				<strong>current concern level: </strong>
				<span>{level}</span>
			</p>
			<p className='smallPrint'>
				<WarningHexagon className='mr-3 inline' />
				<strong>cause: </strong>
				<span>{worry}</span>
			</p>
		</>
	);
};
