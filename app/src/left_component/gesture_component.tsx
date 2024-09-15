import React, { useState, useEffect } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";
import Dear from "./components/Dear"; // Import the Dog component
import { useDogs } from "./util/useDogs"; // The combined useDogs hook
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from '@mui/material/Button';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DetailDrawer from "../right_component/Drawer/DetailDrawer";
import ChatDrawer from "../right_component/Drawer/ChatDrawer";
// import MainDrawer from '../right_component/Drawer/MainDrawer';
import CurrentLocation from "./map_component/CurrentLocation"; // Import CurrentLocation component
import CaptureButton from "./components/CaptureButton";

type Anchor = "right";

interface CroppableImageProps {
  src: string;
  sensitivity: number; // Sensitivity prop
}

const CroppableImage: React.FC<CroppableImageProps> = ({
  src,
  sensitivity,
}) => {
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const [centerX, setCenterX] = useState(0); // Initial X axis position
  const [centerY, setCenterY] = useState(0); // Initial Y axis position
  const [offsetX, setOffsetX] = useState(0); // Offset for dragging
  const [offsetY, setOffsetY] = useState(0); // Offset for dragging

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const [tabValue, setTabValue] = React.useState(0);

  const drawerContent = (anchor: Anchor) => (
    <Box sx={{ width: 300 }} role="presentation" p={2}>
      {/* Tab to switch between Details and Chat */}
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Details" />
        <Tab label="Chat" />
      </Tabs>

      {/* Render the appropriate component based on the selected tab */}
      {tabValue === 0 ? <DetailDrawer /> : <ChatDrawer />}

      {/* URL (capture 済み or not) に応じて異なるボタンを表示 */}
      <CaptureButton />
    </Box>
  );

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  // State to track current location (start at center of screen)
  const [location, setLocation] = useState({ x: 0, y: 0 });

  // Get dog positions from the useDogs hook
  const { dogs, moveDog } = useDogs([
    { id: "dog1", x: 50, y: 50 },
    { id: "dog2", x: 100, y: 100 },
    { id: "dog3", x: 150, y: 150 },
  ]);

  // Move function for CurrentLocation
  const moveCurrentLocation = (dx: number, dy: number) => {
    setLocation((prevLocation) => ({
      x: prevLocation.x + dx,
      y: prevLocation.y + dy,
    }));
  };

  // Calculate center of the image as soon as it's loaded
  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    setImgSize({ width: naturalWidth, height: naturalHeight });

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Center the image and the current location
    setCenterX((windowWidth - naturalWidth) / 2);
    setCenterY((windowHeight - naturalHeight) / 2);
    setLocation({ x: windowWidth / 2, y: windowHeight / 2 }); // Start location in the center
  };

  // Set the initial position of the image to be centered when the component loads
  const [style, api] = useSpring(() => ({ x: centerX, y: centerY }));

  // Update spring values when centerX and centerY change
  useEffect(() => {
    api.start({ x: centerX, y: centerY });
  }, [centerX, centerY, api]);

  // Bind drag gesture to the image and update both image and dog positions
  const bind = useDrag((state) => {
    const { offset } = state;
    const newOffsetX = offset[0] * sensitivity; // Apply sensitivity
    const newOffsetY = offset[1] * sensitivity; // Apply sensitivity

    // Update the map's position
    api.start({ x: newOffsetX + centerX, y: newOffsetY + centerY });

    // Update dog positions relative to the map's movement
    dogs.forEach((dog) => {
      moveDog(
        dog.id,
        dog.x + (newOffsetX - offsetX),
        dog.y + (newOffsetY - offsetY)
      );
    });

    // Move CurrentLocation dot relative to the map's movement
    setLocation((prevLocation) => ({
      x: prevLocation.x + (newOffsetX - offsetX),
      y: prevLocation.y + (newOffsetY - offsetY),
    }));

    // Update the current offset for the next drag event
    setOffsetX(newOffsetX);
    setOffsetY(newOffsetY);
  });

  // Prevent default drag behavior to hide ghost image
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    const img = new Image();
    img.src = "";
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        border: "1px solid black",
      }}
    >
      <animated.img
        {...bind()} // Bind the drag gesture
        src={src}
        alt="Croppable"
        onLoad={handleImageLoad} // Center image once it's loaded
        onDragStart={handleDragStart} // Hide ghost image when dragging
        style={{
          ...style,
          cursor: "grab",
          userSelect: "none",
          willChange: "transform",
          width: `${imgSize.width}px`,
          height: `${imgSize.height}px`,
        }}
      />

      {/* Render each dog on top of the image */}
      {dogs.map((dog) => (
        <Dear
          key={dog.id}
          id={dog.id}
          x={dog.x} // Updated dog position
          y={dog.y} // Updated dog position
          f={toggleDrawer}
        />
      ))}

      {/* Right Drawer */}
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {drawerContent("right")}
      </Drawer>
      {/* <Button variant="contained" onClick={toggleDrawer('right', true)}>
        Open Side Drawer
      </Button> */}
      {/* Render the CurrentLocation component and move it along with the map */}
      <CurrentLocation
        x={location.x}
        y={location.y}
        move={moveCurrentLocation}
      />
    </div>
  );
};

export default CroppableImage;
