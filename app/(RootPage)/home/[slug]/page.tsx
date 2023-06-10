"use client"
import React from 'react';
import CoverBanner from '../../../components/DetailsPage/CoverBanner'
import Author from '../../../components/DetailsPage/Author';
import '../../../components/DetailsPage/style.css'

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>

        <CoverBanner />

</div>
       
  )
}

export default page