import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BASE_URL } from '../../../../redux/reducer/AuthReducer'
import { TOTAL_DATA } from '../../../../redux/reducer/AdminReducer'
import { FetchSalesDataByID } from '../../../../redux/action/AdminAction'
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
        // flexWrap: 'wrap',
        flexDirection: 'row'
    },
    paper1:{
        width:'30%',
        height:'100%',
        padding:20
    },
    paper2:{
        width:'70%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:20,
        height:400,
    },
    fieldContainer:{
        width:'33%',
        // height:30,
        fontWeight:'600',
        display:'flex',
        // justifyContent:'center',
        alignItems:'center',
        fontSize:18,
        color:'black'
    },
    innerPaper1:{
        height:'30%',
        width:'100%',
        backgroundColor:'#626FE4',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        color:'white',
        marginTop:5,
        fontSize:25,

    },
    boldNumber:{
        fontSize:75,
        fontWeight:'800',
        color:'white'
    },
}));

export default function TransitionsModal({ data }) {
    const classes = useStyles();
    const { agentDetailsFlag, setAgentDetailsFlag, agentDetails } = data
    const BaseUrl = useSelector(BASE_URL)
    const dispatch = useDispatch()
    const totalData = useSelector(TOTAL_DATA)

    const handleClose = () => {
        setAgentDetailsFlag(false);
    };
    const {username, salaryType, salary, role, phone, experience, email, education, company, address, accNumber, id} = agentDetails
    
    console.log(totalData)

    useEffect(() => {
        dispatch(FetchSalesDataByID(id))
    },[agentDetails])
    
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={agentDetailsFlag}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={agentDetailsFlag}>
                    <div className={classes.paper}>

                        <div className={classes.paper1}>
                            <div className={classes.innerPaper1}>
                                <div className={classes.boldNumber}>{totalData.orders}</div>
                                TOTAL ORDERS
                            </div>
                            <div className={classes.innerPaper1}>
                                <div className={classes.boldNumber}>{totalData.customers}</div>
                                TOTAL CUSTOMERS
                            </div>
                            <div className={classes.innerPaper1}>
                                <div className={classes.boldNumber}>{totalData.clients}</div>
                                TOTAL CLIENTS
                            </div>
                        </div>

                        <div className={classes.paper2}>

                            <div className={classes.fieldContainer}>
                                Name : {username}
                            </div>

                            <div className={classes.fieldContainer}>
                                Phone : {phone}
                            </div>

                            <div className={classes.fieldContainer}>
                                Role : {role}
                            </div>

                            <div className={classes.fieldContainer}>
                                Salary : {salary}
                            </div>

                            <div className={classes.fieldContainer}>
                                Pay Type : {salaryType}
                            </div>

                            <div className={classes.fieldContainer}>
                                Experience : {experience}
                            </div>

                            <div className={classes.fieldContainer}>
                                Email : {email}
                            </div>

                            <div className={classes.fieldContainer}>
                                Education : {education}
                            </div>

                            <div className={classes.fieldContainer}>
                                Company : {company}
                            </div>

                            <div className={classes.fieldContainer}>
                                Account : {accNumber}
                            </div>

                            <div className={classes.fieldContainer}>
                                Address : {address}
                            </div>
                        </div>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}