import React from 'react';
import { BrowserRouter as Router, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
      <Route
          path={switchRoutes.root}
          element={<CharacterCollectionScene />}
        />
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route
          path={switchRoutes.characterDetail}
          element={<CharacterScene />}
        />
        <Route
          path={switchRoutes.createCharacter}
          element={<CharacterScene />}
        />
        <Route
          path={switchRoutes.editCharacter}
          element={<CharacterScene />}
        />
      </Routes>
    </Router>
  );
};
