# Módulo API

Módulo para se comunicar com o back-end da plataform

## Como usar

Manipulando token de acesso da API

````javascript
import { Api } from 'meconnect-sdk'

// Salvando token no celular
Api.token.set('85136c79cbf9fe36bb9d05d0639c70c265c18d37')

// Obtendo token salvo
Api.token.get() // 85136c79cbf9fe36bb9d05d0639c70c265c18d37
````

Executando ações no banco de dados

````javascript
import { Api } from 'meconnect-sdk'

// users
Api.db.users.all(token) // retorna todos os usuários cadastrados

// CLIENTS

// cria um cliente
Api.db.clients.create(params) 

// retorna um cliente a partir do ID
Api.db.clients.get(id, token) 

// retorna todos os clientes do banco
Api.db.clients.all(token)

// modifica um cliente do banco
Api.db.clients.update(id, params, token)

// deleta um cliente do banco
Api.db.clients.delete(id, token)

// COMPANIES

// cria uma empresa
Api.db.companies.create(params) 

// retorna uma empresa a partir do ID
Api.db.companies.get(id, token)

// retorna todas as empresas do banco
Api.db.companies.all(token)

// modifica uma empresa do banco
Api.db.companies.update(id, params, token)

// deleta uma empresa do banco
Api.db.companies.delete(id, token)

// CONNECTIONS

// cria uma conexão
Api.db.connections.create(params)

// retorna uma conexão a partir do ID
Api.db.connections.get(id, token)

// retorna todas as conexões do banco
Api.db.connections.all(token)

// modifica uma conexão
Api.db.connections.update(id, params, token)

// delete uma conexão
Api.db.connections.delete(id, token)

// POSTS

// cria um post
Api.db.posts.create(params)

// retorna um post a partir do ID
Api.db.posts.get(id, token)

// retorna todos os posts do banco
Api.db.posts.all(token)

// modifica um post
Api.db.posts.update(id, params, token)

// deleta um post
Api.db.posts.delete()

// PRODUCTS

// cria um produto
Api.db.products.create(params)

// retorna um produto a partir do ID
Api.db.products.get(id, token)

// retorna todos os produtos do banco
Api.db.products.all(token)

// modifica um produto
Api.db.products.update(id, params, token)

// deleta um produto
Api.db.products.delete(id, token)

// NOTIFICATIONS

// retorna uma notificação a partir do ID
Api.db.notifications.get(id, token)

// retorna todas as notificações do banco
Api.db.notifications.all(token)

// deleta uma notificação
Api.db.notifications.delete(id, token)

````
Fazendo login no back-end

````javascript
import { Api } from 'meconnect-sdk'

Api.login('nome', 'email', 'senha')
````
