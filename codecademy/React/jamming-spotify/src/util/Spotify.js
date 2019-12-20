const clientID = "db88f0fa7dca41e1a6252d61c5269bc8";
const redirectURI = "http://localhost:3000/";
let token = "";
let userId;
let headers;

const Spotify = {
    getCurrentUserId: async function () {
        if (userId !== undefined) {
            return userId;
        } else {
            this.getAccessToken();
            try {
                // Get user info
                headers = { Authorization: `Bearer ${token}` };
                const response = await fetch('https://api.spotify.com/v1/me', { headers: headers });
    
                if (!response.ok) {
                    throw new Error('Fail to get user info');
                }
    
                const userInfo = await response.json();
                // eslint-disable-next-line require-atomic-updates
                userId = userInfo.id;    
            } catch (error) {
                console.log(error);
            }
        }
    },
    getUserPlaylists: async function () {
        await this.getCurrentUserId();
        const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;
        try {
            const response = await fetch(endpoint, { method: 'GET', headers: headers });
            if(response.ok){
                let jsonResponse = await response.json();
                const playlists = jsonResponse.items.map(playlist => {
                    return {
                        ID: playlist.id,
                        Name: playlist.name, 
                        Tracks: playlist.tracks, 
                        URI: playlist.uri,
                        url: playlist.images[2].url
                    };
                });
                return playlists;
            }         
            throw new Error('Error on retrieving data from Spotify API');   
        } catch (error) {
            console.log(error);
        }
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
        try {
            const response = await fetch(endpoint, { method: 'GET', headers: {Authorization: `Bearer ${token}`} });
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
    savePlaylist: async function (id, name, tracks) {
        if (!tracks || name === undefined) {
            return
        }

        try {
            await this.getCurrentUserId();
            // Create new playlist or update an existing one 
            headers = { ...headers, 'Content-Type': 'application/json' };

            const urlPlaylist = id ? `https://api.spotify.com/v1/users/${userId}/playlists/${id}` :  `https://api.spotify.com/v1/users/${userId}/playlists`; 

            let options = {
                method: id ? 'PUT' : 'POST',
                headers: headers,
                body: JSON.stringify({ name: name })
            };

            let response = await fetch(urlPlaylist, options);

            if (!response.ok) {
                throw new Error(`Fail to ${id ? 'update' : 'create'} playlist`);
            }

            let playlistInfo;
            if (!id) {
                playlistInfo = await response.json();
            }

            const playlistId = id ? id : playlistInfo.id;
            const urlPlaylistTracks = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

            options = {
                method: id ? 'PUT' : 'POST',
                headers: headers,
                body: JSON.stringify({ uris: tracks })
            };
            response = await fetch(urlPlaylistTracks, options);

            if (!response.ok) {
                throw new Error('Fail to add tracks to playlist');
            }
        } catch (error) {
            console.log(error);
        }
    },
    getPlaylist: async function (playlistId) {
        await this.getCurrentUserId();
        const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;
        try {
            const response = await fetch(endpoint, { method: 'GET', headers: headers });
            if(response.ok){
                let jsonResponse = await response.json();
                const tracks = jsonResponse.items.map(item => {
                    return {
                        ID: item.track.id,
                        Artist: item.track.artists[0].name, 
                        Name: item.track.name, 
                        Album: item.track.album.name, 
                        URI: item.track.uri
                    };
                });
                return tracks;
            }         
            throw new Error('Error on retrieving data from Spotify API');   
        } catch (error) {
            console.log(error);
        }
    }
};




export default Spotify;