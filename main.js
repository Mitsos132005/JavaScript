let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'firefox-icon.png') {
      myImage.setAttribute('src','firefox-icon2.png');
    } else {
      myImage.setAttribute('src','firefox-icon.png');
    }
}
