import { useState } from "react";
import "./App.css"

function App() {
    const initialValues = { username: "", mailAddress: "", passWord: "" };
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues);
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
        if (formValues.username === "inoue" && formValues.mailAddress === 'naoki' && formValues.passWord === 'inonao') {
            window.alert('inoue にログインします')
        } else if (formValues.username.length < 3) {
            window.alert('ユーザー名は3文字以上入力してください')
        } else if (formValues.mailAddress.length < 3) {
            window.alert('メールアドレスは3文字以上入力してください')
        } else if (formValues.passWord.length < 3) {
            window.alert('パスワードは3文字以上入力してください')
        } else {
            window.alert('ログインに失敗しました')
        }
    }

    const signUp = () => [
        window.alert('新たにアカウントを作成します')
    ]
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
                    <button className="newAccount" onClick={signUp}>新規登録はこちら</button>
                </div>
            </form>
        </div>
    )
}
export default App;