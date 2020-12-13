<%--suppress unchecked --%>
<%--
  Created by IntelliJ IDEA.
  User: Ahmed Hamdy
  Date: 12/12/2020
  Time: 10:46 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.List" %>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>

<%@ page contentType = "text/html;charset=UTF-8" %>
<html>
<head>
    <title>Beer Adviser Results</title>
</head>
<body>

    <h1>Beer Recommendations</h1>
    <%
        List<String> styles = (List<String>) request.getAttribute("advices");
        for (String style : styles) {
            out.print("<br> try this: " + style);
        }
    %>

</body>
</html>
