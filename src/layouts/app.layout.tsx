import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import * as classes from "./app.layout.styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { linkRoutes } from "core/router";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  const handleNavigateCharactersPage = () => {
    navigate(linkRoutes.characterCollection);
  };

  const handleNavigateLocationsPage = () => {
    navigate(linkRoutes.locationCollection);
  };

  const handleNavigateEpisodesPage = () => {
    navigate(linkRoutes.episodeCollection);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button
            variant="contained"
            startIcon={<GroupsIcon />}
            onClick={handleNavigateCharactersPage}
          >
            Characters
          </Button>
          <Button
            variant="contained"
            startIcon={<LocationOnIcon />}
            onClick={handleNavigateLocationsPage}
          >
            Locations
          </Button>
          <Button
            variant="contained"
            startIcon={<AutoStoriesIcon />}
            onClick={handleNavigateEpisodesPage}
          >
            Episodes
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
