import React from 'react'
import styles from './min-read.module.css'

interface minReadProps{
    mins: number
}

function MinRead({
    mins
}: minReadProps) {
  return (
    <div className={styles.minReadWrapper}>
    <div className={styles.minRead}>{mins} min read</div>
  </div>
  )
}


export default MinRead
