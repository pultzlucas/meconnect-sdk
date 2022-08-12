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
Api.db.users.all() // retorna todos os usuários cadastrados

// CUSTOMERS

// cria um cliente
Api.db.customer.create(params) 

// retorna um cliente a partir do ID
Api.db.customer.get(id_cliente) 

// retorna as notificações de um cliente a partir do ID
Api.db.customer.getNotifications(id_cliente) 

// retorna todos os clientes do banco
Api.db.customer.all()

// modifica um cliente do banco
Api.db.customer.update(id_cliente, campos)

// deleta um cliente do banco
Api.db.customer.delete(id_cliente)

// VENDORS

// cria uma empresa
Api.db.vendors.create(params) 

// retorna uma empresa a partir do ID
Api.db.vendors.get(id_empresa)

// retorna os posts de uma empresa a partir do ID
Api.db.vendors.getPosts(id_empresa)

// retorna os produtos de uma empresa a partir do ID
Api.db.vendors.getProducts(id_empresa)

// retorna as tags de uma empresa a partir do ID
Api.db.vendors.getTags(id_empresa)

// retorna todas as empresas do banco
Api.db.vendors.all()

// modifica uma empresa do banco
Api.db.vendors.update(id_empresa, campos)

// deleta uma empresa do banco
Api.db.vendors.delete(id_empresa)

// seta foto de perfil da empresa
Api.db.vendors.setProfilePhoto(id_empresa, uri_da_imagem)

// CONNECTIONS

// cria uma conexão
Api.db.connections.create(campos)

// retorna uma conexão a partir do ID
Api.db.connections.get(id_conexao)

// retorna todas as conexões do banco
Api.db.connections.all()

// modifica uma conexão
Api.db.connections.update(id_conexao, campos)

// delete uma conexão
Api.db.connections.delete(id_conexao)

// POSTS

// cria um post
Api.db.posts.create(params)

// retorna um post a partir do ID
Api.db.posts.get(id_post)

// retorna as tags de um post a partir do ID
Api.db.posts.getTags(id_post)

// retorna todos os posts do banco
Api.db.posts.all()

// modifica um post
Api.db.posts.update(id_post, campos)

// deleta um post
Api.db.posts.delete()

// seta mídia do post
Api.db.products.setImage(id_post, uri_da_imagem)

// PRODUCTS

// cria um produto
Api.db.products.create(params)

// retorna um produto a partir do ID
Api.db.products.get(id_produto)

// retorna as tags de um produto a partir do ID
Api.db.products.getTags(id_produto)

// retorna todos os produtos do banco
Api.db.products.all()

// modifica um produto
Api.db.products.update(id_produto, campos)

// deleta um produto
Api.db.products.delete(id_produto)

// seta foto do produto
Api.db.products.setPhoto(id_produto, uri_da_imagem)

// NOTIFICATIONS

// retorna uma notificação a partir do ID
Api.db.notifications.get(id_produto)

// retorna todas as notificações do banco
Api.db.notifications.all()

// deleta uma notificação
Api.db.notifications.delete(id_produto)

````
Fazendo login no back-end

````javascript
import { Api } from 'meconnect-sdk'

Api.login('nome', 'email', 'senha')
````
