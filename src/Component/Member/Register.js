import { useState } from "react";
import Error from "./Error";
import axios from "axios";

function Register() {
    const [errors, setErrors] = useState({});
    const [getFile, setFile] = useState(null);
    const [avatar, setAvatar] = useState('')
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        level: "",
    });

    const handlInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;

        setInputs(state => ({
            ...state,
            [nameInput]:value
        }));
    }

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const arrImg = ["png", "jpg", "jpeg"];

    function handleInputFiles(e) {

        const upLoadFile = e.target.files;
        let reader = new FileReader();
        reader.onload = (e) => {
            //gửi File qua API
            setAvatar(e.target.result);
            setFile(upLoadFile);
        };

        reader.readAsDataURL(upLoadFile[0])
                
    }
        
    function handleSubmit(e) {
        e.preventDefault();
        let errorsSubmit = {};
        let flag = true;

        // // Lưu thông tin vào local
        // localStorage.setItem("user", JSON.stringify({
        //     email: inputs.email,
        //     password: inputs.password,
        //   }));

        if (inputs.email === "") {
            errorsSubmit.email = "Please Enter Email";
            flag = false;
        } else if (!validateEmail(inputs.email)) {
            errorsSubmit.email = "Email False";
            flag = false;
          }
        if (inputs.password === "") {
            errorsSubmit.password = "Please Enter Password";
            flag = false;
        }
        if (inputs.name === "") {
            errorsSubmit.name = "Please Enter Name";
            flag = false;
        }
        if (inputs.phone === "") {
            errorsSubmit.password = "Please Enter Phone Number";
            flag = false;
        }
        if (inputs.address === "") {
            errorsSubmit.address = "Pleasea Enter Address";
            flag = false;
        }

        if (getFile === "") {
            errorsSubmit.files = "File False"
            flag = false;

        } 
            else {
            
            const fileType = getFile[0].type.split('/')[1];
            const fileSize = getFile[0].size
            
            // Kiểm tra xem fileType có trùng khớp với các phần tử trong arrImg hay không

            if (fileSize > 1048576) {
                alert("File size is too large. Please choose a smaller file.")
                flag = false;
            }
            if (arrImg.includes(fileType) && fileSize < 1048576) {
                setFile(getFile)
                alert("Tải lên thành công!");
            } else {
                alert("Lỗi: Loại file không hợp lệ!");
                flag = false;
            } 


        }
      
        
        if (flag) {
            const data = {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
                address: inputs.address,
                phone: inputs.phone,
                level: 0,
            }

            axios.post('http://localhost:8080/laravel8/laravel8/public/api/register', data)
            .then(res => {
                console.log(res)
                
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    console.log("Sugesst");
                    navigator('/');
                }
            })

            .catch(function (error) {
                console.log(error)
            })
        }

        if(!flag) {
            setErrors(errorsSubmit);
        }
        else{
            setErrors({})
        }
    }
    return (

                <div className="signup-form">{/*sign up form*/}
                    <h2>New User Signup!</h2>
                    
                    <Error errors={errors} />

                    <form onSubmit={handleSubmit} enctype="multipart/form-data">

                    <input type="text" name="name" value={inputs.name} onChange={handlInput} placeholder="Name" />

                    <input type="email" name="email" value={inputs.email} onChange={handlInput} placeholder="Email Address" />

                    <input type="password" name="password" placeholder="Password" value={inputs.password} onChange={handlInput}/>

                    <input type="text" name="phone" placeholder="Phone Number" value={inputs.phone} onChange={handlInput}/>

                    <input type="text" name="address" placeholder="Address" value={inputs.address} onChange={handlInput}/>

                    <input type="file" name="avatar" onChange={handleInputFiles}/>

                    <input type="number" name="level" placeholder="Level 0" onChange={handlInput} value="0"/>

                    <button type="submit" className="btn btn-default">Signup</button>

                    </form>
                </div>

    )
}
export default Register;