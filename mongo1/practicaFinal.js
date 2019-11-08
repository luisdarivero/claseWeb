//se crea la base de Datos
db = db.getSiblingDB('videojuegos')
//se crea la colección de consolas
db.createCollection("consolas")
//Se inserta la informacion de la consolas
db.consolas.insert(
	{
		"_id":"ps4",
		"nombre":"Playstation 4",
		"imagen": "https://m.media-amazon.com/images/S/aplus-media/vc/9a5ff745-0686-4618-ae83-54c8c2f63f03._CR0,0,800,600_PT0_SX800__.jpg",
		"fichaTecnica": "The PlayStation 4 (officially abbreviated as PS4) is an eighth-generation home video game console developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 3 in February 2013, it was launched on November 15 in North America, November 29 in Europe, South America and Australia, and on February 22, 2014, in Japan. It competes with Microsoft's Xbox One and Nintendo's Wii U and Switch. ",
		"juegos":[
			1
		]
	}
)

db.consolas.insert(
	{
		"_id":"xbox",
		"nombre":"Xbox One",
		"imagen": "https://i2.wp.com/webadictos.com/media/2016/06/xbox-one-s.jpg?w=800&ssl=1",
		"fichaTecnica": "Xbox One es la tercera videoconsola de sobremesa de la marca Xbox, producida por Microsoft. Forma parte de las videoconsolas de octava generación, fue presentada por Microsoft el 21 de mayo de 2013",
		"juegos":[
			1,2
		]
	}
)

db.consolas.insert(
	{
		"_id":"nintendo",
		"nombre":"Nintendo Switch",
		"imagen": "https://venturebeat.com/wp-content/uploads/2017/01/NintendoSwitch_hardware_illustration_04.jpg?w=578&strip=all",
		"fichaTecnica": "Nintendo Switch (ニンテンドー スイッチ Nintendō Suitchi?) es la novena consola de videojuegos principal desarrollada por Nintendo. Conocida en el desarrollo por su nombre código «NX», se dio a conocer en octubre de 2016 y fue lanzada mundialmente el 3 de marzo de 2017.",
		"juegos":[
			3
		]
	}
)

db.consolas.insert(
	{
		"_id":"pc",
		"nombre":"Alienware",
		"imagen": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/w1600h900crop/public/field/image/2018/10/alienware-m15-press-shot.jpg?itok=u9go2bEl",
		"fichaTecnica": "Fundada en 1996 por Nelson González y Alex Águila, Alienware Corporation es una compañía de hardware estadounidense que ensambla computadoras de escritorio, portátiles, estaciones de trabajo y consolas de juegos de PC.",
		"juegos":[
			4
		]
	}
)
//se crea la colección de juegos
db.createCollection("juegos")
//se insertan los juegos
db.juegos.insert(
	{
		"_id":0,
		"nombre": "Fifa 2019",
		"imagenDePortada": "https://www.fifplay.com/img/public/wallpapers/fifa-16-wallpaper-messi-800x600.jpg",
		"developer" : "EA Sports",
		"fechaDeLanzamiento": new Date(),
		"imagenes": [
			{
				"Imagen 1": "https://www.fifplay.com/img/public/wallpapers/fifa-16-wallpaper-messi-fifa-1024x768.jpg",
				"Imagen 2": "https://www.fifplay.com/img/public/wallpapers/fifa-16-wallpaper-iniesta-1024x768.jpg",
				"Imagen 3": "https://www.fifplay.com/img/public/wallpapers/fifa-16-wallpaper-real-madrid-1024x768.jpg"
			}
		],
		"ligas": [
			{
				"liga 1": "https://www.playstation.com/en-us/games/fifa-19-ps4/",
				"liga 2": "https://www.amazon.com/FIFA-19-Standard-PlayStation-4/dp/B07DL2SY2B",
				"liga 3": "https://videojuegos.mercadolibre.com.mx/videojuegos/fifa/fifa-2019"
			}
		]
	}
)

db.juegos.insert(
	{
		"_id":1,
		"nombre": "Madden 2018",
		"imagenDePortada": "https://www.nydailynews.com/resizer/hzcxHSDvJXzs02QCriW1yzrFQCY=/800x600/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/BWSEZUL533M5A4PGOG6NUF2GGM.jpg",
		"developer" : "EA Sports",
		"fechaDeLanzamiento": new Date(),
		"imagenes": [
			{
				"Imagen 1": "https://i.imgur.com/BJ84Roz.jpg",
				"Imagen 2": "https://i.imgur.com/asFQ4j2.jpg",
				"Imagen 3": "https://2c9923b53g673je0445vajeq-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Madden-18-Articles-15-1024x768.jpg"
			}
		],
		"ligas": [
			{
				"liga 1": "https://www.amazon.com/Madden-NFL-18-PlayStation-4/dp/B071S1FT72?th=1",
				"liga 2": "https://www.hobbyconsolas.com/videojuegos/madden-nfl-2018",
				"liga 3": "https://www.ea.com/es-mx/games/madden/madden-nfl-overdrive/news/coaches-overview-jul-2018"
			}
		]
	}


)

