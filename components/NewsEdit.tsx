import { VFC, memo, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppMutate } from "../hooks/useAppMutate";
import { selectNews, setEditedNews } from "../slices/uiSlice";

const NewsEdit: VFC = () => {
	const dispatch = useDispatch();
	const editedNews = useSelector(selectNews);
	const { createNewsMutation, updateNewsMutation } = useAppMutate();

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (editedNews.id === "") {
			createNewsMutation.mutate(editedNews.content);
		} else {
			updateNewsMutation.mutate(editedNews);
		}
	};
   if(createNewsMutation.error || updateNewsMutation.error) {
      return <div>Error</div>
   }
	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					className="mb-3 px-3 py-2 border border-gray-300"
					placeholder="new news ?"
					value={editedNews.content}
					onChange={(e) =>
						dispatch(setEditedNews({ ...editedNews, content: e.target.value }))
					}
				/>
				<button
					className="disabled:opacity-40 my-3 mx-3 py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
					disabled={!editedNews.content}
				>
					{editedNews.id === "" ? "Create" : "Update"}
				</button>
			</form>
		</div>
	);
};

export default memo(NewsEdit);
