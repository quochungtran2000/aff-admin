import { Button, Table, Tooltip } from 'antd';
import { CheckIcon, CancelIcon } from '../../assets/svg';
import MainLayout from '../../components/layout/MainLayout';
import { PlusOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';
import CreateCategoryModal from '../../components/modules/Category/CreateCategoryModal';
import { Category } from '../../types';
import categoryApi from '../../api/categoryApi';
import logError from '../../utils/logError';
import notification from '../../utils/notification';

export default function CategoryPage() {
  const [data, setData] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refetch = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await categoryApi.getCategory();
      setData(data);
    } catch (error) {
      logError('Get Lazada Category', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onCancel = () => setIsVisible(false);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'categoryId',
      key: 'categoryId',
      width: '8%',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      width: '27%',
    },
    // {
    //   title: 'Slug',
    //   dataIndex: 'slug',
    //   key: 'slug',
    //   width: '18%',
    // },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
      width: '8%',
      render: (active: boolean) => <div className="flex justify-center">{active ? <CheckIcon /> : <CancelIcon />}</div>,
    },
    {
      title: 'App',
      dataIndex: 'app',
      key: 'app',
      width: '8%',
      render: (active: boolean) => <div className="flex justify-center">{active ? <CheckIcon /> : <CancelIcon />}</div>,
    },

    {
      title: 'Hoạt động',
      dataIndex: 'active',
      key: 'active',
      width: '8%',
      render: (active: boolean) => <div className="flex justify-center">{active ? <CheckIcon /> : <CancelIcon />}</div>,
    },
    {
      title: 'Thu thập',
      dataIndex: 'crawl',
      key: 'crawl',
      width: '8%',
      render: (active: boolean) => <div className="flex justify-center">{active ? <CheckIcon /> : <CancelIcon />}</div>,
    },
    {
      title: 'Ngày tạ0',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '8%',
      render: (date: Date) => <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '10%',
      render: (date: Date) => <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: 'Quản Lý',
      dataIndex: 'action',
      key: 'action',
      width: '15%',
      // align: 'center',
      render: (_: any, record: any) => (
        <div className="flex justify-center">
          <Button className="mr-4">Chỉnh Sửa</Button>
          <Button danger>Xóa</Button>
        </div>
      ),
    },
  ];

  const subColumn = [
    {
      title: 'Id',
      dataIndex: 'crawlCategoryId',
      key: 'crawlCategoryId',
      width: '15%',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      width: '27%',
    },
    {
      title: 'Slug',
      dataIndex: 'merchant',
      key: 'merchant',
      width: '18%',
    },
    {
      title: 'Hoạt động',
      dataIndex: 'active',
      key: 'active',
      width: '8%',
      render: (active: boolean) => <div className="flex justify-center">{active ? <CheckIcon /> : <CancelIcon />}</div>,
    },
    {
      title: 'Thu thập',
      dataIndex: 'crawl',
      key: 'crawl',
      width: '8%',
      render: (active: boolean) => <div className="flex justify-center">{active ? <CheckIcon /> : <CancelIcon />}</div>,
    },
  ];

  const onCreateCategory = async (values: {
    title: string;
    lazadaCategory: string[];
    shopeeCategory: string[];
    tikiCategory: string[];
  }) => {
    const { title, tikiCategory, shopeeCategory, lazadaCategory } = values;
    categoryApi
      .createCategory({ title, mapCategory: [...tikiCategory, ...shopeeCategory, ...lazadaCategory] })
      .then(() => {
        notification('success', 'Tạo thành công');
        refetch();
        onCancel();
      })
      .catch((err) => {
        notification('error', err?.response?.data?.message[0]);
      });
  };
  return (
    <MainLayout>
      {/* <div className="text-sm">CategoryPage</div> */}
      <div className="flex justify-between">
        <h6 className="text-primary-30 mt-1 font-semibold text-xl">{`Danh mục sản phẩm`}</h6>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => setIsVisible(true)} />
        </Tooltip>
      </div>

      <Table
        loading={isLoading}
        bordered
        rowKey={(record) => record.categoryId}
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender: (record) => {
            console.log({ record });
            return (
              <Table
                bordered
                rowKey={(record) => record.id}
                columns={subColumn}
                dataSource={record.childrens}
                pagination={{
                  hideOnSinglePage: true,
                }}
              />
            );
          },
          rowExpandable: (record) => {
            const lenth = record?.childrens?.length || 0;
            return lenth !== 0;
          },
        }}
      />
      <CreateCategoryModal onCancel={onCancel} onFinish={onCreateCategory} isModalVisible={isVisible} />
    </MainLayout>
  );
}
