import { useState, useEffect } from "react";
import Checkbox from "../components/checkbox";

export default function CheckboxDemo() {
  const [allChecked, setAllChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [read, setRead] = useState(false);
  const [copy, setCopy] = useState(false);
  const [write, setWrite] = useState(false);

  useEffect(() => {
    if (read && copy && write) {
      setAllChecked(true);
      setIndeterminate(false);
    } else if (read || copy || write) {
      setAllChecked(false);
      setIndeterminate(true);
    } else {
      setAllChecked(false);
      setIndeterminate(false);
    }
  }, [read, copy, write]);

  return (
    <div className="space-y-4 p-4">
      <Checkbox
        id="selectAll"
        name="selectAll"
        label="Select All Permissions"
        checked={allChecked}
        indeterminate={indeterminate}
        onChange={(value) => {
          setRead(value);
          setCopy(value);
          setWrite(value);
          setIndeterminate(value);
        }}
        description="Controls all individual permissions below"
      />
      <div className="space-y-2 pl-4">
      <Checkbox
        id="read"
        name="permissions"
        label="Read Access"
        checked={read}
        onChange={setRead}
      />
      <Checkbox
        id="copy"
        name="permissions"
        label="Copy Access"
        checked={copy}
        onChange={setCopy}
      />
      <Checkbox
        id="write"
        name="permissions"
        label="Write Access"
        checked={write}
        onChange={setWrite}
      />
      </div>
    </div>
  );
}