import { Button, Table } from 'antd';
import React from 'react';
import { CheckIcon, CancelIcon } from '../../../assets/svg';
import { Category } from '../../../types';

type Props = {
  dataSource: Category[];
  isLoading: boolean;
  onDelete: (data: { categoryId: number }) => void;
  onUpdate: (data: any) => void;
};

export default function TableCategory(props: Props) {
  const { isLoading, dataSource, onDelete, onUpdate } = props;

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
      render: (_: any, record: Category) => (
        <div className="flex justify-center">
          <Button className="mr-4" onClick={() => onUpdate(record)}>
            Chỉnh Sửa
          </Button>
          <Button danger onClick={() => onDelete({ categoryId: record.categoryId })}>
            Xóa
          </Button>
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

  return (
    <Table
      loading={isLoading}
      bordered
      rowKey={(record) => record.categoryId}
      columns={columns}
      dataSource={dataSource}
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
  );
}
