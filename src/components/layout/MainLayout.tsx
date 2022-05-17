import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu, Spin } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { DingtalkOutlined } from '@ant-design/icons';

// import { avatar, logo } from 'assets/images';
// import { useUser } from 'contexts/User';
import React, { ReactNode, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import sidebarMenu from '../../constants/menu';
import { useUser } from '../../context/UserContext';
import notification from '../../utils/notification';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface IProps {
  children: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
}

const MainLayout = (props: IProps): JSX.Element => {
  const { children, isLoading = false, isError, error } = props;
  const { user, signOut } = useUser();

  const history = useHistory();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const openItem = sidebarMenu.find((m) => {
    return m.submenu ? m.submenu.some((s) => s.key === location.pathname) : m.key === location.pathname;
  });
  const openKey = openItem ? openItem.key : '/';

  return (
    <Spin size="large" spinning={isLoading}>
      <>
        {isError && error && notification('error', error)}
        <Layout className="min-h-screen">
          <Header className="bg-primary-40 h-12 flex items-center justify-between fixed z-10 w-full">
            <DingtalkOutlined
              className="text-4xl text-white decoration-white"
              style={{ color: 'white' }}
              onClick={() => history.push('/')}
            />
            {/* <img
              src={'https://png.pngtree.com/png-clipart/20201209/original/pngtree-apple-png-image_5628631.jpg'}
              alt="logo"
              className="cursor-pointer"
              onClick={() => history.push('/')}
            /> */}
            <div className="flex items-center justify-end">
              <SearchOutlined className="text-white mr-4" />
              <QuestionCircleOutlined className="text-white mr-4" />
              <BellOutlined className="text-white mr-4" />
              <Dropdown
                overlay={
                  <Menu className="p-2">
                    <Menu.Item onClick={signOut}>Sign out</Menu.Item>
                  </Menu>
                }
                placement="bottomRight"
              >
                <div className="flex items-center cursor-default">
                  <div className="w-4 h-4 rounded-full flex justify-center items-center overflow-hidden mr-2">
                    <img src={'avatar'} alt="avatar" />
                  </div>
                  <div className="para-3 text-white">{user?.fullname}</div>
                </div>
              </Dropdown>
            </div>
          </Header>

          <Layout className="bg-white">
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              theme="light"
              className="overflow-auto h-screen fixed l-0 mt-16"
            >
              <Menu mode="inline" theme="light" defaultSelectedKeys={[location.pathname]} defaultOpenKeys={[openKey]}>
                {sidebarMenu.map((item) => (
                  <>
                    {item.submenu ? (
                      <SubMenu key={item.key} icon={<item.icon />} title={item.title} className="text-sm font-medium">
                        {item.submenu.map((m) => (
                          <MenuItem key={m.key} className="text-sm font-medium">
                            {m.title}
                            <Link to={m.key} />
                          </MenuItem>
                        ))}
                      </SubMenu>
                    ) : (
                      <MenuItem key={item.key} icon={<item.icon />} className="text-sm font-medium">
                        {item.title}
                        <Link to={item.key} />
                      </MenuItem>
                    )}
                  </>
                ))}
              </Menu>
              <Button
                onClick={toggleCollapsed}
                className="absolute bottom-0 w-full drop-shadow-sidebar-button text-sm font-medium "
              >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
            </Sider>
            {/* <Layout style={{ marginLeft: collapsed ? 80 : 200, marginTop: 50 }}> */}
            <Content style={{ marginTop: '4rem' }} className="px-9 py-8 m-0 bg-neutral-95">
              {children}
            </Content>
            {/* </Layout> */}
          </Layout>
        </Layout>
      </>
    </Spin>
  );
};

export default MainLayout;
