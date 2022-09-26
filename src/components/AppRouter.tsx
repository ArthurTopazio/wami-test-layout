import { Navigate, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../routes/routes';

const AppRouter = () => {

  return (

    <Routes>
      {publicRoutes.map((item) => {
        const Component = item.component;
        return <Route key={item.path} path={item.path} element={<Component />} />
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

  )
};

export default AppRouter;