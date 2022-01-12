const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const img = document.getElementById("img-main");
const vinyl = document.getElementById("img-sub");
const love = document.getElementById("love");
const mute = document.getElementById("un-mute");
const loop = document.getElementById("un-loop");

let isPlaying = false;
let songNumber = 0;
let isLooping = false;
let isLoving = false;


const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
    vinyl.classList.replace("vinyl-record-cancel", "vinyl-record");
};

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
    vinyl.classList.replace("vinyl-record", "vinyl-record-cancel");

};
play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
});

const loadSong = (song) => {
    title.textContent = song.title;
    artist.style.fontStyle = "italic";
    artist.textContent = "--- " + song.artist + " ---";
    music.src = "Music/" + song.track + ".mp3";
    img.src = "./public/artics/" + song.image + ".jpg";
};

next.addEventListener("click", () => {
    songNumber++;
    loadSong(songs[songNumber % songs.length]);
    playMusic();
});
prev.addEventListener("click", () => {
    --songNumber;
    loadSong(songs[songNumber % songs.length]);
    playMusic();
});
//--------------------------------------------------------------------------//
const inLove = () => {
    isLoving = true;
    love.src = "./public/heart.ico";
};
const outLove = () => {
    isLoving = false;
    love.src = "./public/unheart.ico";
};
love.addEventListener("click", () => {
    isLoving ? outLove() : inLove();
});
//---------------------------------------------------------------------------//
const inLoop = () => {
    isLooping = true;
    music.loop = true;
    loop.src = "./public/one_repeat.ico";
};
const outLoop = () => {
    isLooping = false;
    music.loop = false;
    loop.src = "./public/un_repeat.ico";
};
loop.addEventListener("click", () => {
    isLooping ? outLoop() : inLoop();
});

//---------------------------------------------------------------------------//
const songs = [
    //1
    {
        title: "Comethru",
        artist: "Jeremy Zucker",
        image: "comethru",
        track: "comethru"
    },
    //2
    {
        title: "Make you mine",
        artist: "Public - The Band",
        image: "make_you_mine",
        track: "make you mine"
    },
    //3
    {
        title: "Hãy trao cho anh",
        artist: "Sơn Tùng M-TP",
        image: "hay_trao_cho_anh",
        track: "hay trao cho anh"
    },
    //4
    {
        title: "Butterfly",
        artist: "Nonstop",
        image: "hay_trao_cho_anh",
        track: "butterfly"
    },
    //5
    {
        title: "Ép duyên",
        artist: "Long nón lá",
        image: "hay_trao_cho_anh",
        track: "ep duyen"
    },
    //6
    {
        title: "Legend never die",
        artist: "Alan Walker",
        image: "comethru",
        track: "legends never die"
    },
    //7
    {
        title: "Lục dã Tiên Dung",
        artist: "Various unknown",
        image: "make_you_mine",
        track: "luc da tien dung"
    },
    //8
    {
        title: "The style weeken",
        artist: "Thailand sound",
        image: "hay_trao_cho_anh",
        track: "the style weeken"
    },
    //9
    {
        title: "Tình yêu màu hồng",
        artist: "Văn Quý x Xám",
        image: "hay_trao_cho_anh",
        track: "tinh yeu mau hong"
    },
    //10
    {
        title: "Hẹn yêu",
        artist: "Phan Yến Nhi x FreakD",
        image: "hay_trao_cho_anh",
        track: "hen yeu"
    },
    //11
    {
        title: "Hello friend",
        artist: "Tiktok sound",
        image: "hay_trao_cho_anh",
        track: "hello friend"
    },
    //12
    {
        title: "Umbrella",
        artist: "Ember Island",
        image: "umbrella",
        track: "umbrella"
    },
    //13
    {
        title: "Bên anh đêm nay remix",
        artist: "DJ AM mix",
        image: "ben_anh_dem_nay",
        track: "ben anh dem nay"
    },
    //14
    {
        title: "I'm not her",
        artist: "Clara Mae",
        image: "i_am_not_her",
        track: "i am not her"
    },
    //15
    {
        title: "Trouble is friend",
        artist: "DJ Thái Hoàng",
        image: "trouble_is_a_friend",
        track: "trouble is a friend remix"
    },
    //16
    {
        title: "Weyrleader",
        artist: "Maga",
        image: "maga_weyrleader",
        track: "maga weyrleader"
    },
];