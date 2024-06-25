async function fetchuserdata() {
  try {
    const apiKey = "52a38fd276324d24b144ea18829ce69b";
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(
        "ther a errror while fetching  user  data" + response.statusText
      );
    } else {
      const data = await response.json();
      displayuserdata(data);
    }
  } catch (error) {
    console.error("error while fetching user data", error);
  }
}

function displayuserdata(data) {
  const newsdev = document.getElementById("user");
  if (data.articles.length === 0) {
    newsdev.innerHTML = "  There is  no news";
  } else {
    newsdev.innerHTML = data.articles
      .map(
        (a) => `
                 <div>
                    <h1>${a.title}</h1>
                    <h3>${a.description}</h3>
                                        <img  src="${a.urlToImage}" />

                 
                 </div>

                
                
                `
      )
      
  }
}

fetchuserdata();
