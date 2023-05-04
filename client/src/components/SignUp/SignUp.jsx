import { useState } from 'react';
import './signup.css';
import userApi from '../../api/modules/user.api';
const SignUp = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
        passwordAgain: '',
        numberphone: '',
    })
    const createAccount = async (data) => {
        try {
            const response = await userApi.create(data);
            setData({
                username: '',
                password: '',
                numberphone: '',
                passwordAgain: '',
            })
            alert("Create a account success !");
        }
        catch (err) {
            console.log(err);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        const dataSTD = {
            username: data.username,
            password: data.password,
            numberphone: data.numberphone,
        }
        createAccount(dataSTD);
    }
    return (
        <main className="signup">
            <form action="#" className="form-signup">
                <section className="form-group">
                    <h1>Sign up</h1>
                </section>
                <section className="form-group">
                    <input
                        type="text"
                        placeholder='Nhập tên tài khoản'
                        value={data.username}
                        onChange={(e) => setData({ ...data, username: e.target.value })}
                    />
                </section>
                <section className="form-group">
                    <input
                        type="text"
                        placeholder='Nhập số điện thoại'
                        value={data.numberphone}
                        onChange={(e) => setData({ ...data, numberphone: e.target.value })}
                    />
                </section>
                <section className="form-group">
                    <input
                        type="password"
                        placeholder='Nhập mật khẩu'
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                </section>
                <section className="form-group">
                    <input
                        type="password"
                        placeholder='Nhập lại mật khẩu'
                        value={data.passwordAgain}
                        onChange={(e) => setData({ ...data, passwordAgain: e.target.value })}
                    />
                </section>
                <section className="form-group">
                    <input
                        type="submit"
                        value="Sign up"
                        className='submit'
                        onClick={handleSubmit}
                    />
                </section>
            </form>
        </main>
    )
}

export default SignUp;