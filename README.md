# Kanban Logistic

## Funcionalidades mínimas pro MVP
- Upload XML/PDF (salvar no “mock storage” local);
- Identificação de VATs no arquivo (simulação);
- Consulta a VATs existentes (mock DB);
- Disparo de e-mail de convite para VAT desconhecido;
- Página de registro do novo VAT;
- Página de mapeamento de campos estilo Zapier (drag/drop simples);
- Dashboard com tickets disponíveis.

## Planejamento possível desenvolvimento das telas
1️. Login
- Autenticação OTP.
- Talvez usar next-auth (com credenciais mockadas no MVP).
- Depois, pode evoluir para OAuth2 ou JWT (para integração com o back).

➡️ No MVP: 
- Funcionalidade de login fake/local (mocked session).

2️. Dashboard / Transactions / History
- Listagem de pesagens e tickets com filtros, paginação e botão “Export”.
- Colunas principais: ID, hora, data, placa, cliente, produto, transportador, pesos etc.
- Representa a tabela de registros de pesagem (módulo Weightbridge).

➡️No MVP:
- Criar uma tabela dinâmica mockada com dados fictícios (simulando o ERP).
- Adicionar botão de exportação CSV (client-side).

3️. Ticket Details
- Mostra o detalhe completo de uma pesagem/ticket.
- Cards com:
	- Dados do contrato (referência, tipo, empresa);
	- Materiais;
	- Cliente, transportadora e locais;
	- Status e pesos.
- Painel lateral direito com métricas (tara, bruto, líquido, etc).

➡️ No MVP:
- Renderizar informações mockadas.
- Implementar navegação dinâmica (/tickets/[id]) com useParams().

4️. Export Report
- Tela para escolher período (start date / end date) e exportar relatórios.
- Botões Export e Cancel.

➡️ No MVP:
- Usar react-datepicker ou o input type="date".
- Gerar arquivo CSV em tempo real (client-side export mock).

5️. Account
- Configuração de usuário (alterar senha, chave de API, etc.).
- “API Key Rotation” → gerar nova chave;
- “Integration Guide” → instruções de como conectar ERP/WMS.

➡️ No MVP:
- Mostrar valores mockados (chave simulada).
- Criar botão “Generate new API key” → gera string aleatória com crypto.

6️. API Integration Guide
- Página estática com guia de integração técnica.
- Pode conter markdown, JSON de exemplo, endpoints etc.

➡️ No MVP:

- Exibir conteúdo dummy (placeholder).
- Futuro: substituir por documentação real (Swagger/Markdown renderizado).

7️. Tickets / Weightbridge / Agent
- Mesma estrutura do dashboard, mas com escopo mais específico (ex: listagem apenas de tickets XML importados, não das pesagens totais).
- “Agent” provavelmente se refere a um módulo de usuários ou integrações (quem faz a leitura/envio automático dos tickets).

➡️ No MVP:
- Reaproveitar o mesmo componente de tabela com filtro por tipo.
- 
# MVP Planning

## Módulo de login

- Autenticação OTP

-> API:

- POST /api/auth/request-otp
- POST /api/auth/verify-otp
- PATCH /api/auth/signout

-> UI:
- Tela de login
  - Requisição código OTP
  - Validação código OTP
- Componente para encerrar a sessão

-> Regras:
	- Gerar código OTP de 6 dígitos para usuários válidos (e-mail cadastrado)
	- Validar OTP único e em um determinado período de tempo
	- Gerar JWT e salvar nos cookies (HTTP Only)

## Módulo de importação de dados CSV

-> API:
	- POST /api/import/preview
	- POST /api/import/process

-> UI:
	- Tela para fazer carregar e mapeamento dos dados do arquivo CSV
  	- Select para os tipos de dados a serem carregados
  	- Preview dos dados carregados
  	- Componente para mapeamento dos dados do CSV associados aos dados que serão aceitos e salvos no banco de dados
  	- Feedback visual e detalhado da importação e processamento de dados

-> Regras:
	- Associar o tipo de arquivo que será importado (Clients, Vehicles, Transporters, etc)
	- Carregar esses dados na rota de preview e devolver um sample para mostrar na tela para o usuário
	- Componente visual para o usuário associar os campos importados do CSV com os campos a serem salvos no banco de dados
	- Devolver um feedback visual sobre o processamento de dados:
  	- Quantidade de linhas importadas
  	- Sucessos
  	- Erros
  	- Skips

## Módulo de Tickets - Checklist de implementação 

-> Modelo Prisma:

- Ticket com FKs + pesos + status + number @unique
- TicketFile (XML/PDF)
- TicketEventLog (auditoria)

-> API:

- POST /api/tickets (criar DRAFT com validações)
- PATCH /api/tickets/:id/status (transições válidas)
- GET /api/tickets (filtros por status, datas, cliente, transp., placa)
- GET /api/tickets/:id (detalhe)
- POST /api/tickets/:id/files (upload anexos)
- GET /share/:token (público, somente leitura)

-> UI:

- /tickets (lista + filtros)
- /tickets/new (wizard com autocompletes e cálculo de net)
- /tickets/[id] (detalhe + anexos + ações de status)

-> Regras:

- Cálculo: net = gross − tare (>= 0)
- Coerência de FKs (vehicle ∈ transporter; plant ∈ customer)
- Gate de anexos para sair de DRAFT, se requerido

-> Segurança:

- Autorização por role:
- SUPPLIER: criar/editar/compartilhar seus tickets
- CUSTOMER/TRANSPORTER: visualizar onde são parte
- Auditoria: logs de criação, edição, status, downloads do link público