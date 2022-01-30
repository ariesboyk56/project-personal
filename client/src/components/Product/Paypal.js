import React, { useEffect } from 'react';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { createOrder } from '../../utils/orders';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Paypal = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // This values are the props in the UI
    const amount = props.totals;
    const currency = "USD";
    const style = { "layout": "vertical" };
    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        const shipping = details.purchase_units[0].shipping;
                        createOrder({ 
                            customer: shipping.name.full_name,
                            address: shipping.address.address_line_1,
                            total: 2,
                            method: 2
                         }, dispatch,navigate)
                        // localStorage.setItem("paypal", JSON.stringify(details))
                    });
                }}
            />
        </>
        );
    }
    return <PayPalScriptProvider
        options={{
            "client-id": "AdQ2ZBMAX4FPgha-Umz9XGZRV5uOdgxEwXoK33k0PtO7dSfCH6xTUSy8s5xTquVreowB43QKKJ9UaAVo",
            components: "buttons",
            currency: "USD",
            "disable-funding": "card"
        }}
    >
        <ButtonWrapper
            currency={currency}
            showSpinner={false}
        />
    </PayPalScriptProvider>;
};

export default Paypal;
