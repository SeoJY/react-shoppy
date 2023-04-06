import { useNavigate } from 'react-router-dom';

export default function useViewTransition() {
  const navigate = useNavigate();

  const viewNavigate = (path, data) => {
    if (!document.startViewTransition) {
      return navigate(path, data);
    } else {
      return document.startViewTransition(() => {
        navigate(path, data);
      });
    }
  };

  return { viewNavigate };
}
