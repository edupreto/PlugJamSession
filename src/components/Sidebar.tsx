import { LogoBlue } from "./LogoBlue";

export function Sidebar() {
  return (

    <aside className="flex-row w-96 h-screen  p-10 justify-center items-center">
      <div className="py-11 flex justify-center">
      <LogoBlue />
      </div>
      
      <div>
        <h1 className="flex justify-center mt-4 text-3xl leading-light py-9">
          Milhares de músicos já estão conectados.
        </h1>
        
        <p className="text-xl flex justify-center">
          Junte-se a milhares de músicos e encontre as melhores sessions em sua região
        </p>
      </div>

    </aside>
  )
}