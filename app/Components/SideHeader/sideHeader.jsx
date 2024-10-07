import { FaTimes, FaHome, FaChartBar, FaUserAlt, FaRegSun } from 'react-icons/fa';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './sideHeader.module.css';

const Sidebar = ({ isActive, onClose }) => {
  return (
    <div className={`sidebar ${isActive ? 'sidebar-open' : ''}`} style={{backgroundColor: '#ff0000', height: '100vh', position:'fixed', zIndex:999}}>
      
      <div className={styles.container}>
        <SidebarItem Icon={FaHome} Text="Início" href="/" />
        <SidebarItem Icon={FaChartBar} Text="Requisições" href="/Request" />
        <SidebarItem Icon={FaRegSun} Text="Configurações" href="/" />
        <SidebarItem Icon={FaUserAlt} Text="Usuário" href="/" />
      </div>
    </div>
  );
};

export default Sidebar;