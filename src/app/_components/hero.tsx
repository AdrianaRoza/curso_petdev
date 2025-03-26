import {WhatsappLogo} from "@phosphor-icons/react/dist/ssr"
import dogImg from "../../../public/hero-dog.webp"
import catImg from "../../../public/cat-hero.png"
import Image from "next/image"
const Hero = () => {
  return(
    // Seção principal do Hero com fundo vermelho e texto branco
    <search className="bg-[#E84C3D] text-white relative overflow-hidden">

      {/* Imagem de fundo para telas menores */}
      <div>
        <Image 
          src={dogImg}
          alt="Foto do dog"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden">
      </div>
      </div>
      
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Texto principal e botão de contato */}
          <div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-12"
              data-aos="fade-down"
            >
              Seu pet merece cuidado carinho e atenção especial.
            </h1>

            <p className="lg:text-lg" data-aos="fade-right">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target='_blank'
              href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
                <WhatsappLogo 
                className="w-5 h-5"/>
                Contato via WhatsApp
              </a>
            
            {/* Promoção de desconto */}
            <div className="mt-8">
              <p className="text-sm mb-4">
                <b 
                  className="bg-black text-white px-2 py-1 rounded-md">5%
                </b>
                  de desconto na primeira compra
              </p>
            
            {/* Imagem do gato ao lado da promoção */}
            <div className="flex mt-4">
              <div className="w-32 hidden lg:block">
                <Image
                  src={catImg}
                  alt="Foto do cat"
                  quality={100}
                  className="object-fill"
                />
              </div>
            </div>

            </div>

          </div>

          {/* Imagem do cachorro para telas maiores */}
          <div className="hidden md:block h-full relative">
           <Image 
            src={dogImg}
            alt="Foto do dog"
            className="object-contain"
            fill
            sizes="(max-whidth: 768px) 0vw, 50vw"
            quality={100}
            priority
           />
          </div>

        </article>

      </div>

    </search>
  )
}

export default Hero
