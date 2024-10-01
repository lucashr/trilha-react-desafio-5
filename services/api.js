import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://byccjvxmydodkuvkunrn.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5Y2NqdnhteWRvZGt1dmt1bnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3MzQzMTIsImV4cCI6MjA0MzMxMDMxMn0._mqf_DknPZ1uVFJ5pqFKSkJFg-1nRNfRX2W_7IYGq_s",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5Y2NqdnhteWRvZGt1dmt1bnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3MzQzMTIsImV4cCI6MjA0MzMxMDMxMn0._mqf_DknPZ1uVFJ5pqFKSkJFg-1nRNfRX2W_7IYGq_s"
    }
})