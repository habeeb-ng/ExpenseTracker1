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
totalExpense.textContent = 0;
let allExpense = [];
let existExpense = false;

// add datas to arrays
function newExpObj() {
    //check if the array exist in the dom expense list
    for (each of allExpense) {
        if (expenseName.value === each.name) {
            alert(expenseName.value + " is already an expense int the list, enter a different expense name");
            existExpense = true;
            return false;
        }
    }
        const create = new Expenses(expenseName.value, expenseDate.value, expenseAmount.valueAsNumber);
    allExpense.push(create);
    for(let i =0; i < allExpense.length; i++){
    if(isNaN(allExpense[i].amount)){
        allExpense[i].amount = 0;
    }
}
    
    // }
    existExpense = false;
    return true;
}
// calculate the amounts
    function calcAmount(){
        let sum = 0;
        for (let i = 0; i < allExpense.length; i++){
            sum += allExpense[i].amount;
        }
    
        totalExpense.textContent = sum;
    }

//create td
function createTd (){
    return document.createElement('td');
}
//create expense table row
function createExpense() {
    
    const newExpense = document.createElement("tr");
    newExpense.setAttribute('id', expenseName.value);
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

    
    calcAmount();


    expenseDatas.appendChild(newExpense);

    //delete feature
    del.addEventListener('click', (eventObj) => {
        let deleName = eventObj.target.parentElement.children[0].innerHTML;
        let delNum;
        console.log(deleName);
        for (let i = 0; i < allExpense.length; i++) {
            if (allExpense[i].name === deleName) {
                delNum = allExpense[i].amount;
                allExpense.splice(i, 1);
                calcAmount();

            }
        }
        eventObj.target.parentElement.remove();
    } )
}
//event listeb=ner for when a new expense is entered
// main function.
expenseInfo.onsubmit = function(eventObj){
    eventObj.preventDefault();
    
    newExpObj();
    if (!existExpense) {
        createExpense();
    }
    
    expenseName.value= "";
    expenseDate.value = "";
    expenseAmount.value = "";
}