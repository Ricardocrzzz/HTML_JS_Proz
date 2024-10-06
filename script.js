// Capturando os elementos do DOM
const titulo = document.getElementById('titulo');
const link = document.querySelector('a');
const listaNaoOrdenada = document.querySelector('ul');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo ao elemento h1
titulo.innerText = 'Bem-vindo ao Meu Projeto';

// Adicionando conteúdo ao elemento a
link.innerText = 'Acesse o Proze Educação';

// Adicionando itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>PYTHON</li>
    <li>JAVA</li>
    <li>C#</li>
`;

// Adicionando três itens com links na lista ordenada
listaOrdenada.innerHTML = `
  <li><a href="https://about.meta.com/">Meta</a></li>
  <li><a href="https://www.aws.com">AWS</a></li>
  <li><a href="https://www.google.com">Google</a></li>
`