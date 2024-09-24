Para crear un ambiente virtual Utilizaremos el símbolo del sistema, llamado CMD
-Crear un entorno
(mkdir: crear carpeta; mkdir proyecto: crear carpeta llamada proyecto.)
C:\Users> mkdir BigNumbers (creamos nuestra carpeta BigNumbers)
C:\Users> cd BigNumbers (para ingresar a nuestra carpeta llamado "BigNumbers")
C:\Users\BigNumbers>py -3 -m venv .venv (además creamos la carpeta .venv)
C:\Users\BigNumbers>venv\Scripts\activate (activamos el entorno)
También instalamos Flask con el siguiente comando: "$ pip install Flask"
C:\Users\BigNumbers>$ pip install Flask
Creamos una aplicación de prueba llamado "hola.py", y para abrir la aplicación desde el CMD utilizamos el siguiente comando:
C:\Users\BigNumbers>flask --app hola run
Para que tengamos activado el debug debemos poner lo siguiente:
C:\Users\BigNumbers>flask --app hola --debug run


Heroku (CMD)
Para ver si está instalado ponemos esto en el CMD
C:\Users\mikae> heroku
Para iniciar sesión
C:\Users\mikae> heroku login
Iniciamos sesión desde la página
(Nos aparece el correo registrado resaltado en un color distinto)
Para cerrar sesión
C:\Users\mikae> heroku logout

Otros comandos
C:\Users\mikae> heroku status
C:\Users\mikae> heroku apps
