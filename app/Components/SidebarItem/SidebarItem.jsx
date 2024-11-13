import React from "react";
import Link from "next/link";
import styles from "./SidebarItem.module.css";

const SidebarItem = ({ Icon, Text, href }) => {
  return (
    <Link className={styles.container} href={href}>
      <Icon />
      <span>{Text}</span>
    </Link>
  );
};

export default SidebarItem;
