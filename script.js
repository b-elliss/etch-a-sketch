//Create div
//Give class '.flexItem'
//Append to the DOM inside 'flex-container'
//Add event listener for each item
//Loop this process for 16 rows and 16 columns
for (i = 0; i < 256; i++) {
    const item = document.createElement('div');
    item.className = 'flexItem';
    document.querySelector('.flex-container').append(item);
    item.addEventListener('mouseover', colorChange);
};

//function to change the color of each individual item
function colorChange() {this.style.backgroundColor = '#000000';};

//Create button; assign class; append inner text
//Append button before the flex-container div
const button = document.createElement('button');
button.className = 'button';
button.innerText = 'Click to change dimensions';
document.querySelector('h3').after(button);

//function to remove all flex container divs here
function removeAll () {
    const container = document.querySelector('.flex-container');
    const childNodeList = container.childNodes;
    for (i = childNodeList.length - 1; i >= 0; i--) {
        container.removeChild(childNodeList[i]);
   };
};

//function to create user specified grid
function clientGrid() {
    let clientInput = Number(window.prompt('Enter desired number of units per side', '69...')); 
    let itemSize = 580 / clientInput;
    for (i = 0; i < (clientInput * clientInput); i++) {
        const clientItem = document.createElement('div');
        clientItem.className = 'clientFlexItem';
        document.querySelector('.flex-container').append(clientItem);
        clientItem.addEventListener('mouseover', colorChange);
        clientItem.style.height = `${itemSize}px`;
        clientItem.style.width = `${itemSize}px`;
    };
};

//When clicked, generate prompt for number of squares per side. Set limit to 100
button.addEventListener('click', () => {
    removeAll();
    clientGrid();
});


