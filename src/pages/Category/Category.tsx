import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';
import CreateCategoryModal from '../../components/modules/Category/CreateCategoryModal';
import { Category } from '../../types';
import categoryApi from '../../api/categoryApi';
import logError from '../../utils/logError';
import notification from '../../utils/notification';
import TableCategory from '../../components/modules/Category/TableCategory';
import UpdateCategoryModal from '../../components/modules/Category/UpdateCategoryModal';
import logData from '../../utils/logData';
import MainLayout from '../../components/layout/MainLayout';

export default function CategoryPage() {
  const [data, setData] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<Category | undefined>(undefined);
  const [isCreateVisible, setIsCreateVisible] = useState<boolean>(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState<boolean>(false);

  const refetch = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await categoryApi.getCategory();
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

  const onCreateCategory = async (values: {
    title: string;
    lazadaCategory: string[];
    shopeeCategory: string[];
    tikiCategory: string[];
  }) => {
    const { title, tikiCategory, shopeeCategory, lazadaCategory } = values;
    const data = { title, mapCategory: [...tikiCategory, ...shopeeCategory, ...lazadaCategory] };
    logData('Create Category', data);
    categoryApi
      .createCategory(data)
      .then(({ data }) => {
        logData('Create Category', data);
        notification('success', 'Tạo thành công');
        refetch();
        onCancelCreate();
      })
      .catch((err) => {
        logError('Create Category', err);
        notification('error', err?.response?.data?.message[0]);
      });
  };

  const onUpdateCategory = async (values: any) => {
    if (!values) return;
    logData('Update Category', values);
    categoryApi
      .updateCateory(values)
      .then(({ data }) => {
        logData('Create Category', data);
        notification('success', 'Xóa thành công');
        refetch();
        onCancelUpdate();
      })
      .catch((err) => {
        logError('Update Category', err);
        notification('error', err?.response?.data?.message[0]);
      });
  };

  const onDeleteCategory = async (values: { categoryId: number }) => {
    logData('Delete Category', values);
    categoryApi
      .deleteCategory(values)
      .then(({ data }) => {
        logData('Create Category', data);
        notification('success', 'Xóa thành công');
        refetch();
      })
      .catch((err) => {
        logError('Delete Category', err);
        notification('error', err?.response?.data?.message[0]);
      });
  };

  const onUpdate = (record: Category) => {
    if (!record) return;
    setCurrentCategory(record);
    setIsUpdateVisible(true);
  };

  const onCancelCreate = () => setIsCreateVisible(false);
  const onCancelUpdate = () => setIsUpdateVisible(false);

  return (
    <MainLayout>
      <div className="flex justify-between">
        <h6 className="text-primary-30 mt-1 font-semibold text-xl">{`Danh mục sản phẩm`}</h6>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => setIsCreateVisible(true)} />
        </Tooltip>
      </div>
      <TableCategory isLoading={isLoading} dataSource={data} onDelete={onDeleteCategory} onUpdate={onUpdate} />
      <CreateCategoryModal onCancel={onCancelCreate} onFinish={onCreateCategory} isModalVisible={isCreateVisible} />

      <UpdateCategoryModal
        onCancel={onCancelUpdate}
        onFinish={onUpdateCategory}
        isModalVisible={isUpdateVisible}
        data={currentCategory}
      />
    </MainLayout>
  );
}
