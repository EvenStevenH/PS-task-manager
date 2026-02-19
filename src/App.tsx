import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import type { Task, TaskStatus } from "./types";
import "./App.css";

const initialTasks: Task[] = [
	{
		id: "1",
		title: "Practice song",
		description: 'Learning to sing "I Thought I Saw Your Face Today" by She & Him while playing guitar.',
		status: "pending",
		priority: "low",
		dueDate: "2026-02-20",
	},
	{
		id: "2",
		title: "Drink water",
		description: "I need hydration... I think.",
		status: "in-progress",
		priority: "medium",
		dueDate: "2026-02-25",
	},
	{
		id: "3",
		title: "Finish classwork",
		description: "All the lab activities.",
		status: "completed",
		priority: "high",
		dueDate: "2026-02-10",
	},
];

export default function App() {
	const [tasks, setTasks] = useState<Task[]>(initialTasks);
	const [filters, setFilters] = useState<{
		status?: TaskStatus;
		priority?: "low" | "medium" | "high";
	}>({});

	const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
		setTasks((prevTasks) => prevTasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)));
	};

	const handleDelete = (taskId: string) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
	};

	const handleFilterChange = (newFilters: typeof filters) => {
		setFilters(newFilters);
	};

	const filteredTasks = tasks.filter((task) => {
		const statusMatch = !filters.status || task.status === filters.status;
		const priorityMatch = !filters.priority || task.priority === filters.priority;

		return statusMatch && priorityMatch;
	});

	return (
		<div className="app">
			<h1>Task Manager</h1>
			<TaskFilter onFilterChange={handleFilterChange} />
			<TaskList
				tasks={filteredTasks}
				onStatusChange={handleStatusChange}
				onDelete={handleDelete}
			/>
		</div>
	);
}
