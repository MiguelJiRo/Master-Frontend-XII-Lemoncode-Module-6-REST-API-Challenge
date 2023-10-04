import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  characterDetail: string;
  createCharacter: string;
  editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  characterDetail: '/characters/:id',
  createCharacter: '/characters/create',
  editCharacter: '/characters/edit/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'characterDetail' | 'editCharacter'> {
  characterDetail: NavigationFunction;
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  characterDetail: (id) => generatePath(switchRoutes.characterDetail, { id }),
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
