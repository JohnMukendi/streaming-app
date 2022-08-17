import { 
  MaterialCommunityIcons,MaterialIcons,
  FontAwesome5,Ionicons,
  Entypo,Feather
 } from '@expo/vector-icons';

const iconColor = '#FFD70080'
const iconSize = 20
export const categories = [
     {
      "name": "Action",
      "uuid": "accion",
      icon : <MaterialCommunityIcons  name="pistol" size={iconSize} color={iconColor} />
    },
     {
      "name": "Animation",
      "uuid": "animacion",
      icon : <MaterialCommunityIcons name="rabbit" size={iconSize} color={iconColor} />
    },
     {
      "name": "Adventure",
      "uuid": "aventura",
      icon : <MaterialCommunityIcons name="pine-tree" size={iconSize} color={iconColor} />
    },
     {
      "name": "Science-Fiction",
      "uuid": "ciencia-ficcion",
      icon : <MaterialIcons name="science" size={iconSize} color={iconColor} />
    },
     {
      "name": "Comedy",
      "uuid": "comedia",
      icon : <FontAwesome5 name="laugh-squint" size={iconSize} color={iconColor} />
    },
     {
      "name": "Crime",
      "uuid": "crimen",
      icon : <MaterialCommunityIcons name="knife" size={iconSize} color={iconColor} />
    },
     {
      "name": "Documentary",
      "uuid": "documental",
      icon : <Ionicons name="ios-documents-sharp" size={iconSize} color={iconColor} />
    },
     {
      "name": "Drama",
      "uuid": "drama",
      icon : <MaterialCommunityIcons name="drama-masks" size={iconSize} color={iconColor} />
    },
     {
      "name": "Fantasy",
      "uuid": "fantasia",
      icon : <MaterialCommunityIcons name="star-shooting" size={iconSize} color={iconColor} />
    },
     {
      "name": "Foreign",
      "uuid": "foreign",
      icon : <Entypo name="globe" size={iconSize} color={iconColor} />
    },
     {
      "name": "War",
      "uuid": "guerra",
      icon : <MaterialCommunityIcons name="tank" size={iconSize} color={iconColor} />
    },
     {
      "name": "Historical",
      "uuid": "historia",
      icon : <FontAwesome5 name="history" size={iconSize} color={iconColor} />
    },
     {
      "name": "Television Film ",
      "uuid": "pelicula-de-la-television",
      icon : <Feather name="tv" size={iconSize} color={iconColor} />
    },
     {
      "name": "Romance",
      "uuid": "romance",
      icon : <Ionicons name="rose" size={iconSize} color={iconColor} />
    },
     {
      "name": "Suspense",
      "uuid": "suspense",
      icon : <MaterialIcons name="waves" size={iconSize} color={iconColor} />
    },
     {
      "name": "Terror",
      "uuid": "terror",
      icon : <MaterialCommunityIcons name="skull-crossbones" size={iconSize} color={iconColor} />
    },
     {
      "name": "Western",
      "uuid": "western",
      icon : <FontAwesome5 name="hat-cowboy-side" size={iconSize} color={iconColor} />
    },
     {
      "name": "Mystery",
      "uuid": "misterio",
      icon : <MaterialIcons name="waves" size={iconSize} color={iconColor}  />
    }
  ]