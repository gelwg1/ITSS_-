import React, {useState} from "react";
import useStorage from "./hooks/storage";

function App() {
  const [studentName] = useStorage();
  const [tex, setTex] = useState("");
  return (
    <div>
      <div>学生一覧: [ {studentName.toString()} ]</div>
      <div>追加する名前を入力してください。</div>
      <div>
        <input type="text" id="tttext"  />
      </div>
      <button>確定</button>
      <div>追加する名前: {tex}</div>
      <div>新しい一覧: [ {studentName.toString()} ]</div>
    </div>
  );
}

export default App;
