$('.hamb-container').on('click', function() {
    $(this).toggleClass('open');
    $('.menu').toggleClass('slide');
  });

var showQModal = (department) => {
  var sQModal = new bootstrap.Modal(document.getElementById("sendWhatsappModal"), {Keyboard: false});
  sQModal.show();
  $('#sendWhatsappModalTitle').text(department);
}

//open whatsapp model
//removed. replaced with direct chat on whatsapp 
$('.WTbtn').on("click", (e) => {
  e.preventDefault();
  showQModal("Website");
});

//website quotation
$('.reqQt').on("click", (e) => {
  e.preventDefault();
  var qtModal = new bootstrap.Modal(document.getElementById("sendQuoteModal"), {Keyboard: false});
  qtModal.show();
});

// custom carousel
/* const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
}) */