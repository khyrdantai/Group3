function deleteContact(info) 
{
    if (confirm("Are you sure you want to delete this contact?") == true) 
    {
        //grab contact ID and save to an object
        let contacto = info.data;

        let oldContact = 
        {
            id: contacto
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
                    // repaint page
                    //doSearch();

                    let row = info.parentNode.parentNode.rowIndex;

                    document.getElementById("contact_display_box").deleteRow(row);
                }
            };
            xhr.send(jsonPayload);
        }
        catch(err)
        {
            //document.getElementById("colorAddResult").innerHTML = err.message;
        }
        
    } 
    else 
    {
        text = "Canceled";
        return;
    }
    
}