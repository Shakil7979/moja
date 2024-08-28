
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

    return false;
  });

  // click second modal  
  $(document).on('click','.second_modal_show', function(){
    $('.second_model').show();
    $('.third_model').hide();
    $('.first_modal').hide();
    return false;
  });

  // click third modal  
  $(document).on('click','.third_modal_show', function(){
    $('.third_model').show();
    $('.second_model').hide();
    $('.first_modal').hide();
    return false;
  });

  // All modal Close 
  $(document).on('click','.close_btn', function(){
    $('.third_model').hide();
    $('.second_model').hide();
    $('.first_modal').hide();
    return false;
  });

  // Bars btn 
  $(document).on('click','.bars_btn', function(){
    $('.menus_list').slideToggle(); 
    $(this).toggleClass('bars_btn_add');  
    return false;
  });
 
});

document.addEventListener('DOMContentLoaded', function () {
  const audio = new Audio();
  let isPlaying = false;
  let currentIndex = 0;
  const songs = [
    { name: 'Song 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { name: 'Song 2', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { name: 'Song 3', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  ];

  const btnPlayPause = document.querySelector('.btn-toggle-play');
  const btnNext = document.querySelector('.btn-next');
  const btnPrev = document.querySelector('.btn-prev');
  const progress = document.querySelector('.progress');
  const startTimeDisplay = document.querySelector('.audio_start_time');
  const fullTimeDisplay = document.querySelector('.audio_full_time');
  const iconPlayPause = btnPlayPause.querySelector('i');

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function loadSong(index) {
    audio.src = songs[index].src;
    audio.load();

    // Once the song metadata is loaded, display the full duration
    audio.addEventListener('loadedmetadata', function () {
      fullTimeDisplay.textContent = formatTime(audio.duration);
    });
  }

  function playSong() {
    audio.play();
    isPlaying = true;
    iconPlayPause.classList.remove('fa-play');
    iconPlayPause.classList.add('fa-pause');
  }

  function pauseSong() {
    audio.pause();
    isPlaying = false;
    iconPlayPause.classList.remove('fa-pause');
    iconPlayPause.classList.add('fa-play');
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

  function updateProgressBar() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.value = percentage;

    // Update the start time display
    startTimeDisplay.textContent = formatTime(audio.currentTime);

    // Dynamically update the background color of the progress bar
    progress.style.background = `linear-gradient(to right, white ${percentage}%, #d3d3d3 ${percentage}%)`;
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

  audio.addEventListener('timeupdate', updateProgressBar);

  progress.addEventListener('input', function () {
    audio.currentTime = (progress.value / 100) * audio.duration;
    updateProgressBar();
  });

  // Load the first song on page load
  loadSong(currentIndex);
});

