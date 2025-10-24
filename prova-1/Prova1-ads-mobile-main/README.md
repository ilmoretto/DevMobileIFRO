# 📱 Projeto: Gerenciador de Itens Mobile

## 📋 Documento de Requisitos Técnicos

**Empresa**: TechCorp Solutions  
**Projeto**: Sistema Mobile de Gerenciamento de Itens  
**Tipo**: Correção e Implementação de Funcionalidades  
**Horário de Início**: 19:00  
**Prazo de Entrega**: 20:00 (1 hora)  
**Horário Final**: 22:30 

---

## 🎯 Visão Geral do Projeto

A TechCorp Solutions está desenvolvendo um aplicativo mobile para gerenciamento de itens com sistema de autenticação. O projeto atual possui um código base com diversos erros que precisam ser identificados e corrigidos para que o sistema funcione corretamente.

### Objetivo
**IMPORTANTE**: Este é um projeto de **CORREÇÃO**, não de implementação do zero. Todas as telas, componentes e funcionalidades já existem no código, mas possuem erros que impedem seu funcionamento.

**CORRIGIR** um aplicativo mobile funcional que permita:
- Autenticação de usuários (login/registro)
- Gerenciamento completo de itens (CRUD)
- Interface intuitiva e responsiva

⚠️ **Não é necessário implementar nada do zero - apenas corrigir os erros existentes!**

---

## ⏰ Sistema de Entrega e Penalizações

### ⏱️ Cronograma
- **Início**: 19:00
- **Prazo Ideal**: 20:00 (1 hora)
- **Prazo Final**: 22:30

### 💰 Sistema de Penalização por Atraso

**Como funciona:**
- **Entrega pontual (até 20:00)**: Sem penalização
- **Atraso progressivo**: Penalização crescente conforme o tempo de atraso
- **Penalização máxima**: 40% para entregas próximas ao prazo final
- **Prazo final (22:30)**: Último momento aceito
- **Após prazo final**: Entrega não será aceita

**Observação**: O sistema de penalização é rigoroso e aplicado automaticamente. Recomenda-se fortemente a entrega no prazo ideal para evitar descontos na avaliação.

### ⚠️ Observações Importantes
- **Horário de referência**: Relógio do servidor da empresa
- **Entrega única**: Não serão aceitas reenvios após o prazo
- **Validação automática**: Sistema verifica horário de commit
- **Sem exceções**: Penalizações aplicadas rigorosamente

---

## 📱 Especificações Técnicas

### Stack Tecnológica
- **Frontend**: React Native + Expo
- **Navegação**: React Navigation
- **Backend**: API Node.js (fornecida)
- **Armazenamento**: AsyncStorage

### Arquitetura do Sistema
```
Mobile App (React Native)
    ↓
API Backend (Node.js)
    ↓
Database (Simulada)
```

---

## 📊 Fichas Técnicas Detalhadas

### FICHA TÉCNICA #001 - Tela de Login
**ID**: LOGIN-001  
**Prioridade**: ALTA  
**Complexidade**: MÉDIA  

**Descrição Detalhada**:
**CORRIGIR** a tela de login do aplicativo mobile. A tela já existe mas possui erros que impedem seu funcionamento. Deve consumir a API de autenticação e gerenciar o estado de login do usuário.

**Funcionalidades Esperadas**:
- Interface de login conforme referência visual
- Campos de email e senha funcionais
- Validação de dados de entrada
- Consumo da API de login
- Navegação para tela de registro
- Navegação para tela principal após login
- Tratamento de erros de autenticação

**Referência Visual**: 
![Tela de Login](./prints/login.png)

---

### FICHA TÉCNICA #002 - Tela de Registro
**ID**: REGISTER-001  
**Prioridade**: ALTA  
**Complexidade**: MÉDIA  

**Descrição Detalhada**:
**CORRIGIR** a tela de registro do aplicativo mobile. A tela já existe mas possui erros que impedem seu funcionamento. Deve consumir a API de registro e validar os dados do usuário.

