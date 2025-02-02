let degree=3;
let bomb=2;
let clicks=(degree*degree)-bomb;

const container=document.querySelector('#tilecontainer');
container.classList.add(`grid-rows-${degree}`);
container.classList.add(`grid-cols-${degree}`);

for(let i=0;i<degree*degree;i++){
    const newTile=document.createElement('div');
    newTile.classList.add('tile');
    container.appendChild(newTile);
}
const alltiles=document.getElementsByClassName('tile');
const allTilesArray = Array.from(alltiles);

let grid=[];
for(let i=0;i<degree;i++){
    let row=[];
    for(let j=0;j<degree;j++){
        row.push("");
    }
    grid.push(row);
}



function startgame(){
    let count=bomb;
    while(count>0){
        const x=Math.floor(Math.random()*degree);
        const y=Math.floor(Math.random()*degree);

        if(grid[x][y]==="B") continue;

        grid[x][y]="B";
        count--;
    }


for(let i=0;i<degree;i++){
    for(let j=0;j<degree;j++){

        if(grid[i][j]==="B") continue;
        let bombCount=0;
        if(i-1>=0 && grid[i-1][j]==="B") bombCount++;
        if(i-1>=0 && j+1<degree && grid[i-1][j+1]==="B") bombCount++;
        if(j+1 < degree && grid[i][j+1]==="B") bombCount++;
        if(i+1 < degree && j+1 < degree && grid[i+1][j+1]==="B") bombCount++;
        if(i+1<degree && grid[i+1][j]==="B") bombCount++;
        if(i+1<degree && j-1>=0 && grid[i+1][j-1]==="B") bombCount++;
        if(j-1>=0 && grid[i][j-1]==="B") bombCount++;
        if(i-1>=0 && j-1>=0 && grid[i-1][j-1]==="B") bombCount++;

        grid[i][j]=bombCount;
    }
}




}

startgame();


function fillGrid(){
    allTilesArray.forEach(function(e,index){
        const x=Math.floor(index/degree);
        const y=index%degree;

        e.innerText=grid[x][y];
        if(grid[x][y]==="B") e.style.color="red";
    })
}
function gameover(){
    alert("Game Over")
    fillGrid();
}

function checkwin(){
    if(clicks===0) {
        alert("You Won");
        fillGrid();
    }
}

allTilesArray.forEach((e,index)=>{
    e.addEventListener('click',function(){
        

        const x=Math.floor(index/degree);
        const y=index%degree;

        if(grid[x][y]==="B"){
            gameover();
            return;
        }

        
        if(e.innerText==="" || e.innerText==="F"){
            e.innerText=grid[x][y];
            clicks--;
        }

        checkwin();
    })
})

allTilesArray.forEach((e)=>{
    e.addEventListener('contextmenu',function(event){
        event.preventDefault();
        
        if(e.innerText==="") e.innerText="F";
    })
})

