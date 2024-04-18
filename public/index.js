const openSideBar = document.getElementById('open_sidebar');
const closeSideBar = document.getElementById('close_sidebar');
const search = document.querySelector('input');
const clear = document.getElementById('clear');

const open = () => {
  document.getElementById('mySidebar').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
  document.getElementById('main').style.opacity = '0.2';
};

const close = () => {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.getElementById('main').style.opacity = '1';
};

const toggleClearButton = () => {
  clear.style.display = search.value.length > 0 ? 'inline-block' : 'none';
};

const clearInputField = () => {
  search.value = '';
  clear.style.display = 'none';
};

openSideBar.addEventListener('click', open);

closeSideBar.addEventListener('click', close);

search.addEventListener('input', toggleClearButton);

clear.addEventListener('click', clearInputField);

if (
  window.location.pathname === '/' ||
  window.location.pathname === 'index.html'
) {
  document.getElementById('searchBtn').style.display = 'none';
} else {
  document.getElementById('searchBtn').classList.remove('hidden');
}
