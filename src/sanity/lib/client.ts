import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "67lzndsl",
  dataset:"production",
  apiVersion:"2023-01-01",
  useCdn: true, 
});
