import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Image from '../../../../assets/brand/logo.png'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import DropZone from '../../../../components/Dropzone/Dropzone';
import {DeliverOrder} from '../../../../redux/action/DesignerAction';
import {PatchOrderForChanges} from '../../../../redux/action/AdminAction';
import {useSelector, useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    width: '70vh',
    height: '600px',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  innerPaper1: {
    width: '100%',
    height: 170,
    background: '#F5365C',
    borderRadius: 10,
    color: 'white'
  },
  orderImage: {
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    width: '90%',
    marginLeft: '5%'
  },
  textField: {
    width: 400,
  },
  innerPaper2: {
    display: 'flex',
    // justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
}));

export default function TransitionsModal({ data }) {
  const classes = useStyles();
  const [changesFlag, setChangesFlag, changesData ] = data
  const dispatch = useDispatch()
  const [ message, setMessage] = useState("")
  const handleClose = () => {
    setChangesFlag(false);
  };
  console.log("test",changesData.revision)
  const Deliver = () => {
    const newObj = {
      id:changesData.id,
      data:{
        orderStatus:"Assigned",
        revisions:[
          ...changesData.revision,
          {    
            revisionAt:new Date().getTime(),
            designerMessage:message,
            dispute:"None"
          }
        ]
      }
    }
    dispatch(PatchOrderForChanges(newObj))
    setChangesFlag(false)
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={changesFlag}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={changesFlag}>
          <div className={classes.paper}>
            <div className={classes.innerPaper1}>
            </div>

            <div className={classes.innerPaper2}>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                className={classes.textField}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
              />

              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                onClick={Deliver}
              >
                Deliver
              </Button>

            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}