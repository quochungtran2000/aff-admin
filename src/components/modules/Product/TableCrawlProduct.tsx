import { Button, Table } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { CheckIcon, CancelIcon } from '../../../assets/svg';
import { PageSize } from '../../../constants/configVariables';
import { Category, Product, ProductTempalte } from '../../../types';
import { HocChangePagination } from '../../../utils/HocChangePagination';

type Props = {
  dataSource?: Product[];
  isLoading?: boolean;
  onDelete?: (data: { categoryId: number }) => void;
  onUpdate?: (data: any) => void;
  total?: number;
  page: number;
  pageSize: number;
};

export default function TableCrawlProduct(props: Props) {
  const { isLoading, dataSource, onDelete, onUpdate, page, pageSize, total } = props;
  const history = useHistory();
  const columns = [
    {
      title: 'productId',
      dataIndex: 'productId',
      key: 'productId',
      width: '8%',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
    },
    {
      title: 'Nơi bán',
      dataIndex: 'merchant',
      key: 'merchant',
      width: '8%',
    },
    {
      title: 'Đánh giá',
      dataIndex: 'average',
      key: 'average',
      width: '8%',
    },

    {
      title: 'Đã bán',
      dataIndex: 'sold',
      key: 'sold',
      width: '8%',
    },
    {
      title: 'cập nhật gần nhất',
      dataIndex: 'lastestCrawlAt',
      key: 'lastestCrawlAt',
      width: '12%',
      render: (date: Date) => <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: 'Quản Lý',
      dataIndex: 'action',
      key: 'action',
      width: '15%',
      // align: 'center',
      render: (_: any, record: Product) => (
        <div className="flex justify-center">
          <Button className="mr-4">Chỉnh Sửa</Button>
          <Button type="primary" className="mr-4">
            Quản lý liên kết
          </Button>
          <Button danger>Xóa</Button>
        </div>
      ),
    },
  ];
  return (
    <Table
      loading={isLoading}
      bordered
      rowKey={(record) => record.productId}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        total: total,
        defaultCurrent: page,
        defaultPageSize: pageSize,
        showSizeChanger: true,
        pageSizeOptions: [PageSize[10], PageSize[20], PageSize[50]],
        onChange: HocChangePagination(history),
      }}
    />
  );
}
