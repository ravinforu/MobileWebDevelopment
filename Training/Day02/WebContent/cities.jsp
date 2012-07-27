<%
String indiaJSON = "{\"cities\": [\"Chennai\", \"Cochin\", \"Mumbai\"]}";
String usaJSON = "{\"cities\": [\"NY\", \"NJ\", \"Houston\"]}";
String ukJSON = "{\"cities\": [\"London\", \"Bristol\", \"Essex\"]}";

//String cities = "{\"India\": [\"Chennai\", \"Cochin\", \"Mumbai\"], 
//\"USA\": [\"NY\", \"NJ\", \"Houston\"], 
//\"UK\": [\"London\", \"Bristol\", \"Essex\"]}";

String country = request.getParameter("country");
if("India".equals(country)) {
	out.println(indiaJSON);	
} else if("USA".equals(country)) {
	out.println(usaJSON);
} else if("UK".equals(country)) {
	out.println(ukJSON);
}

%>