import { Button, Form, Input, Steps, Table } from 'antd';
import {
  CheckSquareOutlined,
  AndroidOutlined,
  FileDoneOutlined,
  AccountBookOutlined,
  CloudDownloadOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import MainLayout from '../../components/layout/MainLayout';
import { MagifyingGlassIcon } from '../../assets/svg';
import { useMutation, useQuery } from 'react-query';
import crawlApi from '../../api/crawlApi';
import { CrawlHistory } from '../../types';
import notification from '../../utils/notification';
import { useHistory } from 'react-router';

const { Step } = Steps;

export default function CrawlPage() {
  const { data, isLoading, refetch } = useQuery(['getCrawlHistory'], () => crawlApi.getCrawlHistory(), {
    refetchInterval: 5000,
  });

  const history = useHistory();

  const { mutate: createCrawlHistory } = useMutation(crawlApi.createCrawlHistory, {
    onSuccess: ({ data }) => {
      console.log('Create succes', data);
      notification('success', 'Tạo yêu cầu thu thập số');
      refetch();
    },
    onError: (error: any) => {
      notification('error', 'Đã có lỗi xảy ra xin vui lòng thử lại sau.');
    },
  });

  console.log({ data });

  const renderStep = (status: 'pending' | 'crawling' | 'done') => {
    return (
      <>
        <Step
          status={status === 'done' || status === 'crawling' ? 'finish' : 'process'}
          title="Chuẩn bị"
          icon={status === 'done' || status === 'crawling' ? <AndroidOutlined /> : <LoadingOutlined />}
        />
        <Step
          status={status === 'crawling' ? 'process' : status === 'pending' ? 'wait' : 'finish'}
          title="Đang tiến hành"
          icon={status === 'crawling' ? <LoadingOutlined /> : <CloudDownloadOutlined />}
        />
        <Step status={status === 'done' ? 'finish' : 'wait'} title="Hoàn thành" icon={<FileDoneOutlined />} />
      </>
    );
  };

  const columns = [
    {
      title: 'Yêu cầu số',
      dataIndex: 'crawlHistoryId',
      key: 'crawlHistoryId',
      width: '20%',
      render: (_: any, record: CrawlHistory) => <span>{`Yêu cầu số: ${record.crawlHistoryId}`}</span>,
    },
    {
      title: 'Quy trình',
      dataIndex: 'crawlHistoryId',
      key: 'crawlHistoryId',
      width: '40%',
      render: (_: any, record: CrawlHistory) => (
        <Steps>
          {/* <Step status="finish" title={`Yêu cầu số: ${record.crawlHistoryId}`} icon={<AccountBookOutlined />} /> */}
          <Step status="finish" title="Xác nhận" icon={<CheckSquareOutlined />} />
          {renderStep(record?.status)}
        </Steps>
      ),
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '10%',
      render: (date: Date) => <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: 'ngày cập nhật',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '10%',
      render: (date: Date) => <span>{new Date(date).toLocaleDateString()}</span>,
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
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tìm kiếm
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="pb-4">
          <Button type="primary" htmlType="submit" onClick={() => createCrawlHistory()}>
            Tạo yêu cầu thu thập
          </Button>
        </div>
      </div>

      <Table
        loading={isLoading}
        bordered
        rowKey={(record) => record.crawlHistoryId}
        columns={columns}
        dataSource={data?.data?.data}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              history.push(`/crawl/${record.crawlHistoryId}`);
            }, // click row
            // onDoubleClick: (event) => {}, // double click row
            // onContextMenu: (event) => {}, // right button click row
            // onMouseEnter: (event) => {}, // mouse enter row
            // onMouseLeave: (event) => {}, // mouse leave row
          };
        }}
      />
    </MainLayout>
  );
}
