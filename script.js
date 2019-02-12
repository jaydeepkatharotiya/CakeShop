function validateForm()
		{
			// Declaration and Valleu Assigning ...
			var fname = document.forms["myForm"]["fname"].value;
			var lname = document.forms["myForm"]["lname"].value;
			var subject = document.forms["myForm"]["subject"].value;

			if(fname === "")
			{
				alert("First name must be filled out");
				return false;
			}else if(lname === "")
			{
				alert("Last name must be filled out");
				return false;
			}else if(subject === "")
			{
				alert("Subject must be filled out");
				return false;
			}
			else
			{
				alert("Ticket Successfully Registered...");
				return true;
			}
		}