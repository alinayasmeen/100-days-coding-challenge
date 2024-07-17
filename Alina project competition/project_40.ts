// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information.

function make_album(Object:string,){
    let album:unknown = {
        artist: Object,
        album_title: "New Album",
    };
    return album;

};

console.log(make_album("Chen ZheYuan"));

//Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.

function make_album2(Object:string,title:string){
    let album:unknown = {
        artist: Object,
        album_title: title,
    };
    return album;

};
console.log(make_album2("Ali Zaffar","Album1"));

console.log(make_album2("Atif Aslam","Album3"));

console.log(make_album2("Justin Bieber","Sorry"));


// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.



function make_album3(Object:string,title:string,tracks?:number){

    let album: unknown = {
        artist: Object,
        album_title: title,
        number_of_tracks: tracks || 0,
    };
    return album;
};

console.log(make_album3("Adele","21"));

console.log(make_album3("Rihanna","Anti",15));


