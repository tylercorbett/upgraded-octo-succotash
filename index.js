function handleSubmit(event) {
    var form = event.target;
    var elements =  form.elements;
    var selectedToppings = '';
    var toppings = elements.toppings;

    for(var i = 0; i < toppings.length; i++) {
        var topping = toppings[i];
        if(topping.checked) {
            selectedToppings += ' ' + topping.value
        }

    }
    console.log(selectedToppings);


}