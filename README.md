# Southsea Investments - Site Institucional

Este é o repositório do site institucional premium da Southsea Investments, desenvolvido com Next.js (App Router), Tailwind CSS e TypeScript.

## Requisitos
- Node.js 18.17+ 
- NPM ou Yarn

## Instalação e Execução

Como os arquivos foram gerados e preparados, você precisa apenas instalar as dependências e rodar o projeto localmente:

1. Abra o terminal na pasta raiz do projeto (`SOUTHSEA`).
2. Execute o comando para instalar as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse o site no navegador através de `http://localhost:3000`.

## Imagens
As imagens devem ser movidas para a pasta `public` caso estejam na raiz.
O Hero atual utiliza a imagem `7G2A2370.jpg.jpeg` referenciando pela raiz (como `/7G2A2370.jpg.jpeg`). Certifique-se de que a imagem final desejada esteja acessível neste caminho, ou altere nos componentes caso decida colocar na pasta `public/images/`.

## Como alterar os Textos e Conteúdos
Todo o conteúdo do site foi abstraído para facilitar a manutenção.
Para editar qualquer texto, indicadores (ex: "R$ 8,2 bilhões"), descrições de soluções ou cases, edite o arquivo:
`src/data/content.ts`

**IMPORTANTE**: Dados, números e resultados indicados nesse arquivo devem ser validados pelo cliente antes da publicação final.

## Configuração do Formulário e Webhook
O formulário de "Análise Estratégica" foi construído em `src/components/forms/StrategicForm.tsx`.
Na versão atual, ele simula um carregamento. Para integrar com um CRM ou ferramenta de envio real, defina a URL do seu Webhook:

1. Crie um arquivo `.env.local` na raiz do projeto.
2. Adicione a variável:
   `NEXT_PUBLIC_WEBHOOK_URL=https://seu-endpoint-de-webhook-aqui`

## Publicação
O projeto está pronto para ser hospedado na Vercel:
1. Faça o commit e push para o seu repositório no GitHub.
2. Acesse `vercel.com`, crie um novo projeto importando o repositório.
3. A Vercel detectará automaticamente o Next.js e fará o deploy.
