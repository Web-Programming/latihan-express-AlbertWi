
//Ini Controller Index
const index = (req,res) => {
    res.render ("index",{title:"Express MVC"});
}
//Controller kontak
const kontak = (req,res) => {
    res.render ("kontak",{title:"Ini halaman Kontak"});
}

//Controller Profile
const profile = (req,res) => {
    res.render ("profile",{title:"Ini halaman profile"});
}
module.exports ={ index, kontak,profile};