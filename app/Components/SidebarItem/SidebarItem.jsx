import React from 'react'
import styles from './SidebarItem.module.css'

const SidebarItem = ({ Icon, Text }) => {
  return (
    <div className={styles.container}>
      <Icon />
      {Text}
    </div>
  )
}

export default SidebarItem