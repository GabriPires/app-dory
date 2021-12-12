import Toast from 'react-native-toast-message';

type ToastProps = {
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
};

const showToast = ({ message, title, type }: ToastProps) => {
  Toast.show({
    type: type,
    text1: title,
    text2: message,
  });
};

export { showToast };
