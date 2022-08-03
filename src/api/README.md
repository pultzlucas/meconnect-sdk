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

// CUSTOMERS

// cria um cliente
Api.db.customer.create(params) 

// retorna um cliente a partir do ID
Api.db.customer.get(id, token) 

// retorna todos os clientes do banco
Api.db.customer.all(token)

// modifica um cliente do banco
Api.db.customer.update(id, params, token)

// deleta um cliente do banco
Api.db.customer.delete(id, token)

// VENDORS

// cria uma empresa
Api.db.vendors.create(params) 

// retorna uma empresa a partir do ID
Api.db.vendors.get(id, token)

// retorna todas as empresas do banco
Api.db.vendors.all(token)

// modifica uma empresa do banco
Api.db.vendors.update(id, params, token)

// deleta uma empresa do banco
Api.db.vendors.delete(id, token)

// seta foto de perfil da empresa
Api.db.vendors.setProfilePhoto(id, uri_da_imagem)

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

// seta mídia do post
Api.db.products.setImage(id, uri_da_imagem)

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

// seta foto do produto
Api.db.products.setPhoto(id, uri_da_imagem)

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
