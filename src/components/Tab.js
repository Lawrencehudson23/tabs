import React, {useState} from 'react';

const Tab = ({header,content}) => {

    const tabs = [
        {header:"Tab 1",
        content:"Tab 1 conteny is showing here."    
      },
        {header:"Tab 2",
        content:"Tab 2 conteny is showing here."    
      },
        {header:"Tab 3",
        content:"Tab 3 conteny is showing here."    
      }]
    const [state, setState] = useState({
        content:"",   
        color:"",
        id:""
    });  

    const onClickHandler = (e,index) => {
        // alert("ni hao ma");
        setState({
            content:tabs[index].content,
            color:"pink",
            id:index
        })
    }

    return (
        <div>
      {tabs.map((tab,i) => 
      
         <button onClick={(e)=> onClickHandler(e,i)} key={i} {...tab}
         style={{color:"green",backgroundColor:
        state.id==i&&state.color
        }}
         
         >{tab.header}</button>
      )}
        <p>{state.content}</p>
        </div>        

    )}
export default Tab;