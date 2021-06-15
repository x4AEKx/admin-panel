const initialData = {
	items: {
		"item-1": {
			id: "item-1",
			content: "https://dmsky.ru/upload/cache/v3/59/ea/59eaf617467d4d9ef5bc134fe4da101f.jpg",
		},
		"item-2": {
			id: "item-2",
			content: "https://dmsky.ru/upload/cache/v3/f6/bc/f6bc4e347bbf62ba165c3c52e45f0d3b.jpg",
		},
		"item-3": {
			id: "item-3",
			content: "https://dmsky.ru/upload/cache/v3/31/80/3180b4458eabd89fcef209a352aebe50.jpg",
		},
		"item-4": {
			id: "item-4",
			content: "https://dmsky.ru/upload/cache/v3/8b/75/8b75a96f917d39624d7bf289afa992cb.jpg",
		},
	},
	columns: {
		"column-1": {
			id: "column-1",
			title: "Items",
			itemIds: ["item-1", "item-2", "item-3", "item-4"],
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
