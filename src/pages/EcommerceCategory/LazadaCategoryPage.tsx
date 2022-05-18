import { useCallback, useEffect, useState } from 'react';
import categoryApi from '../../api/categoryApi';
import MainLayout from '../../components/layout/MainLayout';
import { EcommerceCategory } from '../../types';
import logError from '../../utils/logError';
import TableEcommerceCategory from '../../components/modules/Category/TableEcommerceCategory';

export default function LazadaCategoryPage() {
  const [data, setData] = useState<EcommerceCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refetch = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await categoryApi.getCrawlCategory({ merchant: 'lazada' });
      setData(data);
    } catch (error) {
      logError('Get Lazada Category', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <MainLayout>
      <TableEcommerceCategory isLoading={isLoading} merchant="lazada" dataSource={data} refetch={refetch} />
    </MainLayout>
  );
}
