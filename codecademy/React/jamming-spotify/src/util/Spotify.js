const clientID = "db88f0fa7dca41e1a6252d61c5269bc8";
const redirectURI = "http://localhost:3000/";
let token = "";
const Spotify = {
    getUserPlaylists: async function () {

    },
    getAccessToken: function() {
        if (token) {
            return token;
        } else if (window.location.href.match(/access_token=([^&]*)/) != null) {
            token = window.location.href.match(/access_token=([^&]*)/)[0].split("=")[1];    
            const expiresIn = window.location.href.match(/expires_in=([^&]*)/)[0].split("=")[1];
            window.setTimeout(() => token = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            const authUri = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            console.log(authUri);
            window.location.href = authUri;        
        }
    },
    search: async function (term) {
        this.getAccessToken();
        const endpoint = `https://api.spotify.com/v1/search?type=track&q=${term}`;
        const header = { method: 'GET', headers: {Authorization: `Bearer ${token}`} }
        try {
            const response = await fetch(endpoint, header);
            if(response.ok){
                let jsonResponse = await response.json();
                const tracks = jsonResponse.tracks.items.map(track => {
                    return {
                        ID: track.id,
                        Artist: track.artists[0].name, 
                        Name: track.name, 
                        Album: track.album.name, 
                        URI: track.uri
                    };
                });
                return tracks;
            }         
            throw new Error('Error on retrieving data from Spotify API');   
        } catch (error) {
            console.log(error);
        }
    },
    savePlaylist: async function (name, tracks) {
        if (!tracks || name === undefined) {
            return
        };

        const token = this.getAccessToken();
        try {
            // Get user info
            let headers = { Authorization: `Bearer ${token}` };
            const urlUserInfo = 'https://api.spotify.com/v1/me';
            let response = await fetch(urlUserInfo, { headers: headers });

            if (!response.ok) {
                throw new Error('Fail to get user info');
            };

            const userInfo = await response.json();

            // Create new playlist for user
            headers = { ...headers, 'Content-Type': 'application/json' };
            const urlPlaylist = `https://api.spotify.com/v1/users/${userInfo.id}/playlists`;

            response = await fetch(
                urlPlaylist,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({ name: name })
                }
            );

            if (!response.ok) {
                throw new Error('Fail to create playlist');
            }

            const playlistInfo = await response.json();
            const playlistId = playlistInfo.id;
            const urlPlaylistTracks = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

            response = await fetch(
                urlPlaylistTracks,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({ uris: tracks })
                });
            if (!response.ok) {
                throw new Error('Fail to add tracks to playlist');
            }
        } catch (error) {
            console.log(error);
        }


    }
};




export default Spotify;