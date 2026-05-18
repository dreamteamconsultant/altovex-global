'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';

type ProvidersProps = {
	children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
	return (
		<NextThemesProvider
			attribute="data-theme"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
			storageKey="altovex-theme"
		>
			{children}
		</NextThemesProvider>
	);
}
