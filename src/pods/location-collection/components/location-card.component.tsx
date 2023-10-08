import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { LocationEntityVm } from "../location-collection.vm";
import * as classes from "./location-card.styles";

interface Props {
  location: LocationEntityVm;
}

export const LocationCard: React.FunctionComponent<Props> = (props) => {
  const { location } = props;
  const dateFormat = new Date(location.created).toLocaleString("es-ES");

  return (
    <Card>
      <CardHeader title={location.name} subheader={location.type} />
      <CardContent>
        <div className={classes.content}>
          <Typography variant="subtitle1" gutterBottom>
            Created: {dateFormat}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Location: {location.dimension}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
