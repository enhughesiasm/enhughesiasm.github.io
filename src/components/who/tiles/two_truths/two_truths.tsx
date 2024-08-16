import { useState } from 'react';
import { truths } from '../../../../data/truths/truths';
import lies from '../../../../data/truths/lies.json';
import { Refresh } from 'iconoir-react';

const choose = <T,>(arr: T[], number: number) => {
	const ret: T[] = [];

	while (number > 0) {
		const candidate = arr[Math.floor(Math.random() * arr.length)];
		if (!ret.includes(candidate)) {
			ret.push(candidate);
			number--;
		}
	}

	return ret;
};

const getSelectedTruths = () => {
	const selectedTruths = choose(truths, 2);
	const selectedLie = choose(lies, 1) as string[];

	return selectedTruths
		.map((t) => {
			return { truth: true, text: t, clicked: false };
		})
		.concat(
			selectedLie.map((l) => {
				return { truth: false, text: l, clicked: false };
			})
		)
		.sort(() => Math.random() - 0.5);
};

export const TwoTruths = () => {
	const [selected, setSelected] = useState(getSelectedTruths());

	return (
		<div className='space-y-6'>
			<ul className='mt-3 space-y-6'>
				{selected.map((item, i) => (
					<li
						suppressHydrationWarning
						key={`truths-item-${i}`}
						className={`cursor-pointer py-2 font-serif text-base font-bold xl:text-lg ${
							item.clicked && !item.truth
								? 'text-red-500 line-through'
								: ''
						}
						${item.clicked && item.truth ? 'text-green-500' : ''}
						`}
						onClick={() => {
							const newSelected = [...selected];
							const newItem = newSelected.find(
								(a) => a.text === item.text
							);
							if (newItem) {
								newItem.clicked = true;
							}

							setSelected(newSelected);
						}}>
						{item.text}
					</li>
				))}
			</ul>
			<div>
				<a
					className='cursor-pointer rounded-xl bg-green-500 px-6 py-2 text-white hover:bg-green-400'
					onClick={() => setSelected(getSelectedTruths())}>
					<Refresh className='inline pr-2' /> more truths
				</a>
			</div>
		</div>
	);
};
