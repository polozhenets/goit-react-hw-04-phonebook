


export const ContactItem = ({id,name,number,removeHandler}) =>{
 return(
    <li>{name}: {number} <button type="button" onClick={()=>removeHandler(id)}>Delete</button></li>
 )
}
 