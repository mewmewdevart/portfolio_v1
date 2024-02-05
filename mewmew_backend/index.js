const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to allow JSON requests and enable CORS
app.use(express.json());
app.use(cors());

// Root route with documentation
app.get('/', (req, res) => {
  const documentation = {
	message: 'Bem-vindo(a) a API NodeJS da Mewmew',
	routes: {
	  cardsInfo: '/api/cards-info'
	}
  };

  const htmlResponse = `
	<!DOCTYPE html>
	<html lang="en">
	  <head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Documentação da API</title>
	  </head>
	  <body>
		<h1>${documentation.message}</h1>
		<h2>Rotas Disponíveis:</h2>
		<ul>
		  <li><strong>Cards Info:</strong> <a href="${documentation.routes.cardsInfo}" target="_blank">${documentation.routes.cardsInfo}</a></li>
		</ul>
	  </body>
	</html>
  `;

  // Respond with the HTML page
  res.send(htmlResponse);
});

// Additional route for /api
app.get('/api', (req, res) => {
  res.send('API is up and running!');
});

// Route to get cards information
app.get('/api/cards-info', (req, res) => {
  const cardsInfo = [
	{
		imagePath: 'https://i.imgur.com/GP8hS0Y.png',
		category: 'frontend',
		favorite: true,
		titleProject: 'Front4Fun',
		altTitle: 'Front4Fun Banner das artes feitas',
		badges: ['Html5', 'Css3'],
		description: 'Ilustrações feitas usando apenas HTML e CSS',
		liveUrl: 'https://mewmewdevart.github.io/FrontEnd4Fun/',
		codeUrl: 'https://github.com/mewmewdevart/FrontEnd4Fun'
	},
	{
		imagePath: 'https://i.imgur.com/0ogWcPE.png',
		category: 'games',
		favorite: true,
		titleProject: 'So_long - 42SP',
		altTitle: 'Banner do jogo So_long : Arte pixelada de um soldado em um labirinto',
		badges: ['C', 'Makefile', 'Jogo'],
		description: 'Jogo feito em C, usando a biblioteca gráfica Minilibx',
		liveUrl: 'https://www.youtube.com/watch?v=tNngHctUoaY&feature=youtu.be',
		codeUrl: 'https://github.com/mewmewdevart/so_long'
	},
	{
		imagePath: 'https://i.imgur.com/TIQvkLw.png',
		category: 'opensource',
		favorite: true,
		titleProject: 'Human Coder XP - 42SP',
		altTitle: 'Foto de uma pessoa interagindo com o kinect para jogar',
		badges: ['Javascript', 'Arte','Jogo'],
		description: 'Jogo interativo com o kinect, feito para a celeração da 42SP',
		liveUrl: 'https://vp.ubox.world/application/test?id=7811BF26-421B-E407-2B4C-E8605B0A4CF4',
		codeUrl: 'https://www.behance.net/gallery/174139515/HumanCoder-Experience'
	},
	{
		imagePath: 'https://i.imgur.com/tKl72Jc.png',
		category: 'opensource',
		favorite: true,
		titleProject: 'Dojo de CSS',
		altTitle: 'Foto do desafio sendo feito entre os alunos em diferentes computadores',
		badges: ['Html5', 'Css3', 'Figma'],
		description: 'Desafio de Dojo proposto por mim para os alunos da 42SP',
		liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7110771835759140865/',
		codeUrl: 'https://github.com/42sp/dojos/tree/main/CSSDesafios/00_Gatinho'
	},
	];
  res.json(cardsInfo);
});

app.listen(() => {
  console.log('API listening on a dynamically assigned PORT');
})

const server = app.listen(0, () => {
	const port = server.address().port;
	console.log(`API listening on port ${port}`);
  });

  
// Export the Express application
module.exports = app;