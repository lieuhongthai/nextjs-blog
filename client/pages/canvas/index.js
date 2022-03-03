import React from "react";
import { Stage, Layer, Star, Text } from "react-konva";
import {dynamic} from "next";

const generateShapes = () => {
	return [...Array(10)].map((v, i) => ({
		id: i.toString(),
		x: Math.random() * window.innerWidth,
		y: Math.random() * window.innerHeight,
		rotation: Math.random() * 100,
		isDragging: false,
	}));
}

const testCanvas=()=> {
	const INITIAL_STATE = ()=>{
		return [...Array(10)].map((v, i) => ({
			id: i.toString(),
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			rotation: Math.random() * 100,
			isDragging: false,
		}));
	}
	const [stars, setStars] = React.useState(INITIAL_STATE);

	const handleDragStart = (event) => {
		const id = e.target.od();
		setStars(
			stars.map((star) => {
				return {
					...stars,
					isDragging: star.id === id,
				}
			})
		)
	}

	const handleDragEnd = (event) => {
		setStars(
			stars.map((star) => {
				return {
					...star,
					isDragging: false,
				};
			})
		);
	}


	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				<Text text="try to drag a star" />
				{stars.map((star) => (
					<Star
						key={star.id}
						id={star.id}
						x={star.x}
						y={star.y}
						numPoints={5}
						innerRadius={20}
						outerRadius={40}
						fill="#89b717"
						opacity={0.8}
						draggable
						rotation={star.rotation}
						shadowColor={"black"}
						shadowBlur={10}
						shadowOpacity={0.6}
						shadowOffsetX={star.isDragging ? 10 : 5}
						shadowOffsetY={star.isDragging ? 10 : 5}
						scaleX={star.isDragging ? 1.2 : 1}
						scaleY={star.isDragging ? 1.2 : 1}
						onDragStart={handleDragStart}
						onDragEnd={handleDragEnd}
					>

					</Star>
				))}
			</Layer>

		</Stage>
	)
}

const NoSsrComponent = dynamic(()=> testCanvas,{ssr:false});
export default function TestPage(props){
	return (<NoSsrComponent/>);
}