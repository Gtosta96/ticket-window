import React from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { ISideBarData } from "./types";
import { PATHS } from "../../config/paths";

const SidebarData: ISideBarData[] = [
  {
    key: 0,
    title: "Gerenciamento",
    path: PATHS.MANAGEMENT,
    icon: <FaIcons.FaCartPlus />,
  },
  {
    key: 1,
    title: "Controle",
    path: PATHS.TICKETS,
    icon: <FiIcons.FiSend />,
  },
  {
    key: 2,
    title: "Display",
    path: PATHS.DISPLAY,
    icon: <IoIcons.IoIosPaper />,
  },
];
export default SidebarData;
