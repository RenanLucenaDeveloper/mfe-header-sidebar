import closeMenuSVG from "@assets/icons/close-menu.svg"
import LogoPNG from "@assets/Logo.png"
import HomeIcon from "@assets/icons/home.svg"
import { useMemo } from "react";
import type { routeLink } from "../types/route-link.type";
import { navLinksArray } from "../utils/nav-links-array.util";
import { NavLink } from "react-router";
import { useSidebarStore } from "host/sidebarStore"


const Sidebar = () => {
    const routeLinks = useMemo<routeLink[]>(() => navLinksArray, []);
    const { isActive, setActive } = useSidebarStore()

    return (
        <>
            {/* Backdrop */}
            <div 
              onClick={() => setActive(false)}
              className={`
                sidebar-backdrop bg-gray-950/50 w-full h-full hidden fixed top-0 left-0 z-97
                ${ isActive ? 'active' : '' }
              `}>
            </div>


            {/* Sidebar */}
            <div className={`
              sidebar bg-white
              h-full fixed top-0 left-0 z-98
              translate-x-[-150%] transition-translate duration-300
              app-bg rounded-r-2xl rounded-br-2xl
              ${ isActive ? 'active' : '' }
            `}>
                <div className="flex align-center justify-center relative py-10 bg-gray-950/70 rounded-r-2xl">
                    <img src={ LogoPNG } alt="Logotipo Teddy Open Finance" width="100px"/>
                    <button 
                      title="Fechar menu"
                      onClick={() => setActive(false)}
                      className="
                        bg-black p-3 rounded-full
                        absolute right-0 bottom-0
                        -translate-x-[-50%] -translate-y-[-50%]
                        cursor-pointer
                      "
                    >
                        <img src={ closeMenuSVG } alt="Fechar" width="16px"/>
                    </button>
                </div>

                <ul className="flex flex-col gap-3 px-6 py-12">
                    <li className="p-0 m-0">
                        <NavLink
                          className="no-underline text-base flex align-center gap-4 p-2"
                          to="/">
                              <img src={ HomeIcon } alt="Icon" width="19px"/>
                              Home
                        </NavLink>
                    </li>

                    { routeLinks.map(link => (
                        <li className="p-0 m-0" key={ link.to }>
                            <NavLink
                              className="no-underline text-base flex align-center gap-3 p-2"
                              to={ link.to }>
                                  { link.icon && <img src={ link.icon } alt="Icon"/>}
                                  { link.text }
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
