import Modal from 'antd/lib/modal/Modal';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  isVisible: boolean;
  onCancel: () => void;
}

const ModalBase = (props: IProps): JSX.Element => {
  const { isVisible, onCancel, children } = props;
  return (
    <Modal
      centered
      visible={isVisible}
      footer={null}
      closable={false}
      onCancel={onCancel}
      width={569}
      className="rounded-2.5xl p-5"
      wrapClassName="customModal"
    >
      {children}
    </Modal>
  );
};

export default ModalBase;
