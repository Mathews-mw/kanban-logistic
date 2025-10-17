'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useDebounce } from '@/hooks/use-debounce';

import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/search-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { X } from 'lucide-react';

interface IProps {
	isFetching: boolean;
}

export function Filters({ isFetching }: IProps) {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const { replace } = useRouter();

	const perPageParams = searchParams.get('perPage') ?? '10';
	const searchQueryParams = searchParams.get('search') ?? '';

	const [perPageValue, setPerPageValue] = useState(perPageParams);
	const [searchNameValue, setSearchNameValue] = useState(searchQueryParams);

	const debouncedSearch = useDebounce(searchNameValue);

	function handlePerPageFilter(perPage: string) {
		setPerPageValue(perPage);

		if (perPageValue) {
			params.set('perPage', perPageValue);
		} else {
			params.delete('perPage');
		}

		replace(`${pathname}?${params.toString()}`);
	}

	function handleSearchByName(search: string) {
		if (search) {
			params.set('search', search);
		} else {
			params.delete('search');
		}

		replace(`${pathname}?${params.toString()}`);
	}

	function handleClearSearchByNameFilter() {
		setSearchNameValue('');
		params.delete('search');
		replace(`${pathname}?${params.toString()}`);
	}

	function clearAllFilters() {
		setSearchNameValue('');

		params.delete('search');

		replace(`${pathname}?${params.toString()}`);
	}

	useEffect(() => {
		handleSearchByName(debouncedSearch);
	}, [debouncedSearch]);

	useEffect(() => {
		if (perPageValue) {
			params.set('perPage', perPageValue);
		} else {
			params.delete('perPage');
		}

		replace(`${pathname}?${params.toString()}`);
	}, [perPageValue]);

	return (
		<div className="flex gap-2">
			<SearchInput
				placeholder="Search client..."
				value={searchNameValue}
				isLoading={isFetching}
				onChangeValue={setSearchNameValue}
				onSearch={() => handleSearchByName(searchNameValue)}
				onClear={handleClearSearchByNameFilter}
				className="w-[280px]"
			/>

			<Select defaultValue={perPageValue} onValueChange={handlePerPageFilter} disabled={isFetching}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Registers" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All</SelectItem>
					<SelectItem value="10">10</SelectItem>
					<SelectItem value="15">15</SelectItem>
					<SelectItem value="20">20</SelectItem>
					<SelectItem value="25">25</SelectItem>
					<SelectItem value="30">30</SelectItem>
					<SelectItem value="40">40</SelectItem>
					<SelectItem value="50">50</SelectItem>
				</SelectContent>
			</Select>

			<div className="ml-4">
				<Button variant="secondary" onClick={() => clearAllFilters()}>
					<X /> Clear all
				</Button>
			</div>
		</div>
	);
}
