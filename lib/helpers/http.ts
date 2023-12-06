import { Request } from "@/types";

export class Http {
  static get({ url }: Request<string>) {
    return Http._fetchMethod({
      url,
    } as Request<null>);
  }

  static async _fetchMethod({ url = "" }: Request<null>) {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      window.location.href = "/404";
    }
  }
}
