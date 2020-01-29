const button = document.querySelector('button'); // HTML 제출버튼
const elInput = document.querySelector('#input'); //HTML input 
const elUl = document.querySelector('#list'); //HTML UL 
function handleClick(){
    const currentVal = elInput.value; 
    paintTodo(currentVal);
    elInput.value =''; //값 넣고 제출했을때 공백으로 보이게. 
}
button.onclick = handleClick;
function paintTodo(text){
    const elLi = document.createElement("li"); 
    const delBtn = document.createElement('button');
    delBtn.innerText = 'x';
    const span = document.createElement("span");
    span.innerText = text +" "; //버튼하고 마지막글씨 사이때문에 공백넣음
    elLi.appendChild(span); //li에 글씨
    elLi.appendChild(delBtn); //li에 버튼
    elUl.appendChild(elLi); //ul에 li붙여주기
    delBtn.addEventListener("click", deleteTodo); //삭제버튼 }
function deleteTodo(){ 
    const btn = event.target; //클릭하는 li 엘리먼트를 나타낸다.
    const li = btn.parentNode; //console.dir(btn)으로 확인해보면 부모노드가 li로 나타남.
    elUl.removeChild(li); //ul에 li달려있으니 삭제. }