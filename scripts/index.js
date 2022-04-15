var i = 0;
var img = [];

//image list
img[0] = 'img4.jpg';
img[1] = 'img1.jpg';
img[2] = 'img2.jpg';
img[3] = 'img3.jpg';

//change image

function slideshow(){
    document.slide.src = img[i];

    if(i<img.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slideshow()", 3000)
}
window.onload = slideshow;

//movie poster
const movies = [
    {
        name: 'Bhoot Police',
        date: 2021,
        url: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6473/1116473-h-ee4afe73ac98' ,
    },
    {
        name: 'Avenger: Endgame',
        date: 2019,
        url: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4469/674469-h',
    },
    {
        name: 'Shang Chi',
        date: 2021,
        url: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8720/1078720-h-125f68c67f48',
    },
    {
        name: 'The Dark Knight',
        date: 2008,
        url: 'https://images-na.ssl-images-amazon.com/images/I/91ebheNmoUL._RI_.jpg',
    },
    {
        name: 'Jungle Cruise',
        date: 2021,
        url: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8687/1078687-h-029e9d313239',
    },
    {
        name: 'Thor',
        date: 2011,
        url: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4595/674595-h',
    },
    {
        name: 'The Lion King',
        date: 2019,
        url: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4600/674600-h',
    },
    {
        name: 'Iron Man 2',
        date: 2010,
        url: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4570/674570-h',
    },
    {
        name: 'Pirates of carribbean : The Curse of Black Pearls',
        date: 2003,
        url: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4447/674447-h',
    }
    
    ]
    
    if(localStorage.getItem('movies')==null){
    localStorage.setItem('movies', JSON.stringify(movies))
    }
    
    let showMovies= document.getElementById('movies')
    
    function appendMovies(data){
    showMovies.innerHTML=null
    
    data.forEach(function(el){
        let div = document.createElement('div')
    
        let pName = document.createElement('p')
        pName.innerHTML = `${el.name}`
    
        let pDate = document.createElement('p')
        pDate.innerHTML = `${el.date}`
    
        let pImg = document.createElement('IMG')
        pImg.src = `${el.url}`
    
        div.append(pName, pDate, pImg)
    
        div.setAttribute('width', '300px')
    
        showMovies.append(div)
    })
    
    }
    
    let data = JSON.parse(localStorage.getItem('movies'))
    
    appendMovies(data)

    appendMovies(data)

    function sortLH(){
    let sortmovies = JSON.parse(localStorage.getItem(movies))
    sortmovies = movies.sort(function (a,b){
        return a.date-b.date
    })
    appendMovies(sortmovies)
    }
    function sortHL(){
    let sortmovies = JSON.parse(localStorage.getItem(movies))
    sortmovies = movies.sort(function (a,b){
        return b.date-a.date
    })
    appendMovies(sortmovies)
    }
