import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./css/Classes";
import Styles from "./css/Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./HighLight/HighLight";
import Add from "./Add/Add";
import TodoList from "./todos/todoList";
function Assignment3() {
 return (
   <div>
     <h1>Assignment 3</h1>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <PathParameters/>
     <JavaScript/>
     <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3}b={4}></Add>
     <TodoList/>
   </div>
 )
}
export default Assignment3;