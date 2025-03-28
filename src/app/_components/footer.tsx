import golden from "../../../public/golden.png"
import royal from "../../../public/royal.png"
import primier from "../../../public/primier.png"
import natural from "../../../public/natural.png"
import whiskas from "../../../public/whiskas.png"
import Image from "next/image"
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr"


// Lista de marcas que o pet shop trabalha
const brands = [
  { name: "Royal Canin", logo: royal},
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

const Footer = () =>{
  return(
    
    // Rodapé com fundo vermelho e texto branco
    <section className="bg-[#E84C3D] py-16 text-white">
      <div className="container mx-auto px-4">

        {/* Seção das marcas */}
        <div className="border-b border-white/20 pb-8">
          <h4 
            className="text-3xl font-semibold mb-8 text-center">
              Marcas que Trabalhamo
          </h4>

          {/* Exibição das marcas em grid */}
          <div 
            className="grid grid-cols-2 lg:grid-cols-6 gap-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {brands.map((item,index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg flex items-center 
                  justify-center"
              >
                <Image 
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width:"auto",
                    height:"auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>
        
        {/* Seção de informações do rodapé */}
        <footer 
          className="grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-8 mb-12 mt-5">

          {/* Informações sobre o Pet Shop */}
          <div>
            <h3 
              className="text-2xl font-semibold mb-2">
                Pet Shop Dev
            </h3>

            <p className="mb-4">
                Cuidando do seu melhor amigo com amor e dedicação.
            </p>

            <a 
              target='_blank'
              href={`https://wa.me/556799998800?text=
                Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-4 py-2 rounded-md">
                Contato via WhatsApp
            </a>
          </div>
          

          {/* Informações de contato */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>

            <p>Email: adriana.roza.dev@gmail.com</p>
            <p>Telefone: (65)99269-5535</p>
            <p>Endereço: Rua X, centro, Mato Grosso - MT </p>
          </div>
          

           {/* Links para redes sociais */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            
            <div className="flex gap-4">
              <a
                href="#"
              >
                <FacebookLogo className="w-8 h-8" />
              </a>

              <a
                href="#"
              >
                <InstagramLogo className="w-8 h-8"/>
              </a>

              <a
                href="#"
              >
                <YoutubeLogo className="w-8 h-8"/>
              </a>
              
            </div>
          </div>

        </footer>


      </div>
    </section>
  )
}

export default Footer
