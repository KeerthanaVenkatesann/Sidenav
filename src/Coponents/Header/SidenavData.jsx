import {
  faUser,
  faBell,
  faChartLine,
  faBolt,
  faBarsProgress,
  faFireFlameCurved,
  faUserGroup,
  faCog,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";

export function sidebarDataFirst() {
  return [
    {
      title: "Dashboard",
      icon: faChartLine,
      // submenu: [
      //   {
      //     title: "Login",
      //     path: "/login",
      //   },
      //   {
      //     title: "Item",
      //     path: "/",
      //   },
      // ],
    },
    {
      title: "Employee dashboard ",
      icon: faUserGroup,
      // submenu: [
      //   {
      //     title: "Admin Dashboard",
      //     path: "/admin_dashboard",
      //   },
      //   {
      //     title: "Item",
      //     path: "/",
      //   },
      // ],
    },
    {
      title: "Attendance Details",
      icon: faBarsProgress,
      // submenu: [
      //   {
      //     title: "Item",
      //     path: "/",
      //   },
      //   {
      //     title: "Item",
      //     path: "/",
      //   },
      // ],
    },
    {
      title: "Notification",
      icon: faBell,
      // submenu: [
      //   {
      //     title: "Pending",
      //     path: "/employee_dashboard",
      //   },
      //   {
      //     title: "Item",
      //     path: "/",
      //   },
      // ],
    },
    {
      title: "Settings",
      icon: faCog,
      // submenu: [
      //   {
      //     title: "Item",
      //     path: "/",
      //   },
      //   {
      //     title: "Item",
      //     path: "/",
      //   },
      // ],
    },
  ];
}

export function sidebarDataLast() {
  return [
    {
      title: "Updates",
      icon: faFireFlameCurved,
      path: "/",
    },
    {
      title: "Support",
      icon: faLifeRing,
      path: "/",
    },
  ];
}
