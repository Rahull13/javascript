// "Code is like humor. When you have to explain it, it’s bad." – Cory House

// last Updated on 15-04-2025 6:40 Pm

// Global Portal CODE
const errorColor = "#EA1946"; // Variable to define error message color

function validateForm(containerSelector) {
    let isValid = true;
    const container = document.querySelector(containerSelector);
    if (!container) return false;

    container.querySelectorAll(".required").forEach(input => {
        const label = container.querySelector(`label[for='${input.id}']`);
        removeExistingError(input);

        if (input.type === "text" || input.type === "email" || input.tagName === "TEXTAREA") {
            if (!input.value.trim()) {
                showError(input, label, "This field is required.");
                isValid = false;
            } else if (input.type === "email" && !isValidEmail(input.value)) {
                showError(input, label, "Enter a valid email address.");
                isValid = false;
            }
        } 
        else if (input.tagName === "SELECT") {
            if (!input.value) {
                showError(input, label, "Please select an option.");
                isValid = false;
            }
        } 
        else if (input.type === "date") {
            // Validate date input (ensure a value is selected)
            if (!input.value) {
                showError(input, label, "Please select a date.");
                isValid = false;
            }
        }
        else if (input.type === "file") {
            // Validate file input (ensure a file is selected)
            if (!input.files || input.files.length === 0) {
                showError(input, label, "Please upload a file.");
                isValid = false;
            }
        }
        else if (input.type === "number") {
            if (!input.value.trim()) {
                showError(input, label, "Please enter a number.");
                isValid = false;
            } 
        }
        else if (input.type === "radio") {
            const radioGroup = container.querySelectorAll(`input[name='${input.name}']`);
            const isChecked = [...radioGroup].some(radio => radio.checked);
            if (!isChecked) {
                showError(radioGroup[radioGroup.length - 1], label, "Please select an option.");
                isValid = false;
            }
        } 
        else if (input.type === "checkbox") {
            const checkboxGroup = container.querySelectorAll(`input[name='${input.name}']`);
            const isChecked = [...checkboxGroup].some(checkbox => checkbox.checked);
            if (!isChecked) {
                showError(checkboxGroup[checkboxGroup.length - 1], label, "Please check at least one option.");
                isValid = false;
            }
        }
    });

    return isValid;
}

function showError(input, label, message) {
    if (label) label.classList.add("error-label");

    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.innerText = message;
    errorMessage.style.color = errorColor;

    input.classList.add("error-input");

    // Find the nearest form-group container or use parent div
    const parentDiv = input.closest(".form-group") || input.parentElement;
    
    if (parentDiv) {
        // Ensure error appears after the full input div
        parentDiv.insertAdjacentElement("afterend", errorMessage);
    }
}

function removeExistingError(input) {
    input.classList.remove("error-input");

    // Find the parent container that has the error message
    const parentDiv = input.closest(".form-group") || input.parentElement;
    if (parentDiv) {
        const existingError = parentDiv.nextElementSibling;
        if (existingError && existingError.classList.contains("error-message")) {
            existingError.remove();
        }
    }

    // Remove error styling from the label
    const label = document.querySelector(`label[for='${input.id}']`);
    if (label) label.classList.remove("error-label");
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Remove error on input, change, or click (for radio/checkbox)
$(document).on('input change click', '.required', function () {
    removeExistingError(this);
});

// end..

// function to get singal record 
async function global_web_api_get_singal_record(Entity_Name, Record_id, Fields = "*", Expand_Entity = null) {
    // * Fetches a record from a specified Dataverse entity using its unique Record ID (GUID).
    // * Allows selecting specific fields (default: all fields *).
    // * Supports expanding related entities to fetch additional linked data.
    // * Uses webapi.safeAjax() for API calls.
    // * Returns a Promise that resolves to the retrieved record data or throws an error if the request fails.
    // hwo to get the data once the data has been returned...
    // contact_date.then(
    //     function(value) { alert(value.contactid)},
    //     function(error) { /* code if some error */ alert("error")}
    //   );
    let URL_ = `/_api/${Entity_Name}(${Record_id})`;

    if (Fields !== "*") {
        URL_ += `?$select=${Fields}`;
    }

    if (Expand_Entity) {
        URL_ += Fields !== "*" ? `&$expand=${Expand_Entity}` : `?$expand=${Expand_Entity}`;
    }

    return await webapi.safeAjax({
        type: "GET",
        url: URL_,
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        }
    });
}
// end..

