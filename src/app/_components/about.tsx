import Image from "next/image"
import about1Img from "../../../public/about-1.png"
import about2Img from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"


const About = () => {
  return (
    // Seção "Sobre" com fundo personalizado e espaçamento
    <section className="bg-[#FDF6ec] py-16">
      
      <div className="container px-4 mx-auto">
        {/* Grid responsivo: uma coluna em telas pequenas, duas em telas grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 
        gap-12 items-center">

          {/* Container para as imagens */}
        <div className="relative">

          {/* Imagem principal grande (cachorro e gato) */}
          <div 
            className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1Img}
              alt="Foto do dog e cat"
              fill
              quality={100}
              className="object-cover hover:scale-110 duration-300"
              priority
            />
          </div>

          {/* Imagem secundária menor (apenas gato), sobreposta */}
          <div 
            className="absolute w-40 h-40 right-4 -bottom-8 border-4 
              overflow-hidden rounded-lg border-white"
              data-aos="zoom-in">
            <Image
              src={about2Img}
              alt="Foto do cat"
              fill
              quality={100}
              priority
            />
          </div>

        </div>

          {/* Conteúdo textual da seção */}
          <div className="space-y-6 mt-10" data-aos="fade-left">
            {/* Título da seção */}    
            <h2 className="text-4xl font-bold">SOBRE</h2>
          
          {/* Descrição do pet shop */}
          <p className="">
          Cuidamos do seu pet com carinho, oferecendo serviços de qualidade para garantir seu bem-estar.
          No nosso pet shop, você encontra banho, tosa, alimentos, brinquedos e acessórios para todas as necessidades.
          Contamos com uma equipe especializada, pronta para atender com amor e dedicação.
          Seu melhor amigo merece o melhor cuidado! 
          </p>

          {/* Lista de diferenciais */}
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="text-red-500"/>
              Aberto desde 2006
            </li>

            <li className="flex items-center gap-2">
              <Check className="text-red-500"/>
              Equipe com mais de 10 veterinários.
            </li>

            <li className="flex items-center gap-2">
              <Check className="text-red-500"/>
              Qualidade é a nossa prioridade.
            </li>
          </ul>

          {/* Botões de ação */}
          <div className="flex gap-2">
            {/* Link para contato via WhatsApp */}
            <a 
              data-aos="fade-up"
              data-aos-delay="500"
              target='_blank'
              href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
      
              className="bg-[#E84C3D] text-white flex items-center 
                justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
              <WhatsappLogo className="w-5 h-5 text-white"/>
              Contato para o WhatsApp
            </a>

            {/* Link para endereço da loja */}
            <a 
              href="#"
              className="flex items-center 
                justify-center w-fit gap-2 px-4 py-2 rounded-md"
            >
              <MapPin className="w-5 h-5 text-black"/>
              Endereço da Loja
            </a>
          
          </div>

          </div>
        </div>
        

      </div>
    </section>
  )
}

export default About
