import { LOOKS } from "@/data/looks";

export const getLook = (url: string) => LOOKS.find((look) => look.url === url);
