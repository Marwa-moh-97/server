import express from "express";
import {engine} from "express-handlebars";

const app = express();

app.use(express.static('./public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get("/",(req,res) => {
    return res.render("ser",{layuot:false});
});


app.listen(2000);
