<%
String username = request.getParameter("username");
String password = request.getParameter("password");
if("admin".equals(username) && "admin".equals(password)) {
	out.print("success");
} else {
	out.print("failure");
}
%>