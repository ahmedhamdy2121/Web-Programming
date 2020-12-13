<%--
  Created by IntelliJ IDEA.
  User: Ahmed Hamdy
  Date: 12/12/2020
  Time: 10:45 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
  <title>Beer Adviser</title>
</head>
<body>
  <form method="post" action="BeerServlet">
    <label for = "color">Select Beer Color:</label>
    <select name="color" id = "color">
      <option value="light">Light</option>
      <option value="amber">Amber</option>
      <option value="brown">Brown</option>
      <option value="dark">Dark</option>
    </select>
    <br/>
    <input type="submit">

  </form>
</body>
</html>
