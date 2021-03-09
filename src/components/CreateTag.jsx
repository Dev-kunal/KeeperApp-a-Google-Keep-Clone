import React, { useState } from "react";

function CreateTag({ setTags, tags, setNoteType }) {
  const [tag, settag] = useState("");

  const handlechange = (event) => {
    settag(event.target.value);
  };
  const handleClick = () => {
    setTags((tags) => [...tags, tag]);
    settag("");
  };
  return (
    <div>
      <form className="create-tag">
        <input
          autoComplete="off"
          onChange={handlechange}
          name="title"
          placeholder="Add Tag"
          value={tag}
        />
        <button type="button" className="add-tag" onClick={handleClick}>
          Add Tag
        </button>
      </form>
      <div className="tags">
        {" "}
        {tags.map((tag) => (
          <div onClick={() => setNoteType(tag)} key={tag} className="tag-item">
            🎇&nbsp;{tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTag;
