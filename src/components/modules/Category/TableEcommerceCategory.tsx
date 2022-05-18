import { EcommerceCategory } from '../../../types';
import { Button, Table } from 'antd';
import { CancelIcon, CheckIcon } from '../../../assets/svg';
import { useState } from 'react';
import UpdateEcommerceCategoryModal from './UpdateEcommerceCategoryModal';
import categoryApi from '../../../api/categoryApi';
import notification from '../../../utils/notification';

type Props = {
  merchant: 'tiki' | 'lazada' | 'shopee';
  dataSource: EcommerceCategory[];
  isLoading: boolean;
  refetch: () => void;
};

export default function TableEcommerceCategory(props: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentCategory, setCurrentcategory] = useState<EcommerceCategory | undefined>(undefined);

  const onCancel = () => setIsVisible(false);
  const { merchant, dataSource, isLoading, refetch } = props;

  const onClick = (data: EcommerceCategory) => {
    if (!data) return;
    setCurrentcategory(data);
    setIsVisible(true);
  };

  const onSubmit = (data: EcommerceCategory) => {
    console.log({ data });
    categoryApi
      .updateCrawlCategory(data)
      .then(() => {
        notification('success', 'Cập nhật danh mục thành công!.');
        refetch();
        onCancel();
      })
      .catch((error: any) => {
        notification('error', error?.response?.data?.message?.[0]);
      });
  };
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      width: '35%',
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
      width: '25%',
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
      title: 'Quản Lý',
      dataIndex: 'action',
      key: 'action',
      width: '14%',
      // align: 'center',
      render: (_: any, record: EcommerceCategory) => (
        <div className="flex justify-center">
          <Button onClick={() => onClick(record)}>Chỉnh Sửa</Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <h6 className="text-primary-30 mt-1 font-semibold text-xl">{`Danh mục sản phẩm sàn ${merchant}`}</h6>
      <Table
        bordered
        loading={isLoading}
        rowKey={(record) => record.id}
        expandable={{
          expandedRowRender: (record) => {
            console.log({ record });
            return (
              <Table
                bordered
                rowKey={(record) => record.id}
                expandable={{
                  expandedRowRender: (record) => {
                    console.log({ record });
                    return (
                      <Table
                        bordered
                        rowKey={(record) => record.id}
                        columns={columns}
                        dataSource={record.subCategory}
                        pagination={{
                          hideOnSinglePage: true,
                        }}
                      />
                    );
                  },
                  rowExpandable: (record) => {
                    const lenth = record?.subCategory?.length || 0;
                    return lenth !== 0;
                  },
                }}
                columns={columns}
                dataSource={record.subCategory}
                pagination={{
                  hideOnSinglePage: true,
                }}
              />
            );
          },
          rowExpandable: (record) => {
            const lenth = record?.subCategory?.length || 0;
            return lenth !== 0;
          },
        }}
        columns={columns}
        dataSource={dataSource}
      />
      <UpdateEcommerceCategoryModal
        isModalVisible={isVisible}
        onCancel={onCancel}
        data={currentCategory}
        onFinish={onSubmit}
      />
    </>
  );
}
