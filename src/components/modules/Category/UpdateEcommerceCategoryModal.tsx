import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useEffect } from 'react';
import { EcommerceCategory } from '../../../types';

interface IProps {
  isModalVisible: boolean;
  onCancel: () => void;
  data?: EcommerceCategory;
  onFinish: (data: EcommerceCategory) => void;
}

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function UpdateEcommerceCategoryModal(props: IProps): JSX.Element {
  const { isModalVisible, onCancel, data, onFinish } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [data]);

  return (
    <Modal title="Cập nhật danh mục" visible={isModalVisible} onCancel={onCancel} footer={null}>
      <Form
        form={form}
        initialValues={data}
        name="update ecommerce category"
        onFinish={onFinish}
        className="bg-white p-2 gap-4 lg:w-90 md:w-90 sm:w-100"
        {...formLayout}
      >
        <Form.Item label="Mã" name="id">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Tiêu Đề" name="title">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Slug" name="slug">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Hoạt Động" name="active" valuePropName="checked">
          <Checkbox name="active" />
        </Form.Item>

        <Form.Item label="Thu Thập" name="crawl" valuePropName="checked">
          <Checkbox name="crawl" />
        </Form.Item>

        <Form.Item className="flex items-center justify-center">
          <Button type="primary" htmlType="submit" className="bg-primary">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
