

let title = document.querySelector('.title');
let turn = 'x';
let sqaure =[];

function end(num1,num2,num3){
    title.innerHTML = `${sqaure[num1]} winner`
    document.getElementById('sq'+num1).style.background = 'black';
    document.getElementById('sq'+num2).style.background = 'black';
    document.getElementById('sq'+num3).style.background = 'black';

    setInterval(function(){title.innerHTML += '.'},500)
    setTimeout(function(){location.reload()},2000)
}

function winner(){
    for(let i = 1; i<10; i++){
        sqaure[i] = document.getElementById('sq' + i).innerHTML;
    }
    if(sqaure[1]==sqaure[2] && sqaure[2]==sqaure[3] && sqaure[1] != ''){
        end(1,2,3)
    }else if(sqaure[4]==sqaure[5] && sqaure[5]==sqaure[6] && sqaure[4] != ''){
        end(4,5,6)
    }else if(sqaure[7]==sqaure[8] && sqaure[8]==sqaure[9] && sqaure[7] != ''){
        end(7,8,9)
    }else if(sqaure[1]==sqaure[4] && sqaure[4]==sqaure[7] && sqaure[4] != ''){
        end(1,4,7)
    }else if(sqaure[2]==sqaure[5] && sqaure[5]==sqaure[8] && sqaure[8] != ''){
        end(2,5,8)
    }else if(sqaure[3]==sqaure[6] && sqaure[6]==sqaure[9] && sqaure[3] != '' ){
        end(3,6,9)
    }else if(sqaure[1]==sqaure[5] && sqaure[5]==sqaure[9] && sqaure[9] != '' ){
        end(1,5,9)
    }else if(sqaure[3]==sqaure[5] && sqaure[5]==sqaure[7] && sqaure[3] != ''){
        end(3,5,7)
    }

}
function game(id)
{
    let element = document.getElementById(id);
    if(turn == 'x' && element.innerHTML == ''){
        element.innerHTML = 'x';
        title.innerHTML = 'O';
        turn = 'o';
    }else if(turn == 'o' && element.innerHTML == ''){
        element.innerHTML = 'o';
        title.innerHTML = 'X';
        turn = 'x';
    }
    winner();
}