import { Link, NavLink } from "react-router"
import LogoPNG from "@assets/Logo.png"
import menuPNG from "@assets/icons/menu.png"
import { memo, useMemo } from "react"
import type { routeLink } from "../types/route-link.type"
import { navLinksArray } from "../utils/nav-links-array.util"
import { useAuthStore } from "host/authStore"
import { useSidebarStore } from "host/sidebarStore"

const Header = () => {
    const routeLinks = useMemo<routeLink[]>(() => navLinksArray, []);
    const userData = useAuthStore((state) => state.user)
    const { setActive } = useSidebarStore()

    return (
    <header className="
        fixed top-0 lef-0 z-99
        w-full bg-white
        px-8 md:px-14 py-4
        shadow-sm 
    ">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <button 
                  type="button"
                  title="Abrir menu"
                  onClick={() => setActive(true)}
                  className="pe-6 py-3 block md:hidden fade-in cursor-pointer">
                    <img src={ menuPNG } alt="" />
                </button>

                <Link to="/clients" className="p-0 m-0">
                    <img src={ LogoPNG } alt="Logotipo Teddy Open Finance" width="100px"/>
                </Link>
            </div>

            <ul className="fade-in hidden md:flex justify-center align-center gap-8">
                { routeLinks.map(link => (
                    <li className="p-0 m-0" key={ link.to }>
                        <NavLink 
                          className={`
                            underline-offset-3 hover:underline
                            text-base
                          `} 
                          to={ link.to }>
                            { link.text }
                        </NavLink>
                    </li>
                ))}
            </ul>

            <p className="text-base fw-400">
                Olá, <span className="fw-700">{ userData.name.slice(0, 10) }</span>!
            </p>
        </nav>
    </header>
    )
}

export default memo(Header)
