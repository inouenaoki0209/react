import { useState } from "react";
import "./App.css"

function App() {
    const initialValues = { username: "", mailAddress: "", passWord: "" };
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues);
        // if (formValues.username === 'inoue') {
        //     window.alert('inoue にログインします')
        // }
    }
    const mailChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues);
    }

    const passWordChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues);
    }

    const login = () => {
        if (formValues.username === "inoue" && formValues.mailAddress === "nao") {
            window.alert('inoue にログインします')
        }else{
            window.alert('パスワードが違います')
        }
    }
    return (
        <div className="formContainer">
            <form>
                <h1>ログインフォーム</h1>
                <hr />
                <div className="uiForm">
                    <div className="formField">
                        <label>ユーザー名</label>
                        <input type="text" placeholder='ユーザー名' name="username" onChange={(e) => {
                            handleChange(e)
                        }} />
                    </div>
                    <div className="formField">
                        <label>メールアドレス</label>
                        <input type='text' placeholder='メールアドレス' name="mailAddress" onChange={(e) => {
                            mailChange(e)
                        }} />
                    </div>
                    <div className="formField">
                        <label>パスワード</label>
                        <input type='text' placeholder='パスワード' name="passWord" onChange={(e) => {
                            passWordChange(e)
                        }}></input>
                    </div>
                    <button className="submitButton" onClick={login}>ログイン</button>
                </div>
            </form>
        </div>
    )
}
export default App;
