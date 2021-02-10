var mouseEvent = "empty"
var last_position_of_x, last_position_of_y;
var last_position_of_x_2, last_position_of_y_2

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
  var  color = "black";
  var  width_of_line = 2;
  var  width = screen.width 
  var new_width = width - 70
  var new_height = screen.height - 290

  if(width < 992){
      canvas.width = new_width
      canvas.height = new_height
      document.body.style.overflow = "hidden";
  }
  if(screen.width > 992){
      canvas.width = 800
      canvas.height = 1000
  }
  
      canvas.addEventListener("mousedown", mousedown)
      function mousedown(e){
          color = document.getElementById("input_1").value;
          width_of_line = document.getElementById("input_2").value;
          mouseEvent = "mousedown"


          last_position_of_x_2 = e.clientX - canvas.offsetLeft
          last_position_of_y_2 = e.clientY - canvas.offsetTop
      }
      canvas.addEventListener("mousemove", mousemove)
      function mousemove(e){
          if(mouseEvent == "mousedown"){
          console.log("mouse move starts")
          current_position_of_mouse_x = e.clientX - canvas.offsetLeft
          current_position_of_mouse_y =  e.clientY - canvas.offsetTop

          ctx.beginPath()
          ctx.strokeStyle = color;
          ctx.lineWidth = width_of_line;

          ctx.moveTo(last_position_of_x_2, last_position_of_y_2);
          console.log(current_position_of_mouse_x, current_position_of_mouse_y);

          ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
          ctx.stroke();

          last_position_of_x_2 = current_position_of_mouse_x
          last_position_of_y_2 = current_position_of_mouse_y 
          } 
      }
      canvas.addEventListener("mouseup", mouseup)
      function mouseup(e){
          mouseEvent = "mouseup"
      }
      canvas.addEventListener("mouseleave", mouseleave)
      function mouseleave(e){
          mouseEvent = "mouseleave"
      }
  
   //touch screen starts//

    canvas.addEventListener("touchstart", touch);
    
    function touch(e)
    {
        
        color = document.getElementById("input_1").value;
        width_of_line = document.getElementById("input_2").value;
        
        
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", touch2);
    function touch2(e)
    {

        current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_y = e.touches[0].clientY - canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }
    function destroy() {
        console.log("clear() is called")
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }

