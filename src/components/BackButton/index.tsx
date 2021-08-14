import { useRouter } from "next/router";

import styles from "./BackButton.module.css";

export const BackButton = () => {
  const { pathname, push } = useRouter();
  const isDisable = pathname === "/";

  const handleBack = () => {
    push("/");
  };

  return (
    <button
      onClick={handleBack}
      className={styles.backButton}
      disabled={isDisable}
    >
      {"<<"}
    </button>
  );
};
