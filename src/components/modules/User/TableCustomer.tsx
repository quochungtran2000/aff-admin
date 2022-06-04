import { Avatar, Button, Table } from 'antd';
import { useHistory, useLocation } from 'react-router';
import { PageSize } from '../../../constants/configVariables';
import { PagingResponse, User } from '../../../types';
import { HocChangePagination } from '../../../utils/HocChangePagination';
import updateQueryStringParameter from '../../../utils/updateQueryStringParameter';

type Props = {
  dataSource?: User[];
  total?: number;
  page?: number;
  pageSize: number;
  isLoading?: boolean;
  // onDelete?: (data: { categoryId: number }) => void;
  onUpdate?: (data: any) => void;
};

export default function TableCustomer(props: Props) {
  const { isLoading, dataSource, onUpdate, page, pageSize, total } = props;
  const history = useHistory();
  const location = useLocation();

  const columns = [
    {
      title: 'Id',
      dataIndex: 'userId',
      key: 'userId',
      width: '8%',
    },
    {
      title: 'avatar',
      dataIndex: 'imgUrl',
      key: 'imgUrl',
      width: '6%',
      render: (imgUrl: string) => <Avatar size={'large'} src={imgUrl} />,
    },
    {
      title: 'username',
      dataIndex: 'username',
      key: 'username',
      width: '15%',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'fullname',
      key: 'fullname',
      width: '30%',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      width: '8%',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: '8%',
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
      width: '15%',
      // align: 'center',
      render: (_: any, record: User) => (
        <div className="flex justify-center">
          <Button className="mr-4">Phân quyền</Button>
          <Button danger>Cấm</Button>
        </div>
      ),
    },
  ];
  return (
    <Table
      loading={isLoading}
      bordered
      rowKey={(record) => record.userId}
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
