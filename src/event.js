export default function EventBasic({ type }) {
    const login = () => {
        switch (type) {
            case '0209':
                window.alert('0209にログインします')
                break;
            case 'inoue':
                window.alert('inoue にログインします')
                break;
            default:
                window.alert('password が違います')
                break;
        };
    }
    return(
        <div>
    <button onClick={login}>ログイン</button>
        </div>
    )
}