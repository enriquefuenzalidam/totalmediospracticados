
import rocketweb from 'public/rocket.webp';
import googleads from 'public/google.png';
import googlepartners from 'public/googlepartners.png';
import linkedin from 'public/linkedin.png';
import meta from 'public/meta.png';
import metabusiness from 'public/metabusiness.png';
import shopifypartners from 'public/shopifypartners.png';
import youtube from 'public/youtube.png';
import foto1 from 'public/foto1.jpg';
import foto2 from 'public/foto2.jpg';
import foto3 from 'public/foto3.jpg';
import foto4 from 'public/foto4.jpg';
import cohete from 'public/cohete.png';
import luna from 'public/luna.png';
import planeta from 'public/planeta.png';
import facebookglobe from 'public/facebook globe .png';
import instagramglobe from 'public/instagram globe .png';
import linkedinglobe from 'public/linkedin globe .png';


export const metadata = {
    title: {
        default: 'Total Medios'
    }
};
export default function Page() {
    return (
    <main className="flex flex-col gap-8 sm:gap-16 pt-12 sm:pt-16 md:pt-20 text-lg sm:text-xl md:text-2xl bg-black">
        <section className="bg-customBlue flex flex-col items-center sm:flex-row sm:justify-between sm:items-center gap-8 p-12">
            <div className="flex flex-col items-start text-left">
                <h1 className="text-white text-5xl font-semibold m-0 leading-tight">Total Medios</h1>
                <h2 className="font-semibold text-3xl leading-tight">Hace despegar tus proyectos</h2>
                <p className="font-medium text-black text-xl leading-normal mt-3">Social media, Páginas web, Impresión y Campañas masivas que elevan tus ideas a nuevos horizontes.</p>
                <p className="mt-5"><a href="#contacto" className="inline-block px-6 py-3 rounded-full bg-white text-customBlue hover:bg-opacity-80 transition duration-300 ease-in-out no-underline font-semibold text-xl">Contáctanos</a></p>
            </div>
            <div className="flex justify-end">
                <img src={rocketweb.src} alt="Cohete 1" title="GIF de David Montero de Pixabay" className="hidden sm:block" width="610" unoptimized />
            </div>
        </section>
        <section className="flex flex-col items-center justify-center bg-white py-8 sm:py-12 md:py-16 lg:py-20 -mt-16">
            <p className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
                <img src={youtube.src} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
                <img src={linkedin.src} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
                <img src={googleads.src} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
                <img src={meta.src} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
            </p>
            <p className="font-medium text-center text-black text-1xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 md:mt-8 lg:mt-12">Colaboramos de manera oficial</p>
            <p className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 mt-6 sm:mt-8 md:mt-12 lg:mt-14">
                <img src={googlepartners.src} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
                <img src={metabusiness.src} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
                <img src={shopifypartners.src} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
            </p>
        </section>

        <section id="servicios" className="scroll-m-header bg-customBlue flex flex-col items-center sm:flex-row sm:justify-between sm:items-center -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16 h-610px md:h-843px overflow-hidden">
            <div className="flex flex-col items-start text-left p-12 sm:w-1/2">
                <h2 className="font-semibold text-3xl leading-tight">Social Media</h2>
                <p className="font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-6">Nuestro servicio de social media mensual es tu solución integral para una presencia efectiva en línea. Nos encargamos de gestionar tus perfiles en redes sociales, creando contenido cautivador y relevante que conecte con tu audiencia.</p>
                <p className="mt-8"><a href="#contacto" className="inline-block px-6 py-3 rounded-full bg-white text-customBlue hover:bg-opacity-80 transition duration-300 ease-in-out no-underline font-semibold text-base">Conoce más</a></p>
            </div>
            <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center h-full w-full overflow-hidden">
                <img src={foto1.src} alt="foto1" objectFit="cover" className="sm:block object-cover object-center h-full w-full overflow-hidden" /> 
            </div>
        </section>
        <section className="bg-white flex flex-col-reverse items-center sm:flex-row sm:justify-between sm:items-center -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16 h-610px md:h-843px overflow-hidden">
            <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center h-full w-full overflow-hidden">
                <img src={foto2.src} alt="foto1" objectFit="cover" className="sm:block object-cover object-center h-full w-full overflow-hidden" /> 
            </div>
            <div className="flex flex-col items-start text-left p-12 sm:w-1/2">
                <h2 className="font-semibold text-3xl leading-tight text-customBlue">Páginas Web</h2>
                <p className="font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-6">Nuestro servicio de diseño web ofrece soluciones personalizadas para crear una presencia en línea impactante y funcional para tu negocio. Desde sitios web informativos hasta tiendas en línea dinámicas, nuestro equipo experto trabaja contigo para entender tus necesidades y objetivos específicos.</p>
                <p className="mt-8"><a href="#contacto" className="inline-block px-6 py-3 rounded-full bg-customBlue text-white hover:bg-opacity-80 transition duration-300 ease-in-out no-underline font-semibold text-base">Conoce más</a></p>
            </div>
        </section>
        <section className="bg-customBlue flex flex-col items-center sm:flex-row sm:justify-between sm:items-center -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16 h-610px md:h-843px overflow-hidden">
            <div className="flex flex-col items-start text-left p-12 sm:w-1/2">
                <h2 className="font-semibold text-3xl leading-tight">Flyers a pedido</h2>
                <p className="font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-6">Nuestro servicio de flyers a pedido ofrece una solución ágil y personalizada para todas tus necesidades de promoción. Las medidas técnicas de los flyers son las siguientes:<br/><br/>-Papel Couche 170grs.<br/>-10cms de ancho x 14cms de alto<br/>-100, 500 o 1.000 unidades</p>
                <p className="mt-8"><a href="#contacto" className="inline-block px-6 py-3 rounded-full bg-white text-customBlue hover:bg-opacity-80 transition duration-300 ease-in-out no-underline font-semibold text-base">Conoce más</a></p>
            </div>
            <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center h-full w-full overflow-hidden">
                <img src={foto3.src} alt="foto1" objectFit="cover" className="sm:block object-cover object-center h-full w-full overflow-hidden" /> 
            </div>
        </section>
        <section className="bg-white flex flex-col-reverse items-center sm:flex-row sm:justify-between sm:items-center -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16 h-610px md:h-843px overflow-hidden">
            <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center h-full w-full overflow-hidden">
                <img src={foto4.src} alt="foto1" objectFit="cover" className="sm:block object-cover object-center h-full w-full overflow-hidden" /> 
            </div>
            <div className="flex flex-col items-start text-left p-12 sm:w-1/2">
                <h2 className="font-semibold text-3xl leading-tight text-customBlue">Campañas masivas</h2>
                <p className="font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-6">Nuestro servicio de campañas masivas te ofrece una potente herramienta para llegar a una audiencia amplia y segmentada de manera efectiva. Desde correos electrónicos hasta mensajes de texto y anuncios en redes sociales, diseñamos estrategias integrales que maximizan el alcance y la participación de tu marca.</p>
                <p className="mt-8"><a href="#contacto" className="inline-block px-6 py-3 rounded-full bg-customBlue text-whitee hover:bg-opacity-80 transition duration-300 ease-in-out no-underline font-semibold text-base">Conoce más</a></p>
            </div>
        </section>

        <section id="nosotros" className="scroll-m-header bg-customBlue -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16 p-12">
                <h2 className="text-center font-semibold text-3xl leading-tight text-white">Un poco sobre nosotros</h2>
                <p className="text-center font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-4">En Total Medios nos dedicamos a impulsar tu presencia en el mundo digital y físico mediante soluciones creativas y efectivas.</p>
        </section>

        <section className="bg-black -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16">
                <h2 className="text-left font-semibold text-3xl leading-tight text-white pt-24 pr-12 pb-12 pl-12">En Total Medios te ofrecemos:</h2>
                <div className="bg-customBlue p-12 mt-0 sm:mr-8 sm:mb-8 ml-0 ">
                    <img src={luna.src} width="50" alt="" />
                    <h3 className="text-3xl text-white font-bold mt-6">Compromiso</h3>
                    <p className="text-left font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-4">En Total Medios, nos comprometemos a proporcionarte soluciones integrales y personalizadas que impulsen el éxito de tu negocio.</p>
                </div>
                <div className="bg-andereBlau p-12 mt-0 sm:ml-8 sm:mb-8 mr-0">
                    <img src={cohete.src} width="50" alt="" />
                    <h3 className="text-3xl text-white font-bold mt-6">Responsabilidad</h3>
                    <p className="text-left font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-4">En Total Medios, asumimos con seriedad nuestra responsabilidad hacia nuestros clientes, comunidad y medio ambiente. Nos comprometemos a ofrecer servicios de alta calidad que cumplan con los más altos estándares éticos y profesionales.</p>
                </div>
                <div className="bg-white p-12 mt-0 sm:mr-8 mb-8 ml-0 ">
                <img src={planeta.src} width="50" alt="" />
                    <h3 className="text-3xl text-customBlue font-bold mt-6">Innovación</h3>
                    <p className="text-left font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-4">En Total Medios, la innovación es el motor que impulsa cada uno de nuestros proyectos. Estamos comprometidos a permanecer a la vanguardia de la industria, explorando constantemente nuevas tecnologías y tendencias emergentes para ofrecer soluciones creativas y efectivas a nuestros clientes.</p>
                </div>
        </section>

        <section id="contacto" className="scroll-m-header bg-white flex flex-col items-center sm:flex-row sm:justify-between sm:items-center -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16 overflow-hidden">
            <div className="flex flex-col items-start text-left p-12 sm:w-1/2">
                <h2 className="font-semibold text-3xl leading-tight text-customBlue">Mantengamos el contacto</h2>
                <p className="font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-6">¿Listo para llevar tu marca al siguiente nivel? ¡No dudes en ponerte en contacto con Total Medios hoy mismo y comienza a hacer realidad tus objetivos comerciales.</p>
                <p className="mt-8 w-full flex justify-center space-x-10">
                        <a href="#" className=""><img src={facebookglobe.src} alt="" width="60" /></a>
                        <a href="#" className=""><img src={instagramglobe.src} alt="" width="60" /></a>
                        <a href="#" className=""><img src={linkedinglobe.src} alt="" width="60" /></a>
                </p>
            </div>
            <div className="bg-customBlue flex flex-col items-start text-left p-12 sm:w-1/2">
                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="1c587cd2-b13e-4740-a055-2e3f1dc15c18" />
                    <input className="p-3 w-full text-black rounded-md" type="text" name="nombre" required="" placeholder="Nombre" />
                    <input className="mt-8 p-3 w-full text-black rounded-md" type="email" name="email" required="" placeholder="Correo electrónico" />
                    <input className="mt-8 p-3 w-full text-black rounded-md" type="number" name="numero" required="" placeholder="Número de teléfono" />
                    <input className="mt-8 mb-8 p-3 w-full text-black rounded-md" type="text" name="Asunto" required="" placeholder="Asunto del mensaje" />
                    <textarea className="p-3 w-full text-black rounded-md" name="mensaje" id="" cols="30" rows="10" required="" placeholder="Mensaje"></textarea>
                    <input className="mt-8 w-full inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white text-customBlue hover:bg-opacity-80 transition duration-300 ease-in-out no-underline font-semibold text-base sm:text-ml" type="submit" class="btn-envio" value="ENVIAR" />
                </form>
            </div>
        </section>

        <section className="bg-black -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16 p-12">
                <p className="text-left font-medium text-white text-sm sm:text-md md:text-lg lg:text-xl leading-normal ">©Total Medios Derechos reservados.</p>
        </section>

    </main>
    );
}
