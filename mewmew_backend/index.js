const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

// Rota raiz com documentação
app.get('/', (req, res) => {
	const documentation = {
	  message: 'Bem-vindo a API NodeJS da Mewmew',
	  routes: {
		menu: '/api/menu',
		sectionIds: '/api/section-ids',
		socialIcons: '/api/social-icons',
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
          <li><strong>Menu:</strong> <a href="${documentation.routes.menu}" target="_blank">${documentation.routes.menu}</a></li>
          <li><strong>Section IDs:</strong> <a href="${documentation.routes.sectionIds}" target="_blank">${documentation.routes.sectionIds}</a></li>
          <li><strong>Social Icons:</strong> <a href="${documentation.routes.socialIcons}" target="_blank">${documentation.routes.socialIcons}</a></li>
          <li><strong>Cards Info:</strong> <a href="${documentation.routes.cardsInfo}" target="_blank">${documentation.routes.cardsInfo}</a></li>
        </ul>
      </body>
    </html>
  `;

  // Responda com a página HTML
  res.send(htmlResponse);
});
  

// Middleware para permitir requisições com JSON
app.use(express.json());

app.use(cors());

// Rota para obter informações do menu
app.get('/api/menu', (req, res) => {
	const menuItems = [
		{ label: 'Sobre', route: '#about', section: 'about' },
		{ label: 'Projetos', route: '#projects', section: 'projects' },
		{ label: 'Contato', route: '#contact', section: 'contact' }
	];
	res.json(menuItems);
});

app.get('/api/section-ids', (req, res) => {
	const sectionIds = {
	  about: 'about',
	  projects: 'projects',
	  contact: 'contact'
	};
	res.json(sectionIds);
  });

// Rota para obter informações dos ícones sociais
app.get('/api/social-icons', (req, res) => {
	const socialIcons = [
		{ name: 'Icone de acesso do Github', iconPath: '../assets/assets/images/icons/icon_github.svg', url: '#' },
		{ name: 'Icone de acesso do Linkedin', iconPath: '../assets/assets/images/icons/icon_linkedin.svg', url: '#' }
	];
	res.json(socialIcons);
});

// Rota para obter informações dos cards
app.get('/api/cards-info', (req, res) => {
	const cardsInfo = [
		{
			imagePath: '../assets/assets/images/placeholder.png',
			titleProject: 'Card 1',
			altTitle: 'Alternative text',
			tagsTitle: ['Angular', 'MaterialUI', 'TypeScript'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh ac sem aliquam aliquet.',
			liveUrl: '#',
			codeUrl: '#'
		},		{
			imagePath: '../assets/assets/images/placeholder.png',
			titleProject: 'Card 1',
			altTitle: 'Alternative text',
			tagsTitle: ['Angular', 'MaterialUI', 'TypeScript'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh ac sem aliquam aliquet.',
			liveUrl: '#',
			codeUrl: '#'
		},		{
			imagePath: '../assets/assets/images/placeholder.png',
			titleProject: 'Card 1',
			altTitle: 'Alternative text',
			tagsTitle: ['Angular', 'MaterialUI', 'TypeScript'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh ac sem aliquam aliquet.',
			liveUrl: '#',
			codeUrl: '#'
		},		{
			imagePath: '../assets/assets/images/placeholder.png',
			titleProject: 'Card 1',
			altTitle: 'Alternative text',
			tagsTitle: ['Angular', 'MaterialUI', 'TypeScript'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh ac sem aliquam aliquet.',
			liveUrl: '#',
			codeUrl: '#'
		},
	];
	res.json(cardsInfo);
});

// Inicie o servidor
app.listen(port, () => {
	console.log(`Servidor está rodando em http://localhost:${port}`);
});
