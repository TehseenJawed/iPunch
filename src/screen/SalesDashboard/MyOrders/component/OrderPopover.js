import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BASE_URL } from '../../../../redux/reducer/AuthReducer'
import { useSelector } from 'react-redux';
import { IoMdCloseCircle } from 'react-icons/io'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    width: '100vh',
    height: '600px',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    // alignItems:'center',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  innerPaper1: {
    width: '65%',
    background: '#626FE4',
    borderRadius: 10,
    color: 'white'
  },
  innerPaper2: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontSize: 15,
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
  fileContainer: {
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    marginLeft: '2.5%'
  },
  innerFile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    margin: 5,
    fontSize: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    color: 'black'
  },
  image: {
    width: 100,
    // height: 100
  },
  setHeader:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    padding:10,
  },
  descPopper: {
    position: 'absolute',
    fontSize: 12,
    border: '0.3px solid white',
    borderWidth: 0.5,
    borderRadius: 5,
    width: 300,
    color: '#626FE4',
    backgroundColor: 'white',
    padding: 15,
    marginTop: 110,
    textAlign: 'center'
  },
}));

export default function TransitionsModal({ data }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [orderFlag, setOrderFlag, orderData, selectedOrder, setSelectedOrder] = data
  const BaseUrl = useSelector(BASE_URL)
  const handleClose = () => {
    setOrderFlag(false);
    setSelectedOrder({})
  };

  const { agent, amount, customer, deliverFiles, files, id, orderStatus, revisions, createdAt, updatedAt, serviceType, description } = selectedOrder

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
            {
              open ?
                (
                  <div className={classes.descPopper}>
                    <div className={classes.setHeader}>
                      <div style={{ fontWeight: '600' }}>Description</div>
                      <IoMdCloseCircle style={{cursor:'pointer'}} onClick={() => setOpen(false)} color={"#626FE4"} size={20} />
                    </div>
                    {description}
                  </div>
                ) : null
            }

            <div className={classes.innerPaper1}>
              <h1 className={classes.headText}>#{id}</h1>
              <h1 className={classes.descText}>CUSTOMER: {customer.username}</h1>
              <h1 className={classes.descText}>AGENT: {agent.username}</h1>
              <h1 className={classes.descText}>SERVICE: {serviceType}</h1>
              <h1 className={classes.descText}>AMOUNT: ${amount}</h1>
              <h1 className={classes.descText}>REVISIONS: {revisions.length}</h1>
              <h1 onClick={() => setOpen(true)} className={classes.descText}>DESCRIPTION: </h1>
              <h1 className={classes.descText}>DELIVER: {orderStatus}</h1>
              <h1 className={classes.descText}>ORDER: {orderStatus}</h1>
              <h1 className={classes.descText}>RECEIVEDAT: {createdAt}</h1>
              <h1 className={classes.descText}>DELIVEREDAT: {updatedAt}</h1>

              <h1 className={classes.descText}>Artwork Files: </h1>
              <div className={classes.fileContainer}>
                {
                  files.map((v, i) => {
                    const DownloadFiles = (URL) => {
                      var a = document.createElement("a");
                      a.setAttribute('download', '');
                      a.setAttribute('target', '_blank');
                      a.setAttribute('href', URL);
                      a.click()

                    }
                    if (v.slice(-3) === 'png' || v.slice(-3) === 'jpg' || v.slice(-3) === 'jpeg') {
                      return (
                        <div className={classes.innerFile} onClick={() => DownloadFiles(`${BaseUrl}uploads/${v}`)}>
                          <img className={classes.image} src={`${BaseUrl}uploads/${v}`} alt="Image" />
                        </div>
                      )
                    } else {
                      return (
                        <div className={classes.innerFile} onClick={() => DownloadFiles(`${BaseUrl}uploads/${v}`)}>{v.slice(-3)}</div>
                      )
                    }
                  })
                }
              </div>
            </div>

            <div className={classes.innerPaper2}>
              <div style={{ color: '#626FE4', fontWeight: '800', letterSpacing: 5 }}>DELIVER FILES</div>
              {
                deliverFiles.map((v, i) => {
                  const DownloadFiles = (URL) => {
                    var a = document.createElement("a");
                    a.setAttribute('download', '');
                    a.setAttribute('target', '_blank');
                    a.setAttribute('href', URL);
                    a.click()

                  }
                  if (v.slice(-3) === 'png' || v.slice(-3) === 'jpg' || v.slice(-3) === 'jpeg') {
                    return (
                      <div className={classes.innerFile} onClick={() => DownloadFiles(`${BaseUrl}uploads/${v}`)}>
                        <img className={classes.image} src={`${BaseUrl}uploads/${v}`} alt="Image" />
                      </div>
                    )
                  } else {
                    return (
                      <div className={classes.innerFile} onClick={() => DownloadFiles(`${BaseUrl}uploads/${v}`)}>{v.slice(-3)}</div>
                    )
                  }
                })
              }
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}