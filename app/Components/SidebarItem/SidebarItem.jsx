import React from 'react';
import Link from 'next/link';
import styles from './SidebarItem.module.css';

const SidebarItem = ({ Icon, Text, href }) => {
  return (
    <Link className={styles.container} href={href}>
      <Icon />
      <span style={{marginLeft: 15}}>{Text}</span>
    </Link>
  );
};

export default SidebarItem;