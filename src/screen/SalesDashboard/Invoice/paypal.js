import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '../../../components/CircularProgress/circularProgress';
import { LOADING, UPDATE_INVOICE_DATA } from '../../../redux/reducer/AuthReducer';
import { GetInvoiceData, UpdateInvoiceStatus } from '../../../redux/action/AuthAction';
import CompanyLogo from '../../../assets/brand/iplogo.svg'
import { PayPalButton } from "react-paypal-button-v2";
import { BsCardChecklist } from 'react-icons/bs'
import { FaBeer } from 'react-icons/fa';

const PayPal = (props) => {
    const [close, setClose] = useState(false)
    const loadingSelector = useSelector(LOADING)
    const InvoiceData = useSelector(UPDATE_INVOICE_DATA)
    const dispatch = useDispatch()
    const id = props.match.params.id
    const ChangeDatabaseStatus = () => {
        dispatch(UpdateInvoiceStatus(InvoiceData.id))
        setClose(true)
    }
    useEffect(() => {
        dispatch(GetInvoiceData(id))
    }, [])

    return (
        <div className="login-container">
            {close ?
                (
                    <div className="paypal-paper">
                        <div className="success-loaderContainer">
                            <div className="success-icon">
                                <BsCardChecklist size={80} color={"#626FE4"} />
                            </div>
                            <div className="success-heading">
                                Thank You for sending your payment o us. You will receive a confirmation message from our Agent soon.
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div className="paypal-paper">

                        {loadingSelector || InvoiceData.client == undefined ?

                            <div className="login-loaderContainer">
                                <CircularProgress />
                            </div>

                            :
                            <div className="paypal-container">

                                <div className="paypal-body">
                                    <div className="logo-container">
                                        <img className="login-logo" src={CompanyLogo} alt="Logo" />
                                    </div>
                                    <div className="paypal-heading">
                                        PAY WITH PAYPAL
                                    </div>
                                    <div className="paypal-desc">
                                        This payment service is officially recognise by PayPal. This payment transaction is End-to-End entrypted that secures your overall privacy.
                                    </div>
                                    <div className="desc-conainter">

                                        <div className="desc-row">
                                            <div className="desc-set1">
                                                INVOICE:
                                            </div>
                                            <div className="desc-set2">
                                                {InvoiceData.id}
                                            </div>
                                        </div>

                                        <div className="desc-row">
                                            <div className="desc-set1">
                                                CUSTOMER:
                                            </div>
                                            <div className="desc-set2">
                                                {InvoiceData.client.username}
                                            </div>
                                        </div>

                                        <div className="desc-row">
                                            <div className="desc-set1">
                                                AMOUNT:
                                            </div>
                                            <div className="desc-set2">
                                                {InvoiceData.currency} {InvoiceData.amount}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="paypal-body">
                                    <PayPalButton
                                        style={{
                                            label: 'paypal'
                                        }}
                                        amount={InvoiceData.amount}
                                        //   amount={packagePrice}
                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                        onSuccess={(details, data) => {
                                            ChangeDatabaseStatus()
                                        }}
                                        options={{
                                            clientId: "AXYeWSpC1OF72B4kpm19guklDSQZ4o-hUU7GSrDeGp9z9Zh5vZBh-GWR694jq4U1-PQn4EJkzg6GDGeZ",
                                            components: ['buttons', 'marks'],
                                            currency: InvoiceData.currency,
                                            disableFunding: 'credit',
                                        }}
                                    />
                                </div>
                            </div>

                        }
                    </div>
                )}
        </div>
    )
}

export default PayPal
