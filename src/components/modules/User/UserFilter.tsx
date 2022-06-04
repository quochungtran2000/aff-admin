import { Button, Form, Input } from 'antd';
import { useHistory, useLocation } from 'react-router';
import { PageSize } from '../../../constants/configVariables';
import useQueryParam from '../../../hook/useQueryPrams';
import updateQueryStringParameter from '../../../utils/updateQueryStringParameter';

export default function UserFilter() {
  const history = useHistory();
  const location = useLocation();
  const useParam = useQueryParam();
  const pageSize = parseInt(useParam.get('pageSize') + '') || PageSize[10];
  const onFinish = (values: any) => {
    const search = JSON.parse(
      JSON.stringify({
        ...values,
        page: 1,
        pageSize: pageSize,
      })
    );

    history.push({
      pathname: location.pathname,
      search: updateQueryStringParameter(location.search, search),
    });
  };
  return (
    <div className="mb-4">
      <Form layout="inline" className="items-center" onFinish={onFinish} autoComplete="off">
        <Form.Item name="search">
          <Input placeholder="Tìm kiếm" className="w-44" />
        </Form.Item>

        <Form.Item name="email">
          <Input placeholder="Email" className="w-44" />
        </Form.Item>

        <Form.Item name="username">
          <Input placeholder="username" className="w-44" />
        </Form.Item>

        <Form.Item name="fullname">
          <Input placeholder="fullname" className="w-44" />
        </Form.Item>

        <Form.Item name="phoneNumber">
          <Input placeholder="Số điện thoại" className="w-44" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Tìm kiếm</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
