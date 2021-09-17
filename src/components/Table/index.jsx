import {TableBody, TableColumn, TableHead, TableLine, TableStyle, TableTh} from "./style";

const Table = ({ thead, tbody }) => {
  return (
    <TableStyle>
      <TableHead>
        {thead.map((value) => (
          <TableTh>{value}</TableTh>
        ))}
      </TableHead>
      <TableBody>
        {tbody.map((values) => (
          <TableLine>
            {values.map((value) => (
              <TableColumn>{value}</TableColumn>
            ))}
          </TableLine>
        ))}
      </TableBody>
    </TableStyle>
  );
};

export default Table;
