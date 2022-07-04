import fetch from "node-fetch";
function loadJson(url: string) {
  return fetch(url).then(response => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(String(response.status));
    }
  });
}

loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404

/**
 * @todo: Rewrite the following code to use async/await.
 */
