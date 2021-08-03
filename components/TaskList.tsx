import { VFC, memo } from "react";
import { useQueryTasks } from "../hooks/useQueryTasks";
import TaskItem from "./TaskItem";

const TaskList: VFC = () => {
	const { status, data } = useQueryTasks();
	if (status === "loading") return <div>Loading...</div>;
	if (status === "error") return <div>Error</div>;
	if (data?.length === 0) {
		return <div>nothing</div>;
	}
	return (
		<ul>
			{data?.map((task) => (
				<TaskItem key={task.id} task={task} />
			))}
		</ul>
	);
};

export default memo(TaskList);
