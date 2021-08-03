import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { store } from "../app/store";
import { useUserChanged } from "../hooks/useUserChanged";
import { Hydrate } from "react-query/hydration";

function MyApp({ Component, pageProps }: AppProps) {
	const {} = useUserChanged();
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				refetchOnWindowFocus: false,
			},
		},
	});
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Hydrate>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
export default MyApp;
