function Footer() {
  return (
    <footer className="bg-stone-950 text-white shadow-1xl  ">
      <div className="w-full max-w-screen-xl mx-auto p-4  md:py-8">
        <img src="https://i.postimg.cc/jdZqGQx2/logo-ecommerce-removebg-preview.png" className="h-14 mr-3 " alt="Digital Mirage" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <a href="http://digital-mirage.ar/" className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
            </li>
            <li>
              <a href="/faq" className="mr-4 hover:underline md:mr-6">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="/nosotros" className="mr-4 hover:underline md:mr-6">Nosotros</a>
            </li>
            <li>
              <a href="/contacto" className="hover:underline">Contacto</a>
            </li>
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-400">© 2023 <a href="http://digital-mirage.ar/" className="hover:underline">Digital Mirage | Online shop</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;