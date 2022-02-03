import { useState } from "react";
import axios from "axios";
import {apiUrl} from "../../api/Api" 
import classes from "../../styles/AddProduct.module.scss";
import UploadImg from "../UploadImg";
// import { useRouter } from "next/router";

const AddProduct = ({ onClose }) => {
    const [url, setUrl] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [inventory, setInventory] = useState([]);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null);

      const changePrice = (e) => {
        setPrices(parseInt(e.target.value));
      };
      const changeInventory = (e) => {
        setInventory(parseInt(e.target.value));
      };

      const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
      };

      const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
      };
      const onChange = (url) => {
          setUrl(url)
      }
    const handleCreate = async (url) => {
        try {
            const newProduct = {
                pro_name: title,
                pro_description: desc,
                pro_new_price: prices,
                pro_quantity: inventory,
                // extraOptions,
                pro_avatar: url,
            };
            await axios.post(`${apiUrl}/products`, newProduct);
            onClose(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <span onClick={() => onClose(false)} className={classes.close}>
                    X
                </span>
                <h1>Add a new Product</h1>
                <div className={classes.item}>
                    <label className={classes.label}>Choose an main image</label>
                    <UploadImg onChange={onChange}/>
                </div>
                {/* <div className={classes.item}>
                    <label className={classes.label}>Choose an image</label>
                    <input type="file"
                        multiple
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div> */}
                <div className={classes.item}>
                    <label className={classes.label}>Title</label>
                    <input
                        className={classes.input}
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={classes.item}>
                    <label className={classes.label}>Desc</label>
                    <textarea
                        rows={4}
                        type="text"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className={classes.item}>
                    <label className={classes.label}>Inventory</label>
                    <input
                        className={`${classes.input} ${classes.inputSm}`}
                        type="number"
                        min={0}
                        placeholder="inventory"
                      onChange={(e) => changeInventory(e)}
                    />
                </div>
                <div className={classes.item}>
                    <label className={classes.label}>Prices</label>
                    <input
                        className={`${classes.input} ${classes.inputSm}`}
                        type="number"
                        min={0}
                        placeholder="price"
                      onChange={(e) => changePrice(e)}
                    />
                </div>
                <div className={classes.item}>
                    <label className={classes.label}>Extra</label>
                    <div className={classes.extra}>
                        <input
                            className={`${classes.input} ${classes.inputSm}`}
                            type="text"
                            placeholder="Item"
                            name="text"
                          onChange={handleExtraInput}
                        />
                        <input
                            className={`${classes.input} ${classes.inputSm}`}
                            type="number"
                            placeholder="Price"
                            name="price"
                          onChange={handleExtraInput}
                        />
                        <button className={classes.extraButton}
                        onClick={handleExtra}
                        >
                            Add
                        </button>
                    </div>
                    <div className={classes.extraItems}>
                        {extraOptions.map((option) => (
              <span key={option.text} className={classes.extraItem}>
                {option.text}
              </span>
            ))}
                    </div>
                </div>
                <button className={classes.addButton}
                    onClick={e=>handleCreate(url)}
                >
                    Create
                </button>
            </div>
        </div>
    );
};

export default AddProduct;