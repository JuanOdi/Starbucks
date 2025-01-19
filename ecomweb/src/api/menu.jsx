export async function fetchPost(Menu){
    const response = await fetch("../json-api/menu.json");
    const data = await response.json();

    return data.Menu[Menu] || [];
}