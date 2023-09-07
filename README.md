¿Qué sucedió al usar async y await?

Al utilizar async/await, las funciones asincrónicas como agregarTarea(), eliminarTarea(), completarTarea(), y la función mostrarMenu() se vuelven más legibles y fáciles de seguir. Esto permite que el código espere hasta que las promesas se resuelvan antes de continuar, lo que facilita el manejo de la lógica asíncrona.

¿Qué sucedió al usar el método then()?

Al utilizar el método then() para manejar las promesas, el código también puede manejar la lógica asincrónica de manera efectiva. Sin embargo, el código puede ser menos legible y propenso a anidar callbacks si se utilizan muchas promesas anidadas.

¿Qué diferencias encontraste entre async, await y el método then()?

Las principales diferencias entre async/await y el método then() son:

async/await hace que el código asincrónico parezca más sincrónico, lo que mejora la legibilidad. El método then(), en cambio, tiende a crear una estructura más anidada y puede ser menos legible en situaciones complejas, lo cual yo lo encuentro un poco mas engorroso
async/await usa la palabra clave await para esperar que una promesa se resuelva antes de continuar, mientras que el método then() utiliza cadenas de .then() para encadenar el manejo de promesas.
async/await permite el uso de bloques try/catch para manejar excepciones de manera más natural, mientras que en el método then(), se utilizan los callbacks de error para manejar excepciones.Amb
