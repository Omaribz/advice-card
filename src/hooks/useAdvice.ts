import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";

const apiClient = new APIClient('/advice');

const useAdvice = () => {
    return useQuery<FetchResponse, Error>({
    queryKey: ['advice'],
    queryFn: apiClient.getAdvice,
    staleTime: 1000 * 60 * 60 * 24 //24hrs
})}

export default useAdvice;