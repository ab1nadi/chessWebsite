



// an enum
class Type {
 
    static W_King = new Type("W_King","&#9812;")
    static W_Queen = new Type("W_Queen","&#9813;")
    static W_Rook = new Type("W_Rook","&#9814;")
    static W_Bishop = new Type("W_Bishop","&#9815;")
    static W_Knight = new Type("W_Knight","&#9816;")
    static W_Pawn = new Type("W_Pawn","&#9817;")


    static B_King = new Type("B_King","&#9818;")
    static B_Queen = new Type("B_Queen","&#9819;")
    static B_Rook = new Type("B_Rook","&#9820;")
    static B_Bishop = new Type("B_Bishop","&#9821;")
    static B_Knight = new Type("B_Knight","&#9822;")
    static B_Pawn = new Type("B_Pawn","&#9823;")

    static Possible_Move = new Type("Possible_Move", "");
  
    constructor(name, unicode) {
      this.name = name;
      this.unicode = unicode;
    }

    // returns a type
    // from a name
    static fromName(name)
    {
        switch (name) {
           case 'W_King':
               return Type.W_King;
           case 'W_Queen':
               return Type.W_Queen;
            case 'W_Rook' :
                return Type.W_Rook;
            case 'W_Bishop':
                return Type.W_Bishop;
            case 'W_Knight':
                return Type.W_Knight;
            case 'W_Pawn':
                return Type.W_Pawn;
            case 'B_King':
                return Type.B_King;
            case 'B_Queen':
                return Type.B_Queen;
            case 'B_Rook' :
                return Type.B_Rook;
            case 'B_Bishop':
                return Type.B_Bishop;
            case 'B_Knight':
                return Type.B_Knight;
            case 'B_Pawn':
                return Type.B_Pawn;
            case 'Possible_Move':
                return Type.Possible_Move;
            default:
                return null;
            
         }
    }
  }


// add the onclick listener to each cell
let cells = document.getElementsByClassName('cell');
for(let i = 0; i<cells.length; i++)
{
    cells.item(i).addEventListener('click', clickListener)
}


initGame();



// initGame
// inserts the startin game
// pieces and identifies their 
// positions
function initGame()
{

    // get the starting black cells
    let b_rook1 = getCell(7,0);
    let b_knight1 = getCell(7,1);
    let b_bishop1 = getCell(7,2);
    let b_king = getCell(7,4);
    let b_queen = getCell(7,3);
    let b_bishop2 = getCell(7,5);
    let b_knight2 = getCell(7,6);
    let b_rook2 = getCell(7,7);

    let b_pawn1 = getCell(6,0);
    let b_pawn2 = getCell(6,1);
    let b_pawn3 = getCell(6,2);
    let b_pawn4 = getCell(6,3);
    let b_pawn5 = getCell(6,4);
    let b_pawn6 = getCell(6,5);
    let b_pawn7 = getCell(6,6);
    let b_pawn8 = getCell(6,7);

    // set the peices and their types
    b_rook1.dataset.type = Type.B_Rook.name;
    b_rook1.innerHTML = Type.B_Rook.unicode;

    b_knight1.dataset.type = Type.B_Knight.name;
    b_knight1.innerHTML = Type.B_Knight.unicode;

    b_bishop1.dataset.type = Type.B_Bishop.name;
    b_bishop1.innerHTML = Type.B_Bishop.unicode;

    b_king.dataset.type = Type.B_King.name;
    b_king.innerHTML = Type.B_King.unicode;

    b_queen.dataset.type = Type.B_Queen.name;
    b_queen.innerHTML = Type.B_Queen.unicode;

    b_bishop2.dataset.type = Type.B_Bishop.name;
    b_bishop2.innerHTML = Type.B_Bishop.unicode;

    b_knight2.dataset.type = Type.B_Knight.name;
    b_knight2.innerHTML = Type.B_Knight.unicode;

    b_rook2.dataset.type = Type.B_Rook.name;
    b_rook2.innerHTML = Type.B_Rook.unicode;


    b_pawn1.dataset.type = Type.B_Pawn.name;
    b_pawn1.innerHTML = Type.B_Pawn.unicode;
    b_pawn2.dataset.type = Type.B_Pawn.name;
    b_pawn2.innerHTML = Type.B_Pawn.unicode;
    b_pawn3.dataset.type = Type.B_Pawn.name;
    b_pawn3.innerHTML = Type.B_Pawn.unicode;
    b_pawn4.dataset.type = Type.B_Pawn.name;
    b_pawn4.innerHTML = Type.B_Pawn.unicode;
    b_pawn5.dataset.type = Type.B_Pawn.name;
    b_pawn5.innerHTML = Type.B_Pawn.unicode;
    b_pawn6.dataset.type = Type.B_Pawn.name;
    b_pawn6.innerHTML = Type.B_Pawn.unicode;
    b_pawn7.dataset.type = Type.B_Pawn.name;
    b_pawn7.innerHTML = Type.B_Pawn.unicode;
    b_pawn8.dataset.type = Type.B_Pawn.name;
    b_pawn8.innerHTML = Type.B_Pawn.unicode;


    // white
    let w_rook1 = getCell(0,0);
    let w_knight1 = getCell(0,1);
    let w_bishop1 = getCell(0,2);
    let w_king = getCell(0,4);
    let w_queen = getCell(0,3);
    let w_bishop2 = getCell(0,5);
    let w_knight2 = getCell(0,6);
    let w_rook2 = getCell(0,7);

    let w_pawn1 = getCell(1,0);
    let w_pawn2 = getCell(1,1);
    let w_pawn3 = getCell(1,2);
    let w_pawn4 = getCell(1,3);
    let w_pawn5 = getCell(1,4);
    let w_pawn6 = getCell(1,5);
    let w_pawn7 = getCell(1,6);
    let w_pawn8 = getCell(1,7);



     // set the peices and their types
     w_rook1.dataset.type = Type.W_Rook.name;
     w_rook1.innerHTML = Type.W_Rook.unicode;
 
     w_knight1.dataset.type = Type.W_Knight.name;
     w_knight1.innerHTML = Type.W_Knight.unicode;
 
     w_bishop1.dataset.type = Type.W_Bishop.name;
     w_bishop1.innerHTML = Type.W_Bishop.unicode;
 
     w_king.dataset.type = Type.W_King.name;
     w_king.innerHTML = Type.W_King.unicode;
 
     w_queen.dataset.type = Type.W_Queen.name;
     w_queen.innerHTML = Type.W_Queen.unicode;
 
     w_bishop2.dataset.type = Type.W_Bishop.name;
     w_bishop2.innerHTML = Type.W_Bishop.unicode;
 
     w_knight2.dataset.type = Type.W_Knight.name;
     w_knight2.innerHTML = Type.W_Knight.unicode;
 
     w_rook2.dataset.type = Type.W_Rook.name;
     w_rook2.innerHTML = Type.W_Rook.unicode;
 
 
     w_pawn1.dataset.type = Type.W_Pawn.name;
     w_pawn1.innerHTML = Type.W_Pawn.unicode;
     w_pawn2.dataset.type = Type.W_Pawn.name;
     w_pawn2.innerHTML = Type.W_Pawn.unicode;
     w_pawn3.dataset.type = Type.W_Pawn.name;
     w_pawn3.innerHTML = Type.W_Pawn.unicode;
     w_pawn4.dataset.type = Type.W_Pawn.name;
     w_pawn4.innerHTML = Type.W_Pawn.unicode;
     w_pawn5.dataset.type = Type.W_Pawn.name;
     w_pawn5.innerHTML = Type.W_Pawn.unicode;
     w_pawn6.dataset.type = Type.W_Pawn.name;
     w_pawn6.innerHTML = Type.W_Pawn.unicode;
     w_pawn7.dataset.type = Type.W_Pawn.name;
     w_pawn7.innerHTML = Type.W_Pawn.unicode;
     w_pawn8.dataset.type = Type.W_Pawn.name;
     w_pawn8.innerHTML = Type.W_Pawn.unicode;
}




