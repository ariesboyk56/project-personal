import React, { useEffect, useState } from 'react';
import classes from './Admin.module.scss'
import axios from 'axios'
import clsx from 'clsx'
import { apiUrl } from '../../api/Api'
const Admin = () => {
    const [productList, setProductList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const status = ["preparing", "on the way", "delivered"];

    // console.log(axios.defaults.headers.common);
    const getServerSideProps = async (ctx) => {
        // const myCookie = ctx.req?.cookies || "";

        // if (myCookie.token !== process.env.TOKEN) {
        //   return {
        //     redirect: {
        //       destination: "/admin/login",
        //       permanent: false,
        //     },
        //   };
        // }

        const productRes = await axios.get(`${apiUrl}/products`);
        if (productRes.data.success) {
            setProductList(productRes.data.products)
        }
        const orderRes = await axios.get(`${apiUrl}/orders`);
        if (orderRes.data.success) {
            setOrderList(orderRes.data.orders)
        }
        return {
            props: {
                orders: orderRes.data,
                products: productRes.data,
            },
        };
    };

    const handleDelete = async (id) => {
        console.log(id);
        try {
            const res = await axios.delete(`${apiUrl}/products/${id}`);
            setProductList(productList.filter((pizza) => pizza._id !== id));
        } catch (err) {
            console.log(err);
        }
    };
    const handleStatus = async (id) => {
        const item = orderList.filter((order) => order._id === id)[0];
        console.log(id);
        const currentStatus = item.status >= 2 ? 1 : item.status;

        try {
            const res = await axios.put(`${apiUrl}/orders/${id}`, {
                status: currentStatus + 1,
            });
            console.log("data", res.data);
            setOrderList([
                res.data.order,
                ...orderList.filter((order) => order._id !== id),
            ]);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getServerSideProps()
    }
        , [])
    return (
        <div className={clsx(classes.container, "wide")}>
            <div className={classes.item}>
                <h1 className={classes.title}>Products</h1>
                <table className={classes.table}>
                    <tbody>
                        <tr className={classes.trTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {productList.map((product, index) => (
                        <tbody key={index}>
                            <tr className={classes.trTitle}>
                                <td>
                                    <img
                                        src={product.pro_avatar}
                                        width={50}
                                        height={50}
                                        objectfit="cover"
                                        alt=""
                                    />
                                </td>
                                <td>{product._id.slice(0, 5)}...</td>
                                <td>{product.pro_name}</td>
                                <td>${product.pro_new_price}</td>
                                <td>
                                    <button className={classes.button}>Edit</button>
                                    <button
                                        className={classes.button}
                                        onClick={() => handleDelete(product._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <div className={classes.item}>
                <h1 className={classes.title}>Orders</h1>
                <table className={classes.table}>
                    <tbody>
                        <tr className={classes.trTitle}>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {orderList.map((order, index) => (
                        <tbody key={index}>
                            <tr className={classes.trTitle}>
                                <td>{order._id}</td>
                                <td>{order.customer}</td>
                                <td>${order.total}</td>
                                <td>
                                    {order.method === 1 ? <span>cash</span> : <span>paid</span>}
                                </td>
                                <td>{status[order.status]}</td>
                                <td>
                                    <button
                                        onClick={() => handleStatus(order._id)}
                                    >
                                        Next Stage
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Admin;
