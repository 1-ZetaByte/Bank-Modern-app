import React from 'react'

import styles from '/style'



const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexcenter}`}>
        <div className={`${styles.boxwidth}`}>
          Navbar
        </div>
      </div>


      <div  className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxwidth}`}>
          Hero
        </div>
      </div>

      <div  className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxwidth}`}>
          stats
          business
          billing
          carddeal
          testimonials
          clients 
          cta
          footer 
        </div>
      </div>



    </div>
  )
}

export default App