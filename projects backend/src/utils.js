

const transporter=require('./config/mail')


const send_mail=async({from,to,subject,text,html})=>{
    console.log("mail"),
     await transporter.sendMail({
         
        from:"abhidhek@masai.school",
        to:"abhishek@gmail.com",
        subject:"your order is successfully placed",
        text:"your order is successfully placed",
        
      });
}

// const admin_mail=async({from,userpost})=>{
    
//     await send_mail({
//         from,
//         to:userpost.email,
//         subject:`Welcome to ABC system ${userpost.first_name} ${userpost.last_name}`,
//         text:`Hi ${userpost.first_name}, Please confirm your email address`,
//         html:"<h1>hi how are you</h1."
//     })
// }
// const admin=async({from,to,userpost})=>{
//     await send_mail({
//         from,
//         to,
//         subject: `${userpost.first_name} ${userpost.last_name} has registered with us`,
//         text: `Please welcome ${userpost.first_name} ${userpost.last_name}`,
//         html:"<h1>hi how are you</h1."
//     })
// }
module.exports ={send_mail,};