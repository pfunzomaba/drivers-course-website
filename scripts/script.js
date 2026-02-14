/*
Student name: Maba Pfunzo
File Name: script.js
Date: 23/05/2023
*/

/////////////////////////////////////////////////////////////////////////////////
 /******************************************************************************/
 

if(document.getElementById("lightbox") ){

	window.addEventListener("load", createLightbox);
	// Title of the slideshow
	let lightboxTitle = "Drivers We Trained ";

	// Names of the image files shown in the slideshow
	let imgFiles = ["images/student01.png", "images/student02.png", "images/student03.png", "images/student04.png",
					"images/student05.png", "images/student06.png", "images/student07.png", "images/student08.png",
					"images/student09.png", "images/student10.png", "images/student11.png", "images/student12.jpg"]

	// Captions associated with each image
	let imgCaptions = new Array(12);
	imgCaptions[0]="Student passed driving licence test";
	imgCaptions[1]="Student passed driving licence test"; 
	imgCaptions[2]="Student passed driving licence test"; 
	imgCaptions[3]="Student passed driving licence test"; 
	imgCaptions[4]="Student passed driving licence test";
	imgCaptions[5]="Student passed driving licence test";
	imgCaptions[6]="Student passed driving licence test";
	imgCaptions[7]="Student passed driving licence test";
	imgCaptions[8]="Student passed driving licence test";
	imgCaptions[9]="Student passed driving licence test";
	imgCaptions[10]= "Student passed driving licence test";
	imgCaptions[11]="Student passed driving licence test";

	// Count of images in the slideshow
	let imgCount = imgFiles.length;

	function changImage(){
		myImage,setAttribute("src",imgCaptions[imgCount]);
		imgCount++;
		
		if(imgCount > 3 ){
			imgCount = 0;
		}
	}

	 
	function createLightbox() {
	   // Lightbox Container
	   let lightBox = document.getElementById("lightbox");

	   // Parts of the lightbox
	   let lbTitle = document.createElement("h1");
	   let lbPrev = document.createElement("div");
	   let lbNext = document.createElement("div");
	   let lbImages = document.createElement("div");
	   
	   // Design the lightbox title
	   lightBox.appendChild(lbTitle);
	   lbTitle.id = "lbTitle";
	   lbTitle.textContent = lightboxTitle;

	   // Design the lightbox previous slide button
	   lightBox.appendChild(lbPrev);
	   lbPrev.id = "lbPrev"; 
	   lbPrev.innerHTML = "&#9664;";
	   lbPrev.onclick = showPrev;

	   // Design the lightbox next slide button
	   lightBox.appendChild(lbNext);
	   lbNext.id = "lbNext";
	   lbNext.innerHTML = "&#9654;";
	   lbNext.onclick = showNext;
	   
	   // Design the lightbox images container
	   lightBox.appendChild(lbImages);
	   lbImages.id = "lbImages";
	   
	   // Add images from the imgFiles array to the container
	  for (let i = 0; i < imgCount; i++) {
		  let image = document.createElement("img");
		  image.src = imgFiles[i];
		  image.alt = imgCaptions[i];
		  
		  image.onclick = createOverlay;
		  lbImages.appendChild(image);
		 
	   }
	   
	}

	  
	// Function to move forward through the image list
	function showNext() {
		  lbImages.appendChild(lbImages.firstElementChild);
		  
	   }
	   
	// Function to move backward through the image list
	function showPrev() {
			lbImages.insertBefore(lbImages.lastElementChild,
			lbImages.firstElementChild);
			
		}

	function createOverlay() {
			let overlay = document.createElement("div");
			overlay.id = "lbOverlay";
			
			// Add the figure box to the overlay
			let figureBox = document.createElement("figure");
			overlay.appendChild(figureBox);
			
			
			
			// Add the image to the figure box
			let overlayImage = this.cloneNode("true");
			figureBox.appendChild(overlayImage);
			
			// Add the caption to the figure box
			let overlayCaption = document.createElement("figcaption");
			overlayCaption.textContent = this.alt;
			figureBox.appendChild(overlayCaption);
			
			// Add a close button to the overlay
			let closeBox = document.createElement("div");
			closeBox.id = "lbOverlayClose";
			closeBox.innerHTML = "&times;";
			
			closeBox.onclick = function() {
				document.body.removeChild(overlay);
			}		
			
			overlay.appendChild(closeBox);
			document.body.appendChild(overlay);
		}

}

