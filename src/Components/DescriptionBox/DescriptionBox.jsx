import React from 'react'
import styles from './DescriptionBox.module.css'

const DescriptionBox = () => {
  return (
    <section className={styles.descriptionBox}>
      <div className={styles.navigator}>
        <div className={styles.navBox}>Description</div>
        <div className={`${styles.navBox} ${styles}`}>
          Reviews (122)
        </div>
      </div>
      <div className={styles.description}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus praesentium earum ea corporis reprehenderit cum? Unde, distinctio eaque. Cumque reiciendis, quod odit facilis neque asperiores repellat soluta totam ad numquam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta ducimus soluta sapiente. Distinctio reiciendis quas architecto aliquam itaque facere reprehenderit neque maxime culpa?</p>
      </div>
    </section>
  )
}

export default DescriptionBox