import React from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export interface ISideBarData {
  key: number;
  title: string;
  path: string;
  icon: any;
}

const SidebarData = [
  {
    key: 0,
    title: "Emissão",
    path: "/emissao",
    icon: <FiIcons.FiSend />,
  },
  {
    key: 1,
    title: "Visualização",
    path: "/visualiza",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    key: 2,
    title: "Entregas",
    path: "/gerencia",
    icon: <FaIcons.FaCartPlus />,
  },
];
export default SidebarData;
