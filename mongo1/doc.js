
db = db.getSiblingDB('info_tec')
db.createCollection("campus")

db.campus.insert(
    { "_id" : "CEM" , "nombre" : "Campus Estado de México" }
)

db.campus.find()

db.createCollection("alumno")

db.alumno.insert(
    { "campus" : "CEM" , "nombre" : "Juan Perez" , "matricula" : "00954558" ,
        "materias" : [
            { "_id" : "TC3052" , "nombre" : "Laboratorio de Desarrollo de Aplicaciones Web" } ,
            { "_id" : "TC2026" , "nombre" : "Desarrollo de Aplicaciones Web" },
            { "_id" : "TC2025" , "nombre" : "Programacion Avanzada" }
        ]
    }
)
db.alumno.insert(
    { "campus" : "CEM" , "nombre" : "Pedro Gonzalez" , "matricula" : "00954548" ,
        "materias" : [
            { "_id" : "TC3052" , "nombre" : "Laboratorio de Desarrollo de Aplicaciones Web" } ,
            { "_id" : "TC2025" , "nombre" : "Programacion Avanzada" }
        ]
    }
)
db.alumno.insert(
    { "campus" : "CEM" , "nombre" : "Hugo Ramirez" , "matricula" : "00954538" ,
        "materias" : [
            { "_id" : "TC3052" , "nombre" : "Laboratorio de Desarrollo de Aplicaciones Web" } ,
            { "_id" : "TC2026" , "nombre" : "Desarrollo de Aplicaciones Web" }
        ]
    }
)
db.alumno.insert(
    { "campus" : "CEM" , "nombre" : "Francisco Hernandez" , "matricula" : "00954528" ,
        "materias" : [
            { "_id" : "TC3052" , "nombre" : "Laboratorio de Desarrollo de Aplicaciones Web" } ,
            { "_id" : "TC2026" , "nombre" : "Desarrollo de Aplicaciones Web" },
            { "_id" : "TC1018" , "nombre" : "Estructura de Datos" }
        ]
    }
)

db.alumno.find()

//db.alumno.find( { "matricula" : "00954538" } )

//db.alumno.find( { "matricula" : /009545/ } )

//db.alumno.find( { "materias._id" : "TC2025" } ):
