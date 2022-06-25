import { Button, Form, Input, Steps, Table } from 'antd';
import { AndroidOutlined, FileDoneOutlined, CloudDownloadOutlined, LoadingOutlined } from '@ant-design/icons';
import MainLayout from '../../components/layout/MainLayout';
import { MagifyingGlassIcon } from '../../assets/svg';
import { useMutation, useQuery } from 'react-query';
import crawlApi, { getCrawlProductHistoryVars } from '../../api/crawlApi';
import { CrawlProductHistory } from '../../types';
import notification from '../../utils/notification';
import { useHistory, useParams } from 'react-router';
import useQueryParam from '../../hook/useQueryPrams';
import { HocChangePagination } from '../../utils/HocChangePagination';
import { PageSize } from '../../constants/configVariables';

const { Step } = Steps;

export default function CrawlDetailPage() {
  let { id }: any = useParams();
  const queryParam = useQueryParam();
  const history = useHistory();

  const page = Number(queryParam.get('page') + '') || 1;
  const pageSize = Number(queryParam.get('pageSize') + '') || 10;

  const userParams: getCrawlProductHistoryVars = { page, pageSize, id: Number(id + '') };
  const params: Partial<getCrawlProductHistoryVars> = JSON.parse(JSON.stringify(userParams));

  const { data, isLoading, refetch } = useQuery(['getCrawlHistory', params], () => crawlApi.getCrawlProduct(params), {
    refetchInterval: 5000,
    enabled: !!params.id,
  });

  console.log(data);

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
      title: 'Tên sản phẩm',
      dataIndex: 'productId',
      key: 'productId',
      columnWidth: '60%',
      render: (_: any, record: CrawlProductHistory) => <span>{record.product.name}</span>,
    },
    {
      title: 'Quá trình',
      dataIndex: 'productId',
      key: 'productId',
      columnWidth: '40%',
      render: (_: any, record: CrawlProductHistory) => (
        <Steps className="w-fit">
          {/* <Step status="finish" title={`${record.product.name}`} icon={<AccountBookOutlined />} /> */}
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
        rowKey={(record) => record.crawlHistoryId}
        columns={columns}
        dataSource={data?.data?.data}
        pagination={{
          total: data?.data.total,
          defaultCurrent: page,
          defaultPageSize: pageSize,
          showSizeChanger: true,
          pageSizeOptions: [PageSize[10], PageSize[20], PageSize[50]],
          onChange: HocChangePagination(history),
        }}
      />
    </MainLayout>
  );
}