// getCell
// returns a javascript
// dom object for the col row
// of the board
function getCell(row,col)
{
    let cell = document.querySelector(`[data-row='${row}']`).querySelector(`[data-col='${col}']`);
    

    return cell;
}



let current = null;


function clickListener(event)
{


    // make sure there isnt a peice already selected
    if(current==null)
    {
        // make sure the peice has a type
        if(event.target.dataset.type != null)
        {
            // highlight it
            current = event.target;
            current.classList.add('highlighted');

            let parent = current.parentNode;

            let y = parseInt(parent.dataset.row);
            let x = parseInt(current.dataset.col);


            console.log(y,x)

    
            var moves = window.getMoves(x,y);


            for(let row = 0; row<8; row++)
                for(let col = 0; col<8; col++)
                {
                    if(moves[row*8+col]==1)
                    {
                        let c = getCell(row,col);
                        let option = document.createElement("div");
                        option.classList.add("moveOption")
                        c.dataset.type=Type.Possible_Move.name;

                        c.append(option);
                    }
                }
        }
    }
    else 
    {
        // unselect current if it is clicked again
        if(event.target==current)
        {
            current.classList.remove('highlighted');
            current = null;


            removeOptions();
            
            

            return;
        }

        // its a possible move
        else if(event.target.dataset.type=Type.Possible_Move.name)
        {


            // get the next cell
            let nextCell = event.target;

            let nextParent = nextCell.parentNode;

            let moveR = parseInt(nextParent.dataset.row);
            let moveC = parseInt(nextCell.dataset.col);

            let parent = current.parentNode;

            let positionR = parseInt(parent.dataset.row);
            let positionC = parseInt(current.dataset.col);


            removeOptions();

            // set the next cell
            console.log(current);
            let type = current.dataset.type;
            let innerHTML = Type.fromName(current.dataset.type).unicode;

            console.log(type,innerHTML)
            nextCell.dataset.type= type;
            nextCell.innerHTML= "";
            nextCell.innerHTML = innerHTML;





            //remove the stuff from teh last cell
            current.innerHTML  = "";
            current.dataset.type = null;

            current.classList.remove('highlighted');
            current = null;


            window.move(positionC, positionR, moveC, moveR);



        }

        // its nothing retunr
        return;

        
    }
}



function removeOptions()
{
    let z = document.getElementsByClassName("moveOption");

    while(z.length)
    {    
        if(z.item(0).parentNode.dataset.type == Type.Possible_Move.name)
            z.item(0).parentNode.dataset.type = null;
        z.item(0).remove();
    }
    
 
}