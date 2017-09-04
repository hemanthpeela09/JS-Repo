<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Tables</title>

<script>

</script>
</head>

<body>

   <%= for(int i=0;i<5;i++) {%>
      <input type = "text" name="tab1" value="<%= i%>"/>
   <%}%> 
       
   
      <%while ( fontSize <= 3){ %>
         <font color = "green" size = "<%= fontSize %>">
            JSP Tutorial
         </font><br />
         <%fontSize++;%>
      <%}%>
   
    
</body>
</html>

