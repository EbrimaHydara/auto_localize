if (typeof localStorage !== 'undefined') {

  localStorage.clear();

    var pathname = window.location.pathname;
    var param = location.search;

    localStorage.setItem('sessionPath', pathname);
    localStorage.setItem('sessionParam', param);

    location.href = "/hikari/pitari/index.html";
      
  } else {
    location.href = "/hikari/index_a.html";
  }