import { Droppable } from "react-beautiful-dnd"
import { memo } from "react"

import Item from "./item"

const Column = (props) => {
	return (
		<div style={{ margin: "8px", border: "1px solid lightgrey", borderRadius: "2px" }}>
			<h3 style={{ padding: "8px" }}>{props.column.title}</h3>
			<Droppable droppableId={props.column.id} direction={props.column.direction}>
				{({ innerRef, droppableProps, placeholder }) => (
					<div style={{ display: "flex", padding: "8px" }} ref={innerRef} {...droppableProps}>
						{props.items.map((item, index) => (
							<Item key={item.id} item={item} index={index} />
						))}
						{placeholder}
					</div>
				)}
			</Droppable>
		</div>
	)
}

export default memo(Column)
