import { Redirect, Route, RouteProps } from 'react-router';
// import useUserStore from '../store/user';

type Props = RouteProps;

export default function ProtectedRoute(props: Props): JSX.Element {
  // const user = useUserStore((state) => state.user);
  const token = localStorage.getItem('token');
  return token ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
      }}
    />
  );
}
