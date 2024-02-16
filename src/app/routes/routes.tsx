import { AuthLayout } from "@pages/authLayout";
import { MainPage } from "@pages/home";
import { Layout } from "@pages/Layout";
import {  Route, Routes } from 'react-router-dom';
import { 
    HOMEPAGE,
    AUTH,
    REGISTRATION,
    ERROR_LOGIN,
    SUCCESS,
    ERROR_USER_EXIST,
    RESULT_ERROR,
    ERROR_CHECK_EMAIL_NO_EXIST,
    ERROR_CHECK_EMAIL,
    CONFIRM_EMAIL,
    CHANGE_PASSWORD,
    SUCCESS_CHANGE_PASSWORD
 } from "@shared/Constants/Routes/ROUTE";
import { Registration } from "@pages/registration";
import { Auth } from "@pages/auth";
import { AlertsLayout } from "@pages/alertsLayout";
import { AlertsData } from "@shared/alertsData/data";
import { Stage1, Stage2 } from "@pages/passRecover";

const routes = [
    {
        path: HOMEPAGE,
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            }
        ]
    },
    {
        path: AUTH,
        element: <AuthLayout type="auth" />,
        children: [
            {
              path: AUTH,
              element: <Auth />,
            },
            {
                path: `:${REGISTRATION}`,
                element: <Registration />,
            },
        ]
    },
    {
      path: AUTH,
      element: <AuthLayout type="recovery" />,
      children: [
          {
            path: `${AUTH}/${CONFIRM_EMAIL}`,
            element: <Stage1 />,
          },
          {
            path: `${AUTH}/${CHANGE_PASSWORD}`,
            element: <Stage2 />,
          },
          
      ]
  },
    {
      path: ERROR_LOGIN,
      element: <AlertsLayout alert={AlertsData[0]} />,
    },
    {
      path: SUCCESS,
      element: <AlertsLayout alert={AlertsData[1]} />,
    },
    {
      path: ERROR_USER_EXIST,
      element: <AlertsLayout alert={AlertsData[2]} />,
    },
    {
      path: RESULT_ERROR,
      element: <AlertsLayout alert={AlertsData[3]} />,
    },
    {
      path: ERROR_CHECK_EMAIL_NO_EXIST,
      element: <AlertsLayout alert={AlertsData[4]} />,
    },
    {
      path: ERROR_CHECK_EMAIL,
      element: <AlertsLayout alert={AlertsData[5]} />,
    },
    {
      path: ERROR_CHECK_EMAIL,
      element: <AlertsLayout alert={AlertsData[5]} />,
    },
    {
      path: SUCCESS_CHANGE_PASSWORD,
      element: <AlertsLayout alert={AlertsData[6]} />,
    }
];
  
  const publicRoutes = (
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          >
            {route.children && route.children.map((child, childIndex) => (
              <Route
                key={childIndex}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
        {}
      </Routes>
  );
  
  export { publicRoutes };