
// Owl Carousel Integration

$(document).ready(function(){ 
  $(".second_owl_carousel").owlCarousel({
    loop: true,
    center: true,
    dots: false,
    nav:false,
    items: 3,
    margin: 10, 
  });


  $(".second_owl_carousel_two").owlCarousel({
    loop: true,
    center: true,
    dots: false,
    nav:true,
    items: 3,
    margin: 10, 
    navText: ["<img src='assets/images/left.png'>","<img src='assets/images/right.png''>"]
  });


  // click first modal  
  $(document).on('click','.first_modal_show', function(){
    $('.third_model').hide();
    $('.second_model').hide();
    $('.first_modal').show();
  });

  // click second modal  
  $(document).on('click','.second_modal_show', function(){
    $('.second_model').show();
    $('.third_model').hide();
    $('.first_modal').hide();
  });

  // click third modal  
  $(document).on('click','.third_modal_show', function(){
    $('.third_model').show();
    $('.second_model').hide();
    $('.first_modal').hide();
  });

  // All modal Close 
  $(document).on('click','.close_btn', function(){
    $('.third_model').hide();
    $('.second_model').hide();
    $('.first_modal').hide();
  });

  // Bars btn 
  $(document).on('click','.bars_btn', function(){
    $('.menus_list').slideToggle(); 
    $(this).toggleClass('bars_btn_add');  
  });
 
});


document.addEventListener('DOMContentLoaded', function () {
  const audio = new Audio();
  let isPlaying = false;
  let currentIndex = 0;
  const songs = [
    {
      name: 'Song 1',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      name: 'Song 2',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      name: 'Song 3',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
    // Add more songs here
  ];

  // Elements
  const btnPlayPause = document.querySelector('.btn-toggle-play');
  const btnNext = document.querySelector('.btn-next');
  const btnPrev = document.querySelector('.btn-prev');
  const progress = document.querySelector('.progress');
  const iconPlayPause = btnPlayPause.querySelector('i'); // This selects the icon inside the play/pause button

  function loadSong(index) {
    audio.src = songs[index].src;
    audio.load();
  }

  function playSong() {
    audio.play();
    isPlaying = true;
    iconPlayPause.classList.remove('fa-play');  // Remove the play icon
    iconPlayPause.classList.add('fa-pause');    // Add the pause icon
  }

  function pauseSong() {
    audio.pause();
    isPlaying = false;
    iconPlayPause.classList.remove('fa-pause'); // Remove the pause icon
    iconPlayPause.classList.add('fa-play');     // Add the play icon
  }

  function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    playSong();
  }

  function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    playSong();
  }

  btnPlayPause.addEventListener('click', function () {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  btnNext.addEventListener('click', nextSong);
  btnPrev.addEventListener('click', prevSong);

  audio.addEventListener('timeupdate', function () {
    progress.value = (audio.currentTime / audio.duration) * 100;
  });

  progress.addEventListener('input', function () {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });

  // Load the first song on page load
  loadSong(currentIndex);
});
