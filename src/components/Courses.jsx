import React from 'react'
import CoursesComp from './CoursesComp'

function Courses() {
  
  return (
    <section className='container pad'>
      <h2 className='heading'>Bizdagi kurslar</h2>
      <div className="row courses--category">
        <button className='nonActive'>Hammasi</button>
        <button className='nonActive'>Web Dasturlash</button>
        <button className='nonActive'>3D Dizayn</button>
        <button className='nonActive'>Kompyuter savodxonligi</button>
      </div>
      <div className="row-wrap">
        <CoursesComp/>
      </div>
    </section>
  )
}

export default Courses