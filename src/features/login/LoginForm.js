import { useForm } from "react-hook-form";
import { useState } from "react";
import Title from "../../components/title/Title";

import styles from "./loginForm.module.css";

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const [ifrmSrc, setIfrmSrc] = useState("");
  const [isIfrmVisible, setIfrmVisible] = useState(false);

  const onSubmit = (data) => {
    let userID = {
      name: data.name,
      surName: data.surName,
      tc: data.id,
    };
    setIfrmVisible(true);
    setIfrmSrc(
      `https://form.jotform.com/230393262424956?userID=${userID.name}-${userID.surName}-${userID.tc}`
    );
  };

  return (
    <>
      {isIfrmVisible === false ? (
        <>
          <Title>Afet İletişim</Title>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input}>
              <label htmlFor="name">Görevli Adı</label>
              <input required {...register("name")} />
            </div>
            <div className={styles.input}>
              <label htmlFor="surName">Görevli Soyadı</label>
              <input required {...register("surName", { required: true })} />
            </div>
            <div className={styles.input}>
              <label htmlFor="id">Görevli TC</label>
              <input minLength={11} required {...register("id")} />
            </div>
            <button>Giriş</button>
          </form>
        </>
      ) : (
        <iframe
          className={styles.iframe}
          src={ifrmSrc}
          title="Form"
          style={{ height: "100vh", width: "100%" }}></iframe>
      )}
    </>
  );
}

export default LoginForm;
