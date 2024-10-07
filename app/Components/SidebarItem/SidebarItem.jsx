// SidebarItem.js
import React from 'react'
import Link from 'next/link'
import styles from './SidebarItem.module.css'

const SidebarItem = ({ Icon, Text, href }) => {
  return (
    <Link href={href}>
      <div className={styles.container}>
        <Icon />
        {Text}
      </div>
    </Link>
  )
}

export default SidebarItem