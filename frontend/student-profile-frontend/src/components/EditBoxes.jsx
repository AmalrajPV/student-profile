import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import "../css/Profile.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export const EditUlBox = (props) => {
    const [item, setItem] = useState([]);
    const [inval, setInval] = useState("");
    useEffect(()=>{
        setItem(props.items)
    }, [props]);

    const handleChange = (e)=>{
        setInval(e.target.value);
    }

    const addItem = () =>{
        setItem([...item, inval]);
    }

    const removeItem = (id)=>{
        console.log(id);
        const updated = item.filter((ele, i)=>{
            return i !== id;
        });
        setItem(updated);
    }

    return (
      <div className="right-box-inner">
        <div className="rbi-title">
          {props.icon} {props.title}
        </div>
        <div className="rbi-content">
          <ul>
            {item?.map((data, index) => (
              <li key={index} className="rbi-list-del"><span>{data}</span><button onClick={()=>removeItem(index)}>Remove</button></li>
            ))}
          </ul>
        </div>
        <div className="rbi-input">
            <input type="text" className="" onInput={(e)=>handleChange(e)}/>
            <button onClick={addItem}>Add</button>
        </div>
      </div>
    );
  };