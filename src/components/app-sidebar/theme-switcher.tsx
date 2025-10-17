'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Moon, SunMedium } from 'lucide-react';
import { DropdownMenuItem } from '../ui/dropdown-menu';

export function ThemeSwitcher() {
	const { setTheme, theme, systemTheme } = useTheme();

	const [themeLabel, setThemeLabel] = useState(
		theme === 'system'
			? systemTheme === 'light'
				? 'Light Theme'
				: 'Dark Theme'
			: theme === 'light'
				? 'Light Theme'
				: 'Dark Theme'
	);

	function toggleTheme() {
		if (theme && theme === 'system') {
			if (systemTheme === 'dark') {
				setTheme('light');
				setThemeLabel('Light Theme');
			} else {
				setTheme('dark');
				setThemeLabel('Dark Theme');
			}
		}

		if (theme && theme === 'light') {
			setTheme('dark');
			setThemeLabel('Dark Theme');
		}

		if (theme && theme === 'dark') {
			setTheme('light');
			setThemeLabel('Light Theme');
		}
	}

	useEffect(() => {
		// When theme is changed outside (e.g., system theme change), update the label accordingly.
	}, [theme]);

	return (
		<DropdownMenuItem onClick={() => toggleTheme()}>
			{themeLabel === 'Light Theme' ? <SunMedium /> : <Moon />}
			{themeLabel === 'Light Theme' ? 'Light Mode' : 'Dark Mode'}
		</DropdownMenuItem>
	);
}
