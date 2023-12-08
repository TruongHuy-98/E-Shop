import { useState } from "react";
import Error from "./Error";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    
    // const userData = localStorage.getItem('user');
    const navigator = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handlInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;
        setInputs(state => ({...state,[nameInput]:value}))
    }

    //Kiểm tra định dạng email
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    function handleSubmit(e) {
        e.preventDefault();
        let errorsSubmit = {};
        let flag = true;

        if (inputs.email === "") {
            errorsSubmit.email = "Vui lòng nhập email";
            flag = false;
        } else if (!validateEmail(inputs.email)) {
            errorsSubmit.email = "Email không hợp lệ";
            flag = false;
        } 
        if (inputs.password === "") {
            errorsSubmit.password = "Vui long nhap Pass";
            flag = false;
        }

        // if (userData) {
        //     // Chuyển đổi dữ liệu từ chuỗi sang đối tượng JSON
        //     const user = JSON.parse(userData);

        //     if (inputs.email === user.email && inputs.password === user.password) {
        //         alert("Đăng nhập thành công");
        //     }
        //     else
        //     {
        //         errorsSubmit.email = "Email hoặc Pass không đúng";
        //         flag = false;
        //     }
           
        // }

        if (flag) {
            const data = {
                email: inputs.email,
                password: inputs.password,
                level: 0,
            }

            axios.post('http://localhost:8080/laravel8/laravel8/public/api/login', data)
            .then(res => {
                console.log(res)
                
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    console.log("Sugesst");
                    navigator('/');
                    const token = res.data.success.token;
                    const user = res.data.Auth
                    const loginSuccess = true
                    localStorage.setItem("loginSuccess", JSON.stringify(loginSuccess))
                    localStorage.setItem("token", JSON.stringify(token))
                    localStorage.setItem("user", JSON.stringify(user))
                }
            })

            .catch(function (error) {
                console.log(error)
            })
        }

        if(!flag) {
            setErrors(errorsSubmit);
        }else{
            setErrors({})
        }

    }
        return (
                <div className="login-form">{/*login form*/}
                    <h2>Login to your account</h2>
                    <Error errors={errors} />
                    <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email Address" name="email" value={inputs.email} onChange={handlInput}/>
                    <input type="password" placeholder="Password" name="password" value={inputs.password} onChange={handlInput}/>
                    <span>
                        <input type="checkbox" className="checkbox" /> 
                        Keep me signed in
                    </span>
                    <button type="submit" className="btn btn-default">Login</button>
                    </form>
                </div>
                
        )
}
export default Login;