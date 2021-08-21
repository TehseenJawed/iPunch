import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Image from '../../assets/brand/logo.png'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    width:'70vh',
    height:'600px',
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    // alignItems:'center',
    flexWrap:'wrap',
    flexDirection:'row'
  },
  innerPaper1:{
    width:'65%',
    background:'#626FE4',
    borderRadius:10,
    color:'white'
  },
  innerPaper2:{
    width:'35%'
  },
  headText:{
    fontSize:35,
    margin:15,
    marginBottom:35
  },
  descText:{
    fontSize:15,
    margin:15
  },
  orderImage:{
    width:200
  },
}));

export default function TransitionsModal({data}) {
  const classes = useStyles();
  const [orderFlag, setOrderFlag, orderData] = data
  console.log("I am working ===> ",orderData)
  const handleClose = () => {
    setOrderFlag(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={orderFlag}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={orderFlag}>
          <div className={classes.paper}>
            <div className={classes.innerPaper1}>
              <h1 className={classes.headText}>#{orderData.id}</h1>
              <h1 className={classes.descText}>Customer Name: {orderData.CustomerName}</h1>
              <h1 className={classes.descText}>Amount: ${orderData.amount}</h1>
              <h1 className={classes.descText}>Deliver Status: {orderData.status}</h1>
              <h1 className={classes.descText}>Order Status: {orderData.orderStatus}</h1>
              <h1 className={classes.descText}>Receive Date: {orderData.receiveDate}</h1>
              <h1 className={classes.descText}>Deliver Date: {orderData.deliveryDate}</h1>
            </div>
            <div className={classes.innerPaper2}>
              <img className={classes.orderImage} src={Image} alt="Design" />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}