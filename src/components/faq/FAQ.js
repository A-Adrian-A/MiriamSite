import React from "react";
import './FAQ.css'

import { useTranslation } from "react-i18next";




const FAQ = () => {
  const { t } = useTranslation();
  return (
    <div className="faq">
      <h1>{t("FAQ")}</h1>
    </div>
  );
};

export default FAQ;
