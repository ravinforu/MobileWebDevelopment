<%
	String name = request.getParameter("name");
	String address = request.getParameter("address");
	out.println("Hello " + name + "<br>Thanks for request. We will reply you back at " + address);
%>