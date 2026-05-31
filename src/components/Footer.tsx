import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8 mt-auto">
      
            {/* Contêiner principal com a mesma largura e padding do Header */}
            <div className="w-full px-4 md:px-8 mx-auto">
                
                {/* Dividimos o rodapé em 3 colunas em telas maiores (md:grid-cols-3) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                
                {/* COLUNA 1: Informações da Loja e Logo */}
                <div className="flex flex-col items-start">
                    {/* Podemos colocar a logo aqui também para reforçar a marca */}
                    <Link href="/" className="flex items-center text-2xl font-bold tracking-tighter mb-4">
                    <Image 
                        src="/logo_sophy.jpg" 
                        alt="Sophy Store Logo" 
                        width={40} 
                        height={40} 
                        className="mr-3 rounded-full object-cover" 
                    />
                    {/* Usando o mesmo text-rose-300 do cabeçalho */}
                    Sophy<span className="text-rose-300">Store</span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                    A sua essência em forma de moda. Trazendo as últimas tendências com qualidade e exclusividade para você brilhar.
                    </p>
                </div>
                {/* COLUNA 2: Links Rápidos */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-200">Links Rápidos</h3>
                    <ul className="flex flex-col space-y-3 text-sm text-gray-400">
                    {/* O hover agora usa a sua cor text-rose-300 */}
                    <li><Link href="/produtos" className="hover:text-rose-300 transition-colors">Nossos Produtos</Link></li>
                    <li><Link href="/categorias" className="hover:text-rose-300 transition-colors">Categorias</Link></li>
                    <li><Link href="/sobre" className="hover:text-rose-300 transition-colors">Sobre a Sophy</Link></li>
                    {/* <li><Link href="/trocas" className="hover:text-rose-300 transition-colors">Trocas e Devoluções</Link></li> */}
                    </ul>
                </div>
                {/* COLUNA 3: Contato */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-200">Fale Conosco</h3>
                    <ul className="flex flex-col space-y-3 text-sm text-gray-400">
                    <li>
                        <span className="block font-medium text-gray-300">WhatsApp:</span> 
                        <a href="#" className="hover:text-rose-300 transition-colors">(11) 99999-9999</a>
                    </li>
                    {/* <li>
                        <span className="block font-medium text-gray-300">Email:</span>
                        <a href="mailto:contato@sophystore.com.br" className="hover:text-rose-300 transition-colors">contato@sophystore.com.br</a>
                    </li> */}
                    <li>
                        <span className="block font-medium text-gray-300">Horário:</span>
                        Seg a Sex, 9h às 18h
                    </li>
                    </ul>
                </div>
                
                </div>
                {/* LINHA DIVISÓRIA E COPYRIGHT */}
                <div className="border-t border-gray-800 pt-4 mt-4 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Sophy Store. Todos os direitos reservados.</p>
                
                {/* Pequenos links extras de rodapé */}
                {/* <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="/privacidade" className="hover:text-rose-300 transition-colors">Política de Privacidade</Link>
                    <Link href="/termos" className="hover:text-rose-300 transition-colors">Termos de Serviço</Link>
                </div> */}
            </div>
        </div>
        </footer>
    );
}