// import { useState } from "react";
// import { useRef } from "react";
// export default function EventBasic({ init }) {
//     const [pass, setPass] = useState(init);
//     const login = useRef()
//     const handleClick = () => {
//         const pass = login.current.value
//         setPass(() => {
//             if (pass === 'inoue') {
//                 window.alert('inoue にログインします')
//             } else {
//                 window.alert('passwordが違います')
//             }
//         })
//     }
//     return (
//         <div>
//             <input type = 'text' ref>= {login}</input>
//             <button onClick={handleClick}>ログイン</button>
//         </div>
//     )
// }