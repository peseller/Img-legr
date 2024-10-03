var requestOptions = {
  method: "GET",
  redirect: "follow",
  //include authorization credientials
  credentials: "include",
};
const authCode =
  window.localStorage.getItem("authCode") || window.prompt("authCode");
fetch(`./api/authCode/${authCode}`)
  .then(async (res) => {
    const isOK = await res.text();
    if (isOK === "ok") {
      window.localStorage.setItem("authCode", authCode);
    } else {
      window.location.reload()
      console.log("status", status);
    }
  })
  .catch((e) => {
    window.localStorage.removeItem("authCode")
    console.log(" ----");
    console.log("e:", e);
    console.log(" ----");
    window.location.reload();
  });
