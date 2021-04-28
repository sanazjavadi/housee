import { useRouter } from 'next/router';

const NavigateRoute = (path) => {
  const router = useRouter();
  //   e.preventDefault();
  router.push(path);
};
export default NavigateRoute;
