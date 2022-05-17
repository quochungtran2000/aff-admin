import { useEffect, useState } from 'react';
import categoryApi from '../../api/categoryApi';
import MainLayout from '../../components/layout/MainLayout';
import { EcommerceCategory } from '../../types';
import logError from '../../utils/logError';
import TableEcommerceCategory from '../../components/modules/Category/TableEcommerceCategory';

export default function LazadaCategoryPage() {
  const [data, setData] = useState<EcommerceCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const { data } = await categoryApi.getCrawlCategory({ merchant: 'lazada' });
        setData(data);
      } catch (error) {
        logError('Get Lazada Category', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <TableEcommerceCategory isLoading={isLoading} merchant="lazada" dataSource={data} />
    </MainLayout>
  );
}
