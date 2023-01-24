import { LogoType } from "./LogoType";

export function Footer() {
  return (
    <footer className="bg-gray-900 w-full py-3 flex itens-center justify-left text-gray-100 ">
      <div className="ml-36">
        <div className="flex items-center gap-6 scale-75">
            <LogoType  />
            <p className=" text-gray-300">
              Todos os direitos reservados
            </p>
        </div>
      </div>
    </footer>
  )
}