import React from 'react'
import HeroDashboard from './hero'
import WhyAcademy from './WhyAcademy'
import EbookSectionForm from './BookSectionForm'
import BannerDashboard from './BannerDashboard'

function page() {
  return (
    <div>
      <HeroDashboard/>
      <br/>
      <WhyAcademy/>
      <br/>
      <EbookSectionForm/>
      <br/>
      <BannerDashboard/>
    </div>
  )
}

export default page