// Function to update the last visit date
let lastVisitDate = document.getElementById("lastVisitDate");
if (null !== lastVisitDate) { 
	// Call the updateLastVisitDate function when the page loads
	window.onload = updateLastVisitDate;
 
	function updateLastVisitDate() {
     let lastVisitDate = localStorage.getItem("lastVisitDate");
     if (localStorage.lastVisitDate) {
           document.getElementById("lastVisitDate").textContent = lastVisitDate;
     } else {
           document.getElementById("lastVisitDate").textContent = "First visit!";
            }
	let currentDate = new Date().toLocaleDateString();
        // var currentDate = new Date(document.lastModified).toLocaleDateString();
    localStorage.setItem("lastVisitDate", currentDate); // Save the last visit date in local storage
}
}


// Registration Form validation
if(document.getElementById("form")){
	
	let submitButton = document.getElementById('submitButton');
	let fname = document.getElementById('fname');
	let userNames = document.getElementById('userNames');
	let surname = document.getElementById('surname');
	let idNo = document.getElementById('idNo');
	let tphone = document.getElementById('tphone');
	let cphone = document.getElementById('cphone');
	let email = document.getElementById('email');
	let sameAddress = document.getElementById('sameAddress');
	let  addrPostal = document.getElementById('addrPostal');
	let  validLicense = document.getElementById('validLicense');
	let  parentsDetail = document.getElementById('parentsDetail');
	let  radioOption = document.querySelectorAll('input[type="radio"][name="radio"]');
	let userHome = document.getElementById("userHome");
	let pwd = document.getElementById('pwd');
	let pwd2 = document.getElementById("pwd2");
	//let feedback = document.getElementById("feedback");
	//let feedbackpwd = document.getElementById("feedbackpwd");
	let regex1 = /[A-Z]/;
	let regex2 = /\d/;
	let regex3 = /[!\$#%.]/;
	// Define the ID number validation rules using a regular expression
	let idNumberRegex = /^\d{13}$/;

	let postalCode = document.getElementById("postalCode");
	let place = document.getElementById("place");
	let region = document.getElementById("region");
	let country = document.getElementById("country");

	postalCode.onblur = function() {
		// Declare the codeValue and countryValue variables setting them equal to the value of the postalCode and country elements, respectively
		let codeValue = postalCode.value;
		let countryValue = country.value;
		
		
		//Use Fetch to access the API at http://api.zippopotam.us/country/code where country is the value of the countryValue variable and code is the value of the codeValue variable.
		fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
		 
		 //When the Fetch promise is returned, add a then() method to parse the JSON response object.
		//fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
		
			.then(response => response.json()
				
			)

			//Add another then() method using an arrow function with a single parameter named json. .
			.then(json => {
			 // Set the value of the place element to place property for the postal code and the region element to the state abbreviation property
				place.value = json.places[0]["place name"];
				region.value = json.places[0]["state abbreviation"];
			})
			.catch(error => {
				// if the response is rejected, write the error text to the console log
				console.log(error);
			});
		
	}

	  
	if (submitButton != null) {
		submitButton.addEventListener("click", function(e){
	//myform.addEventListener("submit", function(e){
		
		/*let pwd = document.getElementById("pwd").value;
		let pwd2 = document.getElementById("pwd2").value;*/
		
		e.preventDefault();
		
		/*validateInputs();
		//isValidPwd(pwd);
		//testPwd(pwd,pwd2);
		
		if(validateInputs()){
			document.getElementById('form').submit();
		}
		//isValidPwd(pwd);
		//testPwd(pwd,pwd2);
		*/
		// Call validateInputs and store the result in isValid
	  let isValid = validateInputs();
	  
	  // Check if the form inputs are valid
	  if (isValid) {
		document.getElementById('form').submit();
		document.getElementById("errorBox").innerText = ""; // Clear any previous error message
	  }else {
		  // If there are validation errors, show an error message
		  document.getElementById("errorBox").innerText = "Please fill the required fields and try again.";
		}

		
	});
	}


	function validateInputs(){
		// Validate the form
		 let isValid = true; // Assume the form is valid initially

		
		if(fname.value.trim() === ''){ //Testing name
			setError(fname);
			feedbackf.textContent = "Enter your First name.";
			 isValid = false; 
		}else{
			setSuccess(fname);
			feedbackf.textContent = "";
			
		}
		
		if(userNames.value === ''){ //Client Full Names as on ID
			setError(userNames);
			feedbacku.textContent = "Full Names as on ID is required";
			 isValid = false;
		}else{
			setSuccess(userNames);
			feedbacku.textContent = "";
			
		}
		
		//Testing surname
		if(surname.value.trim() === ''){ 
			setError(surname);
			feedbacks.textContent = "Enter your Surname.";
			 isValid = false;
		} else{
			setSuccess(surname);
			feedbacks.textContent = "";
			
		}
		
		//Testing ID
		if(idNo.value.trim() === '' || !idNumberRegex.test(idNo.value.trim())){ 
			setError(idNo);
			feedbackId.textContent = "Please enter your 13-digit ID number.";
			 isValid = false;
		}else{
			setSuccess(idNo);
			feedbackId.textContent = "";
			
		}
		
		// Telephone rules
		if(tphone.value.trim() === '' || !validatePhoneNumber(tphone.value.trim())){ //Testing telephone
			setError(tphone);
			feedbackt.textContent = "Please enter your 10-digit Telephone number.";
			 isValid = false;
		}else{
			setSuccess(tphone);
			feedbackt.textContent = "";
			
		}
		
		//Testing cell phone
		if(cphone.value.trim() === '' || !validatePhoneNumber(cphone.value.trim()) ){ 
			setError(cphone);
			feedbackc.textContent = "Please enter your 10-digit cell number.";
			 isValid = false;
		}else{
			setSuccess(cphone);
			feedbackc.textContent = "";
			
		}
		
		// test email
		if(email.value.trim() === '' || !isValidEmail(email.value.trim())){
			setError(email);
			feedbacke.textContent = "Please enter Email address.";
			 isValid = false;
		}else {
			setSuccess(email);
			feedbacke.textContent = "";
			
		}

		//Testing home address
		if(addrHome.value === ''){ 
			setError(addrHome);
			feedbackh.textContent = "Enter your Address.";
			 isValid = false;
		} else{
			setSuccess(addrHome);
			feedbackh.textContent = "";
			
		}
		
		
		if(addrPostal.value === ''){ //Testing postal address
			setError(addrPostal);
			feedbackPaddr.textContent = "Enter your Postal Address.";
			 isValid = false;
		} else{
			setSuccess(addrPostal);
			feedbackPaddr.textContent = "";
			
		}
		
		// Testing if learners is selected
		if (!validateOption()) {
			feedbackl.textContent = "Please select your choice"; // Clear the error message if learners is selecte
			setError(validLicense);
			 isValid = false;
		  } else {
		   feedbackl.textContent = ""; 
		   setSuccess(validLicense);
			
		  }
		
		// Define the minimum and maximum length criteria 
		  let minLength = 3;
		 // let maxLength = 100;
		if(parentsDetail.value.trim() === ''){ //Testing parents detail
			 feedbackp.textContent = "Please indicate here.";
			 setError(parentsDetail);
			  isValid = false;
		 } else if((parentsDetail.value.trim()).length < minLength ){
			 feedbackp.textContent = `Indicate by N/A if not a minor`;
			 setError(parentsDetail);
			  isValid = false;
		  }else{
			  feedbackp.textContent = "";
			  setSuccess(parentsDetail);
			  
		  }
		  
		  //Testing password
			
			if((pwd.value).length < 8){
				feedbackpwd.textContent = "Your password must be at least eight characters long";
			 isValid = false;
			}else if(!regex1.test(pwd.value)){
				feedbackpwd.textContent =("Your password must have at least one uppercase letter");
				 isValid = false;
			}else if(!regex2.test(pwd.value)){
				feedbackpwd.textContent = ("Your password must have at least one digit");
				 isValid = false;
			}else if(!regex3.test(pwd.value)){
				feedbackpwd.textContent = ("Your password must have at least one of the following symbols !, @, #, or $.");
				 isValid = false;
			}else {
				feedbackpwd.textContent = "";	
			}
			
			// Testing pwd,pwd2
			if(pwd2.value === '') {
			feedbackpwd2.textContent = 'Please confirm your password';
			 isValid = false;
			} else if (pwd2.value !== pwd.value) {
			   feedbackpwd2.textContent = "Passwords doesn't match";
				isValid = false;
			} else {
				feedbackpwd2.textContent = "";
				
			}
		
		 return isValid;

	}

	// Add error on invalid fields
	function setError(element){
		let inputControl = element.parentElement;
		inputControl.classList.add('error');
		inputControl.classList.remove('success');
	}

	function setSuccess(element){
		let inputControl = element.parentElement;
		inputControl.classList.add('success');
		inputControl.classList.remove('error')
		
	}




	/* Phone number and telephone number Validation rules*/

	function validatePhoneNumber(cphone) {
	  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

	  return re.test(cphone);
	}

	// Email Validation Rules
	function isValidEmail(email){
		let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}




	// Validation for Home address is the same as Postal address
	if (document.getElementById("sameAddress") != null) {
	  document.getElementById("sameAddress").addEventListener("click", copyHomeToPostal);
	}

	function copyHomeToPostal() {
	 
	  let sameAddress = document.querySelector('input[name="sameAddress"]:checked');

	  if (sameAddress && sameAddress.value === "Yes") {
		addrPostal.value = addrHome.value;
	  } else {
		 sameAddress.value === "No"
		addrPostal.value = "";
	  }
	}



	// valid learners license Validation
	function validateOption() {
		 
		  let isLearnersSelected = false;
		  
		  // Check if at least one radio button is selected
		  for (input of radioOption) {
			if (input.checked) {
			  isLearnersSelected = true;
			  break;
			}
		  }
		return isLearnersSelected;
	}

	
}


/* Payment form Validation*/

if(document.getElementById("payment")){
	
	
	// The data from the clientRegistrationForm.html page to the clientPaymentForm.html page by appending data to a query string.
	window.addEventListener("load", function () {
    // Retrieve the text of the query string
    let qString = location.search.slice(1); // Returns the text after the first query string character

    // Replace the encoded characters in the query string
    qString = qString.replace(/\+/g, " ");
    qString = decodeURIComponent(qString);

    // Split the field=name pairs into separate array items
    let formData = qString.split(/&/g);

    // for of loop to iterate through each item in the formData array
    for (let items of formData) {
      // Extract the field names and values
      let fieldValuePair = items.split(/=/);
      let fieldName = fieldValuePair[0];
      let fieldValue = fieldValuePair[1];

      // Create a label containing the field name
      let fieldLabel = document.createElement("label");
      fieldLabel.textContent = fieldName;
      //document.getElementById("clientRegistration").appendChild(fieldLabel);

      // Create a disabled input box with the field value
      let inputBox = document.createElement("input");
      inputBox.id = fieldName;
      inputBox.name = fieldName;
      inputBox.disabled = true;

      // If it's the password or confirmation password field, display asterisks
      if (fieldName === "pwd" || fieldName === "pwd2") {
        inputBox.value = "********";
        fieldValue = "********"; // Set the field value to "********"
      } else {
        inputBox.value = fieldValue;
      }

      // Store the field value in localStorage
      localStorage.setItem(fieldName, fieldValue);


      //document.getElementById("clientRegistration").appendChild(inputBox);
	  // Retrieving fields from registration form
        document.getElementById("fname").textContent = localStorage.getItem("firstname");
        document.getElementById("userNames").textContent = localStorage.getItem("userNames");
        document.getElementById("surname").textContent = localStorage.getItem("surname");
        document.getElementById("idNo").textContent = localStorage.getItem("idNo");
        document.getElementById("tphone").textContent = localStorage.getItem("tphone");
        document.getElementById("cphone").textContent = localStorage.getItem("cphone");
        document.getElementById("email").textContent = localStorage.getItem("email");
        document.getElementById("addrHome").textContent = localStorage.getItem("addresshome");
        document.getElementById("userHome").textContent = localStorage.getItem("sameAddress");
        document.getElementById("addrPostal").textContent = localStorage.getItem("addresspostal");
        document.getElementById("validLicense").textContent = localStorage.getItem("radio");
        document.getElementById("date").textContent = localStorage.getItem("date");
        document.getElementById("parentsDetail").textContent = localStorage.getItem("parentsDetail");
        document.getElementById("pwd").textContent = "********"; // Since password was stored as *********
        document.getElementById("pwd2").textContent = "********"; // Since password was stored as *********
    }
  });
  
	// Calculate client Quote
	let lessons = document.getElementsByClassName("lesson");
	let studyMaterial = document.getElementsByClassName("studyItem");
	const SALES_VAT = 0.15;

	// Add an event listener for every lesson selected
	for(let i = 0; i < lessons.length; i++){
		lessons[i].addEventListener("click", calcTotal);
		
	}

	// Add an event listener for every study Material selected
	for(let i = 0; i < studyMaterial.length; i++){
		
		studyMaterial[i].addEventListener("click", calcTotal);
	}

	// calculate the total cost of the customer order given the selected menu items.
	function calcTotal(){
			let orderTotal = 0;
	
			
			let selectedLessons = [];
		  let selectedMaterials = [];

		  for (let i = 0; i < lessons.length; i++) {
			if (lessons[i].checked) {
			  orderTotal += Number(lessons[i].value);
			  selectedLessons.push(lessons[i].value);
			}
		  }

		  for (let i = 0; i < studyMaterial.length; i++) {
			if (studyMaterial[i].checked) {
			  orderTotal += Number(studyMaterial[i].value);
			  selectedMaterials.push(studyMaterial[i].value);
			}
		  }

		  localStorage.setItem("selectedLessons", JSON.stringify(selectedLessons));
		  localStorage.setItem("selectedMaterials", JSON.stringify(selectedMaterials));

					
			
			let vat = orderTotal * SALES_VAT;
			let total = orderTotal + vat;
			
			// Store the values in localStorage
			localStorage.setItem("subtotal", formatCurrency(orderTotal));
			localStorage.setItem("vat", formatCurrency(vat));
			localStorage.setItem("total", formatCurrency(total));

			// Set the values on the page
			document.getElementById("subtotal").innerHTML = formatCurrency(orderTotal);
			document.getElementById("vat").innerHTML = formatCurrency(vat);
			document.getElementById("total").innerHTML = formatCurrency(total);
	}	



	 // Function to display a numeric value as a text string in the format R##.## 
	 function formatCurrency(value) {
		return "R " + value.toFixed(2);
	 }
	 


	// Payment Validation rules
	let subButton = document.getElementById("subButton");
	// Validate the payment when the submit button is clicked
	if(subButton != null){
		 
		subButton.addEventListener("click", validateName);
		
		subButton.addEventListener("click", validateNumber);

		subButton.addEventListener("click", validateCard);
		
		subButton.addEventListener("click", validateMonth);
		subButton.addEventListener("click", validateYear);
		
		
		subButton.addEventListener("click", validateCVC);
		subButton.addEventListener("click", validateLessons);
		
	}
	
	// check if lessons or material is checked
	  function validateLessons() {
		const lessons = document.querySelectorAll('.lesson');
		const materials = document.querySelectorAll('.studyItem');

		let lessonChecked = false;
		let materialChecked = false;
		let lessonStatus = true;

		lessons.forEach((lesson) => {
		  if (lesson.checked) {
			lessonChecked = true;
			
		  }
		});

		materials.forEach((material) => {
		  if (material.checked) {
			materialChecked = true;
		  }
		});

		if (!lessonChecked && !materialChecked) {
		  alert('Please select at least one lesson or material before submitting the form.');
		  lessonStatus = false;
		}

		return lessonStatus;
	  }
		
	// Check if the owner's name is entered on the cardfunction
		function validateName(){
			let cardName = document.getElementById("cardName");
			if (cardName.validity.valueMissing) {
				cardName.setCustomValidity("Enter your name as it appears on the card");
			} else {
				cardName.setCustomValidity("");
			}
		}


		// Check if a credit card has been selected
		function validateCard() {
			let card = document.forms.payment.elements.credit[0];
			if (card.validity.valueMissing) {
				card.setCustomValidity("Select your credit card");
			} else {
				card.setCustomValidity("");
			}
		}


	//Testing card number : 6011485077126974
		// Check if the card number is valid
		function validateNumber() {
			let cNum = document.getElementById("cardNumber");
			if (cNum.validity.valueMissing) {
				cNum.setCustomValidity("Enter your card number");
			} else if (cNum.validity.patternMismatch) {
				cNum.setCustomValidity("Enter a valid card number");
			} else if (luhn(cNum.value) === false) {
				cNum.setCustomValidity("Enter a legitimate card number");
			} else {
				cNum.setCustomValidity("");
			}
		}

		// Check that a month is selected for the expiration date
		function validateMonth() {
			let month = document.getElementById("expMonth");
			if (month.selectedIndex === 0) {
				month.setCustomValidity("Select the expiration month");
			} else {
				month.setCustomValidity("");
			}
		}


		// Check that a year is selected for the expiration date
		function validateYear() {
			let year = document.getElementById("expYear");
			if (year.selectedIndex === 0) {
				year.setCustomValidity("Select the expiration year");
			} else {
				year.setCustomValidity("");
			}
		}


		function validateCVC() {
			// Determine which card was selected
			//let card = document.querySelector('input[name="credit"]:checked').value;
			let cvc = document.getElementById("cvc");
			
			// Validate the CVC value
			if (cvc.validity.valueMissing) {
				cvc.setCustomValidity("Enter your CVC number");
			} else if (!(/^\d{3}$/.test(cvc.value))) {
				cvc.setCustomValidity("Enter a 3-digit number");
			} else {
				cvc.setCustomValidity("");
			}
		}


	/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

	function luhn(idNum) {
	   let string1 = "";
	   let string2 = "";
	   
	   // Retrieve the odd-numbered digits starting from the back
	   for (let i = idNum.length - 1; i >= 0; i-= 2) {
		  string1 += idNum.charAt(i);
	   }
	   // Retrieve the even-numbered digits starting from the back and double them
	   for (let i = idNum.length - 2; i >= 0; i-= 2) {
		  string2 += 2*idNum.charAt(i);
	   }
	   
	   // Return whether the sum of the digits is divisible by 10
	   return sumDigits(string1 + string2) % 10 === 0;
	   
	   function sumDigits(numStr) {
		  let digitTotal = 0;
		  for (let i = 0; i < numStr.length; i++) {
			 digitTotal += parseInt(numStr.charAt(i));
		  }
		  return digitTotal;
	   }
	}


	// Storing payment form data to localStorage
	let paymentForm = document.getElementById("payment");
	paymentForm.addEventListener("submit", function (event) {
      let formElements = paymentForm.elements;
      for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type !== "submit") {
          localStorage.setItem(formElements[i].name, formElements[i].value);
        }
      }
      //alert("Form data saved to localStorage.");
    });

}	   

	

