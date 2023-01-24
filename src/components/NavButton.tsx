import { User } from 'phosphor-react';
import { Button } from './Button';

export function NavButton() {
  return (
    <header className="w-full py-3 text-white flex itens-center justify-end">
      <div className="flex items-center py-3 mr-24 space-x-14">      
          <div className="inline-block">
              <Button />
          </div>
      
      <button className="btn_1">
        CRIAR CONTA
        </button>
      </div>
    </header>
  )
}