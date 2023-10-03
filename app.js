const music = new Audio('images/audio/1.mp3');
// music.play();

const songs = [
  {
    id:1,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/1.jpg"
  },
  {
    id:2,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/2.jpg"
  },
  {
    id:3,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/3.jpg"
  },
  {
    id:4,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/4.jpg"
  },
  {
    id:5,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/5.jpg"
  },
  {
    id:6,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/6.jpg"
  },
  {
    id:7,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/7.jpg"
  },
  {
    id:8,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/8.jpg"
  },
  {
    id:9,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/9.jpg"
  },
  {
    id:10,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/10.jpg"
  },
  {
    id:11,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/11.jpg"
  },
  {
    id:12,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/12.jpg"
  },
  {
    id:13,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/13.jpg"
  },
  {
    id:14,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/14.jpg"
  },
  {
    id:15,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/15.jpg"
  },
  {
    id:16,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/16.jpg"
  },
  {
    id:17,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/17.jpg"
  },
  {
    id:18,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/18.jpg"
  },
  {
    id:19,
    songsName: 'hi<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/19.jpg"
  },
  {
    id:20,
    songsName: 'On My Way<br><div class="subtitle">Alan walker</div>',
    poster: "images/img/20.jpg"
  }

]

Array.from(document.getElementsByClassName('somgItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src =songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML =songs[i].songsName;

});
// mastr_play_button
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime <= 0){
music.play();
wave.classList.add('active1');
masterPlay.classList.remove('bi-play-fill');
masterPlay.classList.add('bi-pause-fill');
 }
    else{
music.pause();
wave.classList.remove('active1');
masterPlay.classList.add('bi-play-fill');
masterPlay.classList.remove('bi-pause-fill');
    }
});


const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('somgItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistply')).forEach((el) => {
el.classList.add('bi-play-circle-fill');
el.classList.remove('bi-pause-circle-fill');

    })
}


let index = 0;
let poster_mastr_play = document.getElementById('poster_mastr_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistply')).forEach((e)=>{
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `images/audio/${index}.mp3`;
        poster_mastr_play.src = `images/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
masterPlay.classList.add('bi-pause-fill');
wave.classList.add('active1');

let songTitles = songs.filter((els) => {
    return els.id == index;
});
songTitles.forEach(elss => {
    let {songsName}  = elss;
    title.innerHTML = songsName
});

makeAllBackground();
Array.from(document.getElementsByClassName('somgItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
   makeAllplays(); 
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');

});
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');


music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 <10){
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 <10){
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
let seekbar = seek.value;
bar2.style.width = `${seekbar}%`;
dot.style.left = `${seekbar}%`;

})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () =>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');

    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`; 
    vol_dot.style.left = `${vol_a}%`; 
music.volume = vol_a / 100;
});

let back = document.getElementById('backk');
let next = document.getElementById('nextt');

back.addEventListener('click', () => {
    index -= 1;
    if(index < 1){
index = Array.from(document.getElementsByClassName('somgItem')).length;

    }
    music.src = `images/audio/${index}.mp3`;
        poster_mastr_play.src = `images/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
masterPlay.classList.add('bi-pause-fill');
wave.classList.add('active1');

let songTitles = songs.filter((els) => {
    return els.id == index;
});
songTitles.forEach(elss => {
    let {songsName}  = elss;
    title.innerHTML = songsName
});

makeAllBackground();
Array.from(document.getElementsByClassName('somgItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
   makeAllplays(); 
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');

});

next.addEventListener('click', () => {
    index ++ ;
    if(index < Array.from(document.getElementsByClassName('somgItem')).length){
index = 1;
    }
    music.src = `images/audio/${index}.mp3`;
    poster_mastr_play.src = `images/img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
masterPlay.classList.add('bi-pause-fill');
wave.classList.add('active1');

let songTitles = songs.filter((els) => {
return els.id == index;
});
songTitles.forEach(elss => {
let {songsName}  = elss;
title.innerHTML = songsName
});

makeAllBackground();
Array.from(document.getElementsByClassName('somgItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
makeAllplays(); 
el.target.classList.remove('bi-play-circle-fill');
el.target.classList.add('bi-pause-circle-fill');

});



// first scrollbar
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})
// 2nd scrollbar
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
})