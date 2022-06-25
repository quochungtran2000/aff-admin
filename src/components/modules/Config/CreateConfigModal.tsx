import { Button, Form, Input, Modal } from 'antd';
import { useEffect } from 'react';

interface IProps {
  isModalVisible: boolean;
  onCancel: () => void;
  onFinish: (data: any) => void;
}

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function CreateConfigModal(props: IProps): JSX.Element {
  const { isModalVisible, onCancel, onFinish } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  });

  return (
    <Modal title="Tạo cấu hình" visible={isModalVisible} onCancel={onCancel} footer={null}>
      <Form
        form={form}
        name="create category"
        onFinish={onFinish}
        className="bg-white p-2 gap-4 lg:w-90 md:w-90 sm:w-100"
        {...formLayout}
      >
        <Form.Item label="Tên cấu hình" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Giá trị" name="value">
          <Input />
        </Form.Item>

        <Form.Item className="flex items-center justify-center text-center">
          <Button type="primary" htmlType="submit" className="bg-primary ">
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
