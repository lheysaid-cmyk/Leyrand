import axiosInstance from "@/helpers/axiosInstance";
import useSWR from "swr";
import { useMemo } from "react";
import { Post } from "@/types/Post";

// Centralized fetcher function
const fetcher = async <T,>(url: string): Promise<T> => {
  const response = await axiosInstance.get(url);
  return response.data;
};

// Hook to fetch paginated analytics data
export function usePosts(url: string) {
  const { data, error } = useSWR<Post[]>(url, fetcher, {
    keepPreviousData: true,
    refreshInterval: 30000,
    revalidateOnFocus: true,
    shouldRetryOnError: false,
  });

  // Memoize the data for stability
  const posts = useMemo(() => data, [data]);

  return {
    posts,
    isLoading: !error && !data,
    isError: error,
  };
}

// Hook to fetch a single analytics record
export function usePost(url: string) {
  const { data, error } = useSWR<Post>(url, fetcher, {
    keepPreviousData: true,
    refreshInterval: 30000,
    revalidateOnFocus: true,
    shouldRetryOnError: false,
  });

  // Extract and memoize the employee data
  const post = useMemo(() => data, [data]);

  return {
    post,
    isLoading: !error && !data,
    isError: error,
  };
}
