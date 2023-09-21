import style from "./Profile.module.css";

export const Profile = (props) => {
  let userId = window.location.pathname.split("/")[2];
  let user = props.function(userId);
  return (
    <div className="row">
      <div className="col-4">
        <img src={user.avatar} alt="" width="100%" />
      </div>
      <div className="col-8">
        <h2 className={style.name}>
          {user.name} {user.surname}
        </h2>
        <p className={style.email}>
          E-mail: <span>{user.email}</span>
        </p>
        <p className={style.id}>Id: {user.id}</p>
        <p>About me: </p>
        <p
          style={{
            border: "solid 2px brown",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "lightgrey",
          }}
        >
          {user.about}
        </p>
      </div>
    </div>
  );
};
