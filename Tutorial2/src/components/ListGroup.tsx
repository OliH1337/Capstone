import { MouseEvent, useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string; 
}

function ListGroup(props: ListGroupProps) {
   // let items = [
     //   'Sydeny',
       // 'Melbourne',
        //'Brisbane',
   // ];
   // items = []
   //Hook tells it has a state that can chagne over tieme
   const [selectedIndex, setSelectedIndex ] = useState(-1);
   //arr[0] //variable (selectedIndex)
   //arr[1] //updater function


   // if (items.length === 0)
      //  return <p> No item found</p>

    //items.map(item => <li>{item}</li>)

    const getMessage =() => {
        return props.items.length===0 && <p>No Items Found</p>
    }

    //event handler
    const handleClick = (event: MouseEvent) => console.log(event);
    
    return (
    <>
        <h1>List</h1>
        {getMessage()}
        <ul className="list-group">
            {props.items.map((item, index) => (
                <li 
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                key={item} 
                onClick={() => {setSelectedIndex(index)}}>
                    {item}
                </li>
            ))}
        </ul>
    </>
    );
}

export default ListGroup;