// function to get multipal records
async function global_web_api_get_Multiple_record(Entity_Name, Fields = "*", Expand_Entity = null, Filters = null, Order_By = null, Count = false) {
    // * Fetches multiple records from a specified Dataverse entity.
    // * Allows selecting specific fields (default: all fields *).
    // * Supports expanding related entities to retrieve linked data.
    // * Enables filtering, sorting, and counting of records based on parameters.
    // * Uses webapi.safeAjax() to send a GET request.
    // * Returns an array containing the retrieved records and, if enabled, the total record count.
    // * Returns a Promise that resolves to the retrieved record data or throws an error if the request fails.
    // hwo to get the data once the data has been returned...
    // contact_date.then(
    //     function(value) { alert(value.contactid)},
    //     function(error) { /* code if some error */ alert("error")}
    //   );
    let URL_ = `/_api/${Entity_Name}`;

    if (Fields !== "*") {
        URL_ += `?$select=${Fields}`;
    }

    if (Expand_Entity) {
        URL_ += `&$expand=${Expand_Entity}`;
    }

    if (Filters) {
        URL_ += `&$filter=${Filters}`;
    }

    if (Order_By) {
        URL_ += `&$orderby=${Order_By}`;
    }

    if (Count) {
        URL_ += `&$count=true`;
    }

    // Perform the AJAX request and return the response
    let response = await webapi.safeAjax({
        type: "GET",
        url: URL_,
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        }
    });

    let result_array = ["Result", response];

    if (Count && response["@odata.count"] !== undefined) {
        result_array.push("Count", response["@odata.count"]);
    }

    return result_array;
}
// end..

// function to Create a record
async function global_web_api_Create_record(Entity_Name, Record_json) {
    // The global_web_api_Create_record function is an asynchronous function that creates a new record in a Microsoft Dataverse entity using the Power Pages Web API.

    // Key Highlights:
    // * Sends a POST request to create a new record in the specified Dataverse entity.
    // * Accepts an object (Record_json) containing field values for the new record.
    // * Uses webapi.safeAjax() for the API request.
    // * Returns the created record's entity ID if successful; otherwise, returns an error message.
    // contact_data.then(
    //     function(value) { alert(value)},
    //     function(error) { /* code if some error */ alert("error")}
    //   );
    return new Promise((resolve, reject) => {
        webapi.safeAjax({
            type: "POST",
            contentType: "application/json",
            url: `/_api/${Entity_Name}`,
            data: JSON.stringify(Record_json),
            success: function (data, textStatus, xhr) {
                let entityId = xhr.getResponseHeader("entityid");
                resolve(entityId || "Error: No entity ID found");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.error("Error creating record:", xhr);
                reject("Error creating record");
            }
        });
    });
}
// end..  

// function to update a record
async function global_web_api_Update_record(Entity_Name, Record_id, Record_json) {
    // Purpose: Updates an existing record in Dataverse using a PATCH request.

    // Parameters:
    // * Entity_Name: The name of the Dataverse entity.
    // * Record_id: The unique identifier of the record to be updated.
    // * Record_json: The JSON object containing the updated data.

    // Implementation Details:
    // * Uses webapi.safeAjax() to send a PATCH request.
    // * Wraps the request in a Promise for better async handling.
    // * Logs success and error messages to the console.

    // Return Value:
    // * Resolves with "Record updated successfully" if the update is successful.
    // * Rejects with "Error updating record" in case of failure.

    // contact_data.then(
    //     function(value) { alert(value)},
    //     function(error) { /* code if some error */ alert("error")}
    //   );
    return new Promise((resolve, reject) => {
        webapi.safeAjax({
            type: "PATCH",
            contentType: "application/json",
            url: `/_api/${Entity_Name}(${Record_id})`,
            data: JSON.stringify(Record_json),
            success: function () {
                resolve("Record updated successfully");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.error("Error updating record:", xhr);
                reject("Error updating record");
            }
        });
    });
}
// end..

// function to delete a record 
async function global_web_api_Delete_record(Entity_Name, Record_id) {
    // * Deletes a record from the specified entity in Dataverse using a Web API call.
    // * Uses a Promise to handle asynchronous operations, ensuring proper success and error handling.
    // * Logs messages to the console for debugging purposes.
    // * Resolves or rejects the promise based on API response, enabling better control in calling functions.
    
    // contact_data.then(
    //     function(value) { alert(value)},
    //     function(error) { /* code if some error */ alert("error")}
    //   );
    return new Promise((resolve, reject) => {
        webapi.safeAjax({
            type: "DELETE",
            url: `/_api/${Entity_Name}(${Record_id})`,
            contentType: "application/json",
            success: function () {
                console.log("Record deleted successfully");
                resolve("Record deleted successfully");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.error("Error deleting record:", xhr);
                reject("Error deleting record");
            }
        });
    });
}
// end..

