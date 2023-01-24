import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";

export function Video() {
  return (
    <div className="flex-1">
      <div className=" box-border  border p-20 justify-center">
        <div className="py-6 text-2xl font-extrabold">
          <span className="bg-clip-text
           text-transparent  bg-gradient-to-r from-blue-500  via-green-300 to-orange-500">
            Últimas Sessions na plataforma
          </span>
        </div>
        <Player>
          <Youtube videoId="pXP_XLZMqJ0" />
          <DefaultUi />
        </Player>
      </div>
    </div>
  );
}