**Funcionalidades Esperadas**:
- Interface de registro conforme referência visual
- Campos de nome, email e senha funcionais
- Validação de dados de entrada
- Consumo da API de registro
- Navegação para tela de login
- Navegação para tela principal após registro
- Tratamento de erros de registro

**Referência Visual**: 
![Tela de Registro](./prints/registrar.png)

---

### FICHA TÉCNICA #003 - Tela Principal (Home)
**ID**: HOME-001  
**Prioridade**: ALTA  
**Complexidade**: ALTA  

**Descrição Detalhada**:
**CORRIGIR** a tela principal do aplicativo mobile. A tela já existe mas possui erros que impedem seu funcionamento. Deve exibir a lista de itens e permitir operações CRUD consumindo a API.

**Funcionalidades Esperadas**:
- Interface principal conforme referências visuais
- Listagem de itens consumindo a API
- Botão para adicionar novos itens
- Funcionalidade de editar itens existentes
- Funcionalidade de excluir itens
- Validação de dados antes de salvar
- Tratamento de erros da API
- Estados de carregamento

**Referências Visuais**: 
![Tela Principal - Lista de Itens](./prints/img_1.png)
![Tela Principal - Adicionar Item](./prints/img_2.png)
![Tela Principal - Editar Item](./prints/img_3.png)
![Tela Principal - Interface Completa](./prints/img_4.png)

---

### FICHA TÉCNICA #004 - Componentes de Lista
**ID**: COMPONENTS-001  
**Prioridade**: MÉDIA  
**Complexidade**: MÉDIA  

**Descrição Detalhada**:
**CORRIGIR** os componentes de lista de itens (ItemList e ListItem). Os componentes já existem mas possuem erros que impedem sua funcionalidade. Devem exibir os dados de forma organizada.

**Funcionalidades Esperadas**:
- Componente ItemList funcional
- Componente ListItem para exibir cada item
- Exibição correta dos dados dos itens
- Botões de ação (editar/excluir) funcionais
- Layout responsivo e organizado
- Integração com a tela principal

---

### FICHA TÉCNICA #005 - Navegação entre Telas
**ID**: NAV-001  
**Prioridade**: ALTA  
**Complexidade**: BAIXA  

**Descrição Detalhada**:
**CORRIGIR** o sistema de navegação entre todas as telas do aplicativo mobile. A navegação já está configurada mas possui erros que impedem seu funcionamento.

**Funcionalidades Esperadas**:
- Navegação fluida entre Login, Registro e Home
- Configuração correta do Stack Navigator
- Botões de navegação funcionais
- Transições suaves entre telas
- Gerenciamento de estado de navegação
- Headers apropriados para cada tela

---

### FICHA TÉCNICA #006 - Consumo da API
**ID**: API-001  
**Prioridade**: ALTA  
**Complexidade**: MÉDIA  

**Descrição Detalhada**:
**CORRIGIR** o consumo da API backend para todas as operações do aplicativo mobile. O serviço de API já existe mas possui erros que impedem a comunicação com o backend.

**Funcionalidades Esperadas**:
- Configuração correta do cliente HTTP
- Consumo da API de autenticação (login/registro)
- Consumo da API de itens (CRUD)
- Tratamento de respostas da API
- Tratamento de erros de rede
- Gerenciamento de estados de carregamento
- Interceptores para requisições

---

## 🔧 Requisitos Funcionais

### RF001 - Sistema de Autenticação
**Descrição**: Implementar sistema completo de login e registro de usuários

**Critérios de Aceitação**:
- [ ] Tela de login com campos email e senha
- [ ] Tela de registro com campos nome, email e senha
- [ ] Validação de campos obrigatórios
- [ ] Navegação entre telas de login e registro
- [ ] Persistência de sessão do usuário

