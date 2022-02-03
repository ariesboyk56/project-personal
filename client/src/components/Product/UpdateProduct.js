import React, { useEffect, useState } from 'react';
import axios from "axios";
import { apiUrl } from "../../api/Api"
import UploadImg from "../UploadImg";
import classes from "../../styles/AddProduct.module.scss";
const UpdateProduct = ({ onClose, id }) => {
    const [url, setUrl] = useState(null);
    const [newProduct, setNewProduct] = useState({
        pro_name: "",
        pro_avatar: "",
        pro_sub_avatar: [],
        pro_description: "",
        pro_new_price: 0,
        pro_old_price: 0,
        pro_quantity: 0,
        pro_status: "",
    })
    const {
        pro_name,
        pro_avatar,
        pro_sub_avatar,
        pro_description,
        pro_new_price,
        pro_old_price,
        pro_quantity,
        pro_status } = newProduct
    const getProduct = async (id) => {
        try {
            const res = await axios.get(`${apiUrl}/products/${id}`);
            if (res.data.success) {
                setNewProduct(res.data.product);
            }

        } catch (err) {
            console.log(err);
        }
    };
    const onChange = async(urlImg) => {
        setUrl(urlImg)
        setNewProduct({ ...newProduct, pro_avatar: urlImg})
    }
    const onChangeForm = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value})
    }
    const handleUpdate = async (id) => {
        
        try {
            await axios.put(`${apiUrl}/products/${id}`, newProduct);
            onClose(false);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getProduct(id)
    }, [])
    return <div className={classes.container}>
        <div className={classes.wrapper}>
            <span onClick={() => onClose(false)} className={classes.close}>
                X
            </span>
            <h1>Add a new Product</h1>
            <div className={classes.item}>
                <label className={classes.label}>Choose an main image</label>
                <UploadImg onChange={onChange} />
            </div>
            <img alt="..." srcSet={`${url ? url : pro_avatar} 2x`} style={{ "width": "50px", "height": "50px" }} />
            
            <div className={classes.item}>
                <label className={classes.label}>Title</label>
                <input
                    className={classes.input}
                    type="text"
                    value={pro_name}
                    name="pro_name"
                    onChange={(e) => onChangeForm(e)}
                />
            </div>
            <div className={classes.item}>
                <label className={classes.label}>Desc</label>
                <textarea
                    rows={4}
                    type="text"
                    value={pro_description}
                    name="pro_description"
                    onChange={(e) => onChangeForm(e)}
                />
            </div>
            <div className={classes.item}>
                <label className={classes.label}>Inventory</label>
                <input
                    className={`${classes.input} ${classes.inputSm}`}
                    type="number"
                    min={0}
                    placeholder="inventory"
                    value={pro_quantity}
                    name="pro_quantity"
                    onChange={(e) => onChangeForm(e)}
                />
            </div>
            <div className={classes.item}>
                <label className={classes.label}>Inventory</label>
                <input
                    className={`${classes.input} ${classes.inputSm}`}
                    type="number"
                    min={0}
                    placeholder="new price"
                    value={pro_new_price}
                    name="pro_new_price"
                    onChange={(e) => onChangeForm(e)}
                />
            </div>
            <div className={classes.item}>
                <label className={classes.label}>Prices</label>
                <input
                    className={`${classes.input} ${classes.inputSm}`}
                    type="number"
                    min={0}
                    placeholder="old price"
                    value={pro_old_price}
                    name="pro_old_price"
                    onChange={(e) => onChangeForm(e)}
                />
            </div>
            <div className={classes.item}>
                <label className={classes.label}>Status</label>
                <select
                value={pro_status}
                name="pro_status"
                onChange={(e) => onChangeForm(e)}
                >
                    <option value="In stock">In stock</option>
                    <option value="Sold out">Sold out</option>
                </select>
            </div>
            
            <button className={classes.addButton}
            onClick={e => handleUpdate(id)}
            >
                Update
            </button>
        </div>
    </div>;
};

export default UpdateProduct;
