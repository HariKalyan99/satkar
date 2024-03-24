import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const Juicedrawer = ({content, juice}) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="none" className='svghovmodju h-100' onClick={showDrawer}>
        Click here!
      </Button>
      <Drawer title={juice} onClose={onClose} open={open} placement="bottom"
        closable={false} >
        <p>{content}</p>
      </Drawer>
    </>
  );
};
export default Juicedrawer;