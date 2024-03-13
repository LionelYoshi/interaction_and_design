console.log('这里是外联样式')
document.write('Hellow World!');
function sayhello(){
    var response = prompt("what is your name?");
    alert("hello " + response + ",have a nice day!");
};
//sayhello();

function showtopic(){
    var x = document.getElementById('demo');
    x.style.fontSize = "25px";
    x.style.color = "red";
}