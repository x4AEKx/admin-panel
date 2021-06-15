import { DragDropContext } from "react-beautiful-dnd"
import { useState, memo } from "react"

import initialData from "./data"
import Column from "./column"

const Dashboard = () => {
	const [state, setState] = useState(initialData)

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result

		if (!destination) {
			return
		}

		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return
		}

		const start = state.columns[source.droppableId]
		const finish = state.columns[destination.droppableId]

		if (start === finish) {
			const newItemIds = Array.from(start.itemIds)
			newItemIds.splice(source.index, 1)
			newItemIds.splice(destination.index, 0, draggableId)

			const newColumn = {
				...start,
				itemIds: newItemIds,
			}

			const newState = {
				...state,
				columns: {
					...state.columns,
					[newColumn.id]: newColumn,
				},
			}

			setState(newState)
			return
		}

		// Moving from one list to another
		const startItemIds = Array.from(start.itemIds)
		startItemIds.splice(source.index, 1)
		const newStart = {
			...start,
			itemIds: startItemIds,
		}

		const finishItemIds = Array.from(finish.itemIds)
		finishItemIds.splice(destination.index, 0, draggableId)
		const newFinish = {
			...finish,
			itemIds: finishItemIds,
		}

		const newState = {
			...state,
			columns: {
				...state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		}
		setState(newState)
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			{state.columnOrder.map((columnId) => {
				const column = state.columns[columnId]
				const tasks = column.itemIds.map((taskId) => state.tasks[taskId])

				return <Column key={column.id} column={column} tasks={tasks} />
			})}
		</DragDropContext>
	)
}

export default memo(Dashboard)
