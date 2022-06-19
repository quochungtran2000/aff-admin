import { Avatar, Button, Table } from 'antd';
import { useHistory, useLocation } from 'react-router';
import { PageSize } from '../../../constants/configVariables';
import { AffConfig, PagingResponse, User } from '../../../types';
import { HocChangePagination } from '../../../utils/HocChangePagination';
import updateQueryStringParameter from '../../../utils/updateQueryStringParameter';

type Props = {
  dataSource?: AffConfig[];
  total?: number;
  page?: number;
  pageSize: number;
  isLoading?: boolean;
  onDelete: (configName: string) => void;
  onUpdate: (data: any) => void;
};

export default function TableConfig(props: Props) {
  const { isLoading, dataSource, onUpdate, onDelete, page, pageSize, total } = props;
  const history = useHistory();
  const location = useLocation();

  const columns = [
    {
      title: 'key',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
    },
    {
      title: 'Giá trị',
      dataIndex: 'value',
      key: 'value',
      width: '50%',
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '10%',
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
      width: '10%',
      // align: 'center',
      render: (_: any, record: AffConfig) => (
        <div className="flex justify-center">
          <Button className="mr-4" onClick={() => onUpdate(record)}>
            Sửa
          </Button>
          <Button danger onClick={() => onDelete(record.name)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];
  return (
    <Table
      loading={isLoading}
      bordered
      rowKey={(record: AffConfig) => record.name}
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
