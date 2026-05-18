'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { THEME_STORAGE_KEY } from '@/lib/theme';

type ProvidersProps = {
	children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
	return (
		<NextThemesProvider
			attribute="data-theme"
			defaultTheme="system"
			enableSystem
			enableColorScheme
			disableTransitionOnChange
			storageKey={THEME_STORAGE_KEY}
		>
			{children}
		</NextThemesProvider>
	);
}
