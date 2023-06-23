import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./ProfileInfo.module.css";

function ProfileInfo() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users/1");
        setUserData(response.data);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className={style.container}>
      <main className={style.containerMain}>
        <div className={style.boxTitleAndSave}>
          <h1 className={style.title}>Completa tu perfil</h1>
          <button className={style.save}>Guardar</button>
        </div>
        <div className={style.containerArticle}>
          <article className={style.article}>
            <form className={style.form}>
              <div className={style.boxForm}>
                <label className={style.labelBoxForm} htmlFor="name">
                  Nombre:
                </label>
                <input
                  className={style.inputBoxForm}
                  type="text"
                  name="name"
                  placeholder="Ej: Mauri"
                />
              </div>
              <div className={style.boxForm}>
                <label className={style.labelBoxForm} htmlFor="apellido">
                  Apellido:
                </label>
                <input
                  className={style.inputBoxForm}
                  type="text"
                  name="apellido"
                  placeholder="Ej: Medina"
                />
              </div>
              <div className={style.boxForm}>
                <label className={style.labelBoxForm} htmlFor="telefono">
                  Telefono:
                </label>
                <input
                  className={style.inputBoxForm}
                  type="text"
                  name="telefono"
                  placeholder="Ej: 1122334455"
                />
              </div>
            </form>
          </article>
          <article className={style.article}>
            <form className={style.form}>
              <div className={style.boxForm}>
                <label className={style.labelBoxForm} htmlFor="email">
                  Gen. Favorito:
                </label>
                <input
                  className={style.inputBoxForm}
                  type="text"
                  name="gen"
                  placeholder="Ej: Aventura"
                />
              </div>
              <div className={style.boxForm}>
                <h4 className={style.h4}>Email:</h4>
                <p className={style.textP}>Ej: algo@algo.com</p>
              </div>
              <div className={style.boxForm}>
                <h4 className={style.h4}>Socio: </h4>
                <p className={style.textP}>Ej: CinePlus BLACK</p>
              </div>
            </form>
          </article>
        </div>
      </main>
    </div>
  );
}

export default ProfileInfo;
