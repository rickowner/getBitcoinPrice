# Consulta

## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** no endpoint **https://api.coindesk.com/v1/bpi/currentprice.json**
2. ❌ Criar Crie um endpoint **/getBitcoinPrice** que aceite solicitações **GET**
3. Extraia o preço do Bitcoin na moeda especificada pelo usuário a partir dos dados da API externa.
4. ❌ Use a biblioteca **Axios** para fazer uma solicitação **GET** para o endpoint **https://api.coindesk.com/v1/bpi/currentprice.json** para obter os dados do preço do Bitcoin
5. ❌ Implemente tratamento de **erros** para lidar com casos em que a API externa não responda ou retorne um erro
6. ❌ Crie testes para garantir que a API esteja funcionando corretamente. Você pode usar bibliotecas de teste como Jest.
7. ❌ Implemente um **sistema de cache** para evitar fazer **solicitações repetidas** à API externa pelo mesmo preço em um curto período de tempo.
8. **Documente** sua API usando uma ferramenta como o **Swagger**.