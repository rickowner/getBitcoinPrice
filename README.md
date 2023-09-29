
# **Clean Architeture Node API - BlockBR**

![alt text](./public/img/logo-project.png "Link para o treinamento")

---

# getBitcoinPrice
Test for API getBitcoinPrice (Espero que gostem)

> ## APIs construídas no projeto
> Essa API faz parte do projeto do Marcos Barbosa.

> O objetivo do projeto é mostrar como criar uma API com uma arquitetura bem definida e desacoplada, 
> fazendo consulta pela moeda estabelecida pelo customer, afim de retornar a moeda e o preço atual,
> utilizando TDD (programação orientada a testes) como metodologia de trabalho, 
> Clean Architecture para fazer a distribuição de responsabilidades em camadas, 
> sempre seguindo os princípios do SOLID e, sempre que possível, 
> aplicando Design Patterns para resolver alguns problemas comuns.
<br /><br />

> ## APIs passo a passo
* Efetuar o clone
* Certificar - se que está usando a versão de node adequada executando node -v (no caso está em v12.22.12)
*  Instalar as dependêcias do projeto
*  Temos abordados testes unitários
*  Temos abordados testes de integração
*  Foi adicionado:
> *  EsLint para verificação do código em tempo de desenvolvimento
> *  Husky para verificação de pre-commits
> *  É utilizado a convênção do Smart Commits
> *  É utlizado o Lint Staged para verificação de sequência entre commits, push e testes antes do commit e antes do push
> *  Adicionado o Swagger como forma de Documentação através do link (http://localhost:3000/api-docs/#/getBitcoinPrice/get_getBitcoinPrice)
> *  Há várias verificações de testes como verbose, unit, integration, staged e ci
> *  Há uma pasta de requirementos contendo as regras solicitadas
> *  Redis foi instalado, porém não implementado ainda
> *  Haverá um bônus de implementação surpresa após o retorno
*  Link para busca de moedas (http://localhost:3000/api/getBitcoinPrice/USD)
> > ## Princípios

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)
* Composition Over Inheritance
* Small Commits

> ## Design Patterns

* Factory
* Adapter
* Composite
* Decorator
* Proxy
* Dependency Injection
* Abstract Server
* Composition Root
* Builder
* Singleton

> ## Metodologias e Designs

* TDD
* Clean Architecture
* DDD
* Conventional Commits
* GitFlow
* Modular Design
* Dependency Diagrams
* Use Cases
* Continuous Integration
* Continuous Delivery
* Continuous Deployment

> ## Bibliotecas e Ferramentas

* NPM
* Typescript
* Git
* Express
* Axios
* Jest
* Travis CI
* Swagger
* Coveralls
* Validator
* Express
* Supertest
* Husky
* Lint Staged
* Eslint
* Standard Javascript Style
* Sucrase
* Rimraf
* MockDate
* Module-Alias
* Copyfiles
* Npm Check
