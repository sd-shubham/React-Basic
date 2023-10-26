import { useSort } from "../hooks/use-sort";
import Table from "./Table";
import { GoArrowUp, GoArrowDown } from "react-icons/go";

export const SortedTable = (props) => {
  const { config, data } = props;
  const {setSortColumn,sortBy,sortOrder,sortedData,SORTBYASC,SORTBYDESC} = useSort(data,config);

  // clickable header
  const updatedConfig = config.map((col) => {
    if (!col.sortValue) {
      return col;
    }

    return {
      ...col,
      header: () => (
        <th onClick={() => setSortColumn(col.label)}>
          <div className="flex item-center">
            {col.label}
            {getIcon(col.label)}
          </div>
        </th>
      ),
    };
  });

  const getIcon = (label) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowUp />
          <GoArrowDown />
        </div>
      );
    }
    if (sortOrder == null)
      return (
        <div>
          <GoArrowUp />
          <GoArrowDown />
        </div>
      );
    else if (sortOrder === SORTBYASC) return <GoArrowUp />;
    else if (sortOrder === SORTBYDESC) return <GoArrowDown />;
  };
  
  return (
    <div>
      <Table {...props} config={updatedConfig} data={sortedData}></Table>
    </div>
  );
};
