import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  // render column.
  const renderHeader = config.map((column) => {
    // if we want to pass some dynamic header with some event
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderRows = data.map((row) => {
    const renderCells = config.map((c) => {
      return (
        <td className="p-2" key={c.label}>
          {c.render(row)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(row)}>
        {renderCells}
      </tr>
    );
  });
  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderHeader}</tr>
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    </div>
  );
}
export default Table;
