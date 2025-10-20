'use client';

import { useRouter } from 'next/navigation';

import { Button } from './ui/button';

import { ArrowLeft } from 'lucide-react';

export function BackButton() {
	const router = useRouter();

	return (
		<Button onClick={() => router.back()} variant="outline" className="bg-card">
			<ArrowLeft />
			Back
		</Button>
	);
}
