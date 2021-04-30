function flipMode(){
    if(document.body.style.backgroundColor==="#000000"){
      document.body.style.color="#000000";
    document.body.style.backgroundColor="#FFFFFF";
    }
    else if(document.body.style.backgroundColor==="#FFFFFF"){
      document.body.style.backgroundColor="#000000";
    document.body.style.color="#FFFFFF";
    }
  }
  function nightMode(){

    document.body.style.backgroundColor="#000000";
    document.body.style.color="#FFFFFF";
  }
  function dayMode(){
    document.body.style.color="#000000";
    document.body.style.backgroundColor="#FFFFFF";
  }
  function enlarge(x){
    nightMode();
    x.style.width="250px";
    x.style.height="250px";
  }
  function dimnish(x){
    dayMode();
    x.style.width="200px";
    x.style.height="200px";
  }