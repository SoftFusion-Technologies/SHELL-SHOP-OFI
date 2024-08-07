import React from 'react'
export default function Mapas() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto w-full transition-opacity duration-500 " data-aos="fade-up" id='mapas'>
       <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4892812142584!2d-65.49325652375168!3d-27.172354776493393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cb8b8f48135d%3A0xa0668924e4b432b3!2sShell!5e0!3m2!1ses-419!2sar!4v1722990818510!5m2!1ses-419!2sar" 
  width="100%" 
  height="450" 
  style={{ border: "0" }}  // Aquí se utiliza un objeto para definir el estilo
  allowfullscreen=""
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>


    </div>
  )
}
