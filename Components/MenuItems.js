import { faHome, faCircleInfo, faBriefcase, faAddressBook } from "@fortawesome/free-solid-svg-icons";
export const MenuItems = [
    {
        title : 'Home',
        url : "/",
        cName : "nav-links",
        icons : faHome,
    },
    {
        title : 'About',
        url : "/about",
        cName : "nav-links",
        icons : faCircleInfo,
    },
    {
        title : 'Service',
        url : "/service",
        cName : "nav-links",
        icons : faBriefcase,
    },
    {
        title : 'Contact',
        url : "/contact",
        cName : "nav-links",
        icons : faAddressBook,
    },
    {
        title : 'Login',
        url : "/login",
        cName : "nav-links-mobile",
    },
]