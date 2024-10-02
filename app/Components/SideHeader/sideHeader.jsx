import { FaTimes, FaHome, FaChartBar, FaUserAlt, FaEnvelope, FaRegCalendarAlt, FaIdCardAlt, FaRegFileAlt, FaRegSun } from 'react-icons/fa';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './sideHeader.module.css';

const Sidebar = ({ isActive, onClose }) => {
  return (
    <div className={`sidebar ${isActive ? 'sidebar-open' : ''}`} style={{backgroundColor: '#ff0000', height: '100vh', position:'fixed', zIndex:999}}>
      
      <div className="content">
        <SidebarItem Icon={FaHome} Text="Início" />
        <SidebarItem Icon={FaChartBar} Text="Requisições" />
        <SidebarItem Icon={FaRegSun} Text="Configurações" />
        <SidebarItem Icon={FaUserAlt} Text="Usuário" />
      </div>
    </div>
  );
};

export default Sidebar;