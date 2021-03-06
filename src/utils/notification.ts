import { notification } from 'antd';

type TypeNotification = 'success' | 'info' | 'warning' | 'error';

const openNotificationWithIcon = (type: TypeNotification, message: string, description?: string): void => {
  notification[type]({
    message,
    description,
  });
};

export default Object.freeze(openNotificationWithIcon);