// To retrieve the fields from the registration and payment forms and display them in the ordersubmit form
if (document.getElementById("orderSection")) {
	window.addEventListener("load", function () {
		// Retrieving fields from registration form
        document.getElementById("fname").textContent = localStorage.getItem("firstname");
        document.getElementById("userNames").textContent = localStorage.getItem("userNames");
        document.getElementById("surname").textContent = localStorage.getItem("surname");
        document.getElementById("idNo").textContent = localStorage.getItem("idNo");
        document.getElementById("tphone").textContent = localStorage.getItem("tphone");
        document.getElementById("cphone").textContent = localStorage.getItem("cphone");
        document.getElementById("email").textContent = localStorage.getItem("email");
        document.getElementById("addrHome").textContent = localStorage.getItem("addresshome");
        document.getElementById("userHome").textContent = localStorage.getItem("sameAddress");
		
		 
        document.getElementById("addrPostal").textContent = localStorage.getItem("addresspostal");
        document.getElementById("validLicense").textContent = localStorage.getItem("radio");
        document.getElementById("date").textContent = localStorage.getItem("date");
        document.getElementById("parentsDetail").textContent = localStorage.getItem("parentsDetail");
        document.getElementById("pwd").textContent = "********"; // Since password was stored as *********
        document.getElementById("pwd2").textContent = "********"; // Since password was stored as *********
 
		// Place and Region Lookup section
        document.getElementById("country").textContent = localStorage.getItem("country");
        document.getElementById("postalCode").textContent = localStorage.getItem("postalCode");
        document.getElementById("place").textContent = localStorage.getItem("place");
        document.getElementById("region").textContent = localStorage.getItem("region");


		// Retrieving fields from payment form
		document.getElementById("cardName").textContent = localStorage.getItem("cardName");
		document.getElementById("cards").textContent = localStorage.getItem("credit");
		document.getElementById("cardNumber").textContent = localStorage.getItem("cardNumber");
		document.getElementById("expMonth").textContent = localStorage.getItem("expMonth");
		document.getElementById("expYear").textContent = localStorage.getItem("expYear");
		document.getElementById("cvc").textContent = localStorage.getItem("cvc");
		
		// Additional information
		
		document.getElementById("typelin").textContent = localStorage.getItem("typelin");
		document.getElementById("lesson").textContent = localStorage.getItem("selectedLessons");
		document.getElementById("material1").textContent = localStorage.getItem("selectedMaterials");
		
	
		let storedSubtotal = localStorage.getItem("subtotal");
		let storedVat = localStorage.getItem("vat");
		let storedTotal = localStorage.getItem("total");

		// Check if the retrieved values are not null before setting them
		if (storedSubtotal !== null) {
		  document.getElementById("subtotal").innerHTML = storedSubtotal;
		}else {
			document.getElementById("subtotal").innerHTML = 'R 0.00';
		}

		if (storedVat !== null) {
		  document.getElementById("vat").innerHTML = storedVat;
		}else {
			 document.getElementById("vat").innerHTML = 'R 0.00';
		}

		if (storedTotal !== null) {
		  document.getElementById("total").innerHTML = storedTotal;
		}else{
			document.getElementById("total").innerHTML = 'R 0.00';
		}

		//Clear local storage after populating the form fields
		localStorage.clear();
});
}




