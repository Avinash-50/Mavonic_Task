import './Item.css';
function Item(props){
    const nirma = props.name;
    return (
        <div>
         <p className='Nirma'>{nirma}</p>
         {props.children}

        </div>
   
    );
}

export default Item;