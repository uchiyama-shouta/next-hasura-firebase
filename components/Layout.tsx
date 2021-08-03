import { ReactNode, VFC } from "react";
import Head from "next/head";

type Props = {
	children: ReactNode;
	title: string;
};

const Layout: VFC<Props> = ({ children, title = "Welcome to Nextjs" }) => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
			<Head>
				<title>{title}</title>
			</Head>
			<main className="flex flex-1 flex-col justify-center items-center w-screen">
				{children}
			</main>
		</div>
	);
};

export default Layout;
