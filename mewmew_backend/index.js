const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to allow JSON requests and enable CORS
app.use(express.json());
app.use(cors());

// Rota raiz com documentação
app.get('/', (req, res) => {
  const documentation = {
	message: 'Bem-vindo a API NodeJS da Mewmew',
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
		imagePath: 'https://i.imgur.com/InyM7e5.png',
		category: 'frontend',
		favorite: true,
		titleProject: 'Front4Fun',
		altTitle: 'Front4Fun Banner das artes feitas',
		badges: ['Html5', 'Css3'],
		description: 'Usando tecnologias Web para fazer ilustrações e animações',
		liveUrl: 'https://mewmewdevart.github.io/FrontEnd4Fun/',
		codeUrl: 'https://github.com/mewmewdevart/FrontEnd4Fun'
	},
	{
		imagePath: 'https://i.imgur.com/hHqLHut.png',
		category: 'opensource',
		favorite: true,
		titleProject: 'Dojo de CSS',
		altTitle: 'Foto do desafio sendo feito entre os alunos em diferentes computadores',
		badges: ['Html5', 'Css3', 'Figma'],
		description: 'Desafio de Dojo proposto por mim para os alunos da 42SP',
		liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7110771835759140865/',
		codeUrl: 'https://github.com/42sp/dojos/tree/main/CSSDesafios/00_Gatinho'
	}, 
	  {
		imagePath: 'https://i.imgur.com/qV9yEQV.png',
		category: 'frontend',
		favorite: true,
		titleProject: 'StartCine',
		altTitle: 'Banner da plataforma de filmes',
		badges: ['Tech Lead', 'Angular'],
		description: 'Plataforma de serviços de streaming - Start Tech - TOTVS',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/ProjetoFinal_StartTech'
	  }, 
	  {
		imagePath: 'https://i.imgur.com/cjuBACa.png',
		category: 'opensource',
		favorite: true,
		titleProject: 'Human Coder XP',
		altTitle: 'Banner do jogo Human Coder EX - Uma menina negra vestida de astronauta no espaço',
		badges: ['Ilustração', 'HTML', 'CSS', 'JavaScript'],
		description: 'Jogo interativo 2D para os 4 anos da 42SP',
		liveUrl: 'https://vp.ubox.world/application/test?id=7811BF26-421B-E407-2B4C-E8605B0A4CF4',
		codeUrl: 'https://www.behance.net/gallery/174139515/HumanCoder-Experience'
	  },
	  {
		imagePath: 'https://i.imgur.com/nPNMHmN.png',
		category: 'opensource',
		favorite: false,
		titleProject: 'Heart To Be Fest',
		altTitle: 'Banner do jogo Human Coder EX - Uma menina negra vestida de astronauta no espaço',
		badges: ['C'],
		description: 'Jogo interativo de corrida para celebrar os 4 anos da 42SP',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/He4rToBerFest-2023'
	  },
	  {
		imagePath: 'https://i.imgur.com/m5wm3uM.png',
		category: 'backend',
		favorite: false,
		titleProject: 'Libft',
		altTitle: 'Icone do Libft',
		badges: ['C', 'Makefile'],
		description: 'Minha primeira biblioteca em C: uma coleção de funções.',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/libft'
	},
	{
		imagePath: 'https://i.imgur.com/q48HhQU.png',
		category: 'backend',
		favorite: false,
		titleProject: 'Get next line',
		altTitle: 'Icone do Get next line ',
		badges: ['C', 'Makefile'],
		description: 'Uma função que retorna uma linha de um arquivo descritor de arquivo.',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/get_next_line'
	},
	{
		imagePath: 'https://i.imgur.com/493hIPr.png',
		category: 'backend',
		favorite: false,
		titleProject: 'Ft_printf',
		altTitle: 'Icone do Ft_printf',
		badges: ['C', 'Makefile'],
		description: 'Recriando a função printf da biblioteca C padrão.',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/ft_printf'
	},
	{
		imagePath: 'https://i.imgur.com/Y5V8wrL.png',
		category: 'games',
		favorite: false,
		titleProject: 'So_long',
		altTitle: 'Icone do So_long',
		badges: ['C', 'Makefile'],
		description: 'Criando um jogo 2D simples usando uma biblioteca gráfica.',
		liveUrl: '#',
		codeUrl: 'https://www.youtube.com/watch?v=tNngHctUoaY&feature=youtu.be'
	},
	{
		imagePath: 'https://i.imgur.com/tI8lyzE.png',
		category: 'backend',
		favorite: false,
		titleProject: 'Born2beroot',
		altTitle: 'Icone do Born2beroot',
		badges: ['Linux', 'Administração de sistemas'],
		description: 'Configurando o sistema linux em uma maquina virtual',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/born2beroot'
	},
	{
		imagePath: 'https://i.imgur.com/DBjXvx5.png',
		category: 'backend',
		favorite: false,
		titleProject: 'pipex',
		altTitle: 'Icone do Pipex',
		badges: ['C', 'Makefile'],
		description: 'Recriando o comportamento do Pipe em SO Linux com C',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/ft_printf'
	},
	{
		imagePath: 'https://i.imgur.com/XcmnZqO.png',
		category: 'backend',
		favorite: false,
		titleProject: 'HtmlAnalyzer',
		altTitle: 'Icone do HtmlAnalyzer banner',
		badges: ['Java'],
		description: 'Desafio técnico, manipulação e leitura de arquivos HTML',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/InternChallenge_HtmlAnalyzer'
	},
	{
		imagePath: 'https://i.imgur.com/F7IOE6N.png',
		category: 'algorithm',
		favorite: false,
		titleProject: 'Neovim',
		altTitle: 'Icone do Neovim',
		badges: ['Linux', 'VimScript'],
		description: 'Configuração dos arquivos de customização do Neovim',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/myNeovim'
	},
	{
		imagePath: 'https://i.imgur.com/4l8eg5H.png',
		category: 'algorithm',
		favorite: false,
		titleProject: 'React 4 Fun',
		altTitle: 'Icone do React',
		badges: ['React','Logica'],
		description: 'Aprendendo a sintaxe do React com pequenos projetos',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/React4Fun'
	},
	{
		imagePath: 'https://i.imgur.com/RFrVTeU.png',
		category: 'algorithm',
		favorite: false,
		titleProject: 'Javascript 4 Fun',
		altTitle: 'Icone do Javascript',
		badges: ['Javacript', 'Logica'],
		description: 'Aprendendo a sintaxe do Javascript com pequenos projetos',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/JavaScript4Fun'
	},
	{
		imagePath: 'https://i.imgur.com/gdV1YJN.png',
		category: 'algorithm',
		favorite: false,
		titleProject: '100DaysOfPython',
		altTitle: 'Icone do Python',
		badges: ['Python', 'Logica'],
		description: 'Minhas soluções para os desafios propostos no desafop #100DaysOfPython',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/100DaysofCode'
	},
	{
		imagePath: 'https://i.imgur.com/B8CSFPj.png',
		category: 'games',
		favorite: false,
		titleProject: 'Kerby Game',
		altTitle: 'Banner do Jogo Kerby',
		badges: ['Jquery'],
		description: 'Jogo de navegação 2D simples usando Jquery',
		liveUrl: 'https://mewmewdevart.github.io/KerbyEditionGame/',
		codeUrl: 'https://github.com/mewmewdevart/KerbyEditionGame'
	},
	{
		imagePath: 'https://i.imgur.com/2095mht.png',
		category: 'algorithm',
		favorite: false,
		titleProject: '42EventApril/2023',
		altTitle: 'Banner do desafio do dia da mentira',
		badges: ['C', 'PHP', 'Shell', 'Perl'],
		description: 'Desafio comemorativo do Dia da Mentira da comunidade 42 École',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/42EventApril2023'
	},
	{
		imagePath: 'https://i.imgur.com/vRBjkuI.png',
		category: 'games',
		favorite: false,
		titleProject: 'Jogo da Cobrinha',
		altTitle: 'Banner do jogo da cobrinha',
		badges: ['Html', 'Css', 'Javascript'],
		description: 'Replica da mecanica do famoso jogo da cobrinha',
		liveUrl: '#',
		codeUrl: 'https://github.com/mewmewdevart/SnakeGame'
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