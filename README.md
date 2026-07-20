# Southsea Investments — Site institucional

Site institucional da Southsea Investments, desenvolvido com Next.js 14 (App Router), TypeScript, Tailwind CSS e Framer Motion.

## Executar localmente

Requer Node.js 18.17 ou superior.

```bash
npm install
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## Verificações

```bash
npm run typecheck
npm run lint
npm run build
```

## Onde editar o conteúdo

- Navegação, soluções, etapas, canais e curso: `src/data/content.ts`
- Página inicial: `src/app/HomeClient.tsx`
- Páginas de soluções: `src/app/solucoes/` e `src/app/solucoes/[slug]/page.tsx`
- Sobre, cases, insights e contato: diretórios correspondentes em `src/app/`
- Formulário de análise: `src/components/forms/StrategicForm.tsx`

Antes de publicar, procure por `TODO: VALIDAR COM O CLIENTE ANTES DA PUBLICAÇÃO`. Os contatos e o preço do curso foram preservados a partir do projeto anterior e precisam de confirmação. Não adicione cifras, prazos, taxas, quantidade de empresas, cases ou resultados sem validação e autorização formal.

## Imagens

- Fotografias institucionais: `public/images/`
- Imagem social Open Graph: `public/og.png`

Para substituir imagens, mantenha o novo arquivo em `public/` e atualize a referência no componente correspondente. A imagem social já está conectada aos metadados globais.

## Contatos

Os dados públicos de contato estão centralizados em `src/data/content.ts`. Atualize `email`, `whatsapp` e `whatsappHref` depois da validação do cliente.

## Formulário e integração CRM/webhook

O navegador envia o formulário para `POST /api/analise-estrategica`. A rota valida os dados no servidor e só retorna sucesso depois de encaminhar o payload a um webhook configurado. Sem integração, ela informa claramente que o recebimento ainda não está habilitado; ela não simula envio.

Crie `.env.local` a partir de `.env.example`:

```bash
SOUTHSEA_ANALYSIS_WEBHOOK_URL=https://seu-webhook-ou-crm.example/entrada
NEXT_PUBLIC_SITE_URL=https://seu-dominio.example
```

Defina com o cliente o CRM/webhook, os responsáveis pelo acesso, a retenção dos dados e o texto jurídico definitivo de LGPD antes da publicação.

## SEO

- Metadados, canonical e Open Graph: `src/app/layout.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- Dados estruturados Organization e ProfessionalService: layout global
- Dados estruturados Person: página Sobre
- BreadcrumbList: componente `src/components/Breadcrumbs.tsx`

Atualize `NEXT_PUBLIC_SITE_URL` com o domínio definitivo para canonicals, sitemap e dados estruturados corretos.