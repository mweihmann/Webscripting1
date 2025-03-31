//Starting point for JQuery init
$(document).ready(function () {
    $("#searchResult").hide();

    $("#btn_Search").click(function (e) {
       loaddata($("#searchfield").val());
    });

    $("#btn_Add").click(function (e) {
        addPerson();
    });

    $("#btn_Update").click(function (e) {
        updatePerson($("#id").val());
    });

    $("#btn_Delete").click(function (e) {
        deletePerson($("#id").val());
    });

});

function loaddata(searchterm) {

    $.ajax({
        type: "GET",
        url: "../serviceHandler.php",
        cache: false,
        data: {method: "queryPersonByName", param: searchterm},
        dataType: "json",
        success: function (response) {
            console.log("Server Response:", response);

            $("#noOfentries").val(response.length);

            let resultList = $("#resultList");
            resultList.empty();

            response.forEach(function (innerArray) {
                let person = innerArray[0];
                let listItem = $("<li></li>").html(
                    `<strong>ID:</strong> ${person.id}
                     <strong>Vorname:</strong> ${person.firstname} | 
                     <strong>Nachname:</strong> ${person.lastname} | 
                     <strong>E-Mail:</strong> ${person.email} | 
                     <strong>Telefon:</strong> ${person.phone} |
                     <strong>Abteilung:</strong> ${person.department} |`
                );
                resultList.append(listItem);
            });

            $("#searchResult").show(1000).delay(1000).hide(1000);
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", error);
            alert("Failed to load data. Please try again.");
        }
    });
}

function addPerson() {
    let firstname = $("#firstname").val().trim();
    let lastname = $("#lastname").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let department = $("#department").val().trim();

    if (!firstname || !lastname || !email || !phone || !department) {
        alert("Please fill in all fields.");
        return;
    }

    let postData = {
        method: "addPerson",
        param: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            department: department
        }
    };

    $.ajax({
        type: "POST",
        url: "../serviceHandler.php",
        data: JSON.stringify(postData),
        contentType: "application/json",
        success: function (response) {
            console.log("Server Response:", response);
            alert("Person added successfully!");
            
            $("#firstname").val("");
            $("#lastname").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#department").val("");
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", error);
            alert("Failed to add person. Please try again.");
        }
    });
}

function updatePerson() {
    let id = $("#id").val().trim();
    let firstname = $("#firstname").val().trim();
    let lastname = $("#lastname").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let department = $("#department").val().trim();

    if (!id || !firstname || !lastname || !email || !phone || !department) {
        alert("Please fill in all fields.");
        return;
    }

    let putData = {
        method: "updatePerson",
        param: {
            id: id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            department: department
        }
    };

    $.ajax({
        type: "PUT",
        url: "../serviceHandler.php",
        data: JSON.stringify(putData),
        contentType: "application/json",
        success: function (response) {
            console.log("Server Response:", response);
            alert("Person updated successfully!");
            
            $("#id").val("");
            $("#firstname").val("");
            $("#lastname").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#department").val("");
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", error);
            alert("Failed to update person. Please try again.");
        }
    });

}    

// using post instead of delete because it might not be supported. alternative DELETE commented out below
function deletePerson() {
    let id = $("#id").val().trim();

    if (!id) {
        alert("Please enter a valid ID.");
        return;
    }

    let deleteData = {
        method: "deletePerson",
        param: { id: id }
    };

    $.ajax({
        type: "POST",
        url: "../serviceHandler.php",
        data: JSON.stringify(deleteData),
        contentType: "application/json",
        success: function (response) {
            console.log("Server Response:", response);
            alert("Person deleted successfully!");
            
            $("#id").val("");
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", error);
            alert("Failed to delete person. Please try again.");
        }
    });

    // $.ajax({
    //     type: "DELETE",
    //     url: `../serviceHandler.php?id=${id}&method=deletePerson`,
    //     success: function (response) {
    //         console.log("Server Response:", response);
    //         alert("Person deleted successfully!");
    //         $("#id").val("");
    //     },
    //     error: function (xhr, status, error) {
    //         console.error("AJAX Error:", error);
    //         alert("Failed to delete person. Please try again.");
    //     }
    // });
}

