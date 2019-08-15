class GitHub {
    constructor(){
        this.client_id='fbfad66c0d500610d8c9';
        this.client_secret='24931fcbf80046171341d37259acdda61832526c';
        this.repos_count = 5;
        this.repos_sort='created:asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile =await profileResponse.json();

        const repos=await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}