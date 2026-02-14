import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
	// empty state
	if (tasks.length === 0) {
		return <p>No tasks match the selected filters.</p>;
	}

	return (
		<div className="task-list">
			{tasks.map((task) => (
				<TaskItem
					key={task.id}
					task={task}
					onStatusChange={onStatusChange}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
}
