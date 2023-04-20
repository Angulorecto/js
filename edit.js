javascript:
var g_6z;
function cI_6z(){
  var ctx_6z = new AudioContext();
  var el_6z = document.querySelector("video") ?%20document.querySelector(%22video%22)%20:%20document.querySelector(%22audio%22)?%20document.querySelector(%22audio%22):alert(%27Media%20DOM%20not%20exist.%20Aborting.%27);%20if%20(el_6z){%20g_6z%20=%20ctx_6z.createGain();
  %20g_6z.gain.value%20=%201;
  %20var%20src_6z%20=%20ctx_6z.createMediaElementSource(el_6z);
  %20src_6z.connect(g_6z).connect(ctx_6z.destination);
  %20var%20p%20=%20document.createElement(%22div%22);
  %20p.innerHTML%20=%20`%3Cdiv%20class=vpc_6z%20id=vpc_6z%3E%3Cstyle%3E.vpc_6z{float:right;width:25%;position:fixed;bottom:0;padding:20px%2020px;z-index:9999999;background:#444;color:#fff}.vpc_6z-hide{position:fixed;background:#444;padding:0;width:80px;height:30px;bottom:0;z-index:999999}.vpi_6z-hide{display:none}%3C/style%3E%3Cbutton%20onclick='d=document.getElementById(%22vpi_6z%22),%22vpi_6z%22==d.getAttribute(%22class%22)?d.setAttribute(%22class%22,%22vpi_6z-hide%22):d.setAttribute(%22class%22,%22vpi_6z%22),c=document.getElementById(%22vpc_6z%22),%22vpc_6z%22==c.getAttribute(%22class%22)?c.setAttribute(%22class%22,%22vpc_6z-hide%22):c.setAttribute(%22class%22,%22vpc_6z%22)'style=float:right;cursor:pointer;width:80px;height:30px%3EX%3C/button%3E%3Cdiv%20class=vpi_6z%20id=vpi_6z%3E%3Cbutton%20onclick='document.getElementById(%22vpc_6z%22).remove()'%3EDestroy%20Panel%3C/button%3E%3Ch1%3EBass%20Boost%20Percent:%20%3Cspan%20id=volumeControl_e%3E%3C/span%3E%3C/h1%3E%3Cinput%20max=1900%20min=1%20onchange='v=this.value,cG_6z(v),document.getElementById(%22volumeControl_e%22).innerHTML=1*v+100,console.log(v)'style=width:100%%20type=range%20value=1%3E%3C/div%3E%3C/div%3E%60;
  %20document.body.appendChild(p);%20}%20};
  %20function%20cG_6z(v){
    %20g_6z.gain.value%20=%20v;
  %20};
  %20cI_6z(1);
