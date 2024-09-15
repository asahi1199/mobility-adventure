import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DetailDrawer from './DetailDrawer';
import ChatDrawer from './ChatDrawer';

type Anchor = 'right';

export default function MainDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  // State to manage tab value
  const [tabValue, setTabValue] = React.useState(0);

  // State to manage capture status
  const [isCaptureComplete, setIsCaptureComplete] = React.useState(false);

  // Handler for when capture is complete
  const handleCaptureComplete = () => {
    setIsCaptureComplete(true);
  };

  // Handler for when capture is finished or reset
  const handleFinishCapture = () => {
    setIsCaptureComplete(false);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const drawerContent = (anchor: Anchor) => (
    <Box sx={{ width: 300 }} role="presentation" p={2}>
      {/* Tab to switch between Details and Chat */}
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Details" />
        <Tab label="Chat" />
      </Tabs>

      {/* Render the appropriate component based on the selected tab */}
      {tabValue === 0 ? (
        <DetailDrawer
          isCaptureComplete={isCaptureComplete}
          onCaptureComplete={handleCaptureComplete}
          onFinishCapture={handleFinishCapture}
        />
      ) : (
        <ChatDrawer />
      )}
    </Box>
  );

  return (
    <div>
      {/* Button to open the right drawer */}
      <Button variant="contained" onClick={toggleDrawer('right', true)}>
        Open Side Drawer
      </Button>

      {/* Right Drawer */}
      <Drawer anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}>
        {drawerContent('right')}
      </Drawer>
    </div>
  );
}
