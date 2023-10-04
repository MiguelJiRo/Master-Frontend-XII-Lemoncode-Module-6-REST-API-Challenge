import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { linkRoutes } from 'core/router';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { Box } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
  const navigate = useNavigate();

  return (
      <Formik
        onSubmit={onSave}
        initialValues={character}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent name="name" label="Name" />
            <TextFieldComponent name="status" label="Status" />
            <TextFieldComponent name="species" label="Species" />
            <TextFieldComponent name="type" label="Type" />
            <TextFieldComponent name="gender" label="Gender" />
            <TextFieldComponent name="origin" label="Origin" />
            <TextFieldComponent name="location" label="Location" />
            <TextFieldComponent name="bestSentences" label="Best Sentences" />
            <Box
              m={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end">       
              <Button variant="outlined" startIcon={<CancelOutlinedIcon />} onClick={() => {navigate(linkRoutes.characterCollection);}} sx={{ height: 40 }}>
                Cancel
              </Button>    
              <Button type="submit" variant="contained" startIcon={<SaveIcon />} color="primary" sx={{ height: 40 }}>
                Save
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
  );
};
