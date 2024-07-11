var arr =[
   {dp:"https://images.unsplash.com/photo-1583766395091-2eb9994ed094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",story:"https://media.istockphoto.com/id/1465299636/photo/female-portrait-of-beautiful-woman-at-the-performance-show-indoors-fashion-style-with-light.webp?s=170667a&w=0&k=20&c=dFXzyWiQiCln2YMwq7Ft1VqfiMu-Yqnf7kjk97099EM="},
   {dp:"https://plus.unsplash.com/premium_photo-1664868840007-c0644c70796b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",story:"https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
{dp:"https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"},
{dp:"https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",story:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}
]

var storiya = document.querySelector("#storiya")
var clutter = ""
arr.forEach(function(elem,idx){
   clutter+= `
   <div id="story">
       <img id="${idx}" src="${elem.dp}" alt="">
   </div>`

})
storiya.innerHTML=clutter
storiya.addEventListener("click",function(dets){
   // arr[dets.target.id].story
   document.querySelector("#full-screen").style.display="block";
   document.querySelector("#full-screen").style.backgroundImage= `url(${arr[dets.target.id].story})`
setTimeout(function(){
   document.querySelector("#full-screen").style.display="none";
},3000)
});