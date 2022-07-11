import Axios from "axios";
const token = "lrdo4VcDyVbCW6BuZn88BX3xV2QuIhY6AuhDFl9r";

export const submitGoogleHomepage = (data) => {
  console.log(data);
  var fd = new FormData();
  fd.append("request_type", "ajax");
  fd.append("store[seo_title]", data.name);
  fd.append("store[seo_description]", data.description);

  fetch("https://secure.konimbo.co.il/admin/edit_payments", {
    body: fd, // JSON.stringify(data), // must match 'Content-Type' header
    headers: {
      // 'Content-Type': 'application/json'
    },
    method: "POST",
  })
    .catch((error) => console.error("Error:", error))
    .then((res) => {
      console.log(res);
    });
};
