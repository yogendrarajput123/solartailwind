import React, { useState } from "react";

const VendorLikes = () => {
  const [activity, setActivity] = useState("");

  const [listData, setListData] = useState([]);

  const addActivity = () => {
    // setListData([...listData,activity]);
    // console.log(listData);
    setListData((listData) => {
      const updated = [...listData, activity];
      console.log(updated);
      setActivity("");
      return updated;
    });
  };

  const removeButton = (index) => {
    const removeItem = listData.filter((ele, id) => {
      return index !== id;
    });
    setListData(removeItem);
  };

  const removeAll = () => {
    setListData([]);
  };

  return (
    <div className="container ml-[400px] mt-[100px]">
      <div className="header w-[50%] bg-green-400 text-center">
        <h1>TODO LIST</h1>
      </div>
      <div className="ml-[200px]">
        input :{" "}
        <input
          type="input"
          placeholder="Add Activity"
          value={activity}
          className="p-2 m-2 bg-blue-100"
          onChange={(e) => setActivity(e.target.value)}
        ></input>
        <button onClick={addActivity} className="p-3 bg-red-300">
          ADD
        </button>
        <p className="text-2xl">contains Are Here ----</p>
        {                              
           listData !== [] &&
          listData.map((data, i) => {
            return (
              <div key={i}>
                <p>{data}</p>
                <div>
                  <button
                    className="p-2 bg-green-300"
                    onClick={() => removeButton(i)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        {
          listData.length >= 1 && (
          <button onClick={removeAll} className="p-2">
            remove all
          </button>
        )
        }
      </div>
    </div>
  );
};

export default VendorLikes;
