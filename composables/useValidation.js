import * as yup from 'yup';
import { useI18n } from 'vue-i18n';

export const useValidation = () => {
  const { t } = useI18n();

  const loginSchema = yup.object().shape({
    phone: yup
      .string()
      .matches(/^\d{10}$/, t('validation.invalidPhone'))
      .required(t('validation.phoneRequired')),
    password: yup.string().required(t('validation.passwordRequired')),
  });

  const forgotPasswordSchema = yup.object().shape({
    email: yup
      .string()
      .email(t('validation.invalidEmail'))
      .required(t('validation.emailRequired')),
  });

  const registerSchema = yup.object().shape({
    username: yup.string().required(t('validation.usernameRequired')),
    email: yup
      .string()
      .email(t('validation.invalidEmail'))
      .required(t('validation.emailRequired')),
    password: yup
      .string()
      .required(t('validation.passwordRequired'))
      .min(8, t('validation.passwordMin'))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        t('validation.passwordComplexity')
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password'), null], t('validation.passwordMatch'))
      .required(t('validation.confirmPasswordRequired')),
  });

  return { loginSchema, forgotPasswordSchema, registerSchema };
};
