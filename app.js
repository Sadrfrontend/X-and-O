const boxes = document.querySelectorAll('.box');
let move = 0;
boxes.forEach(item => {
    item.addEventListener('click', () => {
        if (move%2 === 0) {
            item.innerHTML = 'X'; 
        } else {
            item.innerHTML = '0';
        }
        move++;
        //console.log(item.target);
        check();
    })
    
})

function check() {

   let arr = [
      [0, 1, 2], 
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
  ]


   for(let i = 0; i < arr.length; i++) {
       if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
           alert('X won')
           location.reload();
       }
       if (boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0') {
        alert('0 won')
        location.reload();   
       }
    
   }
}




/*const boxes = document.querySelectorAll('.box');

boxes.forEach(item => {
    item.addEventListener('click', (event) => {
        event.target.innerHTML = 'X';
    })
    
})*/