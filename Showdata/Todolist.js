import React, { useState } from "react";

import "./Todolist.css";
import Filter from "./Filter";
import ShowList from "./ShowList";
const Todolist = (props) => {
  const [filteredTag, setFilteredTag] = useState("all");
  const tag = ["all"];
  props.listClass.filter((newlist) => {
    if (tag.includes(newlist.tag)) {
      return tag;
    } else {
      return tag.push(newlist.tag);
    }
  });
    // console.log("new tag", tag);

  const filterChangeHandler = (selectedTag) => {
    setFilteredTag(selectedTag);
  };
  const [searchText, setsearchText] = useState("");

  const findSearch = (item) => {
    setsearchText(item.toLowerCase());
  };
  // console.log("search text:", searchText);
  const List2 = props.listClass.filter((newlist) => {
    return newlist.tag === filteredTag;
  });
  const List = props.listClass.filter((newlist) => {
    return newlist.text.toLowerCase().includes(searchText);
  });

  const List3 = props.listClass.filter(
    (newlist) => {
      if (filteredTag === "all" && !(searchText)) {
          // console.log("from condition", props.listClass);
        return props.listClass;
      }

      if (filteredTag === "all" && !!(searchText)) {
          // console.log("List2 from condition", List2);
        return newlist.text.toLowerCase().includes(searchText);
      }
      if (searchText === "" && newlist.tag === filteredTag) {
        return newlist.tag === filteredTag;
      }
        if (!!(searchText) && newlist.tag === filteredTag) {
            return newlist.tag === filteredTag && newlist.text.toLowerCase().includes(searchText);
        }
    }
  );
    // console.log("List 3 ", List3)

    return (
    <div>
      <Filter
        choose={tag}
        selected={filteredTag}
        onChangeFilter={filterChangeHandler}
        onSearch={findSearch}
      />

      <ShowList
        listClass={List3}
        item={filteredTag}
        search={searchText}
        deletelist={props.deletelist}
        modifylist={props.modifylist}
        UpHandler={props.UpHandler}
        DownHandler={props.DownHandler}
        modifydone={props.modifydone}
      />
    </div>
  );
};

export default Todolist;
