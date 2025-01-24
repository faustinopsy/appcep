# **API de Busca de CEP com Cache**

Uma aplicação Vue.js criada com Vite que utiliza a API pública ViaCEP para buscar informações de endereços com base em um CEP informado pelo usuário. A aplicação também implementa cache usando Pinia para otimizar as requisições.

* obs. aplicação apenas para treinar conceitos, estado, testes, e cache first

---

## **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/faustinopsy/appcep.git
   cd appcep

2. Instale as dependências:

    ```bash
    npm install

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev

## Tecnologias Utilizadas
- Vue.js 3: 
Framework JavaScript progressivo para construção de interfaces de usuário.
- Vite: 
Ferramenta moderna para minificação, desenvolvimento e build de projetos frontend moderno.
- Pinia: 
Gerenciamento de estado para Vue.js.
- Axios: 
Biblioteca para requisições HTTP.
- Playwright: 
Framework para testes end-to-end (E2E).

## Funcionalidades
- Busca de CEP:
O usuário informa um CEP no formulário e os dados são buscados na API pública ViaCEP.
- Exibição de Dados:
Bairro, cidade e rua são exibidos no formulário após a busca.
- Cache com Pinia:
Os dados da API são armazenados em cache, evitando chamadas repetidas para o mesmo CEP.
- Testes End-to-End:
Verificação de funcionamento do fluxo de busca e uso correto do cache.

## Estrutura do Projeto

    ```bash
    src/
    ├── components/
    │   ├── ResultForm.vue    # Componente de exibição dos resultados
    │   ├── ApiService.js     # Serviço para consumir a API ViaCEP
    ├── stores/
    │   ├── cepStore.js       # Gerenciamento de estado com Pinia
    ├── views/
    │   ├── HomeView.vue      # Componente de entrada do CEP
    ├── App.vue               # Componente principal
    ├── main.js               # Entrada da aplicação
    ```


## Instruções de uso
1. Iniciar o servidor de desenvolvimento:
    ```bash
    npm run dev

2. Executar os testes end-to-end:
    ```bash
    npx playwright test

3. Exibir o relatório de testes:
    ```bash
    npx playwright show-report

## Licença
Este projeto está licenciado sob a MIT License.
