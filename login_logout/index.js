const cookieParser=require('cookie-parser')
const session=require('express-session')

const{SECRET_KEY_CS}=process.env;

app.use(cookieParser(SECRET_KEY_CS));
app.use(session({
    secret:SECRET_KEY_CS,
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        secure:false
    }
}))