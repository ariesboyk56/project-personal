import React from 'react';
import { storage } from "../utils/firebase";
import {ref, uploadBytes, getDownloadURL, uploadBytesResumable} from "firebase/storage"
const UploadImg = (props) => {

    const handleChange = (e) =>{
        const file = e.target.files[0]
        upload(file)
    }
    const upload = (file) =>{
        if(!file) return;
            const imageRef = ref(storage, `images/${file.name}`)
            uploadBytes(imageRef, file).then(()=>{
                getDownloadURL(imageRef).then((url)=>{
                    props.onChange(url)
                }).catch((error)=>{
                    console.log(error.message, "error getting the image url");
                })
            }).catch((error)=>{
                console.log(error.message);
            })
    }
    return <input type="file"
        onChange={(e) => handleChange(e)}
    />;
};

export default UploadImg;
