import { useState, useEffect } from "react";

export const useRequest = <T>({ path, method }: { path: string; method: "get" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState<T>();

  useEffect(() => {
    setIsLoading(true);

    fetch(`${process.env.REACT_APP_API_URL!}${path}`, { method })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [method, path]);

  return { data, error, isLoading };
};
