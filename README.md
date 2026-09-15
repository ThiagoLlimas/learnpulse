# 🚀 LearnPulse — Plataforma Educacional

O **LearnPulse** é uma aplicação web moderna voltada para a gestão e experiência de aprendizado online. O projeto conta com autenticação de usuários, interface responsiva e integração em tempo real com banco de dados em nuvem.

🔗 **Link do Projeto:** [Insira aqui o link da Vercel/Netlify]

---

## 📸 Demonstração da Aplicação

<details>
  <summary><b>🖼️ Visualizar Landing Page & Institucional</b></summary>
  <br>

  #### Hero Section & LGPD
  <img width="3794" height="1902" alt="Captura de tela 2026-09-15 151629" src="https://github.com/user-attachments/assets/8ec55a0c-4c6c-480f-994b-954ef11c3821" />
  
  *Interface inicial destacando a proposta de valor, navegação dinâmica e banner de conformidade LGPD.*

  #### Planos & Preços
  <img width="3782" height="1684" alt="Captura de tela 2026-09-15 151744" src="https://github.com/user-attachments/assets/3ad65caf-640c-4d5b-8a86-752fca83b0ff" />

  *Carrossel de planos interativo para simulação e seleção de modalidades.*

  #### Rodapé Institucional
  <img width="3824" height="1710" alt="Captura de tela 2026-09-15 151805" src="https://github.com/user-attachments/assets/f623968f-2ccc-4bb4-b0a1-5466065a6e1b" />

  *Footer responsivo com links institucionais e termos legais.*
</details>

<details>
  <summary><b>🔐 Visualizar Autenticação</b></summary>
  <br>

  #### Página de Cadastro
  <img width="3824" height="1882" alt="Captura de tela 2026-09-15 151821" src="https://github.com/user-attachments/assets/6f1efd34-67f7-4b1b-9772-bce64fc53a6c" />

  *Layout split screen combinando formulário de registro e prova social.*

  #### Página de Login
  <img width="3822" height="1888" alt="Captura de tela 2026-09-15 151843" src="https://github.com/user-attachments/assets/65dc1718-8536-4fa8-b641-cd0959838ae7" />

  *Interface de login integrada ao Supabase Auth.*
</details>

<details>
  <summary><b>📊 Visualizar Área Protegida (Dashboard)</b></summary>
  <br>

  #### Módulos de Aprendizado
  <img width="3812" height="1876" alt="Captura de tela 2026-09-15 151928" src="https://github.com/user-attachments/assets/77846287-6240-4203-b85d-be3d2a8ef275" />

  *Painel de módulos com controle dinâmico de acesso por plano.*

  #### Gerenciador de Assinaturas
  <img width="3816" height="1882" alt="Captura de tela 2026-09-15 151936" src="https://github.com/user-attachments/assets/9316ba6c-8d36-4e19-b013-a3475769fdd9" />

  *Simulação e alternância de permissões de acesso em tempo real.*
</details>

---

## 🛠️ Tecnologias Utilizadas

- **Front-end:** React, Vite, Tailwind CSS
- **Back-end & Database:** Supabase (Auth, PostgreSQL, Row Level Security)
- **Deploy:** Vercel

---

## ✨ Principais Funcionalidades

- [x] **Autenticação Completa:** Cadastro, login e controle de sessão via Supabase Auth.
- [x] **Design Responsivo:** Interface otimizada para dispositivos móveis e desktop.
- [x] **Segurança de Dados:** Políticas de RLS (Row Level Security) aplicadas no PostgreSQL.
- [x] **Seção de Segurança & Termos:** Navegação ancorada com foco na LGPD e privacidade do usuário.

---

## 🔧 Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/ThiagoLlimas/learnpulse.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente em um arquivo .env:
   ```evn
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anon
   ```
   
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```   
