import React from "react";
import Button from "@mui/material/Button";
import { Character } from "./character.vm";
import { linkRoutes } from "core/router";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          padding: "0.5rem",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={character.image}
          sx={{ width: 56, height: 56 }}
        />
        <TextField
          id="filled-read-only-input"
          label="name"
          value={character.name}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="status"
          value={character.status}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="species"
          value={character.species}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="type"
          value={character.type}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="gender"
          value={character.gender}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="origin"
          value={character.origin}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="location"
          value={character.location}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <Box
          m={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="outlined"
            startIcon={<CancelOutlinedIcon />}
            onClick={() => {
              navigate(linkRoutes.characterCollection);
            }}
            sx={{ height: 40 }}
          >
            Return
          </Button>
        </Box>
      </div>
    </Box>
  );
};
