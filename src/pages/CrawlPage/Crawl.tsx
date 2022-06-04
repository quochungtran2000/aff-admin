import { Button, Form, Input, Steps, Table } from 'antd';
import {
  CheckSquareOutlined,
  AndroidOutlined,
  FileDoneOutlined,
  AccountBookOutlined,
  CloudDownloadOutlined,
} from '@ant-design/icons';
import MainLayout from '../../components/layout/MainLayout';
import { MagifyingGlassIcon } from '../../assets/svg';

const { Step } = Steps;

export default function CrawlPage() {
  const columns = [
    {
      title: 'productId',
      dataIndex: 'productId',
      key: 'productId',
      width: '100%',
      render: () => (
        <Steps>
          <Step
            status="finish"
            title={`Yêu cầu số: ${Math.round(Math.random() * 200)}`}
            icon={<AccountBookOutlined />}
          />
          <Step status="finish" title="Xác nhận" icon={<CheckSquareOutlined />} />
          <Step status="finish" title="Chuẩn bị" icon={<AndroidOutlined />} />
          <Step status="finish" title="Đang tiến hành" icon={<CloudDownloadOutlined />} />
          <Step status="finish" title="Hoàn thành" icon={<FileDoneOutlined />} />
        </Steps>
      ),
    },
  ];
  return (
    <MainLayout>
      <div className="flex justify-between">
        <div className="pb-4">
          <Form layout="inline" className="items-center mb-8">
            <Form.Item name="search">
              <Input placeholder="Tìm kiếm" suffix={<MagifyingGlassIcon />} />
            </Form.Item>
            {/* 
          <Form.Item name="search">
            <Input placeholder="Nơi bán" />
          </Form.Item>

          <Form.Item name="search">
            <Input placeholder="đánh giá" />
          </Form.Item>

          <Form.Item name="search">
            <Input placeholder="loại sản phẩm" />
          </Form.Item> */}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tìm kiếm
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="pb-4">
          <Button type="primary" htmlType="submit">
            Tạo yêu cầu thu thập
          </Button>
        </div>
      </div>

      <Table
        bordered
        showHeader={false}
        rowKey={(record) => record.title}
        columns={columns}
        dataSource={[
          { title: '2' },
          { title: '3' },
          { title: '4' },
          { title: '5' },
          { title: '6' },
          { title: 9 },
          { title: 8 },
          { title: 1 },
          { title: '12' },
        ]}
      />
    </MainLayout>
  );
}
