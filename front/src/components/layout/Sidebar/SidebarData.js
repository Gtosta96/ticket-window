import React from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const SidebarData = [
  {
    title: "Emissão",
    path: "/emissao",
    icon: <FiIcons.FiSend />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Visualização",
    path: "/visualiza",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Entregas",
    path: "/gerencia",
    icon: <FaIcons.FaCartPlus />,
  },
];
export default SidebarData;
