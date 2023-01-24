import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavButton } from "../components/NavButton";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Home() {
  return (
    <div>
      <Header />
      <NavButton />
      <main className="flex">
        <Video />
        <Sidebar />
      </main>
      <div>

      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}