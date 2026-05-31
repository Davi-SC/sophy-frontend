import Link from "next/link";   // substitui <a> para navegação rápida
import Image from 'next/image'; // substitui <img>

export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50"> {/*o sitcky top-0 z-50 faz o header grudar no topo da tela*/}
            <div className="w-full flex justify-between items-center px-4 md:px-8 py-4">

                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center text-2x1 font-bold text-gray-800 tracking-tighter">
                        <Image src="/logo_sophy.jpg" alt="Sophy StoreLogo" width={60} height={60} className="mr-3 rounded-full object-cover" />
                        Sophy<span className="text-rose-300">Store</span>
                    </Link>
                </div>

                {/*menu de navegação*/}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/produtos" className="text-gray-600 hover:text-rose-300 transition-colors">Produtos</Link>
                    <Link href="/categorias" className="text-gray-600 hover:text-rose-300 transition-colors">Categorias</Link>
                    <Link href="/sobre" className="text-gray-600 hover:text-rose-300 transition-colors">Sobre Nós</Link>   
                </nav>

                {/* ícones de ação: carrinho e perfil */}
                <div className="flex items-center space-x-8">
                    {/* Exemplo de botão do carrinho com a nova cor no hover */}
                    <button className="text-gray-600 hover:text-rose-300 transition-colors">
                        {/* Aqui futuramente vai o ícone do carrinho */}
                        Carrinho
                    </button>
                    <button className="text-gray-600 hover:text-rose-300 transition-colors">
                        {/* Aqui futuramente vai o ícone de login/perfil */}
                        Login
                    </button>
                </div>

            </div>

        </header>
    )
}

