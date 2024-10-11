import {
  FaHome,
  FaTools,
  FaUser,
  FaRegSun,
  FaUserLock,
  FaUserCog,
} from "react-icons/fa";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./sideHeader.module.css";
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";
import { useRouter } from "next/navigation";

const Sidebar = ({ isActive, onClose }) => {
  const { user, setUser } = useContext(UserContext);

  const router = useRouter();

  const logoff = () => {
    setUser(null);
    localStorage.clear();
    router.replace('/');
  }

  return (
    <div
      className={`sidebar ${isActive ? "sidebar-open" : ""}`}
      style={{
        backgroundColor: "#ff0000",
        height: "100vh",
        position: "fixed",
        zIndex: 999,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className={styles.container}>
        <SidebarItem Icon={FaHome} Text="Início" href="/" />
        <SidebarItem Icon={FaTools} Text="Solicitações" href="/Request" />
        <SidebarItem Icon={FaRegSun} Text="Ajustes" href="/" />
        {user ? (
          <>
            <SidebarItem Icon={FaUserCog} Text="Perfil" href="/Login" />
            { 
              user.isadmin && <SidebarItem Icon={FaUserLock} Text="Registrar" href="/Register" />
            }
            <button className={styles.logoff} onClick={logoff}>SAIR</button>
          </>

        ) : (
          <>
            <SidebarItem Icon={FaUserLock} Text="Registrar" href="/Register" />
            <SidebarItem Icon={FaUser} Text="Login" href="/Login" />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
