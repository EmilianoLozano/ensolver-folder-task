Versiones 
Backend:
API .Net Core 6.0.102
Microsoft SQL Server Express 15.0
Frontend:
Angular CLI 13.1.2
Node 14.17.6
Editor : Visual Studio Code

Para ejecutar Back end que se encuentra en la rama main
- Primero se debe crear la base de datos con una migracion con los siguientes comandos
Desde la terminal, en la carpeta clonada apuntando a Backend, por ejemplo "C:\EnsolverChallenge\ensolver-folder-task\BackEnd\Tareas_Pendiente_API\Tareas_Pendiente_API"
Ejecutar  1- dotnet ef migrations add FirstMigration
          2- dotnet ef database update
Luego de creada la base de datos podemos ejecutar el comando para correr la aplicacion
          3- dotnet run


El Frontend se encuentra en la rama master.
Para ejecutarlo desde visual studio code hay que instalar los node packages
 1- npm install
 2- ng serve --o
 Tambien se puede acceder desde la url: https://challenge-ensolver.netlify.app/
 
 SIMULACRO DE LOGIN
 username : emi_task
 password : folder123
