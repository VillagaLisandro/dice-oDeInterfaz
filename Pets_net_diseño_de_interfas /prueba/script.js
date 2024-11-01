function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
// Obtener los elementos necesarios
const searchInput = document.getElementById('searchInput');
const itemsList = document.getElementById('itemsList');

// Función para filtrar los elementos
function filterItems() {
  const searchTerm = searchInput.value.toLowerCase();
  const items = itemsList.getElementsByTagName('li');

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.indexOf(searchTerm) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
}

// Escuchar el evento de entrada en el campo de búsqueda
searchInput.addEventListener('keyup', filterItems);