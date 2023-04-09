import * as React from 'react';
import './MyModal.css';

interface MyModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (state: boolean) => void;
}

const MyModal: React.FC<MyModalProps> = ({ children, visible, setVisible }) => {
  const classes = ['myModal'];
  if (visible) {
    classes.push('active');
  }

  return (
    <div className={classes.join(' ')} onClick={() => setVisible(false)} data-testid="modal-root">
      <div className="myModalContent">
        <button>X</button>
        <div className="content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MyModal;
