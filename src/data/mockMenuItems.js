import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faGauge, faSliders, faUsers, faBookOpen, faListCheck } from '@fortawesome/free-solid-svg-icons';

export default {
    admin: [
        {
            title: "Dashboard",
            icon: faGauge,
            path: "/"
        },
        {
            title: "Aufgaben",
            icon: faListCheck,
            path: "/tasks"
        },
        {
            title: "Mitarbeiter",
            icon: faUsers,
            path: "/employees"
        },
        {
            title: "Einstellungen",
            icon: faSliders,
            path: "/settings"
        },
        {
            title: "Anleitungen",
            icon: faBookOpen,
            path: "/guides"
        }
    ],
    manager: [
        {
            title: "Dashboard",
            icon: faGauge,
            path: "/"
        },
        {
            title: "Aufgaben",
            icon: faListCheck,
            path: "/tasks"
        },
        {
            title: "Mitarbeiter",
            icon: faUsers,
            path: "/employees"
        },
        {
            title: "Anleitungen",
            icon: faBookOpen,
            path: "/guides"
        }
    ],
    editor: [
        {
            title: "Dashboard",
            icon: faGauge,
            path: "/"
        },
        {
            title: "Aufgaben",
            icon: faListCheck,
            path: "/tasks"
        },
        {
            title: "Mitarbeiter",
            icon: faUsers,
            path: "/employees"
        },
        {
            title: "Anleitungen",
            icon: faBookOpen,
            path: "/guides"
        }
    ],
    user: [
        {
            title: "Dashboard",
            icon: faGauge,
            path: "/"
        },
        {
            title: "Aufgaben",
            icon: faListCheck,
            path: "/tasks"
        },
        {
            title: "Mitarbeiter",
            icon: faUsers,
            path: "/employees"
        },
        {
            title: "Anleitungen",
            icon: faBookOpen,
            path: "/guides"
        }
    ],
}
