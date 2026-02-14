import { useState } from "react";
import type { TaskFilterProps, TaskStatus, TaskPriority } from "../../types";

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
	const [status, setStatus] = useState<TaskStatus | "">("");
	const [priority, setPriority] = useState<TaskPriority | "">("");

	const handleFilterChange = (newStatus: TaskStatus | "", newPriority: TaskPriority | "") => {
		onFilterChange({
			status: newStatus || undefined,
			priority: newPriority || undefined,
		});
	};

	return (
		<div className="task-filter">
			<div className="input-section">
				<label htmlFor="status-input">Status: </label>
				<select
					value={status}
					onChange={(e) => {
						const value = e.target.value as TaskStatus | "";
						setStatus(value);
						handleFilterChange(value, priority);
					}}
					id="status-input"
				>
					<option value="">All Statuses</option>
					<option value="pending">Pending</option>
					<option value="in-progress">In Progress</option>
					<option value="completed">Completed</option>
				</select>
			</div>

			<div className="input-section">
				<label htmlFor="priority-input">Priority: </label>
				<select
					value={priority}
					onChange={(e) => {
						const value = e.target.value as TaskPriority | "";
						setPriority(value);
						handleFilterChange(status, value);
					}}
					id="priority-input"
				>
					<option value="">All Priorities</option>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
			</div>
		</div>
	);
}
