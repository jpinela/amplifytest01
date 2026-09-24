This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## git cli setup

para fazer push tive que 
- criar um personal access token
- dar CONTENT perms COM READWRITE
- ao fazer git push -u origin main (depios dos outros comandos), meti o jpinela e o token, bombou.

## amplify setup no github

github -> settings -> applications -> amplify studio (para definir repos e cenas)

>[!important]
> lembrar de definir secrets no env variables do amplify studio. E de as mandar para o build com a linha em baixo (NECESSARIO, senão 500 error com a mensagem sequinte nos monitoring -> hosting compute logs )
```
[next-auth][error][NO_SECRET]  
https://next-auth.js.org/errors#no_secret Please define a `secret` in production. Error [MissingSecretError]: Please define a `secret` in production. 
    at c.assertConfig (../../var/task/.next/server/chunks/ssr/_19qhua_._.js:34:11891) 
    at q (../../var/task/.next/server/chunks/ssr/_19qhua_._.js:34:17763) 
    at async h (../../var/task/.next/server/chunks/ssr/_19qhua_._.js:182:34428) 
    at async g (../../var/task/.next/server/chunks/ssr/_19qhua_._.js:182:51570) { 
  code: 'NO_SECRET' 
}
```

definir as envs:

hosting -> environment variables

e depios

hosting -> Build Settings (a linha seguinte, faz toda a diferença)
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci --cache .npm --prefer-offline
    build:
      commands:
        - env | grep -E 'GOOGLE_CLIENT_ID|GOOGLE_CLIENT_SECRET|NEXTAUTH_SECRET|NEXTAUTH_URL|AUTH_TRUST_HOST' >> .env.production
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - .next/cache/**/*
      - .npm/**/*
```

## Getting Started

mandar oisto para o ammplify. vamos ver.
funcionou. super simples até. 
uma pagina (com tudo no src, api dnetro da src/app) com uma chamada da API bombou. ok. já é qq coisa.
mas acho que teve de criar uma EC2. ui....... parece que não. parece ser mesmo algo tipo lambda. os logs parecem o lambda.
sim parece. 

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

## Para definir os Back-ends

> [!Caution]
> instalei o @aws-amplify/backend e quando fiz deploy para o amplify, deu erro
 
https://docs.amplify.aws/nextjs/build-a-backend/

https://docs.amplify.aws/react/build-a-backend/storage/set-up-storage/


## ENV Vars no Amplify Console
https://docs.aws.amazon.com/amplify/latest/userguide/environment-variables.html

não podem começar com AWS_ . isso é reservado.