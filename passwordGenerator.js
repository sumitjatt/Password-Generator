




const radio = document.querySelectorAll(".a");
const len = document.querySelector('.len');
const btn = document.querySelector(".btn");
const password = document.querySelector(".password");

let paswrd = ""
btn.addEventListener('click',()=>{
    check();
    password.innerHTML = paswrd.slice(0,len.value);
    paswrd = "";
})

const check = ()=>{
    if(radio[0].checked){
        const uppr = "QWERTYUIOPLKJHGFDSAZXCVBNM";
        let random = Math.floor(Math.random()*26);
        paswrd += uppr[random];
    }
    if(radio[1].checked){
        const lwr = "qwertyuioplkjhgfdsazxcvbnm";
        let random = Math.floor(Math.random()*26);
        paswrd += lwr[random];
    }
    if(radio[2].checked){
        const num = "1234567890";
        let random = Math.floor(Math.random()*10);
        paswrd += num[random];
    }
    if(radio[3].checked){
        const spcl = "!@#$%^&*_+";
        let random = Math.floor(Math.random()*10);
        paswrd += spcl[random];
    }
    if(paswrd.length < len.value){
        check();
    }
}










// function passwordGenerator(length,num,charcter){
//     const str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM0123456789@$%&_";
//     let password = "";
//     while(password.length < length){
//         if(num===true && charcter===true){
//             let random = Math.floor(Math.random()*67);
//             password += str[random];
//         }
//         else if(num===true){
//             let random = Math.floor(Math.random()*62);
//             password += str[random];
//         }
//         else if(charcter===true){
//             let random = Math.floor(Math.random()*67);
//             if(random<51 || random>61){
//                 password += str[random];
//             }
//         }
//         else{
//             let random = Math.floor(Math.random()*52);
//             password += str[random];
//         }
//     }
//     return password;
// }

// console.log(passwordGenerator(5,true,true));