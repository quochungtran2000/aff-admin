import { Button, Form, Input, Table } from 'antd';
import MainLayout from '../../components/layout/MainLayout';
import { PageSize } from '../../constants/configVariables';
import { AffConfig, Product_Affiliate_Link } from '../../types';
import { HocChangePagination } from '../../utils/HocChangePagination';
import { Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const data = [
  {
    id: `7b5f1c680845324df37c88ccf09b6180`,
    productId: '12312379',
    clickUrl:
      'https://fast.accesstrade.com.vn/deep_link/5744017891205284463/4348614231480407268?url=https%3A%2F%2Ftiki.vn%2Fgong-kinh-hop-kim-thoi-trang-nam-nu-sieu-nhe-sieu-ben-ouress-jt6703-p179979311.html',
    originUrl: 'https://tiki.vn/gong-kinh-hop-kim-thoi-trang-nam-nu-sieu-nhe-sieu-ben-ouress-jt6703-p179979311.html',
    shortUrl: 'https://shorten.asia/HAk6asSe',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'e0998ea689903cd828db9e056662ec0b',
    productId: '34123423',
    clickUrl:
      'https://fast.accesstrade.com.vn/deep_link/5744017891205284463/4348614231480407268?url=https%3A%2F%2Ftiki.vn%2Fbalo-laptop-10007-15-6-inch-17-inch-balolaptop-day-dan-chac-chan-phu-hop-dan-cong-so-van-phong-p149567871.html%3Fitm_campaign%3Dtiki-reco_UNK_DT_UNK_UNK_infinite-scroll_infinite-scroll_personalize-for-you-v1_202206180600_MD_batched_PID.149567885%26itm_medium%3DCPC%26itm_source%3Dtiki-reco%26spid%3D149567885',
    originUrl:
      'https://tiki.vn/balo-laptop-10007-15-6-inch-17-inch-balolaptop-day-dan-chac-chan-phu-hop-dan-cong-so-van-phong-p149567871.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_infinite-scroll_infinite-scroll_personalize-for-you-v1_202206180600_MD_batched_PID.149567885&itm_medium=CPC&itm_source=tiki-reco&spid=149567885',
    shortUrl: 'https://shorten.asia/BNsQNmAr',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: `f6e1add559416dc29c55c75909c499d2`,
    productId: '43141083',
    clickUrl:
      'https://fast.accesstrade.com.vn/deep_link/5744017891205284463/4348614231480407268?url=https%3A%2F%2Ftiki.vn%2Ftui-chong-soc-uag-medium-sleeve-cho-laptop-tablet-13-inch-hang-chinh-hang-p72454378.html%3Fitm_campaign%3Dtiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-maybe-you-like-mix-v1_202206180600_MD_batched_PID.180008428%26itm_medium%3DCPC%26itm_source%3Dtiki-reco%26spid%3D180008428',
    originUrl:
      'https://tiki.vn/tui-chong-soc-uag-medium-sleeve-cho-laptop-tablet-13-inch-hang-chinh-hang-p72454378.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-maybe-you-like-mix-v1_202206180600_MD_batched_PID.180008428&itm_medium=CPC&itm_source=tiki-reco&spid=180008428',
    shortUrl: 'https://shorten.asia/4JvBxwkW',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'faad06ac6c0f7d621586ba098da069b5',
    productId: '43143434',
    clickUrl:
      'https://fast.accesstrade.com.vn/deep_link/5744017891205284463/4348614231480407268?url=https%3A%2F%2Ftiki.vn%2Fdien-thoai-samsung-galaxy-m22-6gb-128gb-hang-chinh-hang-p138914723.html',
    originUrl: 'https://tiki.vn/dien-thoai-samsung-galaxy-m22-6gb-128gb-hang-chinh-hang-p138914723.html',
    shortUrl: 'https://shorten.asia/Jj6JPEZj',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '398bf52a086d04a7adc0db0e229fd933',
    productId: '87801431',
    clickUrl:
      'https://fast.accesstrade.com.vn/deep_link/5744017891205284463/4348614231480407268?url=https%3A%2F%2Ftiki.vn%2Fapple-iphone-12-hang-chinh-hang-p123345348.html%3Fitm_campaign%3DPDP_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.149999_Y.1613423_Z.2664191_CN.Product-Ads_Manual_10062022%26itm_medium%3DCPC%26itm_source%3Dtiki-ads%26spid%3D70766419',
    originUrl: 'https://tiki.vn/gong-kinh-hop-kim-thoi-trang-nam-nu-sieu-nhe-sieu-ben-ouress-jt6703-p179979311.html',
    shortUrl: 'https://shorten.asia/reZA5b17',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '1d73dabeb4e9f190718b4ec0f5f1454e',
    productId: '98787615',
    clickUrl:
      'https://fast.accesstrade.com.vn/deep_link/5744017891205284463/4348614231480407268?url=https%3A%2F%2Ftiki.vn%2Fkinh-gia-can-gong-kinh-can-nam-nu-mat-tron-gong-nhua-den-nham-sieu-nhe-khong-do-han-quoc-blue-light-shop-p73384616.html%3Fitm_campaign%3Dtiki-reco_UNK_DT_UNK_UNK_infinite-scroll_infinite-scroll_personalize-for-you-v1_202206180600_MD_batched_PID.73384617%26itm_medium%3DCPC%26itm_source%3Dtiki-reco%26spid%3D73384617',
    originUrl:
      'https://tiki.vn/kinh-gia-can-gong-kinh-can-nam-nu-mat-tron-gong-nhua-den-nham-sieu-nhe-khong-do-han-quoc-blue-light-shop-p73384616.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_infinite-scroll_infinite-scroll_personalize-for-you-v1_202206180600_MD_batched_PID.73384617&itm_medium=CPC&itm_source=tiki-reco&spid=73384617',
    shortUrl: 'https://shorten.asia/yCyS8bQG',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function AffiliateLinkPage() {
  const columns = [
    {
      title: 'Mã',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: 'Mã sản phẩm',
      dataIndex: 'productId',
      key: 'productId',
      width: '10%',
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: 'Link',
      dataIndex: 'clickUrl',
      key: 'clickUrl',
      ellipsis: {
        showTitle: false,
      },
      width: '16%',
    },
    {
      title: 'Link gốc',
      dataIndex: 'originUrl',
      key: 'originUrl',
      ellipsis: {
        showTitle: false,
      },
      width: '16%',
    },
    {
      title: 'Link rút gọn',
      dataIndex: 'shortUrl',
      key: 'shortUrl',
      ellipsis: {
        showTitle: false,
      },
      width: '16%',
      render: (url: string) => <span onClick={() => window.prompt('copy', url)}>{url}</span>,
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '10%',
      render: (date: Date) => <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '10%',
      render: (date: Date) => <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: 'Quản Lý',
      dataIndex: 'action',
      key: 'action',
      width: '15%',
      // align: 'center',
      render: (_: any, record: any) => (
        <div className="flex justify-center">
          <Button className="mr-4">Cập nhật</Button>
          <Button danger>Xóa</Button>
        </div>
      ),
    },
  ];
  return (
    <MainLayout>
      <h6 className="text-primary-30 mt-1 font-semibold text-xl">{`Danh sách liên kết`}</h6>
      <div className="mb-4">
        <Form layout="inline" className="items-center" autoComplete="off">
          <Form.Item name="search">
            <Input placeholder="Tìm kiếm" className="w-44" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        rowKey={(row) => row.id}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: [PageSize[10], PageSize[20], PageSize[50]],
        }}
      />
    </MainLayout>
  );
}
