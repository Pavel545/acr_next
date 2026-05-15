// constants/services.ts
import Icon1 from '@/assets/icons/services/1.svg';
import Icon2 from '@/assets/icons/services/2.svg';
import Icon3 from '@/assets/icons/services/3.svg';
import Icon4 from '@/assets/icons/services/4.svg';
import Icon5 from '@/assets/icons/services/5.svg';

// Импорты для 3D декораторов из Services компонента
import Decor1 from '@/assets/images/services3D/7.svg';
import Decor2 from '@/assets/images/services3D/3.svg';
import Decor3 from '@/assets/images/services3D/6.svg';
import Decor4 from '@/assets/images/services3D/1.svg';
import Decor5 from '@/assets/images/services3D/2.svg';
import Decor6 from '@/assets/images/services3D/4.svg';
import Decor7 from '@/assets/images/services3D/5.svg';

export interface ServiceData {
  id: string;
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // для HeroMain
  decor3d: React.FC<React.SVGProps<SVGSVGElement>>; // для Services компонента
  number: string; // порядковый номер с лидирующим нулем
  description: string; // полное описание для страницы услуг
  shortDescription?: string; // краткое описание, если нужно
  className?: string; // для дополнительных CSS классов
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: 'audit',
    name: 'Аудит сайта',
    href: '/services/audit',
    icon: Icon1, // используем существующую иконку или создай новую
    decor3d: Decor1,
    number: '01',
    description: 'Проводим глубокий аудит сайта и цифровых продуктов по 120+ параметрам с готовым планом роста трафика и конверсии.',
  },
  {
    id: 'website-policy',
    name: 'Политика сайта',
    href: '/services/website-policy',
    icon: Icon2,
    decor3d: Decor2,
    number: '02',
    description: 'Проверяем сайт на соответствие российскому законодательству и разрабатываем полный пакет юридических документов для защиты бизнеса от штрафов.',
  },
  {
    id: 'website',
    name: 'Разработка сайта',
    href: '/services/website-development',
    icon: Icon1,
    decor3d: Decor3,
    number: '03',
    description: 'Разрабатываем продающие лендинги, профессиональные корпоративные сайты под ключ, которые эффективно привлекают внимание и увеличивают количество заявок.',
  },
  {
    id: 'mobile',
    name: 'Мобильное приложение',
    href: '/services/mobile-app',
    icon: Icon3,
    decor3d: Decor4,
    number: '04',
    description: 'Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android',
  },
  {
    id: 'chatbot',
    name: 'Умный чат-бот',
    href: '/services/smart-chatbots',
    icon: Icon2,
    decor3d: Decor5,
    number: '05',
    description: 'Внедряем умных чат-ботов на базе ИИ, которые ведут диалог, собирают заявки, консультируют клиентов и экономят до 30% бюджета на персонале.',
  },
  {
    id: 'design',
    name: 'Дизайн',
    href: '/services/design',
    icon: Icon4,
    decor3d: Decor6,
    number: '06',
    description: 'Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android',
  },
  {
    id: 'marketing',
    name: 'Маркетинг',
    href: '/services/marketing',
    icon: Icon5,
    decor3d: Decor7,
    number: '07',
    description: 'Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android',
  },
];

// Для обратной совместимости с SERVISES_LINKS
export const SERVISES_LINKS = SERVICES_DATA.map(({ name, href }) => ({ name, href }));