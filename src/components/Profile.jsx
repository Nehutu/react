import style from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className="row">
      <div className="col-4">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=80"
          alt=""
          width="100%"
        />
      </div>
      <div className="col-8">
        <h2 className={style.name}>Surname and Name</h2>
        <p className={style.email}>
          E-mail: <span>smt@ya.ru</span>
        </p>
        <p className={style.id}>Id: 4</p>
        <p>Personal history</p>
        <p
          style={{
            border: "solid 2px brown",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "lightgrey",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quas.
          Voluptatum, laboriosam dolores, voluptas excepturi dignissimos,
          officiis mollitia odio delectus libero praesentium perferendis! Ex
          quasi laborum dolorem temporibus eos voluptatem!
        </p>
      </div>
    </div>
  );
};
