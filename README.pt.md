[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md)

# Venezuela News App

Plataforma de agregação de notícias em tempo real construída com Next.js 16, com curadoria de conteúdo impulsionada por IA, otimização SEO e um sistema de design glassmorphism moderno.

<!-- CTAs -->
<p align="center">
  <a href="https://github.com/LuisSambrano/venezuela-news-app/stargazers"><img src="https://img.shields.io/github/stars/LuisSambrano/venezuela-news-app?style=flat-square" alt="Stars"/></a>
  <a href="https://github.com/LuisSambrano/venezuela-news-app/network/members"><img src="https://img.shields.io/github/forks/LuisSambrano/venezuela-news-app?style=flat-square" alt="Forks"/></a>
  <a href="https://github.com/LuisSambrano/venezuela-news-app/issues"><img src="https://img.shields.io/github/issues/LuisSambrano/venezuela-news-app?style=flat-square" alt="Issues"/></a>
  <a href="https://github.com/LuisSambrano/venezuela-news-app/blob/main/LICENSE"><img src="https://img.shields.io/github/license/LuisSambrano/venezuela-news-app?style=flat-square" alt="License"/></a>
</p>

> [!IMPORTANT]
> **Licencia**: Este proyecto está licenciado bajo [Business Source License 1.1](LICENSE).
> Puedes ver y estudiar el código fuente con fines educativos, pero **el uso comercial requiere una licencia separada**.
> Ver [LICENSE](LICENSE) para términos completos.

## Visão Geral

Esta aplicação funciona como um portal de notícias abrangente focado em eventos atuais da Venezuela. Combina tecnologias web modernas com design UX cuidadoso para oferecer uma experiência de leitura rápida, acessível e visualmente atraente.

A plataforma implementa um sistema sofisticado de entrega de conteúdo com atualizações em tempo real do Supabase, otimização SEO automática para conformidade com Google News, e design responsivo que se adapta perfeitamente de dispositivos móveis (375px) a desktop (1440px+).

Construída com o App Router do Next.js 16 e Turbopack, a aplicação prioriza performance sem sacrificar qualidade visual. O sistema de design glassmorphism proporciona estética contemporânea mantendo padrões de acessibilidade WCAG 2.1 AA.

## Características

### Entrega de Conteúdo

- **Atualizações em Tempo Real**: Feed de notícias ao vivo com assinaturas Supabase
- **Carrossel Hero**: Histórias em destaque com rotação automática e controles manuais (intervalo 5s)
- **Paginação Inteligente**: Carregamento progressivo (6 → 12 → 18 artigos)
- **Páginas de Detalhe**: Visualizações de conteúdo completo com histórias relacionadas

### Sistema de Design

- **Glassmorphism 2.0**: UI translúcida moderna com efeitos de desfoque
- **Modo Escuro**: Troca de tema consciente do sistema com override manual
- **Layout Responsivo**: Design mobile-first (375px a 1440px+)
- **Acessibilidade**: Compatível com WCAG 2.1 AA com navegação por teclado

### SEO e Performance

- **Dados Estruturados**: JSON-LD completo de NewsArticle para Google News
- **Meta Tags**: Otimização Open Graph e Twitter Card
- **Otimização de Imagens**: Conversão automática WebP e lazy loading
- **Code Splitting**: Divisão automática baseada em rotas
- **Geração Estática**: Páginas pré-renderizadas para performance ótima

## Stack Tecnológico

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)

**Core**:

- [Next.js 16](https://nextjs.org/) - Framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) - Desenvolvimento type-safe
- [React 19](https://react.dev/) - Biblioteca de componentes UI

**Estilos**:

- [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS utility-first
- [shadcn/ui](https://ui.shadcn.com/) - Primitivas de componentes acessíveis
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [Lucide React](https://lucide.dev/) - Sistema de ícones

**Backend**:

- [Supabase](https://supabase.com/) - Banco de dados PostgreSQL com assinaturas em tempo real

**Deploy**:

- [Vercel](https://vercel.com/) - Deploy em rede edge

## Primeiros Passos

### Pré-requisitos

- Node.js 18 ou superior
- Gerenciador de pacotes npm ou pnpm
- Conta Supabase (tier gratuito disponível)

### Instalação

1. **Clonar o repositório**:

```bash
git clone https://github.com/LuisSambrano/venezuela-news-app.git
cd venezuela-news-app
```

2. **Instalar dependências**:

```bash
npm install
# ou
pnpm install
```

3. **Configurar variáveis de ambiente**:

Criar um arquivo `.env.local` no diretório raiz:

```env
NEXT_PUBLIC_SUPABASE_URL=url_do_seu_projeto_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=chave_anon_supabase
```

4. **Executar servidor de desenvolvimento**:

```bash
npm run dev
```

5. **Abrir a aplicação**:

Navegue para [http://localhost:3000](http://localhost:3000) no seu navegador.

## Contribuir

Contribuições são bem-vindas. Por favor siga estas diretrizes:

1. Faça fork do repositório
2. Crie uma branch de feature: `git checkout -b feature/descricao`
3. Faça suas alterações com commits claros e atômicos
4. Push para seu fork: `git push origin feature/descricao`
5. Envie um pull request com descrição detalhada

## Licença

Licença MIT - Veja [LICENSE](LICENSE) para detalhes.

## Links

- **Repositório**: [github.com/LuisSambrano/venezuela-news-app](https://github.com/LuisSambrano/venezuela-news-app)
- **Autor**: [Luis Sambrano](https://github.com/LuisSambrano)

---

[English](./README.md) | [Español](./README.es.md) | **Português**
