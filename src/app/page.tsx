import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Kanban Logistics • Welcome',
	description: 'Cloud portal to integrate ERP, weighing and documents flows.',
};

export default function Home() {
	return (
		<main className="min-h-[100dvh] bg-gradient-to-b from-white to-gray-50 dark:from-neutral-800 dark:to-neutral-950">
			<header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
				<div className="flex items-start gap-2">
					<div>
						<Image src="/kanban_logo.png" alt="Kanban Logistics Logo" width={32} height={32} />
					</div>
					<span className="text-lg leading-none font-bold tracking-tight">Kanban Logistics</span>
				</div>

				<nav className="space-x-2">
					<Button variant="secondary" asChild>
						<Link href="/sign-in">Sign in</Link>
					</Button>

					<Button variant="link" asChild className="text-foreground">
						<Link href="/sign-up">Sign up</Link>
					</Button>
				</nav>
			</header>

			<section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
				<div className="grid items-center gap-10 md:grid-cols-2">
					<div>
						<h1 className="text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
							Integrate <span className="text-primary">ERP</span>, <span className="text-primary">weighing</span> and{' '}
							<span className="text-primary">documents</span> in one place.
						</h1>
						<p className="mt-4 max-w-[52ch] text-gray-600 dark:text-gray-400">
							Import CSVs from your ERP, visually map fields, generate tickets, and securely provide XML/PDF — with a
							“Peppol-like” registration flow for customers and carriers.
						</p>

						<ul className="text-muted-foreground mt-6 space-y-2 text-sm">
							<li className="flex items-center gap-2">
								<span className="bg-primary mt-1 h-1.5 w-1.5 rounded-full"></span>
								Import with visual mapping (1:1) of columns.
							</li>
							<li className="flex items-center gap-2">
								<span className="bg-primary mt-1 h-1.5 w-1.5 rounded-full"></span>
								VAT validation and automatic partner onboarding.
							</li>
							<li className="flex items-center gap-2">
								<span className="bg-primary mt-1 h-1.5 w-1.5 rounded-full"></span>
								Ticket dashboard and quick export.
							</li>
						</ul>

						<div className="mt-8 flex items-center gap-3">
							<Button size="lg" asChild className="font-medium">
								<Link href="/auth/sign-in">Access platform</Link>
							</Button>

							<Button asChild variant="link" size="sm" className="text-sm">
								<Link href="/api-guide">View integration guide →</Link>
							</Button>
						</div>
					</div>

					{/* Bloco direito: “card” de resumo */}
					<div className="relative">
						<div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-orange-200/40 via-transparent to-transparent blur-lg dark:-inset-0.5 dark:via-orange-600/10 dark:blur-md" />
						<div className="bg-card relative rounded-3xl border p-6 shadow-sm">
							<h2 className="font-semibold">How it works</h2>
							<ol className="mt-3 space-y-3 text-sm text-gray-700 dark:text-gray-400">
								<li>
									<span className="font-medium">1. </span>
									Log in with email (OTP).
								</li>
								<li>
									<span className="font-medium">2. </span>
									Import CSVs and map fields on the visual canvas.
								</li>
								<li>
									<span className="font-medium">3. </span>
									Generate and share tickets (XML/PDF) with your partners.
								</li>
							</ol>

							<div className="mt-5 grid grid-cols-3 divide-x overflow-hidden rounded-xl border text-center">
								<div className="p-3">
									<div className="text-xl font-semibold">CSV</div>
									<div className="text-muted-foreground text-xs">Import</div>
								</div>
								<div className="p-3">
									<div className="text-xl font-semibold">Map</div>
									<div className="text-muted-foreground text-xs">Visual</div>
								</div>
								<div className="p-3">
									<div className="text-xl font-semibold">XML/PDF</div>
									<div className="text-muted-foreground text-xs">Tickets</div>
								</div>
							</div>

							<div className="dark:text-muted-foreground mt-5 rounded-xl bg-gray-50 p-4 text-xs text-gray-600 dark:border dark:bg-transparent">
								Ready to get started? Click on <span className="text-primary font-medium">Access platform</span> and
								authenticate to import your first data and see how simple everything can be.
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="text-muted-foreground mx-auto max-w-6xl px-6 py-8 text-xs">
				© {new Date().getFullYear()} Kanban Logistics — All rights reserved.
			</footer>
		</main>
	);
}
