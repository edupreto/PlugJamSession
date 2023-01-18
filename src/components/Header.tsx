import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-3 flex itens-center justify-left text-white  bg-gradient-to-r from-blue-500  from-blue-500 via-green-300 to-orange-500">
      <div className="ml-36">
      <Logo />
      </div>
    </header>
  )
}