// Staff directory 		
let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("containerStaff");

if(getFileButton){
	getFileButton.onchange = function() {
	   // Retrieve information about the selected file
	   let JSONfile = this.files[0];
	   
	   // Read the contents of the selected file
	   let fr = new FileReader();
	   fr.readAsText(JSONfile); 

	   // Once the file has finished loading, parse the JSON file
	   fr.onload = function(){ 
		
		let staff = JSON.parse(fr.result);//convert the contents of the JSON data in fr.result into an object
		makeStaffTable(staff);
	   }
	   
	};


	//  image array
	let imageUrls = [
		"images/vho-mbilu.jpg",
		"images/vho-mbilu.jpg"
	   
	];
	let m = 0; // used for indexing images

	function makeStaffTable(staff) {
	   let staffTable = document.createElement("table");
	   let headerRow = document.createElement("tr");

	// Create a new header cell and insert it at the beginning
		let newHeaderCell = document.createElement("th");
		newHeaderCell.textContent = "Images"; // Change this to your desired header text
		headerRow.appendChild(newHeaderCell);
		
	//Create a for in loop for the object stored in staff.directory[0]
		for(let prop in staff.directory[0]){
			
			//create a th element named headerCell
			let headerCell = document.createElement("th");
			
			//Store prop as the text content of headerCell
			headerCell.textContent = prop;
			
			//Use the appendChild() method to append headerCell to the headerRow object
			headerRow.append(headerCell);
		}
		//append headerRow to the staffTable object.
		staffTable.append(headerRow);

	//create table rows containing the property values for each entry in the directory array
	let directory = document.createElement("tr");


	//for loop that loops through the items of staff.directory
	for(let i of staff.directory){
		
		//Create an element node for the tr element and store it in the tableRow variable.
		let tableRow = document.createElement("tr");
		
		// Create and append the image cell
		let imgCell = document.createElement("td");
		let img = document.createElement("img");
		img.src = imageUrls[m];
		m++;
		imgCell.appendChild(img);
		tableRow.appendChild(imgCell);
		
		//Create a for in loop for the properties listed in the staff.directory[i]. For each property
		for(let prop in i ){
			
		//Create an element node for the td element and store it in the tableCell variable	
		let tableCell = document.createElement("td");
		
		//store the value of staff.directory[i][prop] as the text content of tableCell
		tableCell.textContent = i[prop];
		
		//append tableCell to the tableRow object.
		tableRow.append(tableCell);
		}
		
		//append tableRow to the staffTable object.
		staffTable.append(tableRow);
	}

	//use the appendChild() method to append staffTable to the containerBox object.
	containerBox.appendChild(staffTable);
	}

}