// code for only number 

// oninput="this.value = this.value.replace(/\D/g, '')" onlly digits allow
// add this oninput in the input tag and it will make sure that the passed values are only numbers 

// end..

// code to have only number and with max length 10

// oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10)"
// add this oninput in the input tag and it will make sure that the passed values are only numbers and are of length 10

// end..

// comman modals 
// one dynamic modal with dynamic size options and headline option, title, fotter, header and body option.
// end..

// declaration of var
// Declaring Variables in JavaScript Using Camel Casing
// In JavaScript, camel casing (also known as lower camel case) is a naming convention where the first word starts with a lowercase letter, and each subsequent word starts with an uppercase letter.

// Syntax for Declaring a Variable in Camel Case
// javascript
    // let myVariableName = "Hello, World!"; // Camel case variable declaration

// ✅ Correct Example: myVariableName

// ❌ Incorrect Examples:

    // my_variablename (snake_case ❌)

    // MyVariableName (PascalCase ❌)

    // myvariablename (not readable ❌)

// How to Declare Variables in Camel Case
// 1. Using let (Recommended)
// javascript

    // let userName = "John Doe"; // Stores a string
    // let userAge = 25; // Stores a number
    // Use let for variables that can change.

// 2. Using const (For Constants)
// javascript

    // const maxUserLimit = 100; // Value cannot change
    // const apiBaseUrl = "https://api.example.com";
// Use const when the value should not be changed.

// 3. Using var (Avoid Using in Modern JavaScript)
// javascript

    // var userEmail = "john.doe@example.com"; // Old way, avoid using
    // var is function-scoped and can cause issues in large applications.

// Examples of Camel Case Variable Names
// javascript

    // let firstName = "Alice";
    // let lastName = "Johnson";
    // let totalPrice = 99.99;
    // let isUserLoggedIn = true;
    // let userProfileData = { name: "Alice", age: 30 };

// Best Practices for Camel Case Naming
    // ✅ Use meaningful variable names: userName, totalAmount, isActiveUser
    // ✅ Keep names short but descriptive
    // ✅ Start with a lowercase letter
    // ✅ Use uppercase only for subsequent words
    // ✅ Avoid special characters ($, _, etc.) unless necessary

// end..

// catching issues 
// end..

// convert to base 64
function convertToBase64Global(file_name,file_size = Number,file_extension = Array) {
    return new Promise((resolve, reject) => {
        if($(file_name).val() != "" ){
            if(file_name.files[0].size < (1048576*file_size) ){
                var ext = $(file_name).val().split('.').pop().toLowerCase();
                if($.inArray(ext, file_extension) != -1) {
                    index = 1;
                    var img = file_name.files[0];
                    var doc1_Note_File_Name = file_name.files[0].name;
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        var doc1_file_type = reader.result.split(";")[0].split(":")[1];
                        var doc1_file_Content = reader.result.split(";")[1].split(",")[1];
                        resolve({"success":{"file name":doc1_Note_File_Name,"file type":doc1_file_type,"base64":doc1_file_Content}});
                    };
                    reader.readAsDataURL(img);
                    
                }
                else{
                    reject({"error":"file extension should be "+file_extension});
                }
            }
            else{
                reject({"error":"file size is more than "+file_size+" MB"});
            }
        }
        else{
            reject({"error":"file not found"});
        }
    });
}
// end..

// code for the formate date 
// Sure! Here's a JavaScript function that takes a Date object and a format string, and returns the date formatted according to the pattern you specify
function formatDate(date, format) {
    const daysFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsFull = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthsShort = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const hours = date.getHours();
    const map = {
        "YYYY": date.getFullYear(),
        "YY": String(date.getFullYear()).slice(-2),
        "MMMM": monthsFull[date.getMonth()],
        "MMM": monthsShort[date.getMonth()],
        "MM": String(date.getMonth() + 1).padStart(2, '0'),
        "M": date.getMonth() + 1,
        "DD": String(date.getDate()).padStart(2, '0'),
        "D": date.getDate(),
        "dddd": daysFull[date.getDay()],
        "ddd": daysShort[date.getDay()],
        "hh": String(hours).padStart(2, '0'),
        "h": hours,
        "mm": String(date.getMinutes()).padStart(2, '0'),
        "m": date.getMinutes(),
        "ss": String(date.getSeconds()).padStart(2, '0'),
        "s": date.getSeconds(),
        "A": hours >= 12 ? "PM" : "AM"
    };

    return format.replace(/YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|hh|h|mm|m|ss|s|A/g, match => map[match]);
}