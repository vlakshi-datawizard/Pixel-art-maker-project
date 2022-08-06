 
//Function to make Grid when the values are submitted 

function makeGrid() {
    
     //  input values in a variable
     
     const sHeight=document.getElementById('inputHeight').value;
     const sWidth=document.getElementById('inputWidth').value;
     
     // table element in a variable
     const canvas=document.getElementById('pixelCanvas');
     
     //Deleting rows from the canvas
     canvas.innerHTML='';  
    
    //loop to insert rows and cells in canvas
     for(let i=0;i<sHeight;i++){
        let row=canvas.insertRow(i);
        for(let j=0;j<sWidth;j++){
            let col=row.insertCell(j);
            //click event changes the background color of the cell to the one selected in color picker
            col.addEventListener('click',function(event){
                event.target.style.backgroundColor= document.getElementById('colorPicker').value;
            });
        }
    }
}

// submit event calls the function to  start over make  a new grid
document.getElementById('sizePicker').addEventListener('submit',function (event){
    event.preventDefault();
    makeGrid();
});
