import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import FeedbackService from '../../../services/feedback';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const FeedbackListView = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const retrieveRows = () => {
    FeedbackService.getAll()
      .then((response) => {
        setRows(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveRows();
  }, []);

  return (
    <Page
      className={classes.root}
      title="Feedbacks"
    >
      <Container maxWidth={false}>
        <Toolbar rows={rows} setRows={setRows} retrieveRows={retrieveRows} />
        <Box mt={3}>
          <Results rows={rows} setRows={setRows} retrieveRows={retrieveRows} />
        </Box>
      </Container>
    </Page>
  );
};

export default FeedbackListView;
