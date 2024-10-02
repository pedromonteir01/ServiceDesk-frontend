import { FaTimes, FaHome, FaChartBar, FaUserAlt, FaEnvelope, FaRegCalendarAlt, FaIdCardAlt, FaRegFileAlt, FaRegSun } from 'react-icons/fa';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './sideHeader.module.css';

const Sidebar = ({ isActive, onClose }) => {
  return (
    <div className={`sidebar ${isActive ? 'sidebar-open' : ''}`}>
      
      <FaTimes onClick={onClose} />
      <div className="content">
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Statistics" />
        <SidebarItem Icon={FaUserAlt} Text="Users" />
        <SidebarItem Icon={FaEnvelope} Text="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;