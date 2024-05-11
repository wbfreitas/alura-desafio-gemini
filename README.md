## Aprenda Inglês com Séries: Seu companheiro de estudos turbinado por IA! 🧠🎧

Se você é como eu, que adora assistir séries para treinar e aumentar seu conhecimento de inglês, mas se perde com as palavras que não conhece, essa é a solução perfeita para você! 

**[Vídeo demonstrativo do sistema em ação!](https://youtu.be/QqVcI0yl3o0)**


Este projeto inovador em Angular e Node.js te ajuda a desvendar os mistérios do inglês falado em suas séries favoritas. Ele baixa as legendas (arquivos .srt) e utiliza o poder da IA da API do Google Gemini para te oferecer diversas ferramentas de aprendizado:

## Funcionalidades:

* **Agrupamento Gramatical:**  
    * Isole pronomes, verbos, artigos, preposições, advérbios, conjugações, adjetivos e expressões informais.
    * Entenda a estrutura da língua inglesa e a função de cada palavra com a precisão da IA do Gemini.
* **Tradução para Português:**
    * Traduza legendas inteiras para o português com a fluidez do Gemini.
    * Compare as versões em inglês e português lado a lado.
* **Questionários Interativos:**
    * Teste seus conhecimentos com quizzes de múltipla escolha elaborados pela inteligência do Gemini.
    * Revise o vocabulário aprendido e fixe o conteúdo.

## Gostaria de destaques o [Código](https://github.com/wbfreitas/alura-desafio-gemini/blob/develop/backend/prompts.mjs):

Nele estão os prompts usadados para fazer os agrupamentos, as traduções de inglês para protuguês e criar as questões. Nele usei os padrões: 
Few-shot prompting: Permite que o IA aprenda com poucos exemplos.
Chain of thought: Auxilia o IA no raciocínio e na tomada de decisões.

## Como Rodar a Aplicação:
Para bricar é necessário rodar locar o frontend e o backend que estão em pastas separadas.  
1. **Requisitos:**
    * Node.js versão 21 ou superior: [https://nodejs.org/](https://nodejs.org/)
    * Angular CLI versão 17 ou superior: [https://angular.io/cli](https://angular.io/cli)
2. **Clone o Repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
3. **Instale as Dependências:**
    * **Backend (pasta `backend`):**
        ```bash
        cd backend
        npm install
        ```
    * **Frontend (pasta `frontend-ingles-com-series`):**
        ```bash
        cd frontend-ingles-com-series
        npm install
        ```
4. **Configure a API do Gemini:**
    * Siga as instruções da documentação do Gemini para obter suas credenciais de API.
    * Insira suas credenciais no arquivo de configuração do backend.
5. **Inicialize as Aplicações:**
    * **Backend:**
        ```bash
        TOKEN=<API-KEY Gemini> node index.mjs
        ```
    * **Frontend:**
        ```bash
        npm start 
        ```
6. **Acesse a Aplicação:**
    * Abra seu navegador e acesse `http://localhost:4200/` (ou a porta definida no Angular CLI).

## Testando a Aplicação:

Aqui estão alguns exemplos de séries, temporadas e episódios que você pode usar para testar a aplicação:

* **You:** Temporada 1, Episódio 1
* **Mr. Robot:** Temporada 1, Episódio 1
* **The Big Bang Theory:** Temporada 1, Episódio 2
* **Baby Reindeer:** Temporada 1, Episódio 1


## Recursos Futuros:

* **Integração de Áudio:**
    * Escute a pronúncia das palavras e frases.
    * Aperfeiçoe sua compreensão auditiva e pronúncia.
* **Catálogo de Séries:**
    * Navegue por um extenso catálogo de séries populares.
    * Encontre facilmente seus programas favoritos.
* **Filtros de Pesquisa Avançada:**
    * Filtre séries por gênero, idioma original, popularidade e mais.
    * Encontre séries que se encaixam perfeitamente no seu gosto.

