export default (userData) =>
{
    if(userData.attributes.firstname === "" && userData.attributes.lastname === "")
    {
        return userData.username
    }
    else if(userData.attributes.firstname !== "" && userData.attributes.lastname === "")
    {
        return userData.attributes.firstname;
    }
    else if(userData.attributes.lastname !== "" && userData.attributes.firstname === "")
    {
        return userData.attributes.lastname;
    }
    if(userData.attributes.firstname !== "" && userData.attributes.lastname !== "")
    {
        return userData.attributes.firstname + " " + userData.attributes.lastname;
    }
}
