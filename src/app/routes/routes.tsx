
import { Feedback } from "@pages/feedback";
import { MainPage } from "@pages/home";
import { AuthLayout } from "@pages/layouts/auth";
import { Layout } from "@pages/layouts/main";
import { AlertsLayout } from "@pages/layouts/status";
import { Auth } from "@pages/login";
import { Stage1, Stage2 } from "@pages/passRecover";
import { Registration } from "@pages/registration";
import { 
  HOMEPAGE, 
  AUTH, 
  REGISTRATION, 
  CONFIRM_EMAIL, 
  CHANGE_PASSWORD, 
  ERROR_LOGIN, 
  SUCCESS, 
  ERROR_USER_EXIST, 
  RESULT_ERROR, 
  ERROR_CHECK_EMAIL_NO_EXIST, 
  ERROR_CHECK_EMAIL, 
  ERROR_CHANGE_PASSWORD, 
  SUCCESS_CHANGE_PASSWORD,
  FEEDBACK
} from "@shared/data/constants/routes/route";
import { AlertsData } from "@shared/data/statusData/data";
import { Navigate, Routes, Route } from "react-router-dom";



const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: HOMEPAGE,
                element: <MainPage />
            },
            {
              path: FEEDBACK,
              element: <Feedback />
            },
            {
              path: '/',
              element: <Navigate to={HOMEPAGE} replace />,
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
      path: ERROR_CHANGE_PASSWORD,
      element: <AlertsLayout alert={AlertsData[7]} />,
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