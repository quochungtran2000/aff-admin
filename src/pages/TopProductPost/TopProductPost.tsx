import { Button, Drawer, Dropdown, Form, Image, Input, Menu, Modal, Table, Tag } from 'antd';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useLocation } from 'react-router';
import postApi from '../../api/postApi';
import { CheckIcon, CancelIcon, MagifyingGlassIcon, ThreeDotIcon } from '../../assets/svg';
import MainLayout from '../../components/layout/MainLayout';
import { PageSize } from '../../constants/configVariables';
import useQueryParam from '../../hook/useQueryPrams';
import { Post, PostAuthor } from '../../types';
import updateQueryStringParameter from '../../utils/updateQueryStringParameter';

const data = [
  {
    title: '5 thiết bị cần mua để tiết kiệm 1 khoản khi đi du lịch',
    conetnt: ` Sau đây là 5 thiết bị cần mua trước khi đi du lịch để tiết kiệm được một khoảng chi phí rất lớn khi đi
  du lịch ở Vịnh Hạ Long. Thứ nhất nên mua kính râm, nón rơm trước ở nhà để tối ưu chi phí,...`,
    thumbnail: 'https://cybershow.vn/wp-content/uploads/2019/04/team-building-da-nang-2-480x360.jpg',
    id: 223,
  },
  {
    title: 'Muốn nấu ăn ngon thì không nên bỏ qua những thứ sau đây',
    conetnt: `Nhà nhà ai cũng muốn nấu ăn ngon nhưng thông thường sẽ bỏ qua những thứ này. Những thứ ...`,
    thumbnail:
      'https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/vietnam/general_image/savoury/other_savoury/teaser_mon_ngon_tu_ca-1187671.jpg.ulenscale.480x360.jpg',
    id: 213,
  },
  {
    title: 'Top 11 quyển sách đáng mua nhất năm 2022',
    conetnt: `Đây là danh sách 11 quyển sách đáng mua nhất năm dưới góc nhìn của tôi. Top 1 là quyển ....`,
    thumbnail:
      'https://insight.isb.edu.vn/wp-content/uploads/sites/2/2020/09/11-quyen-sach-ve-Growth-Hacking-dang-doc-nhat-2020_thumbnail-480x360.png',
    id: 432,
  },
  {
    title: 'Trải nghiệm mua hàng tại xưởng gỗ ABC',
    conetnt: ` Mình mua cái ghế bẹt tại xưởng gỗ ABC được 2 năm và sau đây là trải nghiệm của mình sau 2 năm trải
    nghiệm`,
    thumbnail: 'https://goteak.vn/wp-content/uploads/2019/12/5726874286_bbd10a7d17_c-480x360.jpg',
    id: 532,
  },
];

// const data = [<Tag color="gold">gold</Tag>, <Tag color="lime">lime</Tag>, <Tag color="green">green</Tag>];
const color: { [key: string]: string } = {
  tips: 'gold',
  review: 'lime',
  'top-product': 'green',
};

export default function TopProductPostPage() {
  const useParam = useQueryParam();
  const history = useHistory();
  const location = useLocation();
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

  const page = parseInt(useParam.get('page') + '') || 1;
  const pageSize = parseInt(useParam.get('pageSize') + '') || PageSize[10];
  const search = useParam.get('search') || undefined;
  const type = useParam.get('type') || undefined;
  // const fullname = useParam.get('fullname') || undefined;
  // const email = useParam.get('email') || undefined;
  // const phoneNumber = useParam.get('phoneNumber') || undefined;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentPost, setCurrenPost] = useState<Post | undefined>(undefined);
  const handleShowGIDetailModal = (record: Post) => {
    setIsModalVisible(true);
    setCurrenPost(record);
  };
  const userParams = { page, pageSize, search, type };
  const params: Partial<any> = JSON.parse(JSON.stringify(userParams));

  const { data, isLoading } = useQuery(['getPosts', params], () => postApi.getPosts(params));
  const [visible, setVisible] = useState(false);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'postId',
      key: 'postId',
      width: '3%',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'postThumbnail',
      key: 'postThumbnail',
      width: '10%',
      render: (postThumbnail: string) => <Image width={120} height={80} src={postThumbnail} />,
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'postTitle',
      key: 'postTitle',
      width: '27%',
    },
    {
      title: 'số xem',
      dataIndex: 'totalView',
      key: 'totalView',
      width: '8%',
    },
    {
      title: 'Thể loại',
      dataIndex: 'postType',
      key: 'postType',
      width: '8%',
      render: (postType: string) => (
        <div className="flex justify-center">
          <Tag color={color[postType]}>{postType}</Tag>
        </div>
      ),
    },
    {
      title: 'Tác giả',
      dataIndex: 'author',
      key: 'author',
      width: '12%',
      render: (author: PostAuthor) => <div className="flex justify-center">{author.fullname}</div>,
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '8%',
      render: (date?: Date) => <span>{new Date().toLocaleDateString()}</span>,
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '10%',
      render: (date?: Date) => <span>{new Date().toLocaleDateString()}</span>,
    },
    {
      title: 'Quản Lý',
      dataIndex: 'action',
      key: 'action',
      width: '15%',
      render: (_: any, record: Post) => (
        <>
          {/* <Button>Top</Button> */}
          <Button danger className="mr-2">
            Xóa
          </Button>
          <Button>Ẩn</Button>
        </>
      ),
    },
    {
      title: 'Chi tiết',
      dataIndex: 'detail',
      key: 'detail',
      render: (_: any, record: Post) => (
        <div className="flex justify-center">
          <button onClick={() => handleShowGIDetailModal(record)} className="outline-none">
            <ThreeDotIcon className="flex justify-center" />
          </button>
        </div>
      ),
    },
  ];

  function createMarkup(data?: string) {
    return {
      __html: data || '',
    };
  }
  return (
    <MainLayout>
      <div className="pb-4">
        <Form layout="inline" className="items-center mb-8" onFinish={onFinish}>
          <Form.Item name="search">
            <Input placeholder="Tìm kiếm" suffix={<MagifyingGlassIcon />} />
          </Form.Item>

          <Form.Item name="type">
            <Input placeholder="Thể Loại" />
          </Form.Item>

          <Form.Item name="authorName">
            <Input placeholder="Tác giả" />
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
        loading={isLoading}
        rowKey={(record) => record.postId}
        columns={columns}
        dataSource={data?.data.data}
      />
      <Modal
        centered
        title={currentPost?.postTitle}
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={false}
        width={'50%'}
        className="fixed top-0 right-0 left-0 bottom-0 overflow-auto"
      >
        <div className="flex space-x-4 bg-white overflow-auto">
          {/* <div>
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="object-cover w-12 h-12 rounded-full"
            />
          </div> */}
          <div>
            {/* <h6 className="font-semibold">{`${currentPost?.author?.fullname} - ${currentPost?.postTitle}`}</h6>
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <span className="text-xs">2 days ago</span> */}
            <a rel="noopener noreferrer" aria-label={currentPost?.postTitle}>
              <img alt={currentPost?.postTitle} className="object-cover w-full h-96" src={currentPost?.postThumbnail} />
            </a>
          </div>
        </div>
        <div className="h-96" dangerouslySetInnerHTML={createMarkup(currentPost?.postContent)} />
      </Modal>
    </MainLayout>
  );
}
