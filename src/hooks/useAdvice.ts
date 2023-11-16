import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";

const apiClient = new APIClient('/advice');

const useAdvice = () => {
    return useQuery<FetchResponse, Error>({
    queryKey: ['advice'],
    queryFn: apiClient.getAdvice
})}

export default useAdvice;