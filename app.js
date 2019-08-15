//Init Github
const github=new GitHub();
//Init UI
const ui=new UI;


//Search input

const searchUser = document.getElementById('searchUser');

//Search input event listener

searchUser.addEventListener('keyup',(e) => {
    const userText = e.target.value;

    if(userText !== '')
    {
        github.getUser(userText)
        .then(data => 
                {
                    if(data.profile.message === 'Not Found')
                    {
                        //Show alert
                        ui.showAlert('User not found','alert alert-danger')
                    }else{
                        // Show Profile
                        ui.showProfile(data.profile);
                        // Show Repos
                        ui.showRepos(data.repos);
                    }
            }
        );
    }
    else{
        //Clear profile
        ui.clearProfile();
    }
});