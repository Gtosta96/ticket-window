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
    title: "Gerência",
    path: "/gerencia",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    key: 1,
    title: "Controle",
    path: "/emissao",
    icon: <FiIcons.FiSend />,
  },
  {
    key: 2,
    title: "Display de Chamadas",
    path: "/visualiza",
    icon: <IoIcons.IoIosPaper />,
  },
];
export default SidebarData;
