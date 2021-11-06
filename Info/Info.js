import "./Info.css";

const Info = () => {
  return (
    <div className="info">
      <section>
        <h1>The Info Page</h1>
        <h1>Author: Hung Truong</h1>
      </section>
      <section>
        <h3>Instruction: </h3>

        <h5>Tab Add data:</h5>
        <ol>
          <li>
            <p>You can add a new todo with tab add data (Tier 3)</p>
          </li>

          <li>
            <p>
              You can categorize todo-item with texual tag- You can create the
              new tag freely(Tier 5)
            </p>
          </li>
        </ol>
        <h5>Tab Show data:</h5>
        <ol>
          <li>
            <p>
              You must push the button Fetch Lists to receive data from
              database(Tier 10)
            </p>
          </li>
          <li>
            <p>After receiving the data:</p>
          </li>
          <li>
            <p>You can remove any todolist with Remove button(Tier 3)</p>
          </li>
          <li>
            <p>
              You can edit the text description by writing a new description in
              the input area, after that you push the button edit, the data will
              send to the database with the new modified time and show you the
              new description. (Tier4 +Tier 10)
            </p>
          </li>
          <li>
            <p>
              You can reorder the todolist with two buttons: up and down. (Tier
              4)
            </p>
          </li>
          <li>
            <p>
              You can filter todolist in the section "filter by Tag". You can
              see all items or any item that you want.(Tier 6)
            </p>
          </li>
          <li>
            <p>
              You can mark todo items that you have finished without completely
              remove them by the button "Done". The finished todo item have the
              different color with original item.The new data will be sent to
              the database with the new modified time(Tier 7 + Tier 10)
            </p>
          </li>
          <li></li>
          <p></p>
          <li>
            <p>
              You can search todo items based of their textual descriptions in
              the section "find text desciption" (Tier 9)
            </p>
          </li>
          <li>
            <p>
              You can order the items by the modified time with the sort by date
              button.
            </p>
          </li>
          <li>
            <p>
              Each item shows the remaining time. When any remaining time
              becomes zero, the alarm will run to notify you that it's time to
              do work.(Tier 11)
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
};
export default Info;
