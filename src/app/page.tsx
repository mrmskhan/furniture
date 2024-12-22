"use client"
import React from "react";
import Hero from "@/components/hero";
import CompanyLogos from "@/components/companyLogos";
import FeaturedProducts from "@/components/feturedProduct";
import TopCategories from "@/components/topCategories";
import OurProducts from "@/components/ourProducts";
import Popular from "@/components/popular";








export default function Home() {
  return (
    <div>

        <Hero />
        <CompanyLogos />
        <FeaturedProducts />
        <TopCategories />
        <Popular />
        <OurProducts />

        

      

    </div>
  );
}
