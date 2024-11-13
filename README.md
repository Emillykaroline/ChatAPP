

Rodar o projeto

```
npx expo start
```

## Possiveis problemas e solucoes

Expo SDK e bibliotecas estão sempre atualizando suas versões e descontinuando outras - antes de instalar as bibliotecas, execute:

```
yarn add expo@latest
```

Em seguida:

```
  npx expo install --fix
```

versoes antigas de `react-native-gifted-chat` podem apresentar problemas - se necessario, instalar a mais recente:

```
npx expo install react-native-gifted-chat@latest
```

Se necessario, o Expo mostrará quais dependências precisam ser atualizadas, instale as dependencias sugeridas. Após isso, é possível que haja cache e você precise limpá-lo

```
yarn start --reset-cache
```

