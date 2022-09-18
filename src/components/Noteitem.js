import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-15">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">
            {note.description} Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Fuga saepe molestias facere aliquid cupiditate.
            Incidunt dolor dolorem dolores consequatur et provident autem
            laborum obcaecati praesentium fugit tenetur repellat odio libero
            unde repudiandae quidem aperiam, rem eveniet est dignissimos ipsa!
            Ipsa, blanditiis vel corrupti expedita eius a labore quisquam
            recusandae illum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
