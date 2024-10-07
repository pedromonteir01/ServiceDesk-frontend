import { FaTimes, FaHome, FaChartBar, FaUserAlt, FaRegSun, FaUserLock, FaUserCog } from 'react-icons/fa';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './sideHeader.module.css';
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";

const Sidebar = ({ isActive, onClose }) => {
  const { setUser, user } = useContext(UserContext);

  return (
    <div className={`sidebar ${isActive ? 'sidebar-open' : ''}`} style={{backgroundColor: '#ff0000', height: '100vh', position:'fixed', zIndex:999}}>
      
      <div className={styles.container}>
        <SidebarItem Icon={FaHome} Text="Início" href="/" />
        <SidebarItem Icon={FaChartBar} Text="Solicitações" href="/Request" />
        <SidebarItem Icon={FaRegSun} Text="Configurações" href="/" />
        { user ? <SidebarItem Icon={FaUserCog} Text="Perfil" href="/Profile" /> : 
        <>
        <SidebarItem Icon={FaUserLock} Text="Registrar" href="/Register" />
        <SidebarItem Icon={FaUserAlt} Text="Login" href="/Login" />
        </>
        }
      </div>
    </div>
  );
};

export default Sidebar;