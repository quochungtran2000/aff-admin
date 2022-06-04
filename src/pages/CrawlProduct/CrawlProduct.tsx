import { Form, Input, Button } from 'antd';
import { useState, useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import productApi, { getCrawlProductQuery, getProductVars } from '../../api/productApi';
import { MagifyingGlassIcon } from '../../assets/svg';
import MainLayout from '../../components/layout/MainLayout';
import TableCrawlProduct from '../../components/modules/Product/TableCrawlProduct';
import TableProduct from '../../components/modules/Product/TableProductTemplate';
import { PageSize } from '../../constants/configVariables';
import useQueryParam from '../../hook/useQueryPrams';
import { PagingResponse } from '../../types';
import logError from '../../utils/logError';

export default function CrawlProductPage() {
  // const [data, setData] = useState<PagingResponse<any> | undefined>(undefined);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const useParam = useQueryParam();

  const page = parseInt(useParam.get('page') + '') || 1;
  const pageSize = parseInt(useParam.get('pageSize') + '') || PageSize[10];
  const search = useParam.get('search') || undefined;

  const userParams: getCrawlProductQuery = { page, pageSize, search };
  const params: Partial<getCrawlProductQuery> = JSON.parse(JSON.stringify(userParams));

  const { data, isLoading } = useQuery(['getProduct', params], () => productApi.getCrawlProduct(params));
  return (
    <MainLayout>
      <div className="pb-4">
        <Form layout="inline" className="items-center mb-8">
          <Form.Item name="search">
            <Input placeholder="Tìm kiếm" suffix={<MagifyingGlassIcon />} />
          </Form.Item>

          <Form.Item name="merchant">
            <Input placeholder="Nơi bán" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Form.Item>
        </Form>
      </div>

      <TableCrawlProduct
        isLoading={isLoading}
        dataSource={data?.data?.data}
        total={data?.data?.total}
        page={page}
        pageSize={pageSize}
      ></TableCrawlProduct>
    </MainLayout>
  );
}
