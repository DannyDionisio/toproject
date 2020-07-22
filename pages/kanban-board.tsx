import React, { useEffect } from "react";

import Board from "react-trello";

interface Row {
  _id: string;
  languages: string;
  status: string;
}

const TITLES = {
  to_learn: "To Learn",
  learning: "Learning",
  learned: "Learned",
  docs_to_read: "Docs to Read",
  archived: "Archived",
};

const columns = Object.keys(TITLES).reduce((acc, key) => {
  return {
    ...acc,
    [key]: {
      id: key,
      title: TITLES[key],
      cards: [],
    },
  };
}, {});

function KanbanBoard() {
  const [state, setState] = React.useState<Row[]>([]);

  const allData = () => {
    fetch("/api/programming_languages")
      .then((r) => r.json())
      .then((data: Row[]) => {
        const parsedData = data.reduce((acc, row) => {
          let column = acc[row.status];

          column.cards.push({
            id: row._id,
            title: row.languages,
          });

          acc[row.status] = column;
          return acc;
        }, columns);

        setState(Object.values(parsedData));
      });
  };

  useEffect(() => {
    allData();
  }, []);
  return (
    <div className="App">
      <h1>Programming Languages to learn</h1>
      <Board data={{ lanes: state }} draggable laneDraggable={false} editable />
    </div>
  );
}

export default KanbanBoard;
