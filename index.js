
const submitData= function(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json",
    },
    body:JSON.stringify({
      "name":userName,
      "email":userEmail
    })
  }).then(response=> response.json())
  .then(data=>renderId(data))
  .catch((error)=> {
    const body=document.createElement("body")
    body.innerHTML=error;
    document.body.append(body)
  })
  }
  const renderId=data=> {
    const body= document.createElement("body")
    body.innerHTML=data.id;
    document.body.append(body)
}

