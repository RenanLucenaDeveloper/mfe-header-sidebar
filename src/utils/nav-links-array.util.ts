import type { routeLink } from "../types/route-link.type";
import clientsIcon from "@assets/icons/clients.svg"
import selectedClientsIcon from "@assets/icons/selected-clients.svg"
import logoutIcon from "@assets/icons/logout.svg"

export const navLinksArray: routeLink[] = [
    {
        to: '/clients',
        text: 'Clientes',
        icon: clientsIcon
    },
    {
        to: '/selected-clients',
        text: 'Clientes selecionados',
        icon: selectedClientsIcon
    },
    {
        to: '/login',
        text: 'Sair',
        icon: logoutIcon
    },
]