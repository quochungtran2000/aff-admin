import { useState } from 'react';
import { useQuery } from 'react-query';
import configApi from '../../api/configApi';
import MainLayout from '../../components/layout/MainLayout';
import CreateConfigModal from '../../components/modules/Config/CreateConfigModal';
import TableConfig from '../../components/modules/Config/TableConfig';
import UpdateConfigModal from '../../components/modules/Config/UpdateConfigModal';
import { PageSize } from '../../constants/configVariables';
import useQueryParam from '../../hook/useQueryPrams';
import { AffConfig } from '../../types';
import logData from '../../utils/logData';
import logError from '../../utils/logError';
import notification from '../../utils/notification';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function ConfigPage() {
  const useParam = useQueryParam();
  const [currentConfig, setCurrentConfig] = useState<AffConfig | undefined>(undefined);
  const [isCreateVisible, setIsCreateVisible] = useState<boolean>(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState<boolean>(false);

  const page = parseInt(useParam.get('page') + '') || 1;
  const pageSize = parseInt(useParam.get('pageSize') + '') || PageSize[10];
  // const search = useParam.get('search') || undefined;
  // const username = useParam.get('username') || undefined;
  // const fullname = useParam.get('fullname') || undefined;
  // const email = useParam.get('email') || undefined;
  // const phoneNumber = useParam.get('phoneNumber') || undefined;

  // const userParams: getUserVars = { page, pageSize, search, username, fullname, email, phoneNumber };
  // const params: Partial<getUserVars> = JSON.parse(JSON.stringify(userParams));

  const { data, isLoading, refetch } = useQuery(['getQuery'], () => configApi.getConfigs());
  console.log(data);

  const onCreateConfig = async (values: { name: string; value: string }) => {
    if (!values) return;
    logData('Create Config', values);
    configApi
      .createConfig(values)
      .then(({ data }) => {
        logData('Create Config Success', data);
        notification('success', 'Tạo thành công');
        refetch();
        onCancelCreate();
      })
      .catch((err) => {
        logError('Create Config Error', err);
        notification('error', err?.response?.data?.message[0]);
      });
  };

  const onUpdateConfig = async (values: { name: string; value: string }) => {
    if (!values) return;
    logData('Update Config', values);
    configApi
      .updateConfig(values)
      .then(({ data }) => {
        logData('Create Config', data);
        notification('success', 'Cập nhật thành công');
        refetch();
        onCancelUpdate();
      })
      .catch((err) => {
        logError('Update Config', err);
        notification('error', err?.response?.data?.message[0]);
      });
  };

  const onDeleteConfig = async (configName: string) => {
    if (!configName) return;
    logData('Delete Config', configName);
    configApi
      .deleteConfig(configName)
      .then(({ data }) => {
        logData('Delete Config Response', data);
        notification('success', 'Xóa thành công');
        refetch();
        onCancelUpdate();
      })
      .catch((err) => {
        logError('Delete Config Error', err);
        notification('error', err?.response?.data?.message[0]);
      });
  };

  const onUpdate = (record: AffConfig) => {
    if (!record) return;
    setCurrentConfig(record);
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
      <TableConfig
        dataSource={data?.data?.data}
        total={data?.data.total}
        isLoading={isLoading}
        page={page}
        pageSize={pageSize}
        onUpdate={onUpdate}
        onDelete={onDeleteConfig}
      />
      <CreateConfigModal isModalVisible={isCreateVisible} onCancel={onCancelCreate} onFinish={onCreateConfig} />
      <UpdateConfigModal
        isModalVisible={isUpdateVisible}
        onCancel={onCancelUpdate}
        onFinish={onUpdateConfig}
        data={currentConfig}
      />
    </MainLayout>
  );
}
