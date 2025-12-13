
export const handleNav = (navigate, path, setLoading) => {
  if (!navigate || !setLoading) return;

  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    navigate(path);
  }, 300);
};
