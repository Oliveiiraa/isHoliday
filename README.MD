# isHoliday
Pacote NPM para JS com o intuito de descobrir se o dia informado é um feriado nacional.

## 📝 Como utilizar

1. Instale o pacote via NPM

```sh
   npm i @oliveiiraa/isholiday
   ```

2. Utilize ele em seu código da seguinte forma:

```js

const isHoliday = require('@oliveiiraa/isholiday')
const AnoNovo = isHoliday('01/01') // { "isHoliday": true, "name": "Ano Novo" }

if(AnoNovo.isHoliday) {
    console.log(`Hoje é ${AnoNovo.name}`)
} else {
    console.log('Hoje não é feriado')
} // Hoje é Ano Novo

```

## :recycle: Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

---

<h4 align=center>Made with 💙 by <a href="https://www.linkedin.com/in/gabriel-h-oliveira/">Gabriel Oliveira</a></h4>