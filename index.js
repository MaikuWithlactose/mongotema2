const mongoose = require("mongoose");

const {
  uploadPhoto,
  getAllPhotosOfUser,
  updatePhotoDesciption,
  deleteOnePhotoOfUser,
  deleteAllPhotosOfUser
} = require('./functions/testFunctions');

mongoose.connect('mongodb://localhost:27017/photos',
                {useNewUrlParser: true,
                useUnifiedTopology: true})
.then((db) => {
  console.log("database connected on " + db.connection.host);
  // DESCOMENTAR LAS FUNCIONES QUE SE QUIERAN PROBAR
  // uploadPhoto('maika', 'https://www.readandcobooks.co.uk/wp-content/uploads/dunwich-horror-lovecraft-9781447468554-cover-288x445.jpg', 'portada libro 1', 'es la portada del libro pero sólo para probar');
  // uploadPhoto('maika', 'https://www.readandcobooks.co.uk/wp-content/uploads/at-mountains-of-madness-lovecraft-9781447468806-cover-288x445.jpg', 'portada libro 2', 'es la portada del libro pero sólo para probar');
  // uploadPhoto('maika', 'https://www.readandcobooks.co.uk/wp-content/uploads/at-mountains-of-madness-lovecraft-9781447468806-cover-288x445.jpg', 'portada libro 3', 'es la portada del libro pero sólo para probar');
  // getAllPhotosOfUser('maika');
  // updatePhotoDesciption('portada libro 1', 'modificando la descripción');
  // deleteOnePhotoOfUser('maika', 'portada libro 3');
  // deleteAllPhotosOfUser('maika');
}).catch((error) => {
  console.log(error);
});
