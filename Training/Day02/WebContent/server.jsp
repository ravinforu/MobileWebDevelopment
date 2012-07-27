<%
	String name = request.getParameter("name");
	String json = "{\"output\":\"" + name.toUpperCase() + "\"}";
	out.println(json);
%>