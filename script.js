document.getElementById('generate').addEventListener('click', function() {
    var length = document.getElementById('length').value;
    var uppercase = document.getElementById('uppercase').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;
    
    var password = generatePassword(length, uppercase, lowercase, numbers, symbols);
    document.getElementById('password-display').innerText = password;
  });
  
  function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    var charset = '';
    var password = '';
  
    var uppercaseRange = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseRange = 'abcdefghijklmnopqrstuvwxyz';
    var numbersRange = '0123456789';
    var symbolsRange = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  
    if (uppercase) {
      charset += uppercaseRange;
    }
    if (lowercase) {
      charset += lowercaseRange;
    }
    if (numbers) {
      charset += numbersRange;
    }
    if (symbols) {
      charset += symbolsRange;
    }
    
    if (charset.length === 0) {
      alert("Please select at least one character type.");
      return '';
    }
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }
  