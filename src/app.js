const express = require("express")
const app = express()
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser")
const session = require("express-session")
const passport = require("./configs/passport");

require("dotenv").config();

const { API_VERSION, SESSION_SECRET} = process.env;

//Routers
const authRouter = require("./routes/auth.route");
const productRouter = require("./routes/product.route");
const salesRoutes = require('./routes/sales.route');
const clientsRoutes = require('./routes/client.route');
const uploadRoutes = require('./routes/upload');




const { swaggerUi, specs } = require("./configs/swagger");

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24, // 1 day
    },

}))

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("Welcome to BizPadi API");
});

app.use(`/api/v${API_VERSION}/auth/`, authRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/products', productRouter);
app.use('/api/sales', salesRoutes); 
app.use('/api/clients', clientsRoutes); 
app.use('/api/upload', uploadRoutes);

// app.use('**', (req, res) => {
//     res.status(404).json({
//         status: "error",
//         message: "Route not found",
//     });
// })

module.exports = app