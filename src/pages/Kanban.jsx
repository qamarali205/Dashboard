import React,{useState} from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { useStateContext } from '../contexts/ContextProvider';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  const { currentColor, currentMode } = useStateContext();
  const [kanbanData, setKanbanData] = useState([
    { Id: "Task " +1, Status: 'Open', Summary: 'Improve application performance', Type: 'Task ' },
    { Id: "Task " +2, Status: 'InProgress', Summary: 'Orders of 6th April', Type:  'Bug' },
    { Id: "Task " +3, Status: 'InProgress', Summary: 'Fix the issues reported by the customer.', Type: 'Task ' },
    { Id: "Task " +4, Status: 'Close', Summary: 'Enhance editing functionality.', Type: 'Story'  },
  ]);

  const [taskName, setTaskName] = useState('');

  const handleAddTask = (e) => {
    if(taskName.length===0){
      alert("task name can not be empty");
    }
    else{
    const newTask = {
      Id: "Task " + (kanbanData.length + 1),
      Status: 'Open',
      Summary: taskName,
      Type: 'Task',
    };
    setKanbanData([...kanbanData, newTask]);
    setTaskName('');
  }
  };


  return(
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="To-Do List"  />
    <div className="flex justify-center m-6 flex-wrap">
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="p-2 border-2 border-gray-200 rounded-lg ml-2 mt-4"
          style={{ border : "2px solid black" }}
        />
        <button type="button" onClick={handleAddTask} className="px-4 py-2 text-white rounded-lg ml-2 mt-4" style={{ backgroundColor: currentColor }}>
          Add Task
        </button>
      </div>
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
    </KanbanComponent>
    
  </div>
  );
  };

export default Kanban;
