function inicio() {
    var el = document.getElementsByTagName("div")[0];
    el.addEventListener('click', click);

    if (window.DeviceOrientationEvent){
      window.addEventListener("deviceorientation", orientacion);
    }
  }

  window.onload = inicio;
    /**
   * 
   * @param {DeviceOrientationEvent} e 
   */
  function orientacion(e){
    document.getElementById('div').style.transform = "rotate("+e.alpha+"deg)";
  }

  function click(){
      alert('click');
  }