**Referência Visual**: ![Tela de Login](./prints/login.png) ![Tela de Registro](./prints/registrar.png)

### RF002 - Gerenciamento de Itens (CRUD)
**Descrição**: Implementar operações completas de gerenciamento de itens

**Critérios de Aceitação**:
- [ ] Listagem de todos os itens cadastrados
- [ ] Adição de novos itens
- [ ] Edição de itens existentes
- [ ] Exclusão de itens
- [ ] Interface responsiva e intuitiva

### RF003 - Navegação entre Telas
**Descrição**: Implementar navegação fluida entre todas as telas do aplicativo

**Critérios de Aceitação**:
- [ ] Navegação funcional entre Login, Registro e Home
- [ ] Botões de navegação funcionando corretamente
- [ ] Transições suaves entre telas
- [ ] Gerenciamento de estado de navegação

---

## 🐛 Problemas Identificados (Para Correção)

### Categoria 1: Erros de Sintaxe
- [ ] Imports incorretos ou faltando
- [ ] Nomes de componentes mal escritos
- [ ] Pontuação incorreta (ponto e vírgula, chaves, etc.)
- [ ] Extensões de arquivo incorretas

### Categoria 2: Erros de Lógica
- [ ] Funções mal implementadas
- [ ] Estados não gerenciados corretamente
- [ ] Navegação incorreta entre telas
- [ ] Validações ausentes ou incorretas

### Categoria 3: Inconsistências de Nomenclatura
- [ ] Variáveis com nomes diferentes para mesma função
- [ ] Componentes com nomes incorretos
- [ ] Props com nomes inconsistentes

### Categoria 4: Erros de Digitação
- [ ] Typos em nomes de arquivos
- [ ] Palavras mal escritas no código
- [ ] Comentários com erros ortográficos

---

## 🛠️ Ambiente de Desenvolvimento

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **Expo CLI** instalado globalmente
- **Git** para controle de versão
- **Dispositivo móvel** com app Expo Go

### Configuração do Projeto

#### 1. Configuração da API Backend
```bash
# Extrair arquivo da API
unzip API/gerenciamento-itens-api.zip

# Navegar para pasta da API
cd gerenciamento-itens-api

# Instalar dependências
npm install

# Executar API
node app.js
```
---

## 📤 Critérios de Entrega

### Arquivos a Entregar
- ✅ Código fonte corrigido
- ✅ README.md atualizado
- ❌ **NÃO incluir**: pasta `API/`, `node_modules/`, arquivos temporários

### Formato de Entrega
- **Plataforma**: Git (GitHub)
- **Commit**: Mensagens descritivas das correções

### 🎯 Critérios de Qualidade
- **Funcionalidade**: 100% das funcionalidades operacionais
- **Código Limpo**: Sem erros de sintaxe ou lógica
- **Interface**: Conforme especificações visuais
- **Navegação**: Fluida e intuitiva

---

## 🎯 Critérios de Avaliação

| Critério | Peso | Descrição |
|----------|------|-----------|
| **Correção de Erros** | 40% | Todos os erros identificados e corrigidos |
| **Funcionalidade** | 30% | Aplicativo executando sem erros |
| **Interface** | 20% | Conformidade com especificações visuais |
| **Qualidade do Código** | 10% | Código limpo e bem estruturado |

---

## 📞 Suporte e Recursos

### Documentação Oficial
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

### Recursos de Referência
- Imagens de referência na pasta `prints/`
- Código base fornecido
- API backend funcional

---

## ⚠️ Observações Importantes

1. **Foco Principal**: Correção do código mobile, não desenvolvimento da API
2. **API Backend**: Apenas para consumo, não para modificação
3. **Testes**: Validar todas as funcionalidades após correções
4. **Interface**: Seguir exatamente as referências visuais fornecidas

---

**🚀 Boa sorte no desenvolvimento! Sucesso na entrega do projeto!**

*TechCorp Solutions - Departamento de Desenvolvimento Mobile*