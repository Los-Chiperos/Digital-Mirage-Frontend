import homes from "../Img/homes.png";

function Inicio() {
  return (
    <section className="shadow-lg">
      <div>
  
        <img
  src={homes}
  alt="imagen"
  className="mt-20 br h-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-cover"
/>
        <div className=" text-green-700 text-lg h-auto grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 id="puntos-inf" className="text-lg font-bold sm:text-7xl">
              Busca los puntos más cercanos para poder reciclar.
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto relative">
        <div id="map" style={{ height: "400px", width: "100%" }}></div>
        <div className="absolute bottom-0 left-0 mb-4 ml-4">
          <button
            id="button"
            className="hover:text-amber-100 text-green-700 hover:bg-green-700  bg-amber-100 font-bold py-2 px-4 border rounded-lg"
          >
            Punto Ecológico más cercano
          </button>
        </div>
      </div>
      <br></br>
    </section>
  );
}

export default Inicio;
