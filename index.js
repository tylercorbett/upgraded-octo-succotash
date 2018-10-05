function handleSubmit(event) {
    var form = event.target;
    var elements =  form.elements;

   var guess = elements.guess.value;

   var correctAnswer = 5;

   console.log('guess', guess);

   var result = document.getElementById('result')

   
    if (guess == correctAnswer) {
        result.textContent = 'That is correct!'
    }
    else if (guess < correctAnswer ) {
        result.textContent = 'Your guess is too low!'
    }
    else {
        result.textContent = 'Your guess is too high!'
    }


}