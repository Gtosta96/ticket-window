import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { PATHS } from "../../config/paths";

const sidebarItems = [
  {
    title: "Gerenciamento",
    path: PATHS.MANAGEMENT,
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Display",
    path: PATHS.DISPLAY,
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Histórico",
    path: PATHS.HISTORY,
    icon: <FiIcons.FiSend />,
    disabled: true,
  },
];
export default sidebarItems;
