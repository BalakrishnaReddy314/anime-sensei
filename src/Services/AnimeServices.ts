class Services {
    public async getTopAnime(): Promise<any> {
        try {
            let anime: any = await (await fetch("https://api.jikan.moe/v4/top/anime?$top=10")).json();

            return anime;

        } catch (error: any) {
            console.log(error.message);

            return {};
        }
    }
}

export default Services;