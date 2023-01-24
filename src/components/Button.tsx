import { User } from "phosphor-react";

export function Button() {
  return (
    <button className="p-1 flex items-center justify-center gap-2"  >
    <User size={18} />
    ENTRAR
  </button>
  )
}