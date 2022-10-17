import { time } from 'console';
import { useEffect, useState } from 'react';
import './Timers.css';

interface TimerProps {
	name: number;
	value: number;
	onRemove: () => void;
}

interface ITimer {
	name: number;
	value: number;
}

/**
 * Scenario:
 * - When you click on 'Add' button, create a new timer, with a random time out (< 30 seconds)
 * - The timers should tick until the time out, and must disappear
 * - If you click "Remove" button in front of any timer, that timer should be removed
 */
export function Timers() {
	let [id, setId] = useState(1);
	let [timers, setTimers] = useState<ITimer[]>([]);

	let addTimer = () => {
		setTimers([...timers, { name: id, value: 10 }]);
		setId(id + 1);
	};

	let removeTimer = (id: number) => {
		const newTimers = timers.filter((timer) => timer.name !== id);
		setTimers(newTimers);
	};

	return (
		<div className='container'>
			<button className='add' onClick={addTimer}>
				Add
			</button>
			<br />
			<br />

			{timers?.map((timer) => (
				<Timer
					key={timer.name}
					name={timer.name}
					value={timer.value}
					onRemove={() => removeTimer(timer.name)}
				/>
			))}
		</div>
	);
}

function Timer({ name, value, onRemove }: TimerProps) {
	// const;
	console.log('im here');

	let [time, setTime] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (time !== 0) setTime(time - 1);
			else return onRemove();
		}, 1000);
		return () => clearTimeout(timer);
	}, [time, onRemove]);

	setInterval(() => {}, 1000);

	return (
		<div className='timer'>
			<p>
				Timer {name}:{' '}
				<b>
					{time} second{time !== 1 ? 's' : ''} elapsed
				</b>
			</p>
			<button onClick={onRemove}>Remove</button>
		</div>
	);
}
