import React, { useState } from "react";

const data = [
  {
    name: "Pay tuition fees",
    description: "This was due long ago!!",
  },
  {
    name: "Take Driving License",
    description: "Also due long ago!!",
  },
  {
    name: "Work on kanna project",
    description: "Time to put in some work on this",
  },
  {
    name: "Axios interface",
    description:
      "Axios is an interface between front-end react and back-end django",
  },
].map((i, index) => {
  return { ...i, id: index };
});

const ToDoList = () => {
  const [list_data, setList_Data] = useState(data);

  return (
    <>
      {list_data.map((item) => {
        return (
          <div>
            <ToDoItem key={item.id} data={item} />
            <button
              className="delete-button"
              onClick={(event) => {
                setList_Data((prevData) => {
                  return prevData.filter((i) => {
                    return i.id !== item.id;
                  });
                });
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};

const ToDoItem = (props) => {
  return (
    <div>
      <p className="todoid">{props.data.id}</p>
      <h3>{props.data.name}</h3>
      <p>{props.data.description}</p>
    </div>
  );
};

export default ToDoList;
