import React, { useState } from 'react';
import { Drawer } from 'antd';
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
      <button className='svghovmodju h-100' onClick={showDrawer} >
        Click here!
      </button>
      <Drawer title={juice} onClose={onClose} open={open} placement="bottom"
        closable={false} >
        <p>{content}</p>
      </Drawer>
    </>
  );
};
export default Juicedrawer;

// #f1daf9

// #cff4fc


// #fff3f3

// #ffd0cf