import React, {useState} from 'react';
import './Tab.css';

const data = [
    {id : '1',
     tabTitle: "Tab 1",
     tabContent: 'Tab Content 1'
    },
    {id : '2',
     tabTitle: "Tab 2",
     tabContent: 'Tab Content 2'
    },
    {id : '3',
     tabTitle: "Tab 3",
     tabContent: 'Tab Content 3'
    },
    {id : '4',
     tabTitle: "Tab 4",
     tabContent: 'Tab Content 4'
    }
  ]
  
  const Tab = (props) => {
    
    const [visibleTab, setVisibleTab] = useState(data.id)
  
    const listTitles = data.map((item) => 
        <li onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>{item.tabTitle}</li>
    )       
                                     
    const listContent = data.map((item) => 
        <p style={visibleTab === item.id ? {} : {display: 'none'}}>{item.tabContent}</p>
    )
    
    return(
        <div className="tabs">
          <ul className="tabs-titles">
            {listTitles}
          </ul>
          <div className="tab-content">
             {listContent}
          </div>
        </div>
      )
  };

  export default Tab;