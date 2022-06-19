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

const { Step } = Steps;

export default function CrawlPage() {
  const { data, isLoading, refetch } = useQuery(['getCrawlHistory'], () => crawlApi.getCrawlHistory(), {
    refetchInterval: 5000,
  });

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
      title: 'crawlHistoryId',
      dataIndex: 'crawlHistoryId',
      key: 'crawlHistoryId',
      width: '100%',
      render: (_: any, record: CrawlHistory) => (
        <Steps>
          <Step status="finish" title={`Yêu cầu số: ${record.crawlHistoryId}`} icon={<AccountBookOutlined />} />
          <Step status="finish" title="Xác nhận" icon={<CheckSquareOutlined />} />
          {renderStep(record?.status)}
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
        showHeader={false}
        rowKey={(record) => record.crawlHistoryId}
        columns={columns}
        dataSource={data?.data?.data}
      />
    </MainLayout>
  );
}
