import { useCallback, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { useDebounce } from '@/hooks/use-debounce';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

import { Check, ChevronsUpDown, Loader2, SearchIcon } from 'lucide-react';

interface IProps {
	options: Array<{ value: string; label: string }>;
	isFetching: boolean;
	placeholder?: string;
	searchPlaceholder?: string;
	notFoundPlaceholder?: string;
	onSelectValue: (value: string) => void;
	onSearchValue?: (value: string) => void;
	disabled?: boolean;
}

export function AsyncAutoComplete({
	options,
	isFetching,
	placeholder = 'Select an option...',
	searchPlaceholder = 'Search...',
	notFoundPlaceholder = 'No items found.',
	onSelectValue,
	onSearchValue,
	disabled = false,
}: IProps) {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const [searchValue, setSearchValue] = useState('');

	const debouncedSearch = useDebounce(searchValue);

	function handleSearch(query: string) {
		onSearchValue?.(query);
	}

	useEffect(() => {
		onSelectValue(value);
	}, [value]);

	useEffect(() => {
		handleSearch(debouncedSearch);
	}, [debouncedSearch]);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					disabled={disabled}
					className={`w-full justify-between ${value ? undefined : 'text-muted-foreground'}`}
				>
					{value ? options.find((option) => option.value === value)?.label : placeholder}
					<ChevronsUpDown className="opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent align="start" className="w-full p-0">
				<Command>
					<div className="flex h-9 items-center gap-2 border-b px-3">
						{isFetching ? (
							<Loader2 className="size-4 shrink-0 animate-spin opacity-50" />
						) : (
							<SearchIcon className="size-4 shrink-0 opacity-50" />
						)}

						<input
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							placeholder={searchPlaceholder}
							className="'flex disabled:opacity-50', placeholder:text-muted-foreground h-9 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed"
						/>
					</div>

					<CommandList>
						<CommandEmpty>{notFoundPlaceholder}</CommandEmpty>
						<CommandGroup>
							{options.map((option) => (
								<CommandItem
									key={option.value}
									value={option.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? '' : currentValue);
										setOpen(false);
									}}
								>
									{option.label}
									<Check className={cn('ml-auto', value === option.value ? 'opacity-100' : 'opacity-0')} />
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
