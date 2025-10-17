'use client';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

interface ITimerProps {
	expiresInSeconds: number;
	onExpire?: (value: boolean) => void;
}

export function TimerCounter({ expiresInSeconds, onExpire }: ITimerProps) {
	const [timer, setTimer] = useState(0);
	const [minutes, setMinutes] = useState('');
	const [seconds, setSeconds] = useState('');

	const currentDate = dayjs();
	const expireDate = currentDate.add(expiresInSeconds, 'seconds');

	const durationInSeconds = expireDate.diff(currentDate, 'seconds');

	useEffect(() => {
		setTimer(durationInSeconds);

		const interval = setInterval(() => {
			const differenceDateFromNow = expireDate.diff(new Date(), 'seconds');
			const diff = differenceDateFromNow <= 0 ? 0 : differenceDateFromNow;

			setTimer(diff <= 0 ? 0 : diff);

			const minutesAmount = Math.floor(diff / 60);
			const secondsAmount = diff % 60;

			setMinutes(String(minutesAmount).padStart(2, '0'));
			setSeconds(String(secondsAmount).padStart(2, '0'));

			if (diff <= 0) {
				clearInterval(interval);
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (timer > 0) {
			onExpire?.(false);
		} else {
			onExpire?.(true);
		}
	}, [seconds, minutes, timer]);

	return (
		<div className="flex items-center justify-center gap-2">
			{timer > 0 && <span className="text-sm">Expires in:</span>}

			{timer > 0 ? (
				<div className="flex items-center text-sm">
					<span>{minutes[0]}</span>
					<span>{minutes[1]}</span>
					<div>:</div>
					<span>{seconds[0]}</span>
					<span>{seconds[1]}</span>
				</div>
			) : (
				<span className="text-sm text-rose-400">Code expired</span>
			)}
		</div>
	);
}
