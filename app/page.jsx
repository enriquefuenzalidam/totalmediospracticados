import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

import Image from 'next/image';
import rockett from 'public/rocket.webp';
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

export default function Page() {
    return (
    <main className="flex flex-col gap-8 sm:gap-16 pt-12 sm:pt-16 md:pt-20 text-lg sm:text-xl md:text-2xl bg-black">
        <section className="bg-customBlue flex flex-col items-center sm:flex-row sm:justify-between sm:items-center gap-8 p-12">
            <div className="flex flex-col items-start text-left">
                <h1 className="text-white text-5xl font-semibold m-0 leading-tight">Total Medios</h1>
                <h2 className="font-semibold text-3xl leading-tight">Hace despegar tus proyectos</h2>
                <p className="font-medium text-black text-xl leading-normal mt-3">Social media, Páginas web, Impresión y Campañas masivas que elevan tus ideas a nuevos horizontes.</p>
                <p className="mt-4"><a href="#contacto" className="inline-block px-6 py-3 rounded-full bg-white text-customBlue hover:bg-opacity-80 transition duration-300 ease-in-out no-underline font-semibold text-xl">Contáctanos</a></p>
            </div>
            <div className="flex justify-end">
                <Image src={rockett} alt="Cohete 1" title="GIF de David Montero de Pixabay" className="hidden sm:block" width="610" />
            </div>
        </section>
        <section className="flex flex-col items-center justify-center bg-white py-8 sm:py-12 md:py-16 lg:py-20 -mt-16">
            <p className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
                <Image src={youtube} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
                <Image src={linkedin} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
                <Image src={googleads} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
                <Image src={meta} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
            </p>
            <p className="font-medium text-center text-black text-1xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 md:mt-8 lg:mt-12">Colaboramos de manera oficial</p>
            <p className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 mt-6 sm:mt-8 md:mt-12 lg:mt-14">
                <Image src={googlepartners} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
                <Image src={metabusiness} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
                <Image src={shopifypartners} alt="" className="w-85px sm:w-115px md:w-175px lg:w-190px" />
            </p>
        </section>

        <section className="bg-customBlue flex flex-col items-center sm:flex-row sm:justify-between sm:items-center -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16 h-610px md:h-843px overflow-hidden">
            <div className="flex flex-col items-start text-left p-12 sm:w-1/2">
                <h2 className="font-semibold text-3xl leading-tight">Social Media</h2>
                <p className="font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-6">Nuestro servicio de social media mensual es tu solución integral para una presencia efectiva en línea. Nos encargamos de gestionar tus perfiles en redes sociales, creando contenido cautivador y relevante que conecte con tu audiencia.</p>
                <p className="mt-8"><a href="#contacto" className="inline-block px-6 py-3 rounded-full bg-white text-customBlue hover:bg-opacity-80 transition duration-300 ease-in-out no-underline font-semibold text-base">Conoce más</a></p>
            </div>
            <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center h-full w-full overflow-hidden">
                <Image src={foto1} alt="foto1" objectFit="cover" className="sm:block object-cover object-center h-full w-full overflow-hidden" /> 
            </div>
        </section>
        <section className="bg-white flex flex-col-reverse items-center sm:flex-row sm:justify-between sm:items-center -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16 h-610px md:h-843px overflow-hidden">
            <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center h-full w-full overflow-hidden">
                <Image src={foto2} alt="foto1" objectFit="cover" className="sm:block object-cover object-center h-full w-full overflow-hidden" /> 
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
                <Image src={foto3} alt="foto1" objectFit="cover" className="sm:block object-cover object-center h-full w-full overflow-hidden" /> 
            </div>
        </section>
        <section className="bg-white flex flex-col-reverse items-center sm:flex-row sm:justify-between sm:items-center -mt-8 sm:-mt-16 md:-mt-16 lg:-mt-16 h-610px md:h-843px overflow-hidden">
            <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center h-full w-full overflow-hidden">
                <Image src={foto4} alt="foto1" objectFit="cover" className="sm:block object-cover object-center h-full w-full overflow-hidden" /> 
            </div>
            <div className="flex flex-col items-start text-left p-12 sm:w-1/2">
                <h2 className="font-semibold text-3xl leading-tight text-customBlue">Campañas masivas</h2>
                <p className="font-medium text-black text-sm sm:text-md md:text-lg lg:text-xl leading-normal mt-6">Nuestro servicio de campañas masivas te ofrece una potente herramienta para llegar a una audiencia amplia y segmentada de manera efectiva. Desde correos electrónicos hasta mensajes de texto y anuncios en redes sociales, diseñamos estrategias integrales que maximizan el alcance y la participación de tu marca.</p>
                <p className="mt-8"><a href="#contacto" className="inline-block px-6 py-3 rounded-full bg-customBlue text-whitee hover:bg-opacity-80 transition duration-300 ease-in-out no-underline font-semibold text-base">Conoce más</a></p>
            </div>
        </section>


    </main>
    );
}
