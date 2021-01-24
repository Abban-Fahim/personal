import express from 'express';
import ejs from 'ejs';
import skills from './skills.js';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
	res.render('home', {skillsInfo: skills});
});

app.listen(3000 || process.env.PORT, ()=>{
	console.log('Server has started!');
});