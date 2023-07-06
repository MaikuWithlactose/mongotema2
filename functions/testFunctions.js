const Photo = require('./../models/photo');

// Dado un usuario, url de foto, título y descripción se debe guardar en la colección ‘photos’.
function uploadPhoto (userName, url, titulo, descripcion) {
  const foto = new Photo ({
    userName: userName,
    url: url,
    titulo: titulo,
    descripcion: descripcion
  });

  foto.save().then((data) => {
    console.log('foto creada correctamente');
  }).catch((err) => {
    console.log(err);
  });
}

// Dado un usuario obtener todas sus fotos.
function getAllPhotosOfUser(userName) {
  Photo.find({userName: userName}).then((data) => {
    console.log('fotos del usuario: ', data);
  }).catch((err) => {
    console.log(err);
  });
}


// Dado el título de una foto y una descripción modificar su descripción.
function updatePhotoDesciption(titulo, descripcion) {
  Photo.updateOne({ titulo: titulo }, { descripcion: descripcion }).then((data) => {
    console.log('descripción modificada correctamente');
  }).catch((err) => {
    console.log(err);
  });
}

// Dado un usuario y un título de foto eliminar su foto.
function deleteOnePhotoOfUser(userName, titulo){
  Photo.deleteOne({ userName: userName, titulo: titulo }).then((data) => {
    console.log('foto eliminada correctamente');
  }).catch((err) => {
    console.log(err);
  });
}

// Dado un usuario eliminar todas sus fotos.
function deleteAllPhotosOfUser(userName) {
  Photo.deleteMany({ userName: userName }).then((data) => {
    console.log('fotos eliminadas correctamente');
  }).catch((err) =>{
    console.log(err);
  });
}

module.exports = {
  uploadPhoto,
  getAllPhotosOfUser,
  updatePhotoDesciption,
  deleteOnePhotoOfUser,
  deleteAllPhotosOfUser
}
