import { AppLayout } from "../layout/app-layout";
import { Home } from "../pages/home";
import { Explore } from "../pages/explore";
import { Notifications } from "../pages/notification";
export const routes = [
  {
    id: "0",
    element: <AppLayout />,
    children: [
      {
        id: "1",
        path: "/",
        element: <Home />,
      },
      {
        id: "2",
        path: "/explore",
        element: <Explore />,
      },
      {
        id: "3",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
];
