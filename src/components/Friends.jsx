import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <NavLink to={"/profile/" + props.id}>
          {props.name} {props.surname}
        </NavLink>
      </td>
      <td>{props.email}</td>
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
        id={users[i].id}
        name={users[i].name}
        surname={users[i].surname}
        email={users[i].email}
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
              <th scope="col">Full name</th>
              <th scope="col">E-mail</th>
            </tr>
          </thead>
          <tbody>{userRow}</tbody>
        </table>
      </div>
    </div>
  );
};
