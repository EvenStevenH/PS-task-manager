import type { TaskItemProps, TaskStatus } from "../../types";

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
	// SyntheticEvent 
	const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onStatusChange(task.id, e.target.value as TaskStatus);
	};

	// visual feedback (dynamic styling via conditional rendering)
	const getStatusClass = () => {
		switch (task.status) {
			case "completed":
				return "task-completed";
			default:
				return "";
		}
	};
	const getSelectInputClass = () => {
		switch (task.status) {
			case "pending":
				return "task-input-pending";
			case "in-progress":
				return "task-input-in-progress";
			default:
				return "task-input-completed";
		}
	};
	const getPriorityClass = () => {
		switch (task.priority) {
			case "high":
				return "priority-high";
			case "medium":
				return "priority-medium";
			default:
				return "priority-low";
		}
	};
	const getPriorityStyleClass = () => {
		switch (task.priority) {
			case "high":
				return "priority-style-high";
			case "medium":
				return "priority-style-medium";
			default:
				return "priority-style-low";
		}
	};

	return (
		<div className={`task-item ${getPriorityClass()}`}>
			<div className={`task-header ${getStatusClass()} `}>
				<h3>{task.title}</h3>
				<p className="task-description">{task.description}</p>
				<p className={`task-priority ${getPriorityStyleClass()}`}>Priority: {task.priority}</p>
				<p className="due-date">Due: {task.dueDate}</p>
			</div>

			<div className="task-controls">
				<select
					value={task.status}
					onChange={handleStatusChange}
					className={`${getSelectInputClass()}`}
				>
					<option value="pending">Pending</option>
					<option value="in-progress">In Progress</option>
					<option value="completed">Completed</option>
				</select>

				<button
					onClick={() => onDelete(task.id)}
					className="deleteBtn"
				>
					Delete
				</button>
			</div>
		</div>
	);
}
