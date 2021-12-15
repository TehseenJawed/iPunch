import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BASE_URL } from '../../../../redux/reducer/AuthReducer'
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        width: '90%',
        height: '700px',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    innerPaper1: {
        width: '100%',
        height: 250,
        background: '#626FE4',
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
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
        alignItems: 'center',
        flexDirection: 'column',
    },
    fieldContainer: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fieldHeader: {
        width: '100%',
        fontSize: 12,
        fontWeight: '500',
        textDecoration: 'underline'
    },
    setContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 20,
        // borderBottom:'0.5px solid white' 
    },
    fieldLabel: {
        fontWeight: '500',
        fontSize: 14,
        margin: 5,
    },
    fieldLabel2: {
        fontWeight: '600',
        color: 'gray',
        fontSize: 15,
        marginBottom: 5,
    },
    scroll: {
        width: '20%'
    },
    scrollerContainer: {
        overflow: 'auto',
        width: 150,
        height: 100
    },
    fileContainer: {
        width: '45%',
    },
    innerFileContainer: {
        display: 'flex',
        // justifyContent:'space-evenly',
        marginTop:10
    },
    innerFile: {
        width: 120,
        height: 100,
        marginLeft:5,
        border:'0.5px solid gray',
        borderRadius:5,
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width: 120,
        height: 100,
    },
    deliverFileContainer:{
        width:'90%'
    },
}));

export default function TransitionsModal({ data }) {
    const classes = useStyles();
    const { detailsFlag, setDetailsFlag, orderDetails } = data
    const BaseUrl = useSelector(BASE_URL)
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")
    const handleClose = () => {
        setDetailsFlag(false);
    };

    console.log("test ===> ", orderDetails)
    const { amount, currency, createdAt, updatedAt, deliverFiles, description, designerMessage, files, orderStatus, paymentStatus, revisions, serviceType } = orderDetails
    const { username, phone, email, company } = orderDetails.customer

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={detailsFlag}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={detailsFlag}>
                    <div className={classes.paper}>

                        <div className={classes.innerPaper1}>
                            <div className={classes.setContainer}>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>NAME  </div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>PHONE  </div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>EMAIL  </div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>COMPANY  </div>
                                </div>

                            </div>

                            <div className={classes.fieldHeader}>AGENT INFORMATION :</div>
                            <div className={classes.setContainer}>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{orderDetails.agent.username}</div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{orderDetails.agent.phone}</div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{orderDetails.agent.email}</div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{orderDetails.agent.company}</div>
                                </div>

                            </div>

                            <div className={classes.fieldHeader}>DESIGNER INFORMATION :</div>
                            <div className={classes.setContainer}>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{orderDetails.designer.username}</div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{orderDetails.designer.phone}</div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{orderDetails.designer.email}</div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{orderDetails.designer.company}</div>
                                </div>

                            </div>

                            <div className={classes.fieldHeader}>CUSTOMER INFORMATION :</div>
                            <div className={classes.setContainer}>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{username}</div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{phone}</div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{email}</div>
                                </div>

                                <div className={classes.fieldContainer}>
                                    <div className={classes.fieldLabel}>{company}</div>
                                </div>

                            </div>
                        </div>


                        <div className={classes.setContainer}>

                            <div className={classes.fieldContainer}>
                                <div className={classes.fieldLabel2}>ORDER  </div>
                                <div className={classes.fieldLabel}>OR-8855  </div>
                            </div>

                            <div className={classes.fieldContainer}>
                                <div className={classes.fieldLabel2}>STATUS  </div>
                                <div className={classes.fieldLabel}>{orderStatus}  </div>
                            </div>

                            <div className={classes.fieldContainer}>
                                <div className={classes.fieldLabel2}>SERVICE  </div>
                                <div className={classes.fieldLabel}>{serviceType} </div>
                            </div>

                            <div className={classes.fieldContainer}>
                                <div className={classes.fieldLabel2}>AMOUNT  </div>
                                <div className={classes.fieldLabel}>{currency}{amount}  </div>
                            </div>

                            <div className={classes.fieldContainer}>
                                <div className={classes.fieldLabel2}>PAYMENT  </div>
                                <div className={classes.fieldLabel}>{paymentStatus}  </div>
                            </div>

                            <div className={classes.fieldContainer}>
                                <div className={classes.fieldLabel2}>ORDER TIME  </div>
                                <div className={classes.fieldLabel}>{new Date(createdAt).toDateString()}  </div>
                            </div>

                            <div className={classes.fieldContainer}>
                                <div className={classes.fieldLabel2}>DELIVER TIME  </div>
                                <div className={classes.fieldLabel}>{new Date(updatedAt).toDateString()}  </div>
                            </div>

                            <div className={classes.fieldContainer}>
                                <div className={classes.fieldLabel2}>REVISIONS  </div>
                                <div className={classes.fieldLabel}>{revisions.length - 1}  </div>
                            </div>

                        </div>

                        <div className={classes.setContainer}>

                            <div className={classes.scroll}>
                                <div className={classes.fieldLabel2}>ORDER DESCRIPTION  </div>
                                <div className={classes.scrollerContainer}>
                                    {description}
                                </div>
                            </div>

                            <div className={classes.scroll}>
                                <div className={classes.fieldLabel2}>DESIGNER MESSAGE  </div>
                                <div className={classes.scrollerContainer}>
                                    {designerMessage}
                                </div>
                            </div>

                            <div className={classes.fileContainer}>
                                <div className={classes.fieldLabel2}>ORDER FILES  </div>
                                <div className={classes.innerFileContainer}>
                                    {
                                        files.map((v, i) => {
                                            const DownloadFiles = (URL) => {
                                                var a = document.createElement("a");
                                                a.setAttribute('download', '');
                                                a.setAttribute('target', '_blank');
                                                a.setAttribute('href', URL);
                                                a.click()

                                            }
                                            console.log(v.slice(-3).toLowerCase() === 'png')
                                            if (v.slice(-3).toLowerCase() === 'png' || v.slice(-3).toLowerCase() === 'jpg' || v.slice(-3).toLowerCase() === 'jpeg') {
                                                return (
                                                    <div className={classes.innerFile} onClick={() => DownloadFiles(`${BaseUrl}uploads/${v}`)}>
                                                        <img className={classes.image} src={`${BaseUrl}uploads/${v}`} alt="Image" />  ,
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

                        </div>

                        <div className={classes.setContainer}>

                            <div className={classes.deliverFileContainer}>
                                <div className={classes.fieldLabel2}>DELIVER FILES  </div>
                                <div className={classes.innerFileContainer}>
                                {
                                    deliverFiles.map((v, i) => {
                                        const DownloadFiles = (URL) => {
                                            var a = document.createElement("a");
                                            a.setAttribute('download', '');
                                            a.setAttribute('target', '_blank');
                                            a.setAttribute('href', URL);
                                            a.click()

                                        }
                                        console.log(v.slice(-3).toLowerCase() === 'png')
                                        if (v.slice(-3).toLowerCase() === 'png' || v.slice(-3).toLowerCase() === 'jpg' || v.slice(-3).toLowerCase() === 'jpeg') {
                                            return (
                                                <div className={classes.innerFile} onClick={() => DownloadFiles(`${BaseUrl}uploads/${v}`)}>
                                                    <img className={classes.image} src={`${BaseUrl}uploads/${v}`} alt="Image" />  ,
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

                        </div>


                    </div>
                </Fade>
            </Modal>
        </div>
    );
}