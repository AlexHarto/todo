interface MenuRouteTo {
  name: string;
}

interface MenuRoute {
  name: string;
  align?: 'left' | 'right' | 'center';
  to: MenuRouteTo;
}

interface MenuSearchComponent {
  isSearchComponent: boolean;
}

export { MenuRoute, MenuSearchComponent };
