import { GraphQLClient, request } from "graphql-request";
import { useQuery } from "react-query";
import { News } from "../types/types";
import { GET_NEWS } from "../queries/queries";

type NewsRes = {
	news: News[];
};

export const fetchNews = async () => {
	const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT || "";
	const client = new GraphQLClient(endpoint, {
		headers: {
			"x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "",
			"x-hasura-access-key": "",
		},
	});
	const { news: data } = await client
		.request<NewsRes>(GET_NEWS, {})
		.then((data) => data);
	// const { news: data } = await request<NewsRes>(endpoint, GET_NEWS);
	return data;
};

export const useQueryNews = () => {
	return useQuery<News[], Error>({
		queryKey: "news",
		queryFn: fetchNews,
		staleTime: Infinity,
	});
};
