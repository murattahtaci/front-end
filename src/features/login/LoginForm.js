import { useForm } from "react-hook-form";
import Title from "../../components/title/Title";

import styles from "./loginForm.module.css";
import { useState } from "react";

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const [ifrmSrc, setIfrmSrc] = useState("");
  const [isIfrmVisible, setIfrmVisible] = useState(false);

  const onSubmit = ({ name, surName, id }) => {
    setIfrmVisible(true);
    setIfrmSrc(
      `https://form.jotform.com/230393262424956?name=${name}&surname=${surName}&tc=${id}`
    );
  };

  return (
    <div className={styles.container}>
      {isIfrmVisible === false ? (
        <>
          <Title>Afet İletişim</Title>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input}>
              <label htmlFor="name">Görevli Kullanıcı Adı</label>
              <input required {...register("name")} />
            </div>
            <div className={styles.input}>
              <label htmlFor="surName">Soyad</label>
              <input required {...register("surName", { required: true })} />
            </div>
            <div className={styles.input}>
              <label htmlFor="id">TC</label>
              <input required {...register("id")} />
            </div>
            <button>Giriş</button>
          </form>
        </>
      ) : (
        <div className="iframe">
          <iframe src={ifrmSrc} title="Form" height="720" width="1100"></iframe>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
