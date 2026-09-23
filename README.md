This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## git cli setup

para fazer push tive que 
- criar um personal access token
- dar content perms COM READWRITE
- ao fazer git push -u origin main (depios dos outros comandos), meti o jpinela e o token, bombou.

## amplify setup no github

settings -> applications -> amplify studio (para definir repos e cenas)

## Getting Started

mandar oisto para o ammplify. vamos ver.
funcionou. super simples até. 
uma pagina (com tudo no src, api dnetro da src/app) com uma chamada da API bombou. ok. já é qq coisa.
mas acho que teve de criar uma EC2. ui....... parece que não. parece ser mesmo algo tipo lambda. os logs parecem o lambda.

esta estrutura funcionou, dentro do src.
```bash
D:\Programas\node-v24.21\nextjsapps\amplifygithubtest\src>tree /f
Folder PATH listing for volume LENOVO
Volume serial number is 706D-0812
D:.
└───app
    │   favicon.ico
    │   globals.css
    │   layout.js
    │   page.js
    │   page.module.css
    │
    ├───api
    │   └───get_data
    │           route.js
    │
    └───info
            page.js

```

## Para definir S3 Storage parece simples...

https://docs.amplify.aws/react/build-a-backend/storage/set-up-storage/
