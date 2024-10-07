// SidebarItem.js
import React from 'react'
import Link from 'next/link'
import styles from './SidebarItem.module.css'

const SidebarItem = ({ Icon, Text, href }) => {
  return (
    <Link className={styles.container} href={href}>
      <div >
        <Icon />
        {Text}
      </div>
    </Link>
  )
}

export default SidebarItem