import { Button, Form, Input, Modal } from 'antd';
import { useEffect } from 'react';
import { AffConfig } from '../../../types';

// import { useEffect } from 'react';

interface IProps {
  isModalVisible: boolean;
  onCancel: () => void;
  onFinish: (data: any) => void;
  data?: AffConfig;
}

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function UpdateConfigModal(props: IProps): JSX.Element {
  const { isModalVisible, onCancel, onFinish, data } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [data, form]);

  return (
    <Modal title="Cập nhật danh mục" visible={isModalVisible} onCancel={onCancel} footer={null}>
      <Form
        form={form}
        name="create category"
        onFinish={onFinish}
        className="bg-white p-2 gap-4 lg:w-90 md:w-90 sm:w-100"
        initialValues={data}
        {...formLayout}
      >
        <Form.Item label="Tên cấu hình" name="name">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Giá trị" name="value">
          <Input />
        </Form.Item>

        {/* <Form.Item label="Slug" name="slug">
          <Input disabled />
        </Form.Item> *

        <Form.Item label="Website" name="website" valuePropName="checked">
          <Checkbox name="website" />
        </Form.Item>

        <Form.Item label="App" name="app" valuePropName="checked">
          <Checkbox name="app" />
        </Form.Item> */}

        {/* <Form.Item label="Hoạt Động" name="active" valuePropName="checked">
          <Checkbox name="active" />
        </Form.Item>

        <Form.Item label="Thu Thập" name="crawl" valuePropName="checked">
          <Checkbox name="crawl" />
        </Form.Item> */}

        <Form.Item className="flex items-center justify-center text-center">
          <Button type="primary" htmlType="submit" className="bg-primary ">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
