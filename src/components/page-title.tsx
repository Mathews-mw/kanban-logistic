import { BackButton } from './back-button';

interface IProps {
	title: string;
	description?: string;
	backButton?: boolean;
}

export function PageTitle({ title, description, backButton = false }: IProps) {
	return (
		<div className="flex w-full justify-between">
			<div className="flex flex-col">
				<h1 className="text-lg font-black sm:text-2xl">{title}</h1>
				{description && <p className="text-muted-foreground text-sm sm:text-base">{description}</p>}
			</div>

			{backButton && (
				<div className="mt-2">
					<BackButton />
				</div>
			)}
		</div>
	);
}
