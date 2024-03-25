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
        <span className='fw-light'>Don't drink and read</span>
      </button>
      <Drawer title={juice} onClose={onClose} open={open} placement="bottom"
        closable={false} style={{backgroundColor: "#cfe4cf",  backgroundPosition: "center"}}>
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