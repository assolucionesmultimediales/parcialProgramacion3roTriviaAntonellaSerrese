# Parcial Programación 3 - Ocubre 2024 - Trivia

## Objetivos

A esta aplicacion desarrollada en NextJs 14 le faltan algunas funciones e implementaciones. Se deben completar donde se indica según cada punto. No agregar mas parámetros o componentes de los ya dados.

No está permitido el uso de ningun sistema de AI (chatGPT, copilot u otros asistentes). En caso de utilización el examen será invalidado y quedará desaprobado, por más minimo que sea. Pueden consultar apuntes, trabajos anteriores o buscar en Google.

## Puntos a resolver

### 1
En la página /trivia, obtener el response de la función `` getAllQuestionsDB ``. Luego recorrer el objeto obtenido (response.questions) mediante map donde se indica.

Para cada item del map se debe mostrar el componente ``QuestionCard``, el cual recibe como prop ``question`` con su valor correspondiente.

No olvidar agregar await al llamar a la función y key en el map.

### 2

En el componente ``QuestionCard`` se debe agregar un link a la question correspondiente utilizando como parametro el questionId (question.questionId) y el title de la question (question.title)

### 3 

En la page /question/[questionId] se debe obtener la información de ``getOneQuestionDB`` y ``getAllAnswersDB`` utilizando como parámetro ``questionId``.

Luego agregar el componente ``QuestionSingle`` pasandole como props ``questionResponse`` y ``answersResponse``.

### 4 

En el componente ``AnswerCard`` se debe agregar un evento de click al botón, invocando a la función ``handleSetUserResponses`` del context, la cual recibe dos parametros. Identificar cuales son inspeccionando el context ``/contexts/AppContext``


### 5
En la página /ranking, se muestra el componente RankingSingle.

Dentro de este componente se debe utilizar axios, useEffect y useState para mostrar el listado de usuarios rankeados.

La url para obtener los usuarios es ``http://localhost:3000/api/ranking``.

Recordar el uso de loading y try/catch al momento de obtener la información (response.data.ranking)

### 6
Agregar estilos y mejorar el diseño de la aplicación. Las questionCards soportan imagenes, las mismas se deben llamar busqueda.png, algoritmo.png, html.png, windows.png, machine_learning.png y deben estar ubicadas en la carpeta public.