<%
String username = request.getParameter("username");
String password = request.getParameter("password");
if("admin".equals(username) && "admin".equals(password)) {
	out.println("{\"result\": \"success\"}");
} else {
	out.println("{\"result\": \"failure\"}");
}
%>