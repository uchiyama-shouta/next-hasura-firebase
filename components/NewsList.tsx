import { VFC, memo } from "react";
import { useQueryNews } from "../hooks/useQueryNews";
import NewsItem from "./NewsItem";

const NewsList: VFC = () => {
	const { isLoading, isError, data } = useQueryNews();
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;
	return (
		<ul className="w-full">
			{data?.map((news) => (
				<NewsItem key={news.id} news={news} />
			))}
		</ul>
	);
};
export default memo(NewsList);
