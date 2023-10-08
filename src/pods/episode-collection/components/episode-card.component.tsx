import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { EpisodeEntityVm } from "../episode-collection.vm";
import * as classes from "./episode-card.styles";

interface Props {
  episode: EpisodeEntityVm;
}

export const EpisodeCard: React.FunctionComponent<Props> = (props) => {
  const { episode } = props;
  const dateFormat = new Date(episode.created).toLocaleString("es-ES");

  return (
    <Card>
      <CardHeader title={episode.name} subheader={dateFormat} />
      <CardContent>
        <div className={classes.content}>
          <Typography variant="subtitle1" gutterBottom>
            Air date: {episode.air_date}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Characters: {episode.characters.length}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
