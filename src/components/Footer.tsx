import Link from "next/link";

export default function Footer () {
    return (
        <footer className="bg-primary text-center text-white p-4 md:p-6">
            <p>© {new Date().getFullYear()} MicroCommerce. Todos os direitos reservados. Desenvolvido por <Link href="https://assisjuniorwm.com.br" className="underline hover:text-tertiary" target="_blank">Assis Junior W&M</Link></p>
        </footer>
    )
}