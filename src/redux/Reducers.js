//reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
export default function aa(state,action){
	  switch(action.type)
		{
		case 'change':
		  return{same:action.value};
		  break;
		case 'test':
		   return{same:11};
		  break;
		default:
		  return {same:'default'};
		  break;
		}
}