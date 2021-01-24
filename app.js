import express from 'express';
import ejs from 'ejs';
import * as data from './skills.js';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
	res.render('home', {skillsInfo: data.default});
});

app.listen(process.env.PORT || 3000, ()=>{
	console.log('Server has started!');
});