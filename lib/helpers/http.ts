import { Request } from "@/types";

export class Http {
  static get({ signal, url }: Request<string>) {
    return Http._fetchMethod({
      signal,
      url,
    } as Request<null>);
  }

  static async _fetchMethod({ signal, url = "" }: Request<null>) {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
      signal,
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      window.location.href = "/404";
    }
  }
}
