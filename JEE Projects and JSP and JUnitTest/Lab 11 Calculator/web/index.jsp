<%--suppress XmlDefaultAttributeValue HtmlFormInputWithoutLabel --%>
<%--
  Created by IntelliJ IDEA.
  User: Ahmed Hamdy
  Date: 12/12/2020
  Time: 6:49 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType = "text/html;charset=UTF-8" language = "java" %>
<html>
  <head>
    <title>Calculator</title>

    <link href = "style.css" media = "screen" rel = "stylesheet" type = "text/css" />

    <script src = "jquery-2.0.3.js"></script>
    <script src = "script.js"></script>

    <link href = "icon.png" rel = "icon" type = "image/jpg">
  </head>
  <body>

  <form id = "calcForm" action = "CalculatorServlet" method = "post">
      <div>
        <input type = "text" name = "value1"/>
        +
        <input type = "text" name = "value2"/>
        =
        <input type = "text" id = "result1" readonly/>
      </div>
      <div>
        <input type = "text" name = "value3"/>
        *
        <input type = "text" name = "value4"/>
        =
        <input type = "text" id = "result2" readonly/>
      </div>
      <button type = "submit">Submit</button>
      <button type = "reset">Reset</button>
    </form>

  </body>
</html>
