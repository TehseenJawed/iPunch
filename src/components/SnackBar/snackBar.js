import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {ChangeSnackFlag} from '../../redux/action/AuthAction';
import {SNACK_TEXT, SNACK_FLAG} from '../../redux/reducer/AuthReducer';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars({data}) {
  const snackText = useSelector(SNACK_TEXT)
  const snackFlag = useSelector(SNACK_FLAG)
  const dispatch = useDispatch()
  const classes = useStyles();
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(ChangeSnackFlag(false))
  };
  return (
    <div className={classes.root}>
      <Snackbar open={snackFlag} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackText.variant}>
          {snackText.text}
        </Alert>
      </Snackbar>
      
     
    </div>
  );
}