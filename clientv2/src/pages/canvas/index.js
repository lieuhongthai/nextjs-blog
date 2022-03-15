import React from "react";
import { Stage, Layer, Star, Text } from "react-konva";
import { Layout} from "antd";

const generateShapes = (width) => {
  console.log(12005,"width",width);
  return [...Array(10)].map((v, i) => ({
    id: i.toString(),
    x: Math.random() * (window.innerWidth-width-50),
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 100,
    isDragging: false,
  }));
};

function TestCanvas() {
  const CANVAS_VIRTUAL_WIDTH = 700;
  const CANVAS_VIRTUAL_HEIGHT = 700;
  const scale = Math.min(
    window.innerWidth / CANVAS_VIRTUAL_WIDTH,
    window.innerHeight / CANVAS_VIRTUAL_HEIGHT
  );
  const [widthSlideBar,setWidthSlideBar] = React.useState(0);

  // const INITIAL_STATE = generateShapes(widthSlideBar);

  const [stars, setStars] = React.useState([]);
  React.useEffect(() => {
    let element = window.document.getElementById("menu-slide-bar-custom")
    setWidthSlideBar(element.clientWidth+24+35+35);
    setStars(generateShapes(element.clientWidth+24+35));
    console.log(12005,element,window.innerHeight,element.clientWidth);
  }, []);
  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };
  return (
    <Layout>
        <Stage width={(window.innerWidth-widthSlideBar)} height={window.innerHeight-100} scaleX={scale} scaleY={scale}>
          <Layer>
            <Text text="Try to drag a star" />
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
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                shadowOffsetX={star.isDragging ? 10 : 5}
                shadowOffsetY={star.isDragging ? 10 : 5}
                scaleX={star.isDragging ? 1.2 : 1}
                scaleY={star.isDragging ? 1.2 : 1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              />
            ))}
          </Layer>
        </Stage>
    </Layout>
  );
}

export default TestCanvas;
