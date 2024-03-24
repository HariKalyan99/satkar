import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const Modals = ({flavor,content}) => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
   
      <Button type="none" onClick={() => setModal2Open(true)} className='svghovmod h-100'>
        <h6 className='fw-bold'>introduce me!</h6>
      </Button>
      <Modal
        title={flavor}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={[
          ]}
          
      >
       

        <h5>{content}</h5>
        
      </Modal>
    </>
  );
};
export default Modals;