db.juegos.insert(
	{
		"_id":2,
		"nombre": "Fortnite",
		"imagenDePortada": "https://image.businessinsider.com/5be1e8a8f556fc396f25544a?width=1100&format=jpeg&auto=webp",
		"developer" : "Epic Games",
		"fechaDeLanzamiento": new Date(),
		"imagenes": [
			{
				"Imagen 1": "https://images.wallpapersden.com/image/wxl-fortnite-x-avengers_64461.jpg",
				"Imagen 2": "https://contenidos.enter.co/custom/uploads/2019/01/photo_2019-01-30-15.25.10.jpeg",
				"Imagen 3": "https://www.desktopbackground.org/download/1024x768/2011/04/26/193941_epic-games-fortnite_1366x768_h.jpg"
			}
		],
		"ligas": [
			{
				"liga 1": "https://www.epicgames.com/fortnite/es-ES/download",
				"liga 2": "https://twitter.com/fortnite_es?lang=es",
				"liga 3": "https://www.youtube.com/channel/UCa2qf9O6eWrJPLY32gflbKA"
			}
		]
	}


)

//se crea la colección de entradas
db.createCollection("entradas")
//se insertan los juegos
db.entradas.insert({
	"autor" : "Andres Calva",
	"fecha" : new Date(),
	"texto": "Increible página!"
	}
)


db.entradas.insert({
	"autor" : "Andres Calva",
	"fecha" : new Date(),
	"texto": "Excelente página"
	}
)

db.entradas.insert({
	"autor" : "Andres Calva",
	"fecha" : new Date(),
	"texto": "Muy buena página"
	}
)

db.entradas.insert({
	"autor" : "Andres Calva",
	"fecha" : new Date(),
	"texto": "Amazing"
	}
)

db.entradas.insert({
	"autor" : "Andres Calva",
	"fecha" : new Date(),
	"texto": "Bella Ciao"
	}
)

//Obtener el nombre, imagen, y ficha técnica de una plataforma en específico, por medio de su id.
db.consolas.find({"_id":"ps4"}).forEach(function(consola){
	print("Punto 1: -----------------------------");
	print("Nombre:				" + consola.nombre);
	print("Imagen:   			" + consola.imagen);
	print("Ficha técnica:    	" + consola.fichaTecnica);
	print("Termina punto 1: -----------------------------");

})

db.consolas.find({"nombre":/a/i}).forEach(function(consola){
	print("Punto 2: -----------------------------");
	print("Nombre:				" + consola.nombre);
	print("Imagen:   			" + consola.imagen);
	print("Ficha técnica:    	" + consola.fichaTecnica);
	print("Termina punto 2: -----------------------------");
})

db.consolas.find({"_id":"xbox"}).forEach(function(consola){
	print("Punto 3: -----------------------------");
	consola.juegos.forEach(function(idJuego){
		print("");
		print("Para el juego con ID: " + idJuego  );
		db.juegos.find({"_id":idJuego}).forEach(function(documento){
			print(documento.nombre);
			print(documento.imagenDePortada);
		});
		print("");
	})
	print("Termina punto 3: -----------------------------");
})

db.juegos.find({"nombre":/a/i}).forEach(function(juego){
	print("Punto 4: -----------------------------");
	print(tojson(juego));
	print("Termina punto 4: -----------------------------");
})

db.juegos.find({"_id":1}).forEach(function(juego){
	print("Punto 5: -----------------------------");
	print("Nombre:				" + juego.nombre);
	print("Imagen de portada:   			" + juego.imagenDePortada);
	print("Developer:    	" + juego.developer);
	print("Fecha de lanzamiento:    	" + juego.fechaDeLanzamiento);
	print("Imagenes para carrousel:    	" + tojson(juego.imagenes));
	print("3 ligas:    	" + juego.ligas);
	print("Termina punto 5: -----------------------------");

})

db.entradas.find({}).forEach(function(entrada){
	print("Punto 6: -----------------------------");
	print(tojson(entrada));
	print("Termina punto 6: -----------------------------");
})
