function deleteContact(info) 
{
    alert("delete starting? plz?")
    if (confirm("Are you sure you want to delete this contact FOREVER?!") == true) 
    {
        //grab contact ID and save to an object
        let contacto = info.data;
        alert("The data is " + contacto + ".");

        let oldContact = 
        {
            ID: contacto
        };
        

        //JSON.stringify(object)
        let jsonPayload = JSON.stringify( oldContact );

        //create url to POST to
        let url = urlBase + '/Delete.' + extension;

        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        try
        {
            xhr.onreadystatechange = function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    //document.getElementById("colorAddResult").innerHTML = "Color has been added";
                    alert("worked?");
                }
            };
            xhr.send(jsonPayload);
        }
        catch(err)
        {
            //document.getElementById("colorAddResult").innerHTML = err.message;
        }
        doSearch();

        //
    } 
    else 
    {
        text = "You canceled!";
        return;
    }
    
}