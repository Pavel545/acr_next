import Icon1 from "../assets/icons/1.svg";
import Icon2 from "../assets/icons/2.svg";
import Icon3 from "../assets/icons/3.svg";
import Icon4 from "../assets/icons/4.svg";
import Icon5 from "../assets/icons/5.svg";


import Telegram from "../assets/icons/telegram.svg";
import VKontakte from "../assets/icons/vkontakte.svg";
import Max from "../assets/icons/max.svg";
import Email from "../assets/icons/email.svg";

export const NAVIGATION_LINKS = [
  { icons: Icon1, name: "О нас", href: "/about" },
  { icons: Icon2, name: "Услуги", href: "/services" },
  { icons: Icon3, name: "Акции", href: "/stocks" },
  { icons: Icon4, name: "Команда", href: "/team" },
  { icons: Icon5, name: "Контакты", href: "/contacts" },
  { icons: null, name: "Прайс-лист", href: "/price-list" },
];



export const SOCIAL_LINKS = [
  { iconSvg:Telegram,icon: "/icons/telegram.svg", name: "Telegram", href: "https://t.me/+79093587042" },
  { iconSvg:VKontakte,icon: "/icons/vkontakte.svg", name: "VKontakte", href: "https://vk.com/acr_agency" },
  { iconSvg:Max,icon: "/icons/max.svg", name: "MAX", href: "https://max.ru/u/f9LHodD0cOJELFoNJONZYWCr1IYfusHuvIMvImZICoJHGe1Sgjqw2jWfEN0" },
  { iconSvg:Email,icon: "/icons/email.svg", name: "Email", href: "mailto:acr-agency@yandex.ru" },
];