import { Draggable } from "react-beautiful-dnd"
import { memo } from "react"

const Item = (props) => {
	return (
		<Draggable draggableId={props.item.id} index={props.index}>
			{({ draggableProps, dragHandleProps, innerRef }) => (
				<div
					style={{
						border: "1px solid lightgrey",
						borderRadius: "2px",
						padding: "8px",
						marginBottom: "8px",
						backgroundColor: "white",
					}}
					{...draggableProps}
					{...dragHandleProps}
					ref={innerRef}
				>
					<img src={props.item.content} alt={props.item.id} style={{ width: "100px" }} />
				</div>
			)}
		</Draggable>
	)
}

export default memo(Item)
