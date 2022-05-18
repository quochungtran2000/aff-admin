import { useCallback, useEffect, useState } from 'react';
import categoryApi from '../../api/categoryApi';
import MainLayout from '../../components/layout/MainLayout';
import { EcommerceCategory } from '../../types';
import logError from '../../utils/logError';
import TableEcommerceCategory from '../../components/modules/Category/TableEcommerceCategory';

export default function TikiCategoryPage() {
  const [data, setData] = useState<EcommerceCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refetch = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await categoryApi.getCrawlCategory({ merchant: 'tiki' });
      setData(data);
    } catch (error) {
      logError('Get Tiki Category', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <MainLayout>
      <TableEcommerceCategory isLoading={isLoading} merchant="tiki" dataSource={data} refetch={refetch} />
    </MainLayout>
  );
}
