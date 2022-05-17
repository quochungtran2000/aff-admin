import { LinkOutlined, ReadOutlined, UserOutlined, TagsOutlined, FileProtectOutlined } from '@ant-design/icons';
// const date = new Date().toLocaleDateString('fr-CA');

const sidebarMenu = [
  {
    key: '/users',
    title: 'Quản Lý Người Dùng',
    icon: UserOutlined,
    submenu: [
      {
        title: 'Danh Sách Người Dùng',
        key: `/customer`,
      },
      {
        title: 'Danh sách nhân viên',
        key: '/staff',
      },
    ],
  },
  {
    key: '/category',
    title: 'Danh mục',
    icon: TagsOutlined,
    submenu: [
      {
        title: 'Danh Mục Sản phẩm',
        key: '/category',
      },
      {
        title: 'Danh Mục Thu Thập',
        key: '/crawl-category',
      },
    ],
  },
  {
    key: '/product',
    title: 'Sản phẩm',
    icon: ReadOutlined,

    submenu: [
      {
        title: 'Sản phẩm so sánh',
        key: '/product-template',
      },
      {
        title: 'Sản phẩm thu thập',
        key: '/crawl-product',
      },
    ],
  },
  {
    key: '/post',
    title: 'Quản Lý Bài Viết',
    icon: FileProtectOutlined,
    submenu: [
      {
        title: 'Bài viết so sánh',
        key: `/compare-post`,
      },
      {
        title: 'Bài viết top sản phẩm',
        key: '/top-product-post',
      },
    ],
  },
  {
    key: '/aff-link',
    title: 'Quản Lý Liên Kết',
    icon: LinkOutlined,
  },
];

export default sidebarMenu;