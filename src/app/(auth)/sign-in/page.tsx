'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { VerifyOtpTab } from './verify-otp-tab';
import { RequestOtpTab } from './request-otp-tab';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
	const [currentTab, setCurrentTab] = useState<'request-otp' | 'verify-otp'>('request-otp');

	return (
		<div className="grid min-h-dvh grid-cols-2 p-4">
			<div className="h-full">
				<div className="relative h-full p-4">
					<Image src="/kanban_branding.png" alt="logo" width={120} height={64} className="absolute top-5 left-5 z-50" />
					<Image src="/login-cover.png" alt="cover" fill className="overflow-hidden rounded-2xl object-cover" />

					<div className="absolute bottom-4 left-4 flex flex-col">
						<span className="text-muted-foreground text-sm font-medium">
							© Kanban - Logistic | {new Date().getFullYear()}
						</span>
					</div>
				</div>
			</div>

			<AnimatePresence mode="wait">
				<motion.div
					key={currentTab}
					initial={{ x: currentTab !== 'request-otp' ? 100 : -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: currentTab !== 'verify-otp' ? 100 : 0, opacity: 0 }}
					transition={{ duration: 0.2, type: 'tween' }}
					className="relative flex h-full w-full flex-col items-center justify-center"
				>
					<>
						<div className="absolute top-4 right-4">
							<Button asChild variant="link" className="text-muted-foreground">
								<Link href="/">Back to site</Link>
							</Button>
						</div>

						{currentTab === 'request-otp' && <RequestOtpTab onTabChange={(tab) => setCurrentTab(tab)} />}

						{currentTab === 'verify-otp' && <VerifyOtpTab onTabChange={(tab) => setCurrentTab(tab)} />}
					</>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
