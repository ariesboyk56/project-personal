import React, { useEffect, useState } from 'react';
import classes from './AdminDashboard.module.scss'
import axios from 'axios'
import clsx from 'clsx'
import { apiUrl } from '../../api/Api'
import AddProduct from '../../components/Product/AddProduct';
import UpdateProduct from '../../components/Product/UpdateProduct';

const AdminDashboard = () => {
    const [productList, setProductList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [open, setOpen] = useState(false)
    const [openUpdateModal, setOpenUpdateModal] = useState({
        show: false,
        id: ""
    })
    const status = ["preparing", "on the way", "delivered"];
    // console.log(axios.defaults.headers.common);
    const getServerSideProps = async () => {
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
    const chooseProduct = (productId) => {
        // findProduct(productId)
        setOpenUpdateModal({
            show: true,
            id: productId
        })
    }
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${apiUrl}/products/${id}`);
            setProductList(productList.filter((product) => product._id !== id));
        } catch (err) {
            console.log(err);
        }
    };
    const handleDeleteOrder = async (id) => {
        try {
            const res = await axios.delete(`${apiUrl}/orders/${id}`);
            setOrderList(orderList.filter((order) => order._id !== id));
        } catch (err) {
            console.log(err);
        }
    };
    const handleStatus = async (id) => {
        const item = orderList.filter((order) => order._id === id)[0];
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
    }, [open, openUpdateModal])
    return (
        <>
            <div className={clsx(classes.container, "wide")}>
                <div className={classes.item}>
                    <h1 className={classes.title}>Products</h1>
                    <button className='btn primary' onClick={() => { setOpen(true) }}>Add product</button>
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
                                        <button className={classes.button} onClick={(e) => chooseProduct(product._id)}>Edit</button>
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
                                    <td>{order._id.slice(0, 5)}...</td>
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
                                        <button
                                            onClick={() => handleDeleteOrder(order._id)}
                                        >
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
            {open && <AddProduct onClose={setOpen} />}
            {openUpdateModal.show && <UpdateProduct onClose={setOpenUpdateModal} id={openUpdateModal.id} />}
        </>
    );
};

export default AdminDashboard;
