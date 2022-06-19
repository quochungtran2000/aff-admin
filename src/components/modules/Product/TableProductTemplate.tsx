import { Button, Table } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { CheckIcon, CancelIcon } from '../../../assets/svg';
import { PageSize } from '../../../constants/configVariables';
import { Category, ProductTempalte } from '../../../types';
import { HocChangePagination } from '../../../utils/HocChangePagination';

type Props = {
  dataSource?: ProductTempalte[];
  isLoading?: boolean;
  onDelete?: (data: { categoryId: number }) => void;
  onUpdate?: (data: any) => void;
  total?: number;
  page: number;
  pageSize: number;
};

export default function TableProduct(props: Props) {
  const { isLoading, dataSource = [], onDelete, onUpdate, page, pageSize, total } = props;
  const history = useHistory();
  console.log({ isLoading });
  const columns = [
    {
      title: 'Mã',
      dataIndex: 'productTemplateId',
      key: 'productTemplateId',
      width: '8%',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'productName',
      key: 'productName',
      width: '27%',
    },
    {
      title: 'slug',
      dataIndex: 'slug',
      key: 'slug',
      width: '8%',
      render: (active: boolean) =>
        !isLoading && <div className="flex justify-center">{active ? <CheckIcon /> : <CancelIcon />}</div>,
    },
    {
      title: 'Ảnh nền',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      width: '8%',
      render: (active: boolean) =>
        !isLoading && <div className="flex justify-center">{active ? <CheckIcon /> : <CancelIcon />}</div>,
    },
    {
      title: 'Ngày tạ0',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '8%',
      render: (date: Date) => !isLoading && <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '10%',
      render: (date: Date) => !isLoading && <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: 'Quản Lý',
      dataIndex: 'action',
      key: 'action',
      width: '15%',
      // align: 'center',
      render: (_: any, record: ProductTempalte) =>
        !isLoading && (
          <div className="flex justify-center">
            <Button className="mr-4">Chỉnh Sửa</Button>
            <Button className="mr-4">Thêm sản phẩm</Button>
            <Button danger>Xóa</Button>
          </div>
        ),
    },
  ];
  return (
    <Table
      loading={isLoading}
      bordered
      rowKey={(record) => record.productTemplateId}
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
