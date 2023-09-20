const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.surname}</td>
      <td>empty</td>
    </tr>
  );
};

export const Friends = (props) => {
  let users = props.function();
  let userCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < userCount; i++) {
    userRow.push(
      <TableRow
        index={i}
        key={i}
        name={users[i].name}
        surname={users[i].surname}
      />
    );
  }
  return (
    <div className="row">
      <h1 className="text-center">Friends page.</h1>
      <div className="col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">E-mail</th>
            </tr>
          </thead>
          <tbody>{userRow}</tbody>
        </table>
      </div>
    </div>
  );
};
