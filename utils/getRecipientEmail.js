const getRecipientEmail = (user, userLoggedIn) =>
    users?.filter(userToFilter => userToFilter !== userLoggedIn?.email)[0];

export default getRecipientEmail;