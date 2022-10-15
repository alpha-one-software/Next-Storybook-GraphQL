import React, { FC } from 'react'
import { SecurityScore, Button, CustomModal } from '@ui/ui'
import { percent, securityToolsData } from '../../assets/securityData'
import styles from './Security.module.less'

export const Security: FC = () => {
  return (
    <div className={styles.SecurityContainer}>
      <div className={styles.securitySubContainer}>
        <div className={styles.securityHeaderContainer}>
          <p className={styles.tabTitle}>Security</p>
          <div className={styles.securityOpsContainer}>
            <Button type="ghost">Manage Bulk Actions</Button>
          </div>
        </div>
      </div>
      <div className={styles.securitySubContainer}>
        <div className={styles.securityScoreContainer}>
          <SecurityScore
            percent={percent}
            title1="ui Baseline Standard"
            title2="of the standard met"
            buttonTitle="How do we calculate this score?"
          />
        </div>
      </div>
      <div className={styles.securityToolsContainer}>
        <CustomModal datasource={securityToolsData} />
      </div>
    </div>
  )
}

export default Security
