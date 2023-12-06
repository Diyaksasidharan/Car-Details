function store(){
    car={
        Key : k.value,
        Brand : brand.value,
        Price : price.value

    };
// the following code only for checking any errors using console display
    console.log('Key:', car.Key);
    console.log('Brand:', car.Brand);
    console.log('Price:', car.Price);

    if(car.Brand == '' ||car.Price == '' ||car.Key == ''){
        alert("Fill all the input fields");
    }
else{
    if(car.Key in localStorage){
        alert("Already exist");
    }
    else{
        localStorage.setItem(car.Key,JSON.stringify(car))
        alert('Car details added successfully');
    }
}
}


function retrieve() {
    let retrieve_key = document.getElementById('key').value; // Assuming 'key' is the ID of your input element
    let car = JSON.parse(localStorage.getItem(retrieve_key));

    let resultElement = document.getElementById('result'); // Assuming 'result' is the ID of the element to display the result

    if (car && car.Brand !== undefined && car.Price !== undefined) {
        resultElement.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Car Details</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Car Brand: ${car.Brand}</li>
                    <li class="list-group-item">Car Price: ${car.Price}</li>
                </ul>
            </div>`;
    } else {
        resultElement.innerHTML = 'Car details not found or incomplete';
    }
}

function remove() {
    let removeKey = document.getElementById('key').value; // Assuming 'key' is the ID of your input element

    if (removeKey !== '') {
        if (localStorage.getItem(removeKey)) {
            localStorage.removeItem(removeKey);
            alert('Record removed successfully');
        } else {
            alert('Record with the given key does not exist');
        }
    } else {
        alert('Please enter a key to remove the record');
    }
}

function localStorageclear(){
    localStorage.clear();
    alert('All datas cleared from localstorage');
}