const userLogin = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false;

    if (error) {
      onError(new Error("Erro no seu login"));
    }

    console.log("Usuario logado");
    onSuccess({ email });
  }, 1500);
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
};

const getVideoDetails = (video, callback) => {
    setTimeout (() => {
        callback({title: 'video one'})
    }, 2500)
}




const user = userLogin(
  "netopressao@gmail.com",
  "netolindo",
  (user) => {

    console.log({user})

    getUserVideos( user.email , (videos) => {
        console.log(videos)
        
        getVideoDetails(videos[0], (videoDetails) => {
            console.log( {videoDetails} )
        })
    })
},
  (error) => {
    console.log({ error });
  }
);
