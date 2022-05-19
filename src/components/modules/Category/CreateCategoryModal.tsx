import { Button, Form, Input, Modal, TreeSelect } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import categoryApi from '../../../api/categoryApi';
import { EcommerceCategory } from '../../../types';
import logError from '../../../utils/logError';

// import { useEffect } from 'react';

interface IProps {
  isModalVisible: boolean;
  onCancel: () => void;
  onFinish: (data: any) => void;
}

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function CreateCategoryModal(props: IProps): JSX.Element {
  const { isModalVisible, onCancel, onFinish } = props;

  const [form] = Form.useForm();

  // const [state, setState] = useState<any>();
  const [tikiLoading, setTikiLoading] = useState<boolean>();
  const [lazadaLoading, setLazadaLoading] = useState<boolean>();
  const [shopeeLoading, setShopeeLoading] = useState<boolean>();
  const [tikiCategory, setTikiCategory] = useState<EcommerceCategory[]>();
  const [lazadaCategory, setLazadaCategory] = useState<EcommerceCategory[]>();
  const [shopeeCategory, setShopeeCategory] = useState<EcommerceCategory[]>();

  const fetchTikiData = useCallback(async () => {
    setTikiLoading(true);
    try {
      const { data: tikiCategoryData } = await categoryApi.getCrawlCategory({ merchant: 'tiki' });
      setTikiCategory(tikiCategoryData);
    } catch (error) {
      logError('Get Tiki Category', error);
    } finally {
      setTikiLoading(false);
    }
  }, []);

  const fetchShopeeData = useCallback(async () => {
    setShopeeLoading(true);
    try {
      const { data: shopeeCategoryData } = await categoryApi.getCrawlCategory({ merchant: 'shopee' });
      setShopeeCategory(shopeeCategoryData);
    } catch (error) {
      logError('Get Shopee Category', error);
    } finally {
      setShopeeLoading(false);
    }
  }, []);

  const fetchLazadaData = useCallback(async () => {
    setLazadaLoading(true);
    try {
      const { data: lazadategoryData } = await categoryApi.getCrawlCategory({ merchant: 'lazada' });
      setLazadaCategory(lazadategoryData);
    } catch (error) {
      logError('Get Lazada Category', error);
    } finally {
      setLazadaLoading(false);
    }
  }, []);

  useEffect(() => {
    form.resetFields();
    fetchTikiData();
    fetchLazadaData();
    fetchShopeeData();
  }, [fetchLazadaData, fetchTikiData, fetchShopeeData, form]);

  const getData = (data: EcommerceCategory[] = []) => {
    return data?.map((cateogry) => {
      const { id: value, title, subCategory } = cateogry;
      let result: { [key: string]: any } = { title, value };
      if (subCategory?.length) {
        const children = subCategory?.map((sub) => {
          const { id: value, title } = sub;
          return { title, value };
        });
        result.children = children;
      }
      return result;
    });
  };
  const shopeeCategoryValues = getData(shopeeCategory);

  const tikiCategoryValues = getData(tikiCategory);

  const lazadaCategoryValues = lazadaCategory?.map((cateogry) => {
    const { id: value, title, subCategory: sub1 } = cateogry;
    let result: { [key: string]: any } = { title, value };
    if (sub1?.length) {
      const children1 = sub1?.map((sub) => {
        const { id: value, title, subCategory: sub2 } = sub;
        let chil1: { [key: string]: any } = { title, value };
        if (sub2?.length) {
          const children2 = sub2.map((sub) => {
            const { id: value, title } = sub;
            return { value, title };
          });
          chil1.children = children2;
        }

        return chil1;
      });
      result.children = children1;
    }
    return result;
  });

  return (
    <Modal title="Tạo danh mục" visible={isModalVisible} onCancel={onCancel} footer={null}>
      <Form
        form={form}
        name="create category"
        onFinish={onFinish}
        className="bg-white p-2 gap-4 lg:w-90 md:w-90 sm:w-100"
        {...formLayout}
      >
        {/* <Form.Item label="Mã" name="id">
          <Input />
        </Form.Item> */}

        <Form.Item label="Tiêu Đề" name="title">
          <Input />
        </Form.Item>

        {/* <Form.Item label="Slug" name="slug">
          <Input disabled />
        </Form.Item> */}

        {/* <Form.Item label="Website" name="website" valuePropName="checked">
          <Checkbox name="website" />
        </Form.Item>

        <Form.Item label="App" name="app" valuePropName="checked">
          <Checkbox name="app" />
        </Form.Item> */}

        <Form.Item className="flex items-center justify-center" label="Danh mục Tiki" name="tikiCategory">
          <TreeSelect
            showSearch
            style={{ width: '100%' }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Danh mục Tiki"
            allowClear
            multiple
            loading={tikiLoading}
            treeDefaultExpandAll
            treeData={tikiCategoryValues}
          ></TreeSelect>
        </Form.Item>

        <Form.Item className="flex items-center justify-center" label="Danh mục Shopee" name="shopeeCategory">
          <TreeSelect
            showSearch
            style={{ width: '100%' }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Danh mục Shopee"
            allowClear
            multiple
            loading={shopeeLoading}
            treeDefaultExpandAll
            treeData={shopeeCategoryValues}
          ></TreeSelect>
        </Form.Item>

        <Form.Item className="flex items-center justify-center" label="Danh mục Lazada" name="lazadaCategory">
          <TreeSelect
            showSearch
            style={{ width: '100%' }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Danh mục Lazada"
            allowClear
            multiple
            loading={lazadaLoading}
            treeDefaultExpandAll
            treeData={lazadaCategoryValues}
          ></TreeSelect>
        </Form.Item>

        {/* <Form.Item label="Hoạt Động" name="active" valuePropName="checked">
          <Checkbox name="active" />
        </Form.Item>

        <Form.Item label="Thu Thập" name="crawl" valuePropName="checked">
          <Checkbox name="crawl" />
        </Form.Item> */}

        <Form.Item className="flex items-center justify-center text-center">
          <Button type="primary" htmlType="submit" className="bg-primary ">
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
