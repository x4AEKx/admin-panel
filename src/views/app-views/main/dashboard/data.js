const initialData = {
	tasks: {
		"task-1": {
			id: "task-1",
			content: "https://dmsky.ru/upload/cache/v3/59/ea/59eaf617467d4d9ef5bc134fe4da101f.jpg",
		},
		"task-2": {
			id: "task-2",
			content: "https://dmsky.ru/upload/cache/v3/f6/bc/f6bc4e347bbf62ba165c3c52e45f0d3b.jpg",
		},
		"task-3": {
			id: "task-3",
			content: "https://dmsky.ru/upload/cache/v3/31/80/3180b4458eabd89fcef209a352aebe50.jpg",
		},
		"task-4": {
			id: "task-4",
			content: "https://dmsky.ru/upload/cache/v3/8b/75/8b75a96f917d39624d7bf289afa992cb.jpg",
		},
	},
	columns: {
		"column-1": {
			id: "column-1",
			title: "To do",
			itemIds: ["task-1", "task-2", "task-3", "task-4"],
			direction: "horizontal",
		},
		"column-2": {
			id: "column-2",
			title: "Dashboard",
			itemIds: [],
			direction: "horizontal",
		},
	},
	// Facilitate reordering of the columns
	columnOrder: ["column-1", "column-2"],
}

export default initialData
