import { MenuRoute, MenuSearchComponent } from '@/interfaces/Menu';

const menuRoutes: (MenuRoute | MenuSearchComponent)[] = [
  {
    name: 'Home',
    to: {
      name: 'Home',
    },
  },
  {
    isSearchComponent: true,
  },
  {
    name: 'About',
    align: 'right',
    to: {
      name: 'About',
    },
  },
];

export default menuRoutes;
