// Tangkap elemen-elemen pagination
var pageLinks = document.querySelectorAll('.page');

// Tambahkan event listener untuk setiap link halaman
pageLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Panggil fungsi yang ingin Anda jalankan saat halaman diubah
    var page = link.getAttribute('data-page');
    changePage(page); // Gantikan "changePage" dengan nama fungsi yang sesuai
  });
});

function changePage(page) {
    // Tampilkan/menyembunyikan elemen berdasarkan halaman yang dipilih
    switch (page) {
        case '1':
          document.getElementById('ele1').style.display = 'block';
          document.getElementById('ele2').style.display = 'block';
          document.getElementById('ele3').style.display = 'block';
          document.getElementById('ele4').style.display = 'none';
          document.getElementById('ele5').style.display = 'none';
          document.getElementById('ele6').style.display = 'none';
          document.getElementById('ele7').style.display = 'none';
          document.getElementById('ele8').style.display = 'none';
          break;
        case '2':
          document.getElementById('ele1').style.display = 'none';
          document.getElementById('ele2').style.display = 'none';
          document.getElementById('ele3').style.display = 'none';
          document.getElementById('ele4').style.display = 'block';
          document.getElementById('ele5').style.display = 'none';
          document.getElementById('ele6').style.display = 'none';
          document.getElementById('ele7').style.display = 'none';
          document.getElementById('ele8').style.display = 'none';
          break;
        case '3':
          document.getElementById('ele1').style.display = 'none';
          document.getElementById('ele2').style.display = 'none';
          document.getElementById('ele3').style.display = 'none';
          document.getElementById('ele4').style.display = 'none';
          document.getElementById('ele5').style.display = 'block';
          document.getElementById('ele6').style.display = 'none';
          document.getElementById('ele7').style.display = 'none';
          document.getElementById('ele8').style.display = 'none';
          break;
        case '4':
          document.getElementById('ele1').style.display = 'none';
          document.getElementById('ele2').style.display = 'none';
          document.getElementById('ele3').style.display = 'none';
          document.getElementById('ele4').style.display = 'none';
          document.getElementById('ele5').style.display = 'none';
          document.getElementById('ele6').style.display = 'block';
          document.getElementById('ele7').style.display = 'none';
          document.getElementById('ele8').style.display = 'none';
          break;
        case '5':
          document.getElementById('ele1').style.display = 'none';
          document.getElementById('ele2').style.display = 'none';
          document.getElementById('ele3').style.display = 'none';
          document.getElementById('ele4').style.display = 'none';
          document.getElementById('ele5').style.display = 'none';
          document.getElementById('ele6').style.display = 'none';
          document.getElementById('ele7').style.display = 'block';
          document.getElementById('ele8').style.display = 'none';
          break;
        case '6':
          document.getElementById('ele1').style.display = 'none';
          document.getElementById('ele2').style.display = 'none';
          document.getElementById('ele3').style.display = 'none';
          document.getElementById('ele4').style.display = 'none';
          document.getElementById('ele5').style.display = 'none';
          document.getElementById('ele6').style.display = 'none';
          document.getElementById('ele7').style.display = 'none';
          document.getElementById('ele8').style.display = 'block';
          break;
        default:
          // Default action jika halaman tidak valid
          break;
      }
  }
  