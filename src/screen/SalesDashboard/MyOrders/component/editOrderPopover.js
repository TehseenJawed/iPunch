import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { LOADING } from '../../../../redux/reducer/AuthReducer';
import { UpdateOrderData, ChangeSnackData, ChangeSnackFlag } from '../../../../redux/action/AgentAction';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '../../../../components/CircularProgress/circularProgress'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    width: '130vh',
    height: '600px',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    // alignItems:'center',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  innerPaper1: {
    width: '99%',
    background: '#626FE4',
    borderRadius: 10,
    color: 'white'
  },
  headText: {
    fontSize: 35,
    margin: 15,
    marginBottom: 35
  },
  descText: {
    fontSize: 15,
    margin: 15
  },
  orderImage: {
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    width: '90%',
    backgroundColor: 'white',
    padding: 12,
    marginLeft: '5%'
  },
  setEditForm: {
    width: '100%',
    padding: 20,
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  textBody: {
    width: '48.5%',
  },
  textBoxer: {
    width: '100%',
    // textAlign:'center'
  },
  TextField: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '85%',
    marginLeft: -15,
    height: 50
  },
  TextBox: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '90%',
    height: 130
  },
  setPaperText: {
    fontSize: 18,
    margin: 20
  }
}));

export default function TransitionsModal({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [editOrder, setEditOrder, selectedOrder] = data

  const loadingSelector = useSelector(LOADING)
  const { amount, description, serviceType, id } = selectedOrder

  const handleClose = () => {
    setEditOrder(false);
  };
  const [amountField, setAmountField] = useState("")
  const [serviceTypeField, setServiceTypeField] = useState("")
  const [descriptionField, setDescriptionField] = useState("")
  
  const updateOrder = () => {
    const newObj ={
      amount:amountField,
      serviceType: serviceTypeField,
      description:descriptionField
    }
    if(amountField !== "" && serviceTypeField !== "" && descriptionField !== "" ){
      dispatch(UpdateOrderData(newObj, id))
      handleClose()
    } else{
      dispatch(dispatch(ChangeSnackData({text:"You have to fill all fields to continue.", variant:"error"})))
      dispatch(ChangeSnackFlag(true))
    }
    
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={editOrder}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={editOrder}>
          <div className={classes.paper}>
            <div className={classes.innerPaper1}>

              <div className={classes.setPaperText}>
                Edit Changes Here
              </div>

              <div className={classes.setEditForm}>
                <div className={classes.textBody}>
                  <div>AMOUNT</div>
                  <TextField className={classes.TextField} variant="filled" id="standard-basic" label={amount} value={amountField} onChange={(e) => setAmountField(e.target.value)} />
                </div>

                <div className={classes.textBody}>
                  <div>SERVICE</div>
                  <FormControl className="salesOrder-Textfield">
                    <Select
                      value={serviceTypeField}
                      onChange={(e) => setServiceTypeField(e.target.value)}
                      displayEmpty
                      className={classes.TextField}
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="Vector Graphics">
                        Vector Graphics
                      </MenuItem>
                      <MenuItem value="Digitizing">
                        Digitizing
                      </MenuItem>

                    </Select>
                    <FormHelperText style={{ color: "white" }}>{serviceType}</FormHelperText>
                  </FormControl>
                </div>

                <div className={classes.textBoxer}>
                  <div>DESCRIPTION</div>
                  <TextField
                    id="filled-multiline-static"
                    label={description}
                    className={classes.TextBox}
                    value={descriptionField}
                    onChange={(e) => setDescriptionField(e.target.value)}
                    multiline
                    rows={6}
                    defaultValue="Default Value"
                    variant="filled"
                  />
                </div>
              </div>

              {loadingSelector ?
                <CircularProgress />
                :
                <div className="salesOrder-Textfield3">
                  <Button variant="contained"
                    className="salesOrder-Textfield3"
                    className={classes.button}
                    onClick={updateOrder}
                    endIcon={<Icon>send</Icon>}
                  >
                    UPDATE CHANGES
                  </Button>
                </div>
              }

            </div>
            {/* <div className={classes.innerPaper2}>
            </div> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}