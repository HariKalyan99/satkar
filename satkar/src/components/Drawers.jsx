import React, { useState } from 'react'
import {  Drawer, theme } from 'antd';
const Drawers = () => {
    const { token } = theme.useToken();
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
      };
    const containerStyle = {
        position: 'relative',
        height: 300,
        padding: 20,
        overflow: 'hidden',
        background: token.colorFillAlter,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
        textAlign: "center"
      };
  return (
    <div style={containerStyle}>
      <h3>Behind Every Scoop: Our Journey to Ice Cream Excellence</h3>
      <div
        style={{
          marginTop: 16,
        }}
      >
        <button onClick={showDrawer} className='svghov'> <h1>About us!</h1></button>
      </div>
      <Drawer
        title="About us"
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
        // style={{backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-summer-duotone-pattern-design_23-2149479520.jpg')"}}
        style={{backgroundImage: "url(' https://www.gagenmacdonald.com/assets/global/images/our-focus/shape.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}
        // getContainer={true}
        >
          <h4 className='fw-bold text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quae cum dolore commodi sunt error eveniet dolor. Doloribus eum eveniet harum quidem. Amet dolore ab voluptate repellendus fugiat nam vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, neque accusantium labore voluptatibus animi magnam ratione a. Nobis quidem repellat ex nulla, earum, tempore possimus obcaecati minus cupiditate molestiae modi!
          
          </h4>
      </Drawer>
    </div>
  )
}

export default Drawers