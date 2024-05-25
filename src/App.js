import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/card';

function App() {
  const responce= [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"june",
      itemYear:"2090"
    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:"june2",
      itemYear:"20902"
    },
    {
      itemName:"Nirma3",
      itemDate:"203",
      itemMonth:"june3",
      itemYear:"20903"
    },
  ]
  
  return (
    
    <div>
    <Card>
    <Item name={responce[0].itemName}>
      kya haal chal hai
    </Item>
    <ItemDate day={responce[0].itemDate} month={responce[0].itemMonth} year={responce[0].itemYear}></ItemDate>
    <Item name={responce[1].itemName}></Item>
    <ItemDate day={responce[1].itemDate} month={responce[1].itemMonth} year={responce[1].itemYear}></ItemDate>
    <Item name={responce[2].itemName}></Item>
    <ItemDate day={responce[2].itemDate} month={responce[2].itemMonth} year={responce[2].itemYear}></ItemDate>
    <div className="App">RAM RAM</div>

    </Card>
    
    

    </div>
    
  );
}

export default App;
