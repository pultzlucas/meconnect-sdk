# MeConnect SDK

Kit de desenvolvimento para plataforma MeConnect

## Instalação

````shell
$ expo install meconnect-sdk
````

## Módulos do SDK

### API

Módulo para se comunicar com o back-end da plataforma

- Executar comandos no banco de dados
- Gerenciar o token de acesso da API
- Fazer login na plataforma

[Como usar o módulo e exemplos](./src/api/README.md)

### Colors

Inclui todas as principais cores que fazem parte do visual da plataforma

````javascript
import { Colors } from 'meconnect-sdk'

Colors.DarkOrange // #F5803E
Colors.MiddleOrange // #FFA245
Colors.LightOrange // #FFCCA0
Colors.DarkGray // #666666
Colors.LightGray // #CCCCCC
Colors.Black // #333333
````

### Media

Módulo para manipular arquivos de mídia da galeria do usuário

````javascript
import { Media } from 'meconnect-sdk'

// Abre a galeria do usuário para escolher uma imagem e retorna essa imagem
Media.pickImage()
````
