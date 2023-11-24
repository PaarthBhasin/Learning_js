function inputNumbers() {
    const numberOfNumbersInput = document.getElementById('numberOfNumbers');
    const numberOfNumbers = parseInt(numberOfNumbersInput.value);

    if (isNaN(numberOfNumbers) || numberOfNumbers <= 0) {
      alert('Please enter a valid positive integer for n.');
      return;
    }

    const inputContainer = document.getElementById('inputContainer');
    inputContainer.style.display = 'block';

    const numbersInput = document.getElementById('numbersInput');
    numbersInput.innerHTML = '';

    for (let i = 0; i < numberOfNumbers; i++) {
      const inputField = document.createElement('input');
      inputField.type = 'number';
      inputField.placeholder = `Enter number ${i + 1}`;
      numbersInput.appendChild(inputField);
    }
  }

  function calculateAverage() {
    const inputFields = document.querySelectorAll('#numbersInput input');
    const numberOfNumbers = inputFields.length;

    let sum = 0;

    for (const inputField of inputFields) {
      sum += parseFloat(inputField.value) || 0;
    }

    const average = numberOfNumbers > 0 ? sum / numberOfNumbers : 0;

    const logarithm = numberOfNumbers > 0 ? Math.log(average) : 0 ;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `The average of the entered numbers is: ${logarithm.toFixed(2)}`;
  }