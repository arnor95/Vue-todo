export default setupUI = (user) => {
    if (user){
        //toggle ui
        loggedInLinks.forEach(item => item.style.display = 'block');
        //loggedOutLinks.forEach(item => item.style.display = 'none');
    }
}