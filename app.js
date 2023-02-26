const express = require('express')
const app = express()
const body_parser = require('body-parser')
const PORT = 3000
const path = require('path')
const data = require('./data.json')

app.use(body_parser.urlencoded({extended: true}))
app.set('view engine', 'pug')
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const projects = data.projects
  const details = data.details
  res.render('index', {projects, details});
})

app.get('/about', (req, res) => {
  const details = data.details
  res.render('about', {details});
})

app.get('/project/:id', (req, res) => {
  if (isNaN(req.params.id) || req.params.id >= data.projects.length)
    throw new Error() // in case a project with incorrect project id is accessed
  const project = data.projects[req.params.id]
  const details = data.details  
  res.render('project', {project, details})
})

app.get('*', (req, res) => {
  throw new Error();
})

app.use((err, req, res, next) => {
  res.status(404).render('oops');
}); 

app.listen(PORT, (err) => {
  if(err) console.log(err)
  else console.log(`Server listening on PORT ${PORT}`);
})