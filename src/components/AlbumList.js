import React from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
            .then(responseData => this.setState({
                albums: responseData
            }))
    }

    renderAlbums() {
        return this.state.albums.map((album) =>
            <AlbumDetail key={album.title} album={album}/>
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}