/* Play.html */
// Checking if the 'gameArea' element exists
if (document.getElementById("gameArea")) {
	
    // Getting the 'gameArea' element
    const gameArea = document.getElementById('gameArea');
	
    // Initializing an empty array to hold the vehicles
    let vehicles = [];
	
    // Initializing the vehicle count variable
    let vehicleCount = 0;
	
    // Initializing the selectedVehicle, offsetX, offsetY variables to null and 0 respectively
    let selectedVehicle = null;
    let offsetX = 0;
    let offsetY = 0;
	
    // Getting the bounding rectangle of the game area
    const gameAreaRect = gameArea.getBoundingClientRect();

    // Function to check for collision
    function checkCollision(left, top, width, height) {
        for (let i = 0; i < vehicles.length; i++) {
            const rect = vehicles[i].getBoundingClientRect();
            // Checking if there is a collision between the vehicles
            if (
                left < rect.left + rect.width + 10 &&
                left + width + 10 > rect.left &&
                top < rect.top + rect.height + 10 &&
                top + height + 10 > rect.top
            ) {
                return true;
            }
        }
        return false;
    }

    // Function to add a car
    function addCar() {
        const car = new Image();
        car.src = 'images/car.png';
        car.classList.add('vehicle');
        car.classList.add('car');
        car.style.position = 'absolute';
        let leftPosition, topPosition;
        // Generating random positions for the car until no collisions occur
        do {
            leftPosition = Math.random() * (gameAreaRect.width - 60);
            topPosition = Math.random() * (gameAreaRect.height - 30);
        } while (checkCollision(leftPosition, topPosition, 60, 30));
        car.style.left = leftPosition + 'px';
        car.style.top = topPosition + 'px';
        gameArea.appendChild(car);
        vehicles.push(car);
        vehicleCount++;
    }

    // Function to add a motorcycle
    function addMotorcycle() {
        const motorcycle = new Image();
        motorcycle.src = 'images/motorcycle.png';
        motorcycle.classList.add('vehicle');
        motorcycle.classList.add('motorcycle');
        motorcycle.style.position = 'absolute';
        let leftPosition, topPosition;
        // Generating random positions for the motorcycle until no collisions occur
        do {
            leftPosition = Math.random() * (gameAreaRect.width - 60);
            topPosition = Math.random() * (gameAreaRect.height - 30);
        } while (checkCollision(leftPosition, topPosition, 60, 30));
        motorcycle.style.left = leftPosition + 'px';
        motorcycle.style.top = topPosition + 'px';
        gameArea.appendChild(motorcycle);
        vehicles.push(motorcycle);
        vehicleCount++;
    }

    // Function to add a truck
    function addTruck() {
        const truck = new Image();
        truck.src = 'images/truck.png';
        truck.classList.add('vehicle');
        truck.classList.add('truck');
        truck.style.position = 'absolute';
        let leftPosition, topPosition;
        // Generating random positions for the truck until no collisions occur
        do {
            leftPosition = Math.random() * (gameAreaRect.width - 100);
            topPosition = Math.random() * (gameAreaRect.height - 50);
        } while (checkCollision(leftPosition, topPosition, 100, 50));
        truck.style.left = leftPosition + 'px';
        truck.style.top = topPosition + 'px';
        gameArea.appendChild(truck);
        vehicles.push(truck);
        vehicleCount++;
    }

    // Function to remove a vehicle
    function removeVehicle() {
        if (vehicles.length > 0) {
            const lastVehicle = vehicles.pop();
            gameArea.removeChild(lastVehicle);
            vehicleCount--;
        }
    }

    // Add more logic here for moving the vehicles around

    // Add event listener for keydown event
    document.addEventListener('keydown', moveVehicle);

    // Function to move the vehicle
    function moveVehicle(e) {
        const vehicle = vehicles[vehicles.length - 1];
        if (vehicle) {
            const currentPosition = {
                x: parseInt(vehicle.style.left) || 0,
                y: parseInt(vehicle.style.top) || 0,
            };

            // Switch statement to move the vehicle in different directions based on the key pressed
            switch (e.keyCode) {
                case 37: // Left arrow
                    if (currentPosition.x - 10 >= 0) {
                        vehicle.style.left = currentPosition.x - 10 + 'px';
                    }
                    break;
                case 38: // Up arrow
                    if (currentPosition.y - 10 >= 0) {
                        vehicle.style.top = currentPosition.y - 10 + 'px';
                    }
                    break;
                case 39: // Right arrow
                    if (currentPosition.x + 10 + vehicle.width <= gameAreaRect.width) {
                        vehicle.style.left = currentPosition.x + 10 + 'px';
                    }
                    break;
                case 40: // Down arrow
                    if (currentPosition.y + 10 + vehicle.height <= gameAreaRect.height) {
                        vehicle.style.top = currentPosition.y + 10 + 'px';
                    }
                    break;
            }
        }
    }

    // Add event listeners for the mouse events
    gameArea.addEventListener('mousedown', startDrag);

    // Function to start dragging the vehicle
    function startDrag(e) {
        selectedVehicle = e.target;
        offsetX = e.clientX - selectedVehicle.getBoundingClientRect().left;
        offsetY = e.clientY - selectedVehicle.getBoundingClientRect().top;

        document.addEventListener('mousemove', dragVehicle);
        document.addEventListener('mouseup', stopDrag);
    }

    // Function to drag the vehicle
    function dragVehicle(e) {
        if (selectedVehicle) {
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;

            // Keeping the vehicle within the game area
            if (x < gameAreaRect.left) {
                x = gameAreaRect.left;
            } else if (x + selectedVehicle.width > gameAreaRect.right) {
                x = gameAreaRect.right - selectedVehicle.width;
            }

            if (y < gameAreaRect.top) {
                y = gameAreaRect.top;
            } else if (y + selectedVehicle.height > gameAreaRect.bottom) {
                y = gameAreaRect.bottom - selectedVehicle.height;
            }

            selectedVehicle.style.left = x + 'px';
            selectedVehicle.style.top = y + 'px';
        }
    }

    // Function to stop dragging the vehicle
    function stopDrag() {
        selectedVehicle = null;
        document.removeEventListener('mousemove', dragVehicle);
        document.removeEventListener('mouseup', stopDrag);
    }
}


/* Packages */
if(document.getElementsByClassName("package")){
	
		  // Animate the h1 heading
		  $("section > h1").css({
			fontSize: 0,
			opacity: 0
		  }).animate({
			fontSize: "2.3em",
			opacity: 1
		  }, 600);

		  // Reveal the questions when the page opens
		  $("dl#package").hide().show(600);

		  // Add click events to each question in the FAQ
		  $("dl#package dt").click(function() {
			let question = $(this);
			let answer = question.next();

			question.toggleClass("hiddenAnswer");

			if (question.hasClass("hiddenAnswer")) {
			  answer.slideUp(600);
			} else {
			  answer.slideDown(600);
			}
		  });

}