import { useQuery } from 'react-query';
import { UserApi } from '../../api';
import { getUserVars } from '../../api/userApi';
import MainLayout from '../../components/layout/MainLayout';
import TableCustomer from '../../components/modules/User/TableCustomer';
import UserFilter from '../../components/modules/User/UserFilter';
import { PageSize } from '../../constants/configVariables';
import useQueryParam from '../../hook/useQueryPrams';

export default function CustomerPage() {
  const useParam = useQueryParam();

  const page = parseInt(useParam.get('page') + '') || 1;
  const pageSize = parseInt(useParam.get('pageSize') + '') || PageSize[10];
  const search = useParam.get('search') || undefined;
  const username = useParam.get('username') || undefined;
  const fullname = useParam.get('fullname') || undefined;
  const email = useParam.get('email') || undefined;
  const phoneNumber = useParam.get('phoneNumber') || undefined;

  const userParams: getUserVars = { page, pageSize, search, username, fullname, email, phoneNumber };
  const params: Partial<getUserVars> = JSON.parse(JSON.stringify(userParams));

  const { data, isLoading } = useQuery(['getCustomer', params], () => UserApi.getUser(params));

  return (
    <MainLayout>
      <UserFilter />
      <TableCustomer
        dataSource={data?.data?.data}
        total={data?.data.total}
        isLoading={isLoading}
        page={page}
        pageSize={pageSize}
      />
    </MainLayout>
  );
}
