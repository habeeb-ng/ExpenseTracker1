let expenseInfo = document.getElementById("expense-info");
let expenseName = document.getElementById("expense-name");
let expenseDate = document.getElementById("expense-date");
let expenseAmount = document.getElementById("expense-amount");
let expenseDatas = document.getElementById("expenseDatas");
let totalExpense = document.getElementById("totalExpense");
let allTrs = document.getElementsByTagName("tr")
//expense object constructor
function Expenses(name, date, amount) {
    this.name = name;
    this.date = date;
    this.amount = amount;
}

let allExpense = [];

// add datas to arrays
function newExpObj(){
    const create = new Expenses(expenseName.value, expenseDate.value, expenseAmount.valueAsNumber);
    allExpense.push(create);
}

expenseInfo.onsubmit = function(eventObj){
    eventObj.preventDefault();
    
    newExpObj();
    // calcAmount();
    createExpense();
    expenseName.value= "";
    expenseDate.value = "";
    expenseAmount.value = "";
}
//create td
function createTd (){
    // let newExp = `<td>${exName}</td><td>${exDate}</td><td>${exAmount}</td><td onclick="del(this)" style="cursor:pointer" > delete</td>`;
    // return newExp;
    return document.createElement('td');
}
//create expense table row
function createExpense() {
    
    const newExpense = document.createElement("tr");
    const exName = createTd();
    exName.append(expenseName.value)
    const exDate = createTd();
    exDate.append(expenseDate.value)
    const exAmount = createTd();
    // exAmount.setAttribute("id","")
    exAmount.append(expenseAmount.value)

    const del = createTd();
    del.innerText = 'Del';
    del.style.cursor = 'pointer'
    
    

    
    newExpense.append(exName);
    newExpense.append(exDate);
    newExpense.append(exAmount);
    newExpense.append(del);

    // calculate the amounts
    function calcAmount(){
        let sum = 0;
        for (let i = 0; i < allExpense.length; i++){
            sum += allExpense[i].amount;
        }
    
        totalExpense.textContent = sum;
    }
    calcAmount()


    expenseDatas.appendChild(newExpense);

    //delete feature
    del.addEventListener('click', (eventObj) => {
        eventObj.target.parentElement.remove();
        // for (let each of allExpense) {
        //     if (each.name === x) {
                
        //     }
        // }
    } )
}





//the delete feature
// function takeOut(){
//     this.parentElement.remove();
//     let sum = 0;
    
    // for(let i = 0; i < allExpense.length; i++){
    //     if (delEelement.parentElement.remove() === allExpense[i]){
    //         allExpense.splice(i, 1);
    //     }
    // }
// }









//  tried and error
// for (let i = 0; i < allExpense.length; i++) {
    //     const newExpense = document.createElement("tr");
    //     const exName = createTd();
    //     exName.append(allExpense[i].name)
    //     const exDate = createTd();
    //     exDate.append(allExpense[i].date)
    //     const exAmount = createTd();
    //     exAmount.append(allExpense[i].amount)

    //     const del = createTd();
    //     del.innerText = 'Del';
    //     del.style.cursor = 'pointer'
        
        

        
    //     newExpense.append(exName);
    //     newExpense.append(exDate);
    //     newExpense.append(exAmount);
    //     newExpense.append(del);


    //     expenseDatas.appendChild(newExpense);
    //     del.addEventListener('click', takeOut )
        
    // }

