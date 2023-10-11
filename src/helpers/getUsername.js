export default (userData) =>
{
    if (userData?.attributes === undefined) {
        return undefined
    } else {
        const userAttributes = userData.attributes;

 if(userAttributes.firstname === "" && userAttributes.lastname === "")
    {
        return userData.username
    }
    else if(userAttributes.firstname !== "" && userAttributes.lastname === "")
    {
        return userAttributes.firstname;
    }
    else if(userAttributes.lastname !== "" && userAttributes.firstname === "")
    {
        return userAttributes.lastname;
    }
    if(userAttributes.firstname !== "" && userAttributes.lastname !== "")
    {
        return userAttributes.firstname + " " + userAttributes.lastname;
    }
        
    }
}
