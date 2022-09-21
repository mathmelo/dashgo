import type { AppProps } from 'next/app';

import { QueryClientProvider } from '@tanstack/react-query';
import { SidebarContextProvider } from '../contexts/SidebarDrawerContext';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '../services/queryClient';
import { makeServer } from '../services/mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarContextProvider>
          <Component {...pageProps} />
        </SidebarContextProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
