import { Form, Input, Button } from 'antd';
// import search from 'antd/lib/transfer/search';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import productApi, { getProductVars } from '../../api/productApi';
import { MagifyingGlassIcon } from '../../assets/svg';
import MainLayout from '../../components/layout/MainLayout';
import TableProduct from '../../components/modules/Product/TableProductTemplate';
import { PageSize } from '../../constants/configVariables';
import useQueryParam from '../../hook/useQueryPrams';
import { PagingResponse, ProductTempalte } from '../../types';
import logError from '../../utils/logError';

export default function ProductTemplatePage() {
  // const [data, setData] = useState<PagingResponse<ProductTempalte> | undefined>(undefined);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const useParam = useQueryParam();

  const page = parseInt(useParam.get('page') + '') || 1;
  const pageSize = parseInt(useParam.get('pageSize') + '') || PageSize[10];
  const search = useParam.get('search') || undefined;

  const userParams: getProductVars = { page, pageSize, search };
  const params: Partial<getProductVars> = JSON.parse(JSON.stringify(userParams));

  const { data, isLoading } = useQuery(['getProduct', params], () => productApi.getProduct(params));
  // const refetch = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
  //     const { data } = await productApi.getProduct();
  //     setData(data);
  //   } catch (error) {
  //     logError('Get Lazada Category', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  // console.log({ data });

  // useEffect(() => {
  //   refetch();
  // }, [refetch]);

  return (
    <MainLayout>
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

      <TableProduct
        isLoading={isLoading}
        dataSource={data?.data?.data}
        total={data?.data?.total}
        page={page}
        pageSize={pageSize}
      ></TableProduct>
    </MainLayout>